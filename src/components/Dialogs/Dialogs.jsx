import React, {createRef} from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>));
    let messagesElements = props.messages.map(m => (<Message message={m.message}/>));

    let newMessageElement = createRef();

    let onSendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage(text);
    }
    let onDialogChange = () => {
        let text = newMessageElement.current.value;
        props.onDialogChange(text);
    }
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
                    <textarea ref={newMessageElement} value={props.newMessageText} onChange={onDialogChange}></textarea>
                    <button onClick={onSendMessage}>SEND</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;