import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/user.jpg";


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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
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