import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a34bc872-f389-4ef8-b403-cb71dff0b676",
    },
})

export const UsersAPI = {
    GetUsers: (pageSize) => {
        return instance.get(`users?count=${pageSize}`).then(response => {
                return response.data
            }
        )
    },
        OnPageUsersChange: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
    },

    Unfollow: (id) => {
        return instance.delete(`follow/${id}`).then(response => {

            return response.data
        })
    },

    Follow: (id) => {
        return instance.post(`follow/${id}`, {}).then(response => {

            return response.data
        })
    },
    AuthMe: () => {
        return instance.get(`auth/me`, {
            withCredentials: true
        }).then(response => {
            return response.data
        })
    },
    SetMyId: (userId) => {
        return instance.get(`profile/${userId}`,
            {
                withCredentials: true
            }
        )
    }
}
