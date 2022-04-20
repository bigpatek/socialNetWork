import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/user.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";


const Users = (props) => {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    ;
    return <div>

        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={styles.userContainer}>
                <span className={styles.userFollow}>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                                     className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button
                                onClick={() => axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                                headers: {"API-KEY": "8878a7b5-9d44-4029-a542-fc1eadad14ff"}})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            debugger;
                                            props.unfollow(u.id)
                                        }
                                    })}>Unfollow</button> :
                            <button onClick={() =>
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                                    headers: {"API-KEY": "8878a7b5-9d44-4029-a542-fc1eadad14ff"}})
                                    .then(response => {
                                        debugger;
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })}>Follow</button>}
                    </div>
                </span>
                <span className={styles.userInfo}>
                    <span className={styles.userAbout}>
                        <div className={styles.userName}>{u.name}</div>
                        <div className={styles.userStatus}>{u.status}</div>
                    </span>
                    <span className={styles.userLocation}>
                        <div>{"u.location.country"},</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;