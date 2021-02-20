import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {Route} from 'react-router-dom';
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {StoreReduxType} from "./redux/redux-store";
import UsersContainer from "./Components/Users/UsersContainer";


type PropsType = {
    dispatch: any
    store: StoreReduxType
}

function App() {

    return (

        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className='App-wrapper-content'>
                {/*изменил метод отрисовки с component на render*/}
                <Route render={() => <Profile/>} path={'/profile'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route render={() => <UsersContainer/>} path={'/users'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>
        </div>
    );
}

export default App;
