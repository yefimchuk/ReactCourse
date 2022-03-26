import axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a8795b57-6a5a-472e-a9f7-6a0c34e4175a",
    },
})

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

    Unfollow: (id: number) => {
        return instance.delete(`follow/${id}`).then(response => {

            return response.data
        })
    },

    Follow: (id: number) => {
        return instance.post(`follow/${id}`, {}).then(response => {

            return response.data
        })
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