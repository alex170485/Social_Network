import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {RootStateReduxType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {MapStateToPropsRedirectType} from "../Profile/ProfileContainer";

let mapStateToPropsRedirect = (state:RootStateReduxType): MapStateToPropsRedirectType => ({
    isAuth: state.auth.isAuth
})
export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
        if (!this.props.isAuth) return <Redirect to = {'/login'}/>
        return <Component {...this.props}/>
    }}


  let  ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
 return ConnectAuthRedirectComponent
}
