const Card = ({ title, main_image, price }) => {
  return (
    <div className="w-[258px]">
      <div className="h-[300px] w-full bg-[#FBFBFB]">
        <img className="w-full h-full" src={main_image} alt="as" />
      </div>

      <h3>{title}</h3>
      <p className="text-[#46A358] font-bold">$ {price}</p>
    </div>
  );
};

export default Card;
