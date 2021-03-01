import React from "react";
import {connect} from "react-redux";
import {UsersType, UserType} from "../../redux/store";
import {followAC, SetCurrentPageAC, setUsersAC, SetUsersTotalCountAC, unFollowAC} from "../../redux/users_reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <Users
            totalUserCount = {this.props.totalUserCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChange = {this.onPageChange}
            users = {this.props.users}
            unFollow = {this.props.unFollow}
            follow = {this.props.follow}


        />
    }
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber: number)=>{
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount: number)=>{
            dispatch(SetUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)