import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reduser";

type MapStateToPropsType = {
    login: string,
    isAuth: boolean

}
type MapDispatchToPropsType = {
    setAuthUserData:(id: number, email: string, login: string) => void
}
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
        withCredentials: true})
            .then(response => {
           if(response.data.resultCode === 0) {
               let {id, email, login} = response.data.data;
               this.props.setAuthUserData(id, email, login)
           }
        })
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
        />
    }
}
let mapStateToProps = (state: RootStateReduxType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)