import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={c.aboutMe}>
                <img
                    src={props.profile.photos.large}
                    alt=""/>
                <div className={c.description}>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatus status = {props.profile.aboutMe} />
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