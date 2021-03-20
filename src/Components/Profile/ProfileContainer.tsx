import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, initialStateType, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


type PathParamType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType | null,

}

type MapDispatchToPropsType = {
    getUserProfileThunk: (userId: string) => void
}


export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType
type OwnPropsType = RouteComponentProps<PathParamType> & ProfilePropsType

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileThunk(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}
            />
        )
    }
}

let mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    profile: state.profilePage.profile,

})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk}),
    withRouter,
    // WithAuthRedirect,
)(ProfileContainer)

