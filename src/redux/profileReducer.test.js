import profileReducer, {actionCreatorAddPost, deletePost} from "./profileReducer";

test('first test', () => {
    let action = actionCreatorAddPost("Privet mir");
    let state = {
        posts: [
            {id: '1', message: 'Hi, how are you ?', likesCount: '23'},
            {id: '2', message: 'Wow, I LIKE YOU !!', likesCount: '112'},
        ]
    }
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("Privet mir");
});

test('second test', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            {id: '1', message: 'Hi, how are you ?', likesCount: '23'},
            {id: '2', message: 'Wow, I LIKE YOU !!', likesCount: '112'},
        ]
    }
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
    expect(newState.posts[0].id).toBe("2");
});