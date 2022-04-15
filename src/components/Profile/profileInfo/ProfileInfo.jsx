import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={c.bgPhoto}>
                <img
                    src="https://w-dog.ru/wallpapers/2/8/445044471692325/shirokoformatnye-oboi-shirokoekrannye-oboi-oboi-shirokoformatnye-goroda-nyu-jork-oboi-ssha-shtaty-zemlya-obetovannaya--doma-neboskreby-okna-nebo-solnce-zakaty-oblako-oblaka-ssha-oboi-ssha-oboi-dlya-rabochego-st.jpg"
                    alt=""/>
            </div>
            <div className={c.aboutMe}>
                <img
                    src={props.profile.photos.large}
                    alt=""/>
                <div className={c.description}>
                    <h1>{props.profile.fullName}</h1>
                    <p>{props.profile.aboutMe}</p>
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