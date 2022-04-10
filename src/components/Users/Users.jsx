import React from 'react';
import styles from './Users.module.css'


const Users = (props) => {
/*        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://otvet.imgsmail.ru/download/25182015_48ee296f9b4110cccedb462b9a8579de_800.jpg',
                followed: false,
                fullName: 'Yan K.',
                status: 'I love vstu',
                location: {city: 'Volgograd', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://otvet.imgsmail.ru/download/25182015_48ee296f9b4110cccedb462b9a8579de_800.jpg',
                followed: false,
                fullName: 'Andrey F.',
                status: 'I love volsu',
                location: {city: 'Volgograd', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://otvet.imgsmail.ru/download/25182015_48ee296f9b4110cccedb462b9a8579de_800.jpg',
                followed: false,
                fullName: 'Alex D.',
                status: 'I love mai',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])*/

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={ () => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;