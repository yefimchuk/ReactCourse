const follow = "FOLLOW";
const unFollow = "UNFOLLOW";
const setUsers = "SET-USERS";

let initialState = {
    users: [
        {
            id: 1,
            nickname: "Illya",
            status: "pipapupipu",
            photos:{
                small: "https://www.meme-arsenal.com/memes/91e83b00c27bf4d5bb849a6ac2b81fe5.jpg"
            } ,
            city: "Belogorodka",
            country: "Ukraine",
            followed: true
        },
        {
            id: 2,
            nickname: "Arthur",
            status: "i'm love all Nastya in the world",
            photos:{
                small: "https://images.aif.by/007/318/b53425339c1eab74cda53465696a4aaf.jpg"
            } ,
            city: "Bila cerkva",
            country: "Ukraine",
            followed: true
        },
        {
            id: 3,
            nickname: "Luba",
            status: "u are all bitches",
            photos: {
                small: "https://mfm.ua/wp-content/uploads/2015/12/lana_del_Rey2.jpg",
            },
            city: "Florida",
            country: "America",
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
            debugger
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
export const SetUsersActionCreator = (users: any) => {
    return {type: setUsers, users: users}
}

