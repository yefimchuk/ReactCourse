import React from "react";
import s from "./Profile.module.css"
import Review from "./ProfileInfo/Review";
import PersonalInformation from "./ProfileInfo/PersonalData";
import {addNewReviewActionCreator, updatereviewtextActionCreator} from "../../Redux/state";

let Profile = (props) => {

    let ReviewItem = props.ReviewData.map(review => <Review avatar={review.avatar} likes={review.likes}
                                                            message={review.message}/>)
    let newReviewElement = React.createRef()
    let addReview = () => {
        let text = newReviewElement.current.value;
        const action = addNewReviewActionCreator();
        if (text !== ""){
            props.dispatch(action)

        }


    }
    let newTextReview = () => {

        let text = newReviewElement.current.value;
        const action = updatereviewtextActionCreator(text);
        props.dispatch(action)
    }
    return (
        <div>
            <img className={s.ImageTop}
                 src="https://tproger.ru/s3/uploads/2021/02/iconfinder_reactjs_javascript_library_atom_atomic_react_5362908-cover.png"/>


            <PersonalInformation avatar={props.PersonalData[0].avatar}
                                 name={props.PersonalData[0].name} city={props.PersonalData[0].city}
                                 born={props.PersonalData[0].born}
                                 education={props.PersonalData[0].education}
                                 site={props.PersonalData[0].site}/>


            <div className={s.Post}>
                <div className={s.textPost}>My post</div>

                <input value={props.NewReviewText} onChange={newTextReview} ref={newReviewElement}
                       className={s.blockPost} align="top" placeholder="you post...">

                </input>
                <div className={s.postFlex}>
                    <div onClick={addReview} className={s.submit}>Send
                    </div>
                </div>
            </div>

            {ReviewItem}
        </div>
    )
}
export default Profile