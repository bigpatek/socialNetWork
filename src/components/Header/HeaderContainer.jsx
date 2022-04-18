import React from "react"
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                debugger
                if(response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
            }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);