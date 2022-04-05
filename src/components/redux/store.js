import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you ?', likesCount: '23'},
                {id: '2', message: 'Wow, I LIKE YOU !!', likesCount: '112'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Артём'},
                {id: '2', name: 'Ваня'},
                {id: '3', name: 'Петя'}
            ],
            messages: [
                {id: '1', message: 'Привет !! Какая крутая соц.сеть !!'},
                {id: '2', message: 'Как твои дела'},
                {id: '3', message: 'Я Петя :))'},
            ],
            newMessageText: ''
        },
        sideBar: {
            friends: [
                {id: '1', name: 'Артём'},
                {id: '2', name: 'Ваня'},
                {id: '3', name: 'Петя'}
            ]
        }
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}




export default store;
