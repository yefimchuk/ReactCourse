import React, {useState} from "react";
import s from "./status.module.css"
import {useFormik} from "formik";

let StatusHook = ({status,updateStatus}: { status: string, updateStatus: any }) => {
    let [editMode, setEditMode] = useState(false)
    let activatedEditMode = () => {
        setEditMode(true)
    }
    let deactivatedEditMode = (status: any) => {
        debugger
        setEditMode(false)
        updateStatus()
    }

    const formik = useFormik({
        initialValues: {
            email: status,
        },
        onSubmit: values => {
            deactivatedEditMode(values)
        },
    });
    return <div className={s.status}>
        {editMode ? <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    autoFocus={true}
                    onBlur={deactivatedEditMode}
                />
                {/*                <input onChange={this.onChangeInput}  className={s.input}
                       value={this.state.status}
                       autoFocus={true}
                       onBlur={this.deactivatedEditMode}/>*/}
            </div> :
            <div className={s.textStatus} onClick={activatedEditMode}>{`${status || "none"}`}</div>}
    </div>

}
export default StatusHook
