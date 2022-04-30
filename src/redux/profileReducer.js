import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_LOOK_JOB = 'SET-LOOK-JOB';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState = {
    posts: [
        {id: '1', message: 'Hi, how are you ?', likesCount: '23'},
        {id: '2', message: 'Wow, I LIKE YOU !!', likesCount: '112'},
    ],
    profile: null,
    isLookingForAJob: false,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            };
        case SET_USERS_PROFILE:
            return{
                ...state,
                profile: action.profile
            };
        case SET_LOOK_JOB:
            return{
                ...state,
                isLookingForAJob: action.isLooking
            };
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const actionCreatorAddPost = (newPostText) => ({type: 'ADD-POST', newPostText});
export const actionCreatorUpdatePostText = (text) => ({type: 'UPDATE-POST-TEXT', postText: text});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setLookJob = (isLooking) => ({type: SET_LOOK_JOB, isLooking});
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
                dispatch(setLookJob(response.data.lookingForAJob));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                return dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    return dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;