import {connect, useDispatch, useSelector} from "react-redux";
import {followThunk, getUsersThunk, isLogin, onChangeUsersThunk, unfollowThunk} from "../../Redux/userspage-reducer";
import React, {useEffect} from "react";
import Users from "./Usersc";
import {compose} from "redux";
import UsersLoading from "../../../common/Loading/UsersLoading";
import {a, getIsLoginSelector, getUsersSelector} from "../../../BLL/Users/userSelector";
import {getUsers} from "../../../BLL/Users/usersSlice";


let UsersAPIContainer = (props: any) => {
    let dispatch = useDispatch()
    useEffect(() => {

        dispatch(getUsers(props.pageSize))
    }, [])
    useEffect(() => {
        props.getUsersThunk(props.pageSize);
    }, [props.pageSize])

    let users = useSelector(getUsersSelector)
    let isLogin = useSelector(getIsLoginSelector)
    let props2 = useSelector(a)
    return <>
        {isLogin ? <UsersLoading/> : null}
        {!isLogin ? <Users totalUserCount={props2.totalUserCount} users={users}
                                 pageSize={props2.pageSize} currentPage={props.currentPage}
                                 waitingFollow={props2.waitingFollow}
                                 isLoading={props2.isLogin}
                                 authMe={props2.authMe}

            />
            : null}
    </>

}
let mapStateToProps = (state: any) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        IsLogin: state.userPage.isLogin,
        WaitingFollow: state.userPage.WaitingFollow,
        authMe: state.auth.isLogin
    }
}


export default compose(
    connect(mapStateToProps, {
        unfollowThunk,
        followThunk,
        getUsersThunk,
        isLogin
    }),
)
(UsersAPIContainer);