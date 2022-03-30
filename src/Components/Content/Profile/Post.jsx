import React from "react";
import s from "./Profile.module.css";
import {useFormik} from "formik";

let Post = (props) => {
    debugger
    const formik = useFormik({
        initialValues: {
            review: '',
        },
        onSubmit: values => {
            props.addReview(values.review)
        },
    });
    return <div className={s.Post}>
        <div className={s.textPost}>My post</div>
        <form className={s.postFlex} onSubmit={formik.handleSubmit}>

            <input id="review"
                   name="review"
                   onChange={formik.handleChange}
                   value={formik.values.input}
                   className={s.blockPost} align="top" placeholder="you post...">

            </input>
            <div className={s.submitButton}>
                <button type="submit" className={s.submit}>Send</button>

            </div>

        </form>
    </div>
}
export default Post