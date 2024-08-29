const Card = ({ main_image, title, _id, quantity, price }) => {
  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full mt-[11px] flex">
      <div className="w-[40%] flex items-center gap-2">
        <img
          type={"image"}
          src={String(main_image)}
          alt={String(title)}
          className="w-[70px] h-[70px]"
        />
        <div>
          <h3>{title}</h3>
          <p className="font-light text-[14px]">SKU: {_id}</p>
        </div>
      </div>
      <div className="w-[30%] flex items-center text-[#727272] justify-center">
        (x {quantity})
      </div>
      <div className="w-[30%] flex items-center justify-between pr-[10px]">
        <h3>${Number(Number(quantity) * Number(price)).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Card;
