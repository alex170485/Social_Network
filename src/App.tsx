import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route } from 'react-router-dom';


function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <NavBar/>
            <div className='App-wrapper-content'>
                <Route component={Profile}/>
                <Route component={Dialogs}/>
            </div>

        </div>
    );
}

export default App;
