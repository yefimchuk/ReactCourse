import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import "./MessageInfo/Message.scss"
import Dialogs from "./MessageInfo/Dialogs/Dialogs";
import {useFormik} from "formik";
import TextArea from "antd/es/input/TextArea";
import {useDispatch} from "react-redux";
import {addNewMessage} from "../../../BLL/Message/messageSlice";


let Message = ({messageData, dialogsData}: any) => {
    let dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            input: '',
        },
        onSubmit: (values, {resetForm}) => {
            dispatch(addNewMessage(values.input))
            values.input = '';
            resetForm()
        },
    });
    const messageDataBLL = messageData.map((review: any) =>
        <MessageAccounts nickname={review.nickname} address={review.address} avatar={review.avatar}/>
    )
    let dialogsDataBll = dialogsData.map((reviews: any) =>
        <Dialogs message={reviews.message}/>
    )

    return (
        <div className="message">
            <div className="account">
                <div>
                    {messageDataBLL}

                </div>

            </div>

            <div className="dialogs">
                <div>
                    {dialogsDataBll}
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="postFlex">
                        <TextArea id="input"
                                  name="input"
                                  onChange={formik.handleChange}
                                  value={formik.values.input}
                                  rows={1}/>
                        <button type="submit" className="submit">Send</button>
                    </div>
                </form>


            </div>
        </div>


    )

}

export default Message