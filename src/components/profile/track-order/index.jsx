import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import { useAxios } from "../../../hooks/useAxios";
import Order from "./order";

const TrackOrder = () => {
  const axios = useAxios();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["Order"],
    queryFn: async () => {
      const { data } = await axios({
        url: "order/get-order"
      });
      return data.data.filter(Boolean);
    }
  });
  if (isLoading || isError)
    return (
      <div className="p-[15px] w-full">
        <h1 className="font-bold  text-xl mb-[20px]">Track your Orders</h1>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-[#FBFBFB] h-[70px] w-full flex">
              <div className="w-full grid grid-cols-4 max-sm:grid-cols-2">
                <div className="border-r m-[4px] border-[#46A35833]">
                  <h3 className="font-light">Order Number</h3>
                  <Skeleton.Input active={true} />
                </div>
                <div className="border-r m-[4px] border-[#46A35833]">
                  <h3 className="font-light">Date</h3>
                  <Skeleton.Input active={true} />
                </div>
                <div className="border-r m-[4px] border-[#46A35833]">
                  <h3 className="font-light">Total</h3>
                  <Skeleton.Input active={true} />
                </div>
                <div className="border-r m-[4px] border-[#46A35833]">
                  <h3 className="font-light">More</h3>
                  <Skeleton.Input active={true} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div className="p-[15px] w-full">
      <h1 className="font-bold  text-xl mb-[20px]">Track your Orders</h1>
      <div className="flex flex-col gap-3">
        {data.map((value) => (
          <Order {...value} key={value._id} />
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
