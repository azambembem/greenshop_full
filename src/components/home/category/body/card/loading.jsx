import { Skeleton } from "antd";

const Loading = () => {
  return (
    <div className="w-[258px]">
      <div className="h-[300px] flex items-center justify-center w-full bg-[#FBFBFB]">
        {/* <img className="w-full h-full" src={main_image} alt="as" /> */}
        <Skeleton.Image />
      </div>

      <Skeleton.Input />

      <Skeleton.Input />
    </div>
  );
};

export default Loading;
