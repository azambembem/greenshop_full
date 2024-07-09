import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

export const useProductFeatures = () => {
  const axios = useAxios();
  const { category, productId } = useParams();

  const product = useQuery({
    queryKey: [`product/${productId}`],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}/${productId}`
      });
      return data?.data;
    }
  });
  return {
    product
  };
};
