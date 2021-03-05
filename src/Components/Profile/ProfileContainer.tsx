import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {initialStateType, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RootStateReduxType} from "../../redux/redux-store";


type MapStateToPropsType ={
   profile: UserProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile:(profile: UserProfileType | null) => void
}


export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        debugger
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: RootStateReduxType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);