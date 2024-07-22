import { DeleteOutlined } from "@ant-design/icons";
const Card = () => {
  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full flex">
      <div className="w-[40%] flex items-center gap-2">
        <img
          className="w-[70px] h-[70px]"
          src="http://res.cloudinary.com/dj28bsagl/image/upload/v1693334733/tau191hx42zb9dip9r3r.png"
          alt="Gerbera Daisy"
        />

        <div>
          <h3>Gerbera Daisy</h3>
          <p className="font-light text-[14px]">SKU: 67485486oi57td</p>
        </div>
      </div>
      <div className="w-[20%] flex items-center text-[#727272]">$7</div>
      <div className="w-[20%] flex items-center">
        <div className="flex gap-3">
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            -
          </button>
          <h3 className="font-medium text-[18px]">8</h3>
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            +
          </button>
        </div>
      </div>
      <div className="w-[20%] flex items-center justify-between pr-[10px]">
        <h3>$56.00</h3>
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default Card;
