const follow = "FOLLOW";
const unFollow = "UNFOLLOW";
const setUsers = "UNFOLLOW";

let initialState = {
    users: [
        {
            id: 1,
            nickname: "Illya",
            status: "pipapupipu",
            avatar: "https://www.meme-arsenal.com/memes/91e83b00c27bf4d5bb849a6ac2b81fe5.jpg",
            city: "Belogorodka",
            country: "Ukraine",
            followed: true
        },
        {
            id: 2,
            nickname: "Arthur",
            status: "i'm love all Nastya in the world",
            avatar: "https://images.aif.by/007/318/b53425339c1eab74cda53465696a4aaf.jpg",
            city: "Bila cerkva",
            country: "sting",
            followed: true
        },
        {
            id: 3,
            nickname: "Luba",
            status: "u are all bitches",
            avatar: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3MTAwNTIzNDc5MTE1MDY1/lana-del-rey-attends-the-60th-annual-grammy-awards-at-madison-square-garden-on-january-28-2018-in-new-york-city-photo-by-dimitrios-kambouris_getty-images-for-naras-square.jpg",
            city: "Kryshchul",
            country: "Florida",
            followed: false
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

