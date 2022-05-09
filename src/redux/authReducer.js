import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data
            }
        default:
            return state
    }

}
export const setAuthUserData = (userId,email,login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const setAuthThunk = () => {
    return (dispatch) => {
        authAPI.setAuth().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true));
            }
        })
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,password,rememberMe).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthThunk());
            }
        })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthThunk(null,null,null,false));
            }
        })
    }
}
export default authReducer;