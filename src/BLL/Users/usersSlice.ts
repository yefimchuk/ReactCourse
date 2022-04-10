import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {HeaderAPI, UsersAPI} from "../../API/API";
import {GetStatusThunk, setId} from "../ProfilePage/profilePage";
import {ToggleWaitingFollow} from "../../Components/Redux/userspage-reducer";

let FollowUnfollowFLow = async (dispatch: any, id: number, apiMethod: any, actionCreator: Function) => {
    dispatch(ToggleWaitingFollow(true, id))
    let response = await apiMethod(id)

    if (response.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(ToggleWaitingFollow(false, id))
}

export const followThunk = (id: number) => {
    return async (dispatch: any) => {


        await FollowUnfollowFLow(dispatch, id, UsersAPI.Follow.bind((UsersAPI)), follow)
    }
}
export const followThunk: any = createAsyncThunk(
    'usersPage/follow',
    async (id: number, {dispatch}) => {
        await FollowUnfollowFLow(dispatch, id, UsersAPI.Follow.bind((UsersAPI)), follow)

    })
export const unfollowThunk = (id: number) => {
    return async (dispatch: any) => {
        await  FollowUnfollowFLow(dispatch, id, UsersAPI.Unfollow.bind((UsersAPI)), unfollow)
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


export const usersPage = createSlice({
    name: 'usersPage',
    initialState: {
        users: [{
            followed: false,
            id: 1,
            name: "",
            photos: {
                small: '/social-network-React/static/media/—Pngtree—vector avatar icon_4013749.d7f0e99a072186ca4adc.png',
                large: null
            },
            status: null,
            uniqueUrlName: null
        }],
        pageSize: 5,
        totalUserCount: 0,
        currentPage: 0,
        isLogin: false,
        WaitingFollow: []
    } as any,
    reducers: {
        Follow: (state, action) => {
            return {

                ...state,
                users: state.users.map((u: { id: number }) => {
                    if (u.id === action.payload) {

                        return {...u, followed: true}
                    }
                    return u
                })

            }
        },
        UnFollow: (state, action) => {

            return {
                ...state,
                users: state.users.map((u: { id: number }) => {
                    if (u.id === action.payload) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        },
        SetUsers: (state, action) => {
            return {
                ...state, users: action.payload

            }
        },
        SetCurrentPage: (state, action) => {

            return {
                ...state, currentPage: action.payload

            }
        },
        waitingFollow: (state, action) => {

            return {
                ...state,

                WaitingFollow: action.payload ? [...state.WaitingFollow, action.id] : state.WaitingFollow.filter((id => id != action.id))
            }
        },

        SetTotalUserCount: (state, action) => {

            return {
                ...state, totalUserCount: action.payload

            }
        },

        IsLogin: (state, action) => {

            return {

                ...state, isLogin: action.payload
            }

        }
    },
    extraReducers: {}
    ,
},)


