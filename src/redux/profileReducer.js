import axios from "axios";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_LOOK_JOB = 'SET-LOOK-JOB';

let initialState = {
    posts: [
        {id: '1', message: 'Hi, how are you ?', likesCount: '23'},
        {id: '2', message: 'Wow, I LIKE YOU !!', likesCount: '112'},
    ],
    newPostText: '',
    profile: null,
    isLookingForAJob: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
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
            }
        default:
            return state;
    }
}
export const actionCreatorAddPost = () => ({type: 'ADD-POST'});
export const actionCreatorUpdatePostText = (text) => ({type: 'UPDATE-POST-TEXT', postText: text});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setLookJob = (isLooking) => ({type: SET_LOOK_JOB, isLooking});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
                dispatch(setLookJob(response.data.lookingForAJob));
            })
    }
}
export default profileReducer;