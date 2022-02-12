import {connect} from "react-redux";
import {
    followActionCreator,
    SetCurrentPageActionCreator,
    SetNewTotalCountActionCreator,
    SetUsersActionCreator,
    unfollowActionCreator,
} from "../../Redux/userspage-reducer";


import React from "react";
import * as axios from "axios";
import Users from "./Usersc";

class UsersAPIContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=173&count=${this.props.pageSize}`).then(a => {
            this.props.setUsers(a.data.items)
            this.props.setNewTotalCount(a.data.totalCount)
        })
    }

    onPageChanged = (currentPage) => {

        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(a => {
            this.props.setUsers(a.data.items)
        })
    }

    render() {

        return <Users totalUserCount={this.props.totalUserCount} users={this.props.users}
                      pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}/>
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
        }

    }
}

let mapStateToProps = (state) => {

    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer;