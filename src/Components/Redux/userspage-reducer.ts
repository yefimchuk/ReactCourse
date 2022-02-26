const Follow = "FOLLOW";
const UnFollow = "UNFOLLOW";
const SetUsers = "SET-USERS";
const SetCurrentPage = "SET-CURRENT-PAGE";
const SetTotalUserCount = "SET-TOTAL-USER-COUNT"
const IsLogin = "IS-LOGIN"
const WAITING_FOLLOW = "WAITING-FOLLOW"
let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 0,
    isLogin: true,
    WaitingFollow: [22678]
}
export const UsersReducers = (state = initialState, action: any) => {

    switch (action.type) {
        case Follow: {
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
        case UnFollow: {

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
        case SetUsers: {

            return {
                ...state, users: action.users

            }
        }
        case SetCurrentPage: {

            return {
                ...state, currentPage: action.currentPage

            }
        }
        case WAITING_FOLLOW: {
debugger
            return {
                ...state,
                WaitingFollow:  state.WaitingFollow.filter((id => id != action.id))
            }
        }
        case SetTotalUserCount: {

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


export const follow = (userid: number) => {
    return {type: Follow, id: userid}
}
export const unfollow = (userid: number) => {
    return {type: UnFollow, id: userid}
}
export const setUsers = (users: any) => {
    return {type: SetUsers, users: users}
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SetCurrentPage, currentPage: currentPage}
}
export const setNewTotalCount = (totalUserCount: number) => {

    return {type: SetTotalUserCount, totalUserCount: totalUserCount}
}

export const isLogin = (isLogin: boolean) => {
    return {type: IsLogin, isLogin: isLogin}
}

export const ToggleWaitingFollow = (WaitingFollow: any, id: number) => {
    return {type: WAITING_FOLLOW, WaitingFollow, id}
}
