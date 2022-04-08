const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.dialogText
            };
        default:
            return state;
    }
}
export const actionCreatorAddMessage = () => ({type: 'ADD-MESSAGE'});
export const actionCreatorUpdateMessageText = (text) => ({type: 'UPDATE-MESSAGE-TEXT', dialogText: text})
export default dialogsReducer;