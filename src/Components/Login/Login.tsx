import React from "react";
import { reduxForm, Field } from "redux-form";

type formatDataType = {
    login: string,
    password: string,
    rememberMe: boolean,

}

const Login = () => {
    const onSubmit = (formData: any) => {
console.log(formData)
    }
    return <div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </div>

}
type LoginFormType = any



const LoginForm = (props: LoginFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component = {'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component = {'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component = {'input'}/>Remember my
            </div>
            <div><button>Sing in</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default Login