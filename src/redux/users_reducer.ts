import {UserType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [] as Array<UserType>
}

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
            return {...state, users: [...state.users, ...action.users]}

        default :
            return state
    }

}
export const followAC = (userId: number) => ({type: FOLLOW, userId});
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})

export default userReducer