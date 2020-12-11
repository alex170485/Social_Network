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

let dialogData = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'John'},
    {id: 3, name: 'David'}
]
let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'YOYOYOYO'}
]

let postData = [
    {id:1, message:'How are you?', likeCount: 15},
    {id:2, message: 'It`s my first post', likeCount: 32}
]

function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    {/*изменил метод отрисовки с component на render*/}
                    <Route render={() => <Profile postDataType={postData}/>} path={'/profile'}/>
                    <Route render={() => <Dialogs dialogDataType={dialogData}
                                                  messagesDataType={messagesData}/>}
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
