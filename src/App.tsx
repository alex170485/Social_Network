import React, {Component} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {Route, withRouter} from 'react-router-dom';
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// const DialogsContainer = React.lazy(()=>import("./Components/Dialogs/DialogsContainer"))
import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from './Components/Profile/ProfileContainer';
// const ProfileContainer = React.lazy(()=> import('./Components/Profile/ProfileContainer'))
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/App-reducer";
import {RootStateReduxType} from "./redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";
const ProfileContainer = React.lazy(()=> import('./Components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(()=>import("./Components/Dialogs/DialogsContainer"))


type PropsType = {
    initializeAppThunk: () =>void
    initialized: boolean
}

class App extends React.Component<PropsType>{
    componentDidMount() {
        this.props.initializeAppThunk()
    }



    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    {/*изменил метод отрисовки с component на render*/}
                    <Route render={() => { return <React.Suspense fallback={<Preloader/>}>
                        <ProfileContainer/>
                    </React.Suspense>}} path={'/profile/:userId?'}/>
                    <Route render={() => { return <React.Suspense fallback={<Preloader/>}>
                        <DialogsContainer/>
                    </React.Suspense>}} path={'/dialogs'}/>
                    <Route render={() => <UsersContainer/>} path={'/users'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Login/>} path={'/login'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                </div>
            </div>
        );
    }
}
type MapStateToPropsType = {
    initialized: boolean
}
let mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
  initialized: state.appPage.initialized
})

export default compose<React.ComponentType> (
    withRouter,
    connect (mapStateToProps, {initializeAppThunk})) (App);
