import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { SidebarReducer } from "../Components/Redux/sidebar-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { profilePage } from "./ProfilePage/profilePage";
import { authSlice } from "./Auth/authSlice";
import { appSlice } from "./App/appSlice";
import { messageSlice } from "./Message/messageSlice";
import { usersPage } from "./Users/usersSlice";
import {sideBarSlice} from "./SideBar/sidebarSlice";


declare global {
  interface Window {
    store: any;
  }
}

let reducers = combineReducers({
  sideBar: SidebarReducer,
  sliceProfile: profilePage.reducer,
  sliceAuth: authSlice.reducer,
  sliceApp: appSlice.reducer,
  sliceMessage: messageSlice.reducer,
  sliceUsers: usersPage.reducer,
  sliceSidebar: sideBarSlice.reducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof reducers>;
export default store;
