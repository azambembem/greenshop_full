import {
  ShoppingCartOutlined,
  HeartFilled,
  SearchOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const { title, main_image, price, _id, category } = props;

  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };
  return (
    <div className="flex flex-col ">
      <div className="h-[300px] w-full bg-[#FBFBFB] relative group">
        <img className="w-full h-full" src={main_image} alt="as" />

        <div className="absolute w-full bottom-2 m-auto flex gap-4 items-center inset-x-auto z-10 hideen group-hover:flex">
          <div className="w-[35px] h-[35px] rounded-md  bg-white flex items-center justify-center cursor-pointer">
            <ShoppingCartOutlined />
          </div>
          <div className="w-[35px] h-[35px] rounded-md  bg-white flex items-center justify-center cursor-pointer">
            <HeartFilled className="text-[red]" />
          </div>
          <div
            onClick={viewProduct}
            className="w-[35px] h-[35px] rounded-md  bg-white flex items-center justify-center cursor-pointer"
          >
            <SearchOutlined />
          </div>
        </div>
      </div>

      <h3>{title}</h3>
      <p className="text-[#46A358] font-bold">$ {price}</p>
    </div>
  );
};

export default Card;
