import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "8878a7b5-9d44-4029-a542-fc1eadad14ff"
        }
    }
)
export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}
export const authAPI = {
    setAuth(){
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe = false){
        return instance.post(`auth/login`, {email,password,rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },

}
