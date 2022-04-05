import React from "react";
import {actionCreatorAddPost, actionCreatorUpdatePostText} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(actionCreatorAddPost());
    }

    let onPostChange = (text) => {
        props.store.dispatch(actionCreatorUpdatePostText(text));
    }

    return (<MyPosts addPost={onAddPost} updateNewPostText={onPostChange} posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)

}
export default MyPostsContainer;