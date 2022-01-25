const follow = "FOLLOW";
const unFollow = "UNFOLLOW";
const setUsers = "UNFOLLOW";

let initialState = {
    users: [
        {
            id: 1,
            nickname: "Illya",
            status: "pipapupipu",
            avatar: "sting",
            city: "Belogorodka",
            country: "Ukraine",
            followed: true
        },
        {
            id: 2,
            nickname: "Arthur",
            status: "i'm love all Nastya in the world",
            avatar: "sting",
            city: "Bila cerkva",
            country: "sting",
            followed: true
        },
        {
            id: 2,
            nickname: "Luba",
            status: "u are all bitches",
            avatar: "sting",
            city: "Kryshchul",
            country: "Florida",
            followed: true
        },
    ]
}
export const UsersReducers = (state = initialState, action: any) => {

    switch (action.type) {

        case follow: {
            return {
                ...state,
                users: state.users.map((u: { id: number }) => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })

            }
        }
        case unFollow: {
            return {
                ...state,
                users: state.users.map((u: { id: number }) => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        }
        case setUsers: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }

}


export const followActionCreator = (userid: number) => {
    return {type: follow, id: userid}
}
export const unfollowActionCreator = (userid: number) => {
    return {type: unFollow, id: userid}
}
export const SetUsersActionCreator = (userid: number) => {
    return {type: setUsers, id: userid}
}

