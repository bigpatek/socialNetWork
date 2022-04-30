import React from 'react';
import {actionCreatorAddMessage, actionCreatorUpdateMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let sendMessage = (text) => {
                    store.dispatch(actionCreatorAddMessage(text));
                }
                let onDialogChange = (text) => {
                    store.dispatch(actionCreatorUpdateMessageText(text));
                }

                return <Dialogs sendMessage={sendMessage} onDialogChange={onDialogChange}
                                newMessageText={state.newMessageText}
                                dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>
            }}
        </StoreContext.Consumer>
}*/



let mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText : state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        onDialogChange: (text) => {
            dispatch(actionCreatorUpdateMessageText(text));
        },
        sendMessage: (newMessageText) =>{
            dispatch(actionCreatorAddMessage(newMessageText));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


