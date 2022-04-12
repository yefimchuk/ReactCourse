import React, { useEffect } from "react";
import User from "./User";
import PaginationUsers from "../../../common/Pagination";

let Users = ({
  currentPage,
  onPageChanged,
  totalUserCount,
  pageSize,
  users,
  waitingFollow,
  unfollow,
  follow,
}: any) => {
  let pageCount = Math.ceil(totalUserCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <User
        waitingFollow={waitingFollow}
        unfollow={unfollow}
        follow={follow}
        users={users}
      />
      <div>
        <PaginationUsers
          currentPage={currentPage}
          total={totalUserCount}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
};

export default Users;
