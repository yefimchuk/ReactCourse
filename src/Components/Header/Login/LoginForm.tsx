import {useFormik} from "formik";
import {Button, Checkbox, Form, Input} from "antd";
import React from "react";
import {Login} from "../../../BLL/Auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAuthIsLoginSelector} from "../../../BLL/Auth/authSelector";
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

export let LoginForm = ({ captchaURL }: PropsType) => {
    let isLogin = useSelector(getAuthIsLoginSelector);
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const initialValues: ValueFormik = {
    email: "",
    password: "",
    rememberMe: false,
    captcha: "",
  };

  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: async (values, action) => {
      let response = await dispatch(Login({values, action}));
      if (response.payload) {
        debugger
        action.setStatus({error: response.payload[0]})
      } else navigate("/profile");



    },
  });

  console.log(formik)
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
              {isLogin ? <LoaderFollow/> : "Submit"}
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
};
