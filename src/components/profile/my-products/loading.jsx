import { Skeleton, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="bg-[#FBFBFB] h-[70px] w-full mt-[11px] flex">
          <div className="w-[40%] flex items-center gap-2">
            <Skeleton.Image
              style={{ width: "50px", height: "50px", marginTop: 0 }}
              className="w-[50px] h-[50px]"
              active={true}
            />
            <div>
              <h3>
                <Skeleton.Input active={true} />
              </h3>
              <p className="font-light text-[14px]">
                SKU: <Skeleton.Input active={true} />
              </p>
            </div>
          </div>
          <div className="w-[20%] flex items-center text-[#727272]">
            <Skeleton.Input active={true} />
          </div>
          <div className="w-[40%] flex items-center justify-between pr-[10px]">
            <h3>
              $<Skeleton.Input active={true} />
            </h3>
            <div className="flex gap-4">
              <Tooltip title="Edit">
                <EditOutlined className="cursor-pointer" />
              </Tooltip>
              <Tooltip title="Delete">
                <DeleteOutlined className="cursor-pointer" />
              </Tooltip>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
