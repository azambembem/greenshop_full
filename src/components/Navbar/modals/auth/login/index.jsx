import { Divider, Form, Input, notification } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  QrcodeOutlined,
  LoadingOutlined
} from "@ant-design/icons";
import { useState } from "react";
import { useAxios } from "../../../../../hooks/useAxios";
import { useAuth } from "../../../../../configs/auth";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic-slices/modals";
import { signInWithGoogle } from "../../../../../configs/firebase";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const Login = () => {
  const dispatch = useDispatch();
  const { signIn } = useAuth();
  const axios = useAxios();
  const [loading, setLoading] = useState(false);

  const onFinish = async (e) => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await axios({
        method: "POST",
        url: "/user/sign-in",
        data: e
      });

      const { token, user } = data.data;

      signIn({
        token,
        user
      });

      notification.success({
        message: "Login Successful",
        description: `Welcome login page`
      });

      dispatch(setAuthModal());
    } catch (error) {
      notification.error({
        message: "Something went wrong",
        description: error?.response?.data?.extraMessage
      });
    }
    setLoading(false);
  };

  const signWithGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();
      const { data } = await axios({
        url: "/user/sign-in/google",
        method: "POST",
        data: {
          email: user.email
        }
      });

      const { token, user: authUser } = data.data;
      signIn({
        token,
        user: authUser
      });

      notification.success({
        message: "Login Successful",
        description: "Your have logged in successfully"
      });
      dispatch(setAuthModal());
      window.location.reload();

      console.log(token, authUser);
    } catch (error) {
      notification.error({
        message: "Something went wrong",
        description: error?.response?.data?.extraMessage
      });
    }
  };
  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm mt-8 font-normal">
        Enter your username and password to login.
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
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!"
            }
          ]}
        >
          <Input placeholder="Your email... " />
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
          <Input.Password placeholder="Your password..." />
        </Form.Item>
        <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
          Forgot Password?
        </h3>

        <button
          type="sumbit"
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[45px] my-[27px] "
        >
          {loading ? <LoadingOutlined /> : "Login"}
        </button>
      </Form>

      <Divider>Or login with</Divider>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <FacebookOutlined className="pl-[15px]" />
        Login with Facebook
      </button>
      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
        onClick={signWithGoogle}
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <QrcodeOutlined className="pl-[15px]" />
        Login with Qr Code
      </button>
    </div>
  );
};

export default Login;
