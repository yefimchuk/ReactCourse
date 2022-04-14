import {useFormik} from "formik";
import {Button, Checkbox, Form, Input} from "antd";
import React, {useEffect} from "react";
import {Login} from "../../../BLL/Auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAuthIsLoginSelector, getSubmittingSelector} from "../../../BLL/Auth/authSelector";
import LoaderFollow from "../../../common/Loading/LoaderFollow";

type ValueFormik = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
};
type PropsType = {
    captchaURL: string;
};
declare global {
    interface Window {
        arr: any;
    }
}
export let LoginForm = React.memo(({captchaURL}: PropsType) => {
    console.log("helo")
    let isLogin = useSelector(getAuthIsLoginSelector);
    let submitting = useSelector(getSubmittingSelector);
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const initialValues: ValueFormik = {
        email: "",
        password: "",
        rememberMe: false,
        captcha: "",
    };

    const formik = useFormik ({
        initialValues: initialValues,

        onSubmit: async (values, action) => {
            dispatch(Login({values, action}));
            if (!formik.status.error) {
                navigate("/profile")
            }

        },
    });



  return (
      <div className="LoginBlock">
        <Form
            onChange={formik.handleChange}
            onFinish={formik.handleSubmit}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          htmlFor="email"
          id="email"
          label="Username"
          name="email"
          initialValue={formik.values.email}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input className={`input`}/>
        </Form.Item>

        <Form.Item
            htmlFor="password"
          initialValue={formik.values.password}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="input" />
        </Form.Item>
        <Form.Item
          name="rememberMe"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="submit" type="primary" htmlType="submit">
              {submitting ? <LoaderFollow/> : "Submit"}
          </Button>
          <div className="error">
            {formik.status && formik.status.error}
            {captchaURL ? <img className="captcha" src={captchaURL} /> : null}
            {captchaURL ? (
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: "Please input your captcha!",
                        },
                    ]}
                >
                    <Input
                        onChange={formik.handleChange}
                        value={formik.values.captcha}
                        name="captcha"
                        className="input"
                    />
                </Form.Item>
            ) : null}
          </div>
        </Form.Item>
        </Form>
      </div>
  );

});
