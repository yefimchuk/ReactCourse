import { applyMiddleware, combineReducers, createStore } from "redux";
import { MessageReducer } from "./message-reducer";
import { ProfileReducer } from "./profile-reducer";
import thunk from "redux-thunk";
import { SidebarReducer } from "./sidebar-reducer";
import { UsersReducers } from "./userspage-reducer";
import { AuthReducer } from "./auth-reducer";
import { AppReducer } from "./app-reduce";
import { composeWithDevTools } from "redux-devtools-extension";
import { profilePage } from "../../BLL/ProfilePage/profilePage";
import { authSlice } from "../../BLL/Auth/authSlice";
import { appSlice } from "../../BLL/App/appSlice";
import { messageSlice } from "../../BLL/Message/messageSlice";
import { usersPage } from "../../BLL/Users/usersSlice";

declare global {
  interface Window {
    store: any;
  }
}

let reducers = combineReducers({
  messagePage: MessageReducer,
  profilePage: ProfileReducer,
  sideBar: SidebarReducer,
  userPage: UsersReducers,
  auth: AuthReducer,
  app: AppReducer,
  sliceProfile: profilePage.reducer,
  sliceAuth: authSlice.reducer,
  sliceApp: appSlice.reducer,
  sliceMessage: messageSlice.reducer,
  sliceUsers: usersPage.reducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof reducers>;
export default store;
