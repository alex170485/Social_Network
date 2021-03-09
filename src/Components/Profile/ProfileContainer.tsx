import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {initialStateType, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {getUserProfile} from "../api/api";

type PathParamType = {
    userId: string
}

type MapStateToPropsType ={
   profile: UserProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile:(profile: UserProfileType | null) => void
}


export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType
type OwnPropsType = RouteComponentProps<PathParamType> & ProfilePropsType

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        getUserProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: RootStateReduxType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);