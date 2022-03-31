import React from "react";
import "antd/dist/antd.css";
import {Pagination} from "antd";

interface D {
    currentPage: number,
    total: number,
    onPageChanged: (page: number, pageSize: number) => void
}

let PaginationUsers = ({currentPage, total, onPageChanged}: D) => {
    return (
        <div>
            <Pagination defaultCurrent={currentPage} total={total} pageSize={10} onChange={onPageChanged}/>
        </div>
    )
}
export default PaginationUsers