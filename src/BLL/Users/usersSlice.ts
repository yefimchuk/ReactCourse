import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import userServiceInstance from "../../DAL/http/UserService";

export let followThunk: any = createAsyncThunk(
  "usersPage/follow",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      dispatch(waitingFollow(id));
      let response = await userServiceInstance.Follow(id);
      if (response.resultCode === 0) {
        dispatch(waitingFollow(id));
        return id;
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const unfollowThunk: any = createAsyncThunk(
  "usersPage/unfollow",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      dispatch(waitingFollow(id));
      let response = await userServiceInstance.Unfollow(id);
      if (response.resultCode === 0) {
        dispatch(waitingFollow(id));
        return id;
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getUsers: any = createAsyncThunk(
  "usersPage/getUsers",
  async (pageSize: number) => {
    return await userServiceInstance.GetUsers(pageSize);
  }
);

export const onChangeUsersThunk: any = createAsyncThunk(
  "usersPage/onChangeUsersThunk",
  async ({ page, pageSize }: any) => {

    let response = await userServiceInstance.OnPageUsersChange(page, pageSize);
    return [response, page];
  }
);

export const usersPage = createSlice({
  name: "usersPage",
  initialState: {
    users: [
      {
        followed: false,
        id: 1,
        name: "",
        photos: {
          small:
            "/social-network-React/static/media/—Pngtree—vector avatar icon_4013749.d7f0e99a072186ca4adc.png",
          large: null,
        },
        status: null,
        uniqueUrlName: null,
      },
    ],
    pageSize: 5,
    totalUserCount: 0,
    isFollowing: true,
    currentPage: 1,
    isLogin: false,
    waitingFollow: [],
  } as any,
  reducers: {
    SetCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    waitingFollow: (state, action) => {
      state.waitingFollow = state.isFollowing
        ? [...state.waitingFollow, action.payload]
        : state.waitingFollow.filter((id: number) => id != action.payload);
      state.isFollowing = false;
    },
  },
  extraReducers: {
    [followThunk.pending]: (state, action) => {
      state.isFollowing = true;
    },
    [followThunk.fulfilled]: (state, action: any) => {
      state.isFollowing = false;
      state.users = state.users.map((u: { id: number }) => {
        if (u.id === action.payload) {
          return { ...u, followed: true };
        }
        return u;
      });
    },
    [followThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [unfollowThunk.pending]: (state, action) => {
      state.isFollowing = true;
    },
    [unfollowThunk.fulfilled]: (state, action) => {
      state.isFollowing = false;
      state.users = state.users.map((u: { id: number }) => {
        if (u.id === action.payload) {
          return { ...u, followed: false };
        }
        return u;
      });
    },
    [unfollowThunk.rejected]: (state, action) => {},
    [getUsers.pending]: (state, action) => {
      state.isLogin = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLogin = false;
      state.users = action.payload.items;
      state.totalUserCount = action.payload.totalCount;
    },
    [getUsers.rejected]: (state, action) => {},
    [onChangeUsersThunk.pending]: (state, action) => {
      state.isLogin = true;
    },
    [onChangeUsersThunk.fulfilled]: (state, action) => {
      state.currentPage = action.payload[1];
      state.users = action.payload[0].data.items;
      state.isLogin = false;
    },
    [onChangeUsersThunk.rejected]: (state, action) => {},
  },
});

export let { waitingFollow } = usersPage.actions;
