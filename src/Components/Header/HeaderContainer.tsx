import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {logOutThunk,} from "../../redux/auth-reduser";


type MapStateToPropsType = {
    login: string,
    isAuth: boolean

}
type MapDispatchToPropsType = {
    // authMyThunk: () =>void
    logOutThunk: () => void
}
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    // componentDidMount() {
    //    this.props.authMyThunk()
    // }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       logout={this.props.logOutThunk}
        />
    }
}
let mapStateToProps = (state: RootStateReduxType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logOutThunk}) (HeaderContainer)