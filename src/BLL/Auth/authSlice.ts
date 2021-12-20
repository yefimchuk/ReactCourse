import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AuthAPI, HeaderAPI} from "../../API/API";


export let HeaderLogin: any = createAsyncThunk("authPage/HeaderLogin",
    async ({}, {dispatch, rejectWithValue}) => {
        try {
            let responseFromAuthMe = await HeaderAPI.AuthMe()
            if (responseFromAuthMe.data.resultCode === 0) {
                let {id, email, login} = responseFromAuthMe.data.data;

                dispatch(setAuthUserData({id, email, login}))

                let responseLogin = await HeaderAPI.Login(login)

                return responseLogin.data.items.filter((u: any) => {
                    if (id === u.id) {
                        return u
                    }
                })
            }
        } catch (e) {
            rejectWithValue(e)
        }

    })


export let Login: any = createAsyncThunk("authPage/Login",
    async ({values, action}: any, {dispatch, rejectWithValue}) => {
        try {

            let response = await AuthAPI.Login(values)

            if (response.data.resultCode === 0) {

                let responseFromAuthMe = await HeaderAPI.AuthMe()
                if (responseFromAuthMe.data.resultCode === 0) {
                    let {id, login} = responseFromAuthMe.data.data;

                    let responseLogin = await HeaderAPI.Login(login)
debugger
                    return responseLogin.data.items.filter((u: any) => {
                        if (id === u.id) {
                            return u
                        }
                    })
                }
            } else {
                if (response.data.resultCode === 10) {
                    let response = AuthAPI.GetCaptcha()
                    dispatch(getCaptcha(response))


                }
                action.setStatus({error: response.data.messages})
            }
        } catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    })


export let UnLogin = createAsyncThunk("authPage/unLogin",
    async ({val}: any, {dispatch}) => {
        let response = await AuthAPI.LogOut()

        if (response.data.resultCode === 0) {
            dispatch(setLogOut())
        }
        return response
    })

export let GetCaptchaUrl = createAsyncThunk("authPage/getCaptchaUrl",
    async ({}, {dispatch}) => {
        let response = AuthAPI.GetCaptcha()
        dispatch(getCaptcha(response))


    })

type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isLogin: boolean,
    date: object | null,
    captchaURL: string | null,
}
export const authSlice = createSlice({
        name: 'authPage',
        initialState: {
            id: null,
            email: null,
            login: null,
            isLogin: false,
            date: null,
            captchaURL: null,
        } as AuthType,
        reducers: {
            setUserData: (state, action) => {

                state.date = action.payload
            },
            setAuthUserData: (state, action) => {
                return {
                    ...state,
                    ...action.payload,
                }
            },
            getCaptcha: (state, action) => {
                state.captchaURL = action.payload.data.url
            },
            setLogOut: (state) => {
                state.id = null
                state.email = null
                state.login = null
                state.isLogin = false
                state.date = null
                state.captchaURL = null
            },
        },
        extraReducers: {
            [Login.pending]: (state) => {
                state.isLogin = false
            },
            [Login.rejected]: (state) => {
                state.isLogin = false
            },
            [Login.fulfilled]: (state, action) => {
                state.isLogin = true
                state.date = action.payload[0]
            },
            [HeaderLogin.fulfilled]: (state, action) => {
                state.isLogin = true
                state.date = action.payload[0]
            },
            [HeaderLogin.pending]: (state, action) => {
                state.isLogin = false
            }
        },
    }
)
export default authSlice.reducer
export let {setUserData, setLogOut, getCaptcha, setAuthUserData} = authSlice.actions