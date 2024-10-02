// const Slide = ({
//   title,
//   subTitle,
//   description,
//   buttonText,
//   bigImage,
//   smallImage
// }) => {
//   return (
//     <div className="h-[450px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
//       <div className="flex-[2] pl-10">
//         <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
//           {subTitle}
//         </h3>
//         <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl">
//           {title} <span className="text-[#46A358]">PLANET</span>
//         </h1>
//         <p className="text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px]">
//           {description}
//         </p>
//         <button
//           type="button"
//           className=" mt-[48px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] flex gap-2 justify-center items-center text-white cursor-pointer"
//         >
//           {buttonText}
//         </button>
//       </div>
//       <div className="w-[40%] relative flex items-center justify-center">
//         <img src={bigImage} alt="" />
//         <img
//           src={smallImage}
//           alt=""
//           className="w-[150px] h-[150px] absolute bottom-0 left-[50px]"
//         />
//       </div>
//     </div>
//   );
// };
// export default Slide;

const Slide = ({
  title,
  subTitle,
  description,
  buttonText,
  bigImage,
  smallImage
}) => {
  return (
    <div className="h-[450px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px] flex-col md:flex-row">
      <div className="flex-1 pl-10 flex flex-col justify-center">
        <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
          {subTitle}
        </h3>
        <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl">
          {title} <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] max-md:w-full">
          {description}
        </p>
        <button
          type="button"
          className="mt-[48px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] flex gap-2 justify-center items-center text-white cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
      <div className="w-[40%] relative flex items-center justify-center md:flex-shrink-0 max-md:w-full">
        <img
          src={bigImage}
          alt=""
          className="max-md:w-full max-md:h-[200px] object-cover"
        />
        <img
          src={smallImage}
          alt=""
          className="w-[150px] h-[150px] absolute bottom-0 left-[50px] max-md:left-[20px] max-md:w-[100px] max-md:h-[100px]"
        />
      </div>
    </div>
  );
};

export default Slide;
