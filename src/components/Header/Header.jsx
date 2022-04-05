import React from "react"
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <img src="https://avatars.mds.yandex.net/i?id=a756eff2a29f2cbe75755a27f3f1d1a0-5424817-images-thumbs&n=13" alt=""/>
            <h1>SocialTree</h1>
        </header>
    );
}
export default Header;