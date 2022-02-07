import {connect} from "react-redux";
import {followThunk, getUsersThunk, isLogin, onChangeUsersThunk, unfollowThunk} from "../../Redux/userspage-reducer";
import React from "react";
import Users from "./Usersc";
import Loading from "../../../common/Loading/loading";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize);
    }
    onPageChanged = (currentPage) => {

        this.props.onChangeUsersThunk(currentPage, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.IsLogin ? <Loading/> : null}
            {!this.props.IsLogin ? <Users totalUserCount={this.props.totalUserCount} users={this.props.users}
                                          pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                                          onPageChanged={this.onPageChanged}
                                          follow={this.props.followThunk}
                                          unfollow={this.props.unfollowThunk}
                                          WaitingFollow={this.props.WaitingFollow}
                                          ToggleWaitingFollow={this.props.ToggleWaitingFollow}
                                          isLoading={this.props.IsLogin}
                                          authMe={this.props.authMe}
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
        authMe: state.auth.isLogin
    }
}


export default compose(
    connect(mapStateToProps, {
        unfollowThunk,
        followThunk,
        getUsersThunk,
        onChangeUsersThunk,
        isLogin
    }),
    withAuthRedirect,
)
(UsersAPIContainer);