import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";
import users_reducer from "./users_reducer";
import authReducer from "./auth-reduser";

/*созщдаем объект с ключами свойство: значение. Сюда вносятся все наши венки проекта*/
let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: users_reducer,
    auth: authReducer
});

export type RootStateReduxType = ReturnType<typeof RootReducer>

let store = createStore(RootReducer);
export type StoreReduxType = ReturnType <typeof RootReducer>
//@ts-ignore
window.store = store


export default store;
