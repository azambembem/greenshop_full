import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "../../../../redux/generic-slices/modals";
import Login from "./login";
import { useState } from "react";
import Register from "./register";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector(({ modal }) => modal);
  const [active, setActive] = useState("login");
  return (
    <Modal
      open={authModal}
      footer={false}
      onCancel={() => dispatch(setAuthModal())}
    >
      <div className="flex gap-2.5 items-center justify-center mt-6">
        <h3
          className={`cursor-pointer text-xl transition-all ${
            active === "login" && "text-[#46A358]"
          }`}
          onClick={() => setActive("login")}
        >
          Login
        </h3>
        <div className="border h-4 bg-[#3D3D3D]" />
        <h3
          className={`cursor-pointer text-xl transition-all ${
            active === "register" && "text-[#46A358]"
          }`}
          onClick={() => setActive("register")}
        >
          Register
        </h3>
      </div>
      {active === "login" ? <Login /> : <Register />}
    </Modal>
  );
};

export default AuthModal;
