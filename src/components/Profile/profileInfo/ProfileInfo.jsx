import React from "react";
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={c.bgPhoto}>
                <img
                    src="https://w-dog.ru/wallpapers/2/8/445044471692325/shirokoformatnye-oboi-shirokoekrannye-oboi-oboi-shirokoformatnye-goroda-nyu-jork-oboi-ssha-shtaty-zemlya-obetovannaya--doma-neboskreby-okna-nebo-solnce-zakaty-oblako-oblaka-ssha-oboi-ssha-oboi-dlya-rabochego-st.jpg"
                    alt=""/>
            </div>
            <div className={c.aboutMe}>
                <img
                    src="https://sun9-80.userapi.com/impf/c856136/v856136243/b23cc/1HFUUwOw9r8.jpg?size=604x604&quality=96&sign=f92fb7140e7680cb84d7697e2778787d&type=album"
                    alt=""/>
                descriprion
            </div>
        </div>
    )
}
export default ProfileInfo;