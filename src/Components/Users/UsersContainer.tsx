import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType, UsersType} from "../../redux/store";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users_reducer";

let mapStateToProps = (state: StateType) => {
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
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)