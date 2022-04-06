import React from "react";
import loading from "../../img/35771931234507.564a1d2403b3a.gif"


import "./Loading.scss"

let Loading = () => {
    return (
        <div className="loading">
            <img className="imgLoading" src={loading} alt="imgLoading"/>
        </div>
    )
}
export default Loading