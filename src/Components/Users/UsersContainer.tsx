import React from "react";
import {connect} from "react-redux";
import {UserType} from "../../redux/store";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users_reducer";
import {RootStateReduxType} from "../../redux/redux-store";

import Users from "./UsersC";


let mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)