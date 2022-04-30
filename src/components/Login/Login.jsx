import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (<>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} name={'email'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field  component={'input'} name={'rememberMe'} type={'checkbox'}/>
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