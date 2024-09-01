import {
  ShoppingCartOutlined,
  HeartFilled,
  SearchOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../configs/auth";
import { useAxios } from "../../../../hooks/useAxios";
import { useQueryClient } from "@tanstack/react-query";
import { useShoppingService } from "../../../../service/shopping";

const Card = (props) => {
  const { getUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axios = useAxios();
  const { user } = getUser();
  const { onAdd } = useShoppingService();

  const { title, main_image, price, _id, category } = props;

  const viewProduct = () => {
    navigate(`/product/${category}/${_id}`);
  };
  const onDislike = async ({ _id }) => {
    console.log(_id);

    queryClient.setQueryData(["wishlist"], (prev) => {
      return prev.filter((value) => value._id !== _id);
    });

    updateUser({
      setter: {
        ...user,
        wishlist: user.wishlist.filter((value) => value._id !== _id)
      }
    });
    await axios({
      url: "user/delete-wishlist",
      method: "DELETE",
      data: {
        _id
      }
    });
  };
  return (
    <div className="flex flex-col ">
      <div className="h-[300px] w-full bg-[#FBFBFB] relative group flex justify-center items-center">
        <img className="w-full h-full" src={main_image} alt="as" />

        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div
            onClick={() => onAdd(props)}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer"
          >
            <ShoppingCartOutlined />
          </div>
          <div
            onClick={() => onDislike(props)}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer"
          >
            <HeartFilled className="text-[red]" />
          </div>
          <div
            onClick={viewProduct}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer"
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
