import React, {useEffect, useState} from "react";
import s from "./status.module.css"
import {useFormik} from "formik";

let StatusHook = ({status, updateStatus}: { status: any, updateStatus: any }) => {
    let [editMode, setEditMode] = useState(false)
    let [UseStatus, setNewStatus] = useState("")
    let activatedEditMode = () => {
        setEditMode(true)
    }
    let deactivatedEditMode = () => {

        setEditMode(false)
        updateStatus(formik.values.status)
    }

    const formik = useFormik({
        initialValues: {

            status: status,
        },
        onSubmit: values => {
        },
    });
    useEffect(() => {
        setNewStatus(formik.values.status)
    }, [formik.values.status])

    return <div className={s.status}>
        {editMode ? <div>
                <input
                    className={s.input}
                    id="status"
                    name="status"
                    onChange={formik.handleChange}
                    value={formik.values.status}
                    autoFocus={true}
                    onBlur={deactivatedEditMode}
                />

            </div> :
            <div className={s.textStatus} onClick={activatedEditMode}>{`${status || "none"}`}</div>}
    </div>

}
export default StatusHook
