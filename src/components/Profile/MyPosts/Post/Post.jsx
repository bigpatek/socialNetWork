import React from "react";
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.posts}>
            <div className={c.item}>
                <img src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg" alt=""/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}
export default Post;