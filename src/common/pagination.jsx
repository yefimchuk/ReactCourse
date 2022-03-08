import React from "react";
import {Pagination} from 'antd';
import "antd/dist/antd.css";

let pagination = (props) => {

    return <div>

        <Pagination defaultCurrent={props.currentPage} total={props.total} pageSize={100}
                    onChange={props.onPageChanged} />
    </div>
}
export default pagination