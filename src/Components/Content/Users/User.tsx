import React from "react";
import "./Users.scss";
import { NavLink } from "react-router-dom";
import photo from "../../../img/—Pngtree—vector avatar icon_4013749.png";
import { useDispatch } from "react-redux";
import { followThunk, unfollowThunk } from "../../../BLL/Users/usersSlice";
import LoaderFollow from "../../../common/Loading/LoaderFollow";

let User = React.memo((props: any) => {
  let dispatch = useDispatch();

  const follow = (id: number) => {
    dispatch(followThunk(id));
  };
  let unfollow = (id: number) => {
    dispatch(unfollowThunk(id));
  };
  console.log(
    props.waitingFollow.some(() => {
      console.log("fjfj");
    })
  );
  return (
    <div>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <div className="User-user">
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className="avatar-user"
                  src={u.photos.small != null ? u.photos.small : photo}
                />
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.waitingFollow.some(
                      (id: any) => id === u.id
                    )}
                    className="followed"
                    onClick={() => {
                      unfollow(u.id);
                    }}
                  >
                    {props.waitingFollow.some((id: any) => id === u.id) ? (
                      <LoaderFollow />
                    ) : (
                      "Unfollow"
                    )}
                  </button>
                ) : (
                  <button
                    disabled={props.waitingFollow.some(
                      (id: any) => id === u.id
                    )}
                    className="unfollowed"
                    onClick={() => follow(u.id)}
                  >
                    {props.waitingFollow.some((id: any) => id === u.id) ? (
                      <LoaderFollow />
                    ) : (
                      "Follow"
                    )}
                  </button>
                )}
              </div>
            </div>
            <NavLink className="UserInfo-user" to={"/profile/" + u.id}>
              <div className="left-user">
                <div className="nick">{u.name}</div>
                <div className="status">{u.status}</div>
              </div>
              <div className="right-user">
                <div className="city">{u.city}</div>
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
});
export default User;
