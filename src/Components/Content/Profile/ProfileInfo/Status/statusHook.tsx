import React, { useEffect, useState } from "react";
import s from "./status.module.scss";
import { useFormik } from "formik";
import { UpdateStatusThunk } from "../../../../../BLL/ProfilePage/profilePage";
import { useDispatch } from "react-redux";

let StatusHook = ({ status }: { status: any }) => {
  let dispatch = useDispatch();
  let [editMode, setEditMode] = useState(false);
  let [UseStatus, setNewStatus] = useState("");
  let activatedEditMode = () => {
    setNewStatus(status);
    setEditMode(true);
  };
  let deactivatedEditMode = () => {
    setEditMode(false);
    dispatch(UpdateStatusThunk(formik.values.status));
  };

  const formik = useFormik({
    initialValues: {
      status: status,
    },
    onSubmit: (values) => {},
  });
  useEffect(() => {
    setNewStatus(formik.values.status);
  }, [formik.values.status]);

  return (
    <div className={s.status}>
      {editMode ? (
        <div>
          <input
            className={s.input}
            id="status"
            name="status"
            onChange={formik.handleChange}
            value={UseStatus}
            autoFocus={true}
            onBlur={deactivatedEditMode}
          />
        </div>
      ) : (
        <div className={s.textStatus} onClick={activatedEditMode}>{`${
          status || "none"
        }`}</div>
      )}
    </div>
  );
};
export default StatusHook;
