import React from "react";
import s from "../Profile.module.css"

let Review = (props) => {

    let Like = () => {

        props.like(props)

    }

    return (
        <div className={s.review}>
            <img src={props.avatar} className={s.avatar}/>
            <div className={s.textLike}>
                <div className={s.reviewText}>
                    {props.message}
                </div>
                <div onClick={Like} className={s.likes}>
                    <img className={s.likePhoto}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"/>
                    {props.likes}
                </div>
            </div>

        </div>
    )
}
export default Review