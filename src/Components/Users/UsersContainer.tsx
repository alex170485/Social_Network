import React from "react";
import {connect} from "react-redux";
import {UsersType, UserType} from "../../redux/store";
import {
    followAC,
    SetCurrentPageAC,
    setUsersAC,
    SetUsersTotalCountAC,
    ToggleIsFetchingAC,
    unFollowAC
} from "../../redux/users_reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.ToggleIsFetching( true)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.ToggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching? <Preloader/> : null}
            <Users
            totalUserCount = {this.props.totalUserCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChange = {this.onPageChange}
            users = {this.props.users}
            unFollow = {this.props.unFollow}
            follow = {this.props.follow}

        />
        </>
    }
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        ToggleIsFetching:(isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}


export default connect(mapStateToProps,
    {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        setCurrentPage:SetCurrentPageAC,
        setTotalUsersCount:SetUsersTotalCountAC,
        ToggleIsFetching: ToggleIsFetchingAC
    }

    )(UsersContainer)