import {connect} from "react-redux";
import {
    follow,
    isLogin,
    setCurrentPage,
    setNewTotalCount,
    setUsers,
    unfollow,
    ToggleWaitingFollow
} from "../../Redux/userspage-reducer";


import React from "react";
import Users from "./Usersc";
import Loading from "../../../common/Loading/loading";
import {UsersAPI} from "../../../API/API";

class UsersAPIContainer extends React.Component {

    componentDidMount() {

        this.props.isLogin(true)

        UsersAPI.GetUsers(this.props.pageSize).then(data => {

            this.props.isLogin(false)
            this.props.setUsers(data.items)
            this.props.setNewTotalCount(data.totalCount)
        })
    }

    onPageChanged = (currentPage) => {
        console.log("currentPage:", currentPage)
        this.props.isLogin(true)

        this.props.setCurrentPage(currentPage)
      UsersAPI.OnPageUsersChange(currentPage,this.props.pageSize).then(a => {
            this.props.isLogin(false)
            this.props.setUsers(a.data.items)
        })
    }

    render() {

        return <>

            {this.props.IsLogin ? <Loading/> : null}
            {!this.props.IsLogin ? <Users totalUserCount={this.props.totalUserCount} users={this.props.users}
                                          pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                                          onPageChanged={this.onPageChanged}
                                          follow={this.props.follow}
                                          unfollow={this.props.unfollow}
                                          WaitingFollow={this.props.WaitingFollow}
                                          ToggleWaitingFollow={this.props.ToggleWaitingFollow}
                />
                : null}
        </>
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        IsLogin: state.userPage.isLogin,
        WaitingFollow: state.userPage.WaitingFollow,

    }
}

let UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setNewTotalCount,
    isLogin,
    ToggleWaitingFollow
})(UsersAPIContainer)

export default UsersContainer;