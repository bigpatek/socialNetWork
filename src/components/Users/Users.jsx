import React from 'react';
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/user.jpg'


class Users extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (page) =>{
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++ ){
            pages.push(i);
        };

        return <div>
            <div>
                {
                pages.map(p => {
                return <span className={this.props.currentPage === p && styles.selectedPage} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
            })}
            </div>
            {
                this.props.users.map(u => <div key={u.id} className={styles.userContainer}>
                <span className={styles.userFollow}>
                    <div>
                        <img src={u.photos.small !=  null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => this.props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={ () => this.props.follow(u.id)}>Follow</button>}
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
    }
}


export default Users;