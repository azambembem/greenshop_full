const Slide = ({
  title,
  subTitle,
  description,
  buttonText,
  bigImage,
  smallImage
}) => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[40px]">
        <h5 className="mt-[68px] mb-2 text-[14px]">{subTitle}</h5>
        <h1 className="text-[70px] font-black text leading-[70px]">
          {title} <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%]">{description}</p>
        <button
          type="button"
          className=" mt-[48px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] flex gap-2 justify-center items-center text-white cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
      <div className="w-[40%] relative flex items-center justify-center">
        <img src={bigImage} alt="" />
        <img
          src={smallImage}
          alt=""
          className="w-[150px] h-[150px] absolute bottom-0 left-[50px]"
        />
      </div>
    </div>
  );
};
export default Slide;
