import {connect} from "react-redux";
import {
    followActionCreator,
    SetCurrentPageActionCreator,
    SetUsersActionCreator,
    unfollowActionCreator,
} from "../../Redux/userspage-reducer";

import Users from "./Usersc";

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
        setUsers: (users: any) => {

            let action = SetUsersActionCreator(users)

            dispatch(action)
        },
        setCurrentPage: (currentPage: number) => {
            let action = SetCurrentPageActionCreator(currentPage)
            dispatch(action);
        }

    }
}

let mapStateToProps = (state: any) => {

    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;