import React from "react";
import c from './../Nav.module.css'

const Friends = (props) => {
    return (
        <div className={c.friendsContainer}>
            <div className={c.friendCard}>
                <div>
                    <img
                        src="https://avatars.mds.yandex.net/i?id=544ebb647d67b2b47d72ffcee2ff7761-5599693-images-thumbs&n=13"
                        alt=""/>
                </div>
                <div>
                    <a>{props.name}</a>
                </div>
            </div>
        </div>
    )
}

export default Friends;