import {applyMiddleware, combineReducers, createStore} from "redux";
import {MessageReducer} from "./message-reducer";
import {ProfileReducer} from "./profile-reducer";
import thunk from 'redux-thunk'
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducers} from "./userspage-reducer";
import {AuthReducer} from "./auth-reducer";

let reducers = combineReducers({
    messagePage: MessageReducer,
    profilePage: ProfileReducer,
    sideBar: SidebarReducer,
    userPage: UsersReducers,
    auth: AuthReducer
})
let store = createStore(reducers, applyMiddleware(thunk));
export default store