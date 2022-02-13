import {connect} from "react-redux";
import {
    followActionCreator,
    IsLoginActionCreator,
    SetCurrentPageActionCreator,
    SetNewTotalCountActionCreator,
    SetUsersActionCreator,
    unfollowActionCreator,
} from "../../Redux/userspage-reducer";

import loading from "../../../img/35771931234507.564a1d2403b3a.gif"
import React from "react";
import * as axios from "axios";
import Users from "./Usersc";
import s from "./../Users/Users.module.css"
class UsersAPIContainer extends React.Component {

    componentDidMount() {

        this.props.isLogin(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=173&count=${this.props.pageSize}`).then(a => {
            this.props.isLogin(false)

            this.props.setUsers(a.data.items)
            this.props.setNewTotalCount(a.data.totalCount)
        })
    }

    onPageChanged = (currentPage) => {
        this.props.isLogin(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(a => {
            this.props.isLogin(false)
            this.props.setUsers(a.data.items)
        })
    }

    render() {

        return <>

            {this.props.IsLogin ? <div className={s.loading}><img  className={s.loading1} src={loading}/></div> : null}
            {!this.props.IsLogin ? <Users totalUserCount={this.props.totalUserCount} users={this.props.users}
                   pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
                : null}
        </>
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            const action = followActionCreator(id);
            dispatch(action)
        },
        unfollow: (id) => {
            const action = unfollowActionCreator(id);
            dispatch(action)
        },
        setUsers: (users) => {

            let action = SetUsersActionCreator(users)

            dispatch(action)
        },
        setCurrentPage: (currentPage) => {
            let action = SetCurrentPageActionCreator(currentPage)
            dispatch(action);

        },
        setNewTotalCount: (total) => {
            let action = SetNewTotalCountActionCreator(total);
            dispatch(action)
        },
        isLogin: (isLogin) => {
            let action = IsLoginActionCreator(isLogin)

            dispatch(action)

        }
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        IsLogin: state.userPage.isLogin
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer;