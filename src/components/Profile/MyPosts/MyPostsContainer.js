import React from "react";
import {actionCreatorAddPost, actionCreatorUpdatePostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {
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
}*/
let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () =>{
            dispatch(actionCreatorAddPost());
        },
        updateNewPostText: (text) =>{
            dispatch(actionCreatorUpdatePostText(text));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;