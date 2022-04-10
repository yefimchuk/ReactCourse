import React from "react";
import "./Profile.scss";
import {useFormik} from "formik";
import {addNewReview} from "../../../BLL/ProfilePage/profilePage";
import {useDispatch} from "react-redux";

type a = {
    input: string;
    review: string
}
let Post = () => {
    let dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            review: '',
        } as a,
        onSubmit: values => {
            dispatch(addNewReview(values.review))
        },
    });
    return (
        <div className="Post">
            <div className="textPost">My post</div>
            <form className="postFlex" onSubmit={formik.handleSubmit}>

                <input id="review"
                       name="review"
                       onChange={formik.handleChange}
                       value={formik.values.input}
                       className="blockPost" placeholder="you post...">
                </input>

                <div className="submitButton">
                    <button type="submit" className="submit">Send</button>
                </div>

            </form>
        </div>)
}
export default Post