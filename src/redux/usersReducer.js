const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
     users: [
        /*{
            id: 1,
            photoUrl: 'https://otvet.imgsmail.ru/download/25182015_48ee296f9b4110cccedb462b9a8579de_800.jpg',
            followed: true,
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
        }*/
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;