import axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "02e26adb-3640-4bf5-8fdb-2832b11eecf3",
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
        console.log(login)
debugger
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
    }
}