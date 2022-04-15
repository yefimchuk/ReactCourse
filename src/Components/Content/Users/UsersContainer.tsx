import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Usersc";
import {compose} from "redux";
import UsersLoading from "../../../common/Loading/UsersLoading";
import {a, getIsLoginSelector, getUsersSelector,} from "../../../BLL/Users/userSelector";
import {getUsers} from "../../../BLL/Users/usersSlice";

let UsersAPIContainer = (props: any) => {

  let props2 = useSelector(a);
  let users = useSelector(getUsersSelector);
  let isLogin = useSelector(getIsLoginSelector);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(props2.pageSize));
  }, [props2.pageSize]);


  return (
    <>
      {isLogin ? <UsersLoading /> : null}

      {!isLogin ? (
          <Users

              totalUserCount={props2.totalUserCount}
              users={users}
              pageSize={props2.pageSize}
              currentPage={props.currentPage}
              waitingFollow={props2.waitingFollow}
              isLoading={props2.isLogin}
              authMe={props2.authMe}
          />
      ) : null}
    </>
  );
};


export default compose(
)(UsersAPIContainer);
