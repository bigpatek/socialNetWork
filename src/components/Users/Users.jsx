import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/user.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";



const Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} pagesSize={props.pageSize} totalItemsCount={props.usersCount} />
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
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unfollowThunk(u.id);
                                }}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunk(u.id);
                            }}>Follow</button>}
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