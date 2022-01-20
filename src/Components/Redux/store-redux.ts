import {combineReducers, createStore} from "redux";
import {MessageReducer} from "./message-reducer";
import {ProfileReducer} from "./profile-reducer";

import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducers} from "./userspage-reducer";

let reducers = combineReducers({
    messagePage: MessageReducer,
    profilePage: ProfileReducer,
    sideBar: SidebarReducer,
    userPage:UsersReducers
})
let store = createStore(reducers);
export default store