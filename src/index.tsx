import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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




ReactDOM.render(
    <React.StrictMode>
            <App dialogData = {dialogData} messagesData = {messagesData} postData = {postData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
