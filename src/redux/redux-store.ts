import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";
import users_reducer from "./users_reducer";

/*созщдаем объект с ключами свойство: значение. Сюда вносятся все наши венки проекта*/
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: users_reducer
});

export type RootStateReduxType = ReturnType<typeof reducers>
/*закомбаенные редусеры передаются стору*/
let store = createStore(reducers);
export type StoreReduxType = typeof store
//@ts-ignore
window.store = store


export default store;
