import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControllers/FormsControllers";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (<>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} type = {'password'} component={Input} validate={[required]}/>
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
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth){
        return <Navigate to={'/profile'} />
    }
    return (<>
            <div><h1>Login</h1></div>
            <ReduxFormLogin onSubmit = {onSubmit}/>
            </>
    )
}
const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunk, logoutThunk})(Login);



