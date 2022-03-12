import React from 'react';
import 'antd/dist/antd.css';
import {Button, Checkbox, Form, Input} from 'antd';
import s from "./login.module.css"
import {useFormik} from 'formik';
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {followThunk, getUsersThunk, isLogin, onChangeUsersThunk, unfollowThunk} from "../../Redux/userspage-reducer";

const Login = () => {
    withAuthRedirect(<LoginForm/>)

    return (
        <div className={s.Login}>
            <div className={s.Text}>Login in to Social Network</div>
            <LoginForm/>
        </div>
    );
};

export default Login


let LoginForm = () => {
    const formik = useFormik({

        initialValues: {},

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <div className={s.LoginBlock}>

        <Form onFinish={formik.handleSubmit} name="basic" labelCol={{
            span: 8,
        }} wrapperCol={{
            span: 20,
        }} initialValues={{
            remember: true,
        }} autoComplete="off">


            <Form.Item
                label="Username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}>
                <Input className={s.input}/>
            </Form.Item>

            <Form.Item onChange={formik.handleChange}
                       value={formik.values.password}
                       label="Password"
                       name="password"
                       rules={[
                           {
                               required: true,
                               message: 'Please input your password!',
                           },
                       ]}>
                <Input.Password className={s.input}/>
            </Form.Item>
            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>

                <Button className={s.submit} type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form.Item>


        </Form>

    </div>
}