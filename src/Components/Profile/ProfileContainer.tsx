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
    authorizedUserId: number,
    isAuth: boolean

}

type MapDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType
type OwnPropsType = RouteComponentProps<PathParamType> & ProfilePropsType

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus = {this.props.updateStatusThunk}
            />
        )
    }
}

let mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk,  getStatusThunk, updateStatusThunk}),
    withRouter,
)(ProfileContainer)

