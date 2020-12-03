import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className='App-wrapper-content'>
                <Route component={Profile} path={'/profile'}/>
                <Route component={Dialogs} path={'/dialogs'}/>
                <Route component={Music} path = {'/music'}/>
                <Route component={News} path={'/news'}/>
                <Route component={Settings} path={'/settings'}/>
            </div>
        </div>
        </BrowserRouter>
    );

}

export default App;
