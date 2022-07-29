import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/user.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={c.aboutMe}>
                <div className={c.mainImg}>
                    <img
                        src={props.profile.photos.large || userPhoto}
                        alt=""/>
                    {props.isOwner ? null : <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                <div className={c.description}>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} />
                </div>
                <div className={c.socials}>
                    <h1>Я тут есть:</h1>
                    <p>{props.profile.contacts.facebook}</p>
                </div>
                <div className={c.job}>
                    <h1>Работа</h1>
                    <p>{props.isLook ? props.profile.lookingForAJobDescription : 'net'}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;