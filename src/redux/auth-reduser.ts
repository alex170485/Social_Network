import {getAuthMy} from "../Components/api/api";

const SET_USER_DATA = 'SET-USER-DATA'


export type authStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState:authStateType = {
    id:null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state: authStateType = initialState, action: any) => {
    switch (action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        }
        default:
            return state

    }
}
export const authMyThunk = () => {
    return (dispatch: any) => {
        getAuthMy()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}
export const setAuthUserData = (userId: number, email: string, login: string) => ({type:SET_USER_DATA, data: {userId,email,login} })

export default authReducer