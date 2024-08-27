import { DeleteOutlined } from "@ant-design/icons";
import { useShoppingService } from "../../../../../service/shopping";

const Card = (props) => {
  const { onDelete } = useShoppingService();
  const { main_image, title, _id, quantity, price } = props;
  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full flex">
      <div className="w-[40%] flex items-center gap-2">
        <img
          className="w-[70px] h-[70px]"
          src={main_image}
          alt="Gerbera Daisy"
        />

        <div>
          <h3>{title}</h3>
          <p className="font-light text-[14px]">SKU: {_id}</p>
        </div>
      </div>
      <div className="w-[20%] flex items-center text-[#727272]">${price}</div>
      <div className="w-[20%] flex items-center">
        <div className="flex gap-3">
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            -
          </button>
          <h3 className="font-medium text-[18px]">{quantity}</h3>
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            +
          </button>
        </div>
      </div>
      <div className="w-[20%] flex items-center justify-between pr-[10px]">
        <h3>${price * quantity}</h3>
        <DeleteOutlined onClick={() => onDelete(props)} />
      </div>
    </div>
  );
};

export default Card;
