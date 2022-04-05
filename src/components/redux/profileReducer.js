const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: '1', message: 'Hi, how are you ?', likesCount: '23'},
        {id: '2', message: 'Wow, I LIKE YOU !!', likesCount: '112'},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.postText;
            return state;
        default:
            return state;
    }
}
export const actionCreatorAddPost = () => ({type: 'ADD-POST'});
export const actionCreatorUpdatePostText = (text) => ({type: 'UPDATE-POST-TEXT', postText: text});
export default profileReducer;