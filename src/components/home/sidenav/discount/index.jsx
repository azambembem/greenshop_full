import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../../hooks/useAxios";

const Discount = () => {
  const axios = useAxios();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["discount"],
    queryFn: async () => {
      const { data } = await axios({
        url: "/features/discount"
      });
      return data.data;
    }
  });

  const loading = isLoading || isError;

  return (
    <div className="bg-[#d9fae0] w-full h-[300px] mt-[20px]">
      <h3 className="text-2xl font-bold text-center mb-4">{data?.title}</h3>
      <p className="text-center">Discount up to {data?.discoount_up_to}%</p>
      <img src={data?.poster_image_url} alt="" />
    </div>
  );
};

export default Discount;
