import React from 'react';
import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name;
    return (
        <div className={c.dialog} >
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}
export default DialogItem;