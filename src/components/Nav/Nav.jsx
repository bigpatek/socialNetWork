import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Nav = (props) => {
    let friendName = props.state.friends.map(e => (<Friends name={e.name}/>));
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? classes.activeLink : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" className={navData => navData.isActive ? classes.activeLink : classes.item}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? classes.activeLink : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news"
                         className={navData => navData.isActive ? classes.activeLink : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music"
                         className={navData => navData.isActive ? classes.activeLink : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? classes.activeLink : classes.item}>Settings</NavLink>
            </div>
            <div className={classes.friends}>
                <h3>Friends</h3>
                <div className={classes.friendsCards}>{friendName}</div>
            </div>
        </nav>
    );
}

export default Nav;