import React from 'react';
import {actionCreatorAddMessage, actionCreatorUpdateMessageText} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let sendMessage = (text) => {
        props.store.dispatch(actionCreatorAddMessage(text));
    }
    let onDialogChange = (text) => {
        props.store.dispatch(actionCreatorUpdateMessageText(text));
    }

    return (<Dialogs sendMessage={sendMessage} onDialogChange={onDialogChange} newMessageText={state.newMessageText}
                     dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>)
}
export default DialogsContainer;