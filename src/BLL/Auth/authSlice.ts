import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import headerServiceInstance from "../../DAL/http/HeaderService";
import authServiceInstance from "../../DAL/http/AuthService";
import { InitialStateAuthPage } from "../../types/Auth.types";

export let HeaderLogin: any = createAsyncThunk(
  "authPage/HeaderLogin",
  async ({}, { dispatch, rejectWithValue }) => {
    try {
      let responseFromAuthMe = await headerServiceInstance.AuthMe();
      if (responseFromAuthMe.data.resultCode === 0) {
        let { id, email, login } = responseFromAuthMe.data.data;

        dispatch(setAuthUserData({ id, email, login }));

        let responseLogin = await headerServiceInstance.Login(login);

        return responseLogin.data.items.filter((u: any) => {
          if (id === u.id) {
            return u;
          }
        });
      }
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export let Login: any = createAsyncThunk(
  "authPage/Login",
  async ({ values, action }: any, { dispatch, rejectWithValue }) => {
    try {
      let response = await authServiceInstance.Login(values);

      if (response.data.resultCode === 0) {
        let responseFromAuthMe = await headerServiceInstance.AuthMe();
        if (responseFromAuthMe.data.resultCode === 0) {
          let { id, login } = responseFromAuthMe.data.data;

          let responseLogin = await headerServiceInstance.Login(login);

          return responseLogin.data.items.filter((u: any) => {
            if (id === u.id) {
              return u;
            }
          });
        }
      } else {
        if (response.data.resultCode === 10) {
          let responseCaptcha = await authServiceInstance.GetCaptcha();
          dispatch(getCaptcha(responseCaptcha));
        }

        action.setStatus({ error: response.data.messages });
        return rejectWithValue(response);
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export let UnLogin: any = createAsyncThunk(
  "authPage/unLogin",
  async ({ val }: any, { dispatch }) => {
    let response = await authServiceInstance.LogOut();

    if (response.data.resultCode === 0) {
      dispatch(setLogOut());
    }
    return response;
  }
);
export let UpdateHeaderAvatar: any = createAsyncThunk(
  "authPage/UpdateHeaderAvatar",
  async (date) => {
    return date;
  }
);
export let GetCaptchaUrl = createAsyncThunk(
  "authPage/getCaptchaUrl",
  async ({}, { dispatch }) => {
    let response = authServiceInstance.GetCaptcha();
    dispatch(getCaptcha(response));
  }
);

export const authSlice = createSlice({
  name: "authPage",
  initialState: {
    id: null,
    email: null,
    login: null,
    isLogin: false,
    date: {
      photos: null,
    },
    captchaURL: null,
    errors: null,
    submitting: false,
  } as InitialStateAuthPage,
  reducers: {
    setUserData: (state, action) => {
      state.date = action.payload;
    },
    setAuthUserData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getCaptcha: (state, action) => {
      state.captchaURL = action.payload.data.url;
    },
    setLogOut: (state) => {
      state.id = null;
      state.email = null;
      state.login = null;
      state.isLogin = false;
      state.date = null;
      state.captchaURL = null;
    },
  },
  extraReducers: {
    [Login.pending]: (state) => {
      state.submitting = true;
    },
    [Login.rejected]: (state, action) => {},
    [Login.fulfilled]: (state, action) => {
      state.submitting = false;
      state.isLogin = true;
      state.date = action.payload[0];
    },
    [UnLogin.fulfilled]: (state, action) => {
      state.date = null;
    },
    [HeaderLogin.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.date = action.payload[0];
    },
    [HeaderLogin.pending]: (state, action) => {
      state.isLogin = false;
    },
    [UpdateHeaderAvatar.fulfilled]: (state, action) => {
      state.date.photos = action.payload.response.data.data.photos;
    },
  },
});
export default authSlice.reducer;
export let { setUserData, setLogOut, getCaptcha, setAuthUserData } =
  authSlice.actions;
