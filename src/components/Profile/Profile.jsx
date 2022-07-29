import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto = {props.savePhoto} isOwner = {props.owner} profile = {props.profile} isLook = {props.isLook} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;