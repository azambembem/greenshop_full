import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="w-[80%] h-20 m-auto flex items-center justify-between border-b border-b[#46A358]">
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&amptoken=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="logo"
        ></img>
      </div>

      <div className="flex gap-12 items-center h-full">
        <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46A358] before:bottom-[-28px] before:content-['']">
          Home
        </h3>
        <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46A358] before:bottom-[-28px] before:content-['']">
          Shop
        </h3>
        <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46A358] before:bottom-[-28px] before:content-['']">
          Plant Care
        </h3>
        <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46A358] before:bottom-[-28px] before:content-['']">
          Blogs
        </h3>
      </div>
      <div className="flex gap-[30px]">
        {" "}
        <SearchOutlined className="cursor-pointer text-[20px]" />
        <ShoppingCartOutlined className="cursor-pointer text-[20px]" />
        <button className="animate-bounce w-[100px] h-[35px] bg-[#46A358] rounded-[6px] flex gap-2 justify-center items-center text-white cursor-pointer">
          <LoginOutlined />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
