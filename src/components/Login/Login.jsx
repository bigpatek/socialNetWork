import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControllers/FormsControllers";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (<>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field  component={Input} name={'rememberMe'} type={'checkbox'}/>
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
        </>
    )
}

const ReduxFormLogin = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData)
    }
    return (<>
            <div><h1>Login</h1></div>
            <ReduxFormLogin onSubmit = {onSubmit}/>
            </>
    )
}



export default Login;