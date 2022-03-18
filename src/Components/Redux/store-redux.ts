import {applyMiddleware, combineReducers, createStore} from "redux";
import {MessageReducer} from "./message-reducer";
import {ProfileReducer} from "./profile-reducer";
import thunk from 'redux-thunk'
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducers} from "./userspage-reducer";
import {AuthReducer} from "./auth-reducer";
import {AppReducer} from "./app-reduce";

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
})

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store
export default store

