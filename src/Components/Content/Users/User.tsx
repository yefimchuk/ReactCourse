import React from "react";
import "./Users.scss";
import {Navigate, NavLink} from "react-router-dom";
import photo from "../../../img/—Pngtree—vector avatar icon_4013749.png";
import {useDispatch, useSelector} from "react-redux";
import {followThunk, unfollowThunk} from "../../../BLL/Users/usersSlice";
import LoaderFollow from "../../../common/Loading/LoaderFollow";
import {getAuthIsLoginSelector} from "../../../BLL/Auth/authSelector";

interface IUser {
  waitingFollow: Array<any>
  users: Array<any>
}

let User = React.memo(({waitingFollow, users}: IUser) => {
  let dispatch = useDispatch();
  let auth = useSelector(getAuthIsLoginSelector)
  const follow = (id: number) => {
    debugger
    if (!auth) {
      return <Navigate to={"/login"}/>
    }
    dispatch(followThunk(id))
  };
  let unfollow = (id: number) => {
    auth ? dispatch(unfollowThunk(id)) : <Navigate to={"login"}/>

  };

  return (
    <div>
      {users.map((u: any) => (
        <div key={u.id}>
          <div className="user">
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className="user__avatar"
                  src={u.photos.small != null ? u.photos.small : photo}
                />
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    disabled={waitingFollow.some(
                      (id: any) => id === u.id
                    )}
                    className="user__followed"
                    onClick={() => {
                      unfollow(u.id);
                    }}
                  >
                    {waitingFollow.some((id: any) => id === u.id) ? (
                      <LoaderFollow />
                    ) : (
                      "Unfollow"
                    )}
                  </button>
                ) : (
                    <button
                        disabled={waitingFollow.some(
                            (id: any) => id === u.id
                        )}
                        className="user__unfollowed"
                        onClick={(() => follow(u.id))}
                    >
                      {waitingFollow.some((id: any) => id === u.id) ? (
                          <LoaderFollow/>
                      ) : (
                          "Follow"
                      )}
                    </button>
                )}
              </div>
            </div>
            <NavLink className="user__user-info" to={"/profile/" + u.id}>
              <div className="user__left-side">
                <div className="user__nick">{u.name}</div>
                <div className="user__status">{u.status}</div>
              </div>
              <div className="user__right-side">
                <div className="user__city">{u.city}</div>
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
});
export default User;
