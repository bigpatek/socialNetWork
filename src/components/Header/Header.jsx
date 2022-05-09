import React from "react"
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src="https://avatars.mds.yandex.net/i?id=a756eff2a29f2cbe75755a27f3f1d1a0-5424817-images-thumbs&n=13" alt=""/>
            <h1>SocialTree</h1>

            <div className={c.loginBlock}>
                { props.isAuth ? <div>{props.login} - <button onClick={props.logoutThunk}>log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;