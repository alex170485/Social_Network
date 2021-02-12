import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";

/*созщдаем объект с ключами свойство: значение. Сюда вносятся все наши венки проекта*/
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export type RootStateReduxType = ReturnType<typeof reducers>
/*закомбаенные редусеры передаются стору*/
let store = createStore(reducers);
export type StoreReduxType = typeof store


export default store;
