import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import store from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile} isLook = {props.isLook}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;