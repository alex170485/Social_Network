import {UserType} from "./store";
import {getFollowedUser, getUnFollowedUser, getUser} from "../Components/api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOW = 'TOGGLE-IS-FOLLOW'


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> }



type InitialStateType = typeof initialState

const userReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS :
            return {...state, users:action.users}
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT :
            return {...state, totalUserCount: action.totalUserCount}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOW : {
            return {...state,
                followingInProgress: action.isFollow
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default :
            return state
    }

}
export const followAC = (userId: number) => ({type: FOLLOW, userId});
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const SetCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const SetUsersTotalCountAC = (totalUserCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalUserCount})
export const ToggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgressAC = (isFollow: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOW, isFollow, userId})

export const getUserThunkCreator = (currentPage: number, pageSize: number ) => {
    return (dispatch: any) => {
        dispatch(ToggleIsFetchingAC(true))
        getUser(currentPage,pageSize).then(data => {
            dispatch(ToggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(SetUsersTotalCountAC(data.totalCount))
        })
    }
}

export const followThunk = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        getFollowedUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}
export const unfollowThunk = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        getUnFollowedUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowAC(userId))}
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}

export default userReducer