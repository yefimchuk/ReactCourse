import React from "react";
import User from "./User";
import PaginationUsers from "../../../common/Pagination";

let Users = ({
  totalUserCount,
  pageSize,
  users,
  currentPage,
  waitingFollow,

}: any) => {
  let pageCount = Math.ceil(totalUserCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
console.log(totalUserCount)
  return (
    <div>
      <User
        waitingFollow={waitingFollow}
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
