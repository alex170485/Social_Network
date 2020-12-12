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


function App(props:any) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    {/*изменил метод отрисовки с component на render*/}
                    <Route render={() => <Profile postDataType={props.postData}/>} path={'/profile'}/>
                    <Route render={() => <Dialogs dialogDataType={props.dialogData}
                                                  messagesDataType={props.messagesData}/>}
                           path={'/dialogs'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
