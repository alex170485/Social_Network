import {authMyThunk} from "./auth-reduser";
import {getAuthMy} from "../Components/api/api";

const INITIALIZED_SUCCESS = 'INITIALISED-SUCCESS'


export type authStateType = {
    initialized: boolean
}
let initialState:authStateType = {
   initialized: false
}

export const appReducer = (state: authStateType = initialState, action: any) => {
    switch (action.type){
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state

    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunk = () => (dispatch: any) => {
    let promise = dispatch(authMyThunk())
    debugger
    promise.then(()=> {
        dispatch(initializedSuccess())
    })


}