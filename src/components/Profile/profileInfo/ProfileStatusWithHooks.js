import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect( () => {
       setStatus(props.status);
       }, [props.status]);

   let onActivateEditMode = () => {
       setEditMode(true);
   }

   let onDeactivateEditMode = () => {
       setEditMode(false);
   }

   let onStatusChange = (e) => {
       setStatus(e.currentTarget.value);
       props.updateStatus(status);
   }

    return (
        <>
            { !editMode &&
                <div>
                    <span onDoubleClick={onActivateEditMode}>{props.status || 'Пока что нет статуса...'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <textarea autoFocus={true} onChange={onStatusChange} onBlur={onDeactivateEditMode} value={status} ></textarea>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;