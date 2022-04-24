import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
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