import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validation/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import {RootStateReduxType} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/profile-reducer";
import styles from '../common/FormsControls/FormControl.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type MapStateToPropsType = {
    profile: UserProfileType,
    isAuth: boolean
}
type MapDispatchToProps = {
    loginThunk: (email: string , password: string, rememberMe: boolean) => void
}
type PropsType = {
    isAuth: boolean,
    profile: UserProfileType,
    loginThunk: (email: string , password: string , rememberMe: boolean) => void

}
const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       name={'email'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       type={'password'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/>Remember my
            </div>
            <div>
                <button>Sing in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)
let mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    profile: state.auth.isAuth,
    isAuth: state.auth.isAuth
})

export default connect<MapStateToPropsType, MapDispatchToProps, {}, RootStateReduxType>(mapStateToProps, {loginThunk})(Login)