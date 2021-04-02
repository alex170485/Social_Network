import {RootStateReduxType} from "../redux-store";


export const getUser = ( state:RootStateReduxType ) => {
    return state.usersPage.users
}
export const getPageSize = (state:RootStateReduxType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state:RootStateReduxType) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state:RootStateReduxType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:RootStateReduxType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootStateReduxType) => {
    return state.usersPage.followingInProgress
}