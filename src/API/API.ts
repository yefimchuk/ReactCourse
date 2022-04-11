import axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d6c95276-5014-4760-bbd2-f4380dffa641",
    },
})
class Users {}
export const UsersAPI = {
    GetUsers: (pageSize: number) => {
        return instance.get(`users?count=${pageSize}`).then(response => {
                return response.data
            }
        )
    },
    OnPageUsersChange: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
    },

    Unfollow: async( id: number) => {
        let response = await instance.delete(`follow/${id}`)
        return response.data

    },

    Follow: async (id: number) => {
        let response = await instance.post(`follow/${id}`, {})
            return response.data
    },
    SetMyId: (userId: number) => {
        return instance.get(`profile/${userId}`)
    },

}
export const HeaderAPI = {
    Login: (login: string) => {

        return instance.get(`users?term=${login}`).then((response: any) => {
            return response
        })
    },
    AuthMe: () => {

        return instance.get(`auth/me`, {
            withCredentials: true
        }).then(response => {
            return response
        })
    },

}
export const ProfileAPI = {
    SetStatus: (id: number) => {

        return instance.get(`profile/status/${id}`)
    },
    UpdateStatus: (status: string) => {

        return instance.put(`profile/status`, {status: status})
    }
}
export const AuthAPI = {
    Login: (data: any) => {
        return instance.post("auth/login", {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha
        })
    },
    LogOut: () => {
        return instance.delete("auth/login",)
    },
    GetCaptcha: () => {
        return instance.get("security/get-captcha-url")
    }
}