import React from "react";
import Pagination from "../../../common/pagination";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUserCount, pageSize, users, WaitingFollow, unfollow, follow}) => {

    let pageCount = Math.ceil(totalUserCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return <div>

        <User WaitingFollow={WaitingFollow} unfollow={unfollow} follow={follow} users={users}/>
        <div>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} total={totalUserCount}
                        pageCount={pageCount}/>
        </div>
    </div>


}

export default Users