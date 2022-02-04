import {combineReducers, createStore} from "redux";
import {MessageReducer} from "./message-reducer";
import {ProfileReducer} from "./profile-reducer";

import {SidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    messagePage: MessageReducer,
    profilePage: ProfileReducer,
    sideBar: SidebarReducer
})
let store = createStore(reducers);
export default store