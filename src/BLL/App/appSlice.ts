import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HeaderLogin} from "../Auth/authSlice";


export let initializingThunk: any = createAsyncThunk("app/initializingWasSuccess",
    async ({}, {dispatch, rejectWithValue}) => {
        try {
            let auth = await dispatch(HeaderLogin({}))
            await Promise.all([auth])
            return true
        } catch (err) {
            debugger
            rejectWithValue(err)
        }

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
                debugger
                state.initialized = false
            },
        }
    },
)
export default appSlice.reducer
