import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {StoreReduxType} from "./redux/redux-store";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


type PropsType = {
    dispatch: any
    store: StoreReduxType
}

function App() {

    // @ts-ignore
    return (

        <div className="App-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className='App-wrapper-content'>
                {/*изменил метод отрисовки с component на render*/}
                <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route render={() => <UsersContainer/>} path={'/users'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Login/>} path={'/login'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>
        </div>
    );
}

export default App;
