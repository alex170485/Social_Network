import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateReduxType} from "../../redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsRedirectType = {
    isAuth: boolean
}
let mapStateToPropsRedirect = (state:RootStateReduxType): MapStateToPropsRedirectType => ({
    isAuth: state.auth.isAuth
})
export function WithAuthRedirect<T>(Component: ComponentType<T>){
    function RedirectComponent(props: MapStateToPropsRedirectType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }


    let  ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
 return ConnectAuthRedirectComponent
}
