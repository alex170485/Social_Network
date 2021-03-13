import React from "react";
import {connect} from "react-redux";
import {UsersType} from "../../redux/store";
import {
    followAC, followThunk, getUserThunkCreator,
    SetCurrentPageAC,
    setUsersAC,
    SetUsersTotalCountAC,
    toggleFollowingProgressAC,
    ToggleIsFetchingAC,
    unFollowAC, unfollowThunk
} from "../../redux/users_reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUser} from "../api/api";

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
       //  this.props.ToggleIsFetching( true)
       // getUser(this.props.currentPage, this.props.pageSize).then(data => {
       //      this.props.ToggleIsFetching(false)
       //      this.props.setUsers(data.items)
       //      this.props.setTotalUsersCount(data.totalCount)
       //  })
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUserThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber);
        // this.props.ToggleIsFetching(true)
        // getUser(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.ToggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
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
            ToggleIsFollow = {this.props.ToggleIsFollow}
            followingInProgress = {this.props.followingInProgress}
            followThunk = {this.props.followThunk}
            unfollowThunk = {this.props.unfollowThunk}





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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default connect(mapStateToProps,
    {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        setCurrentPage:SetCurrentPageAC,
        setTotalUsersCount:SetUsersTotalCountAC,
        ToggleIsFetching: ToggleIsFetchingAC,
        ToggleIsFollow: toggleFollowingProgressAC,
        getUserThunkCreator,
        followThunk,
        unfollowThunk

    }

    )(UsersContainer)