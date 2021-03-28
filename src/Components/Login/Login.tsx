import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validation/validators";

type formatDataType = {
    login: string,
    password: string,
    rememberMe: boolean,

}

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
console.log(formData)
    }
    return <div>
    <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </div>

}
type FormDataType = {
    login: string
    password: string
    rememberMe:boolean
}



const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       name={'login'}
                       component = {Input}
                       validate = {[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       component = {Input}
                       validate = {[requiredField]}
                />
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component = {Input}/>Remember my
            </div>
            <div><button>Sing in</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default Login