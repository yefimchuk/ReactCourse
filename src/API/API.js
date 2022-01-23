import * as axios from "axios";

export const GetUsers = (pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}`,
        {
            withCredentials: true
        }).then(response => {
            return response.data
        }
    )
}
export const OnPageUsersChange = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
}

export const Unfollow = (id) => {

    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "40c673c9-7c95-4006-810b-f4926e37ac22",
        }
    }).then(response => {
        return response.data
    })
}

export const Follow = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "40c673c9-7c95-4006-810b-f4926e37ac22",
        }
    }).then(response => {
        return response.data
    })
}