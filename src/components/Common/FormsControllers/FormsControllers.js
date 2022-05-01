import React from "react";
import styles from "./FormsController.module.css"

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : undefined)}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {meta.touched && meta.error && <span>{hasError}</span>}
        </div>

    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : undefined)}>
            <div>
                <input {...props} {...input}/>
            </div>
            {meta.touched && meta.error && <span>{hasError}</span>}
        </div>

    )
}