import React, {createRef} from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm, values} from "redux-form";


const DialogForm = (props) => {
    return ( <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Новое сообщение...'} name={'message'} component={'textarea'}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
         </>
    )
}

let DialogsReduxForm = reduxForm({
    form: 'DialogsReduxForm'
})(DialogForm)


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElements = props.messages.map(m => (<Message message={m.message}/>));

    let onSubmit = (FormData) => {
        console.log(FormData);
    }

    let onSendMessage = (values) => {
        props.sendMessage(values.message);
    }

    if (props.isAuth === false) return <Navigate to={'/login'} />
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={c.sendMessage}>
                    <DialogsReduxForm onSubmit={onSendMessage}/>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;