import React from "react";
import s from "./Profile.module.css"
import Review from "./ProfileInfo/Review";
import PersonalInformation from "./ProfileInfo/PersonalData";
import Loading from "../../../common/Loading/loading";
import {Status} from "./ProfileInfo/Status/Status";
import {useFormik} from "formik";


let Profile = (props) => {

    const formik = useFormik({
        initialValues: {
            review: '',
        },
        onSubmit: values => {
        props.addReview(values.review)
        },
    });
    let ReviewItem = props.ReviewData.map(review => <Review avatar={review.avatar} likes={review.likes}
                                                            message={review.message} like={props.like}
                                                            id={review.id} data={props.ReviewData}/>)



    return (

        <div>
            <img className={s.ImageTop}
                 src="https://tproger.ru/s3/uploads/2021/02/iconfinder_reactjs_javascript_library_atom_atomic_react_5362908-cover.png"/>


            <PersonalInformation avatar={props.Profile.photos.large}
                                 name={props.Profile.fullName}
                                 job={props.Profile.lookingForAJobDescription}
                                 git={props.Profile.contacts.mainLink}
                                 youTube={props.Profile.contacts.youtube}
                                 instagram={props.Profile.contacts.instagram}/>

            <Status status={props.Status} updateStatus={props.updateStatus}/>
            <div className={s.Post}>
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

            {ReviewItem}
        </div>
    )
}
export default Profile
