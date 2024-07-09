import { Divider, Form, Input, notification } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  LoadingOutlined
} from "@ant-design/icons";

import { useAxios } from "../../../../../hooks/useAxios";
import { useAuth } from "../../../../../configs/auth";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic-slices/modals";
import { useState } from "react";

const Register = () => {
  const { singIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const dispatch = useDispatch();

  const onFinish = async (e) => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios({
        url: "/user/sign-up",
        data: e,
        method: "POST"
      });

      const { token, user } = data.data;

      singIn({ token, user });
      dispatch(setAuthModal());
      dispatch(setAuthModal());
      window.location.reload();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.response.data.extraMessage
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm mt-8 font-normal">
        Enter your email and password register.
      </h3>
      <Form
        onFinish={onFinish}
        className="mt-4"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 32
        }}
        style={{
          maxWidth: "100%"
        }}
        initialValues={{
          remember: true
        }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!"
            }
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Your name... "
          />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "Please input your surname!"
            }
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Your surname... "
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!"
            }
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Your email... "
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Your password..."
          />
        </Form.Item>

        <Form.Item
          name="password_confirm"
          rules={[
            {
              required: true,
              message: "Please input your password confirmation!"
            }
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Your password confirmmation..."
          />
        </Form.Item>

        <button
          type="sumbit"
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[45px] my-[27px] "
        >
          {loading ? <LoadingOutlined /> : "Register"}
        </button>
      </Form>

      <Divider>Or register with</Divider>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <FacebookOutlined className="pl-[15px]" />
        Login with Facebook
      </button>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md"
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
    </div>
  );
};

export default Register;
