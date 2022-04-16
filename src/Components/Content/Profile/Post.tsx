import React from "react";
import "./Profile.scss";
import { useFormik } from "formik";
import { addNewReview } from "../../../BLL/ProfilePage/profilePage";
import { useDispatch } from "react-redux";

type IInitialStatePost = {
  input: string;
  review: string;
};
let Post = () => {
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      review: "",
    } as IInitialStatePost,
    onSubmit: (values) => {
      dispatch(addNewReview(values.review));
    },
  });
  return (
    <div className="post">
      <div className="post__text">My post</div>
      <form className="post__form_flex" onSubmit={formik.handleSubmit}>
        <input
          id="review"
          name="review"
          onChange={formik.handleChange}
          value={formik.values.input}
          className="post__input-post"
          placeholder="you post..."
        />

        <div className="post__button-submit-form">
          <button type="submit" className="post__button_submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default Post;
