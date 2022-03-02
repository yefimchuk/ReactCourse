import {UsersAPI} from "../../API/API";

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
    isLogin: false,
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

            return {
                ...state,

                WaitingFollow: action.WaitingFollow ? [...state.WaitingFollow, action.id] : state.WaitingFollow.filter((id => id != action.id))
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
//action creators
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

// thunk
export const followThunk = (id: number) => {
    return (dispatch: any) => {

        dispatch(ToggleWaitingFollow(true, id))
        UsersAPI.Follow(id).then((data: any) => {
            if (data.resultCode === 0)
                dispatch(follow(id))
            dispatch(ToggleWaitingFollow(false, id))
        })
    }
}
export const unfollowThunk = (id: number) => {
    return (dispatch: any) => {
        dispatch(ToggleWaitingFollow(true, id))
        UsersAPI.Unfollow(id).then((data: any) => {
            if (data.resultCode === 0)
                dispatch(unfollow(id))
            dispatch(ToggleWaitingFollow(false, id))
        })
    }
}
export const getUsersThunk = (pageSize: number) => {
    return (dispatch: any) => {
        dispatch(isLogin(true))
        UsersAPI.GetUsers(pageSize).then((data: any) => {
            dispatch(isLogin(false))
            dispatch(setUsers(data.items))
            dispatch(setNewTotalCount(data.totalCount))
        })
    }
}
export const onChangeUsersThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(isLogin(true))
        dispatch(setCurrentPage(currentPage))
        UsersAPI.OnPageUsersChange(currentPage, pageSize).then((response: any) => {
            dispatch(isLogin(false))
            dispatch(setUsers(response.data.items))
        })
    }
}