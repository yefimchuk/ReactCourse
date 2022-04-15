import React from "react";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { onChangeUsersThunk } from "../BLL/Users/usersSlice";

interface D {
  currentPage: number;
  total: number;
  pageCount: number;
}

let PaginationUsers = ({ currentPage, total, pageCount }: D) => {

  let dispatch = useDispatch();

  return (
    <div>
      <Pagination
        defaultCurrent={currentPage}
        total={total}
        pageSize={5}
        onChange={(page, pageSize) => {
          dispatch(onChangeUsersThunk({ page, pageSize }));
        }}
      />
    </div>
  );
};
export default PaginationUsers;
