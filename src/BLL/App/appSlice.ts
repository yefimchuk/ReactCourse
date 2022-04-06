import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HeaderLogin} from "../Auth/authSlice";


export let initializingThunk: any = createAsyncThunk("app/initializingWasSuccess",
    async ({}, {dispatch}) => {

        let auth = await dispatch(HeaderLogin({}))
        await Promise.all([auth])
        return true
    })

type AuthType = { initialized: boolean }

export const appSlice = createSlice({
        name: 'app',
        initialState: {initialized: false} as AuthType,
        reducers: {},
        extraReducers: {
            [initializingThunk.fulfilled]: (state, action) => {

                state.initialized = true
            },
            [initializingThunk.rejected]: (state, action) => {
                state.initialized = false
            },
        }
    },
)
export default appSlice.reducer
