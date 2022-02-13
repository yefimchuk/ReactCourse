const follow = "FOLLOW";
const unFollow = "UNFOLLOW";
const setUsers = "SET-USERS";
const setCurrentPage = "SET-CURRENT-PAGE";
const setTotalUserCount = "SET-TOTAL-USER-COUNT"
const IsLogin = "IS-LOGIN"
let initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 0,
    isLogin: true
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
                ...state, users: action.users

            }
        }
        case setCurrentPage: {

            return {
                ...state, currentPage: action.currentPage

            }
        }
        case setTotalUserCount: {

            return {
                ...state, totalUserCount: action.totalUserCount

            }
        }
        case IsLogin: {

            return {

                ...state, isLogin: action.isLogin
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
export const SetCurrentPageActionCreator = (currentPage: number) => {
    return {type: setCurrentPage, currentPage: currentPage}
}
export const SetNewTotalCountActionCreator = (totalUserCount: number) => {
    return {type: setTotalUserCount, totalUserCount: totalUserCount}
}

export const IsLoginActionCreator = (isLogin: boolean) => {
    return {type: IsLogin, isLogin: isLogin}
}

