import { Skeleton } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../../hooks/useAxios";

const Categories = () => {
  const axios = useAxios();
  const { getParams, setParams } = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: "categories",
    queryFn: async () => {
      const { data } = await axios({ url: "/flower/category" });
      return data.data;
    }
  });

  const selectedCategory = getParams("category") ?? "house-plants";
  const normal_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer";
  const active_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer";

  return (
    <div>
      <h3 className="font-bold">Categories</h3>
      <div className="pl-[12px] w-full">
        {isLoading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <Skeleton.Input block key={idx} />
            ))
          : data.map((category) => (
              <div
                key={category._id}
                className={
                  selectedCategory === category.route_path
                    ? active_text
                    : normal_text
                }
                onClick={() => setParams({ category: category.route_path })}
              >
                <h3>{category.title}</h3>
                <h3>({category.count})</h3>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Categories;
