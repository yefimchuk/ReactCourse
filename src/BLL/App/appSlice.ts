import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HeaderLogin} from "../Auth/authSlice";
import {InitialStateApp} from "../../types/App.types";

export let initializingThunk: any = createAsyncThunk(
    "app/initializingWasSuccess",
    async ({}, {dispatch, rejectWithValue}) => {
      try {
        let auth = await dispatch(HeaderLogin({}));
        await Promise.all([auth]);
        return true;
      } catch (err) {

        rejectWithValue(err);
      }
    }
);





export const appSlice = createSlice({
    name: "app",
    initialState: {initialized: false} as InitialStateApp,
    reducers: {},
    extraReducers: {
        [initializingThunk.fulfilled]: (state) => {
            state.initialized = true;
        },
        [initializingThunk.rejected]: (state) => {
            
            state.initialized = false;
        },
    },
});
export default appSlice.reducer;
