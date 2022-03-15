import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import s from "./MessageInfo/Message.module.css"
import Dialogs from "./MessageInfo/Dialogs/Dialogs";

import {useFormik} from "formik";
import TextArea from "antd/es/input/TextArea";


let Message = (props) => {


    let messageDataBLL = props.messageData.map((review) => <MessageAccounts nickname={review.nickname}
                                                                            address={review.address}
                                                                            avatar={review.avatar}/>
    )

    let dialogsDataBll = props.dialogsData.map((reviews) => <Dialogs message={reviews.message}/>
    )
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {

            props.AddNewMessage(values.input)
        },
    });
    return (
        <div className={s.message}>
            <div className={s.account}>
                <div>
                    {messageDataBLL}

                </div>

            </div>

            <div className={s.dialogs}>
                <div>
                    {dialogsDataBll}
                </div>


                    {/*  <textarea onChange={onUpdateMessage} ref={newReviewElement} value={props.NewReviewText}> </textarea>*/}
                    <form onSubmit={formik.handleSubmit}>
                        <div className={s.postFlex}>
                        <TextArea id="input"
                                  name="input"
                                  onChange={formik.handleChange}
                                  value={formik.values.input}
                                  rows={1}/>
                        <button type="submit" className={s.submit}>Send</button>
                        </div>
                    </form>




            </div>
        </div>


    )
}
export default Message