import React from "react";
import {actionCreatorAddPost, actionCreatorUpdatePostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext/storeContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                let onAddPost = () => {
                    store.dispatch(actionCreatorAddPost());
                }

                let onPostChange = (text) => {
                    store.dispatch(actionCreatorUpdatePostText(text));
                }

               return  <MyPosts addPost={onAddPost}
                         updateNewPostText={onPostChange}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;