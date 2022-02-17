import React from "react";
import s from "./Profile.module.css"
import Review from "./ProfileInfo/Review";
import PersonalInformation from "./ProfileInfo/PersonalData";
import Loading from "../../../common/Loading/loading";

let Profile = (props) => {

    let ReviewItem = props.ReviewData.map(review => <Review avatar={review.avatar} likes={review.likes}
                                                            message={review.message} like={props.like}
                                                            id={review.id} data={props.ReviewData} />)
    let newReviewElement = React.createRef()
    let addReview = () => {

        let text = newReviewElement.current.value;
        if (text !== "") {
            props.addReview(text)
        }
    }
    let newTextReview = () => {
        let text = newReviewElement.current.value;
        props.newTextReview(text)
    }
    if (!props.Profile) {
        return <Loading/>
    }
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
