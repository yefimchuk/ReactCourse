import {connect} from "react-redux";
import {followActionCreator, SetUsersActionCreator, unfollowActionCreator,} from "../../Redux/userspage-reducer";
import Profile from "../Profile/Profile";
import Users from "./Users";

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: number) => {
            const action = followActionCreator(id);
            dispatch(action)
        },
        unfollow: (id: number) => {
            const action = unfollowActionCreator(id);
            dispatch(action)
        },
        setUsers: (id: number) => {

            let action = SetUsersActionCreator(id)
            dispatch(action)
        }

    }
}

let mapStateToProps = (state: any) => {

    return {
        users: state.userPage.users,

    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;