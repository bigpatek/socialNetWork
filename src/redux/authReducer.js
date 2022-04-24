import {headerAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}
export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setAuthThunk = () => {
    return (dispatch) => {
        headerAPI.setAuth().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login));
            }
        })
    }
}
export default authReducer;