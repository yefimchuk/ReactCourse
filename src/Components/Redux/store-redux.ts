import {applyMiddleware, combineReducers, createStore} from "redux";
import {MessageReducer} from "./message-reducer";
import {ProfileReducer} from "./profile-reducer";
import thunk from 'redux-thunk'
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducers} from "./userspage-reducer";
import {AuthReducer} from "./auth-reducer";
import {AppReducer} from "./app-reduce";
import counterSlice from "../../BLL/test"
import {composeWithDevTools} from 'redux-devtools-extension';
import {profilePage} from "../../BLL/profilePage";

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
    toolkit: counterSlice,
    sliceProfile: profilePage.reducer
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),

));
window.store = store
export default store

