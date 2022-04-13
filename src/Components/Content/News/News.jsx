import React from "react";
import axios from "axios";

let News = React.memo((props) => {

    axios.get(`/auth/me`, {}).then(r => {
        console.log(r)
    })


    return <div>
        <button>click</button>
    </div>;
});
export default News;
