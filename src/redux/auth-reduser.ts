import {getAuthMy, login, logOut} from "../Components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA'


export type authStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState: authStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state: authStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}
export const authMyThunk = () =>  (dispatch: any) => {
return getAuthMy()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}


export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
        login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authMyThunk())
                } else {
                    let message = response.data.messages > 0 ? response.data.messages[0] : 'some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }

export const logOutThunk = () => (dispatch: any) => {
        logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export default authReducer