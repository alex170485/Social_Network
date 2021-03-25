import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunk,
    getUserProfileThunk,
    updateStatusThunk,
    UserProfileType
} from "../../redux/profile-reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type PathParamType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType | null,
    status: string,

}

type MapDispatchToPropsType = {
    getUserProfileThunk: (userId: string) => void
    getStatusThunk: (userId: string) => void
}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType
type OwnPropsType = RouteComponentProps<PathParamType> & ProfilePropsType

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus = {this.props.getStatusThunk}
            />
        )
    }
}

let mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk,  getStatusThunk, updateStatusThunk}),
    withRouter,
)(ProfileContainer)

