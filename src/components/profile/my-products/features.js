import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "../../../hooks/useAxios";
import { useDispatch } from "react-redux";
import { setAddModal } from "../../../redux/generic-slices/modals";
import { notification } from "antd";

export const useMyProductFeatures = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const onDelete = async ({ _id, category }) => {
    queryClient.setQueryData(["my-products"], (oldData) => {
      return oldData.filter((product) => product._id !== _id);
    });

    await axios({
      url: `user/product/${category}`,
      method: "DELETE",
      data: { _id }
    });
  };

  const onPublish = async (e) => {
    try {
      // Check if file upload responses exist before using them
      const mainImageUrl = e.main_image?.file?.response?.image_url?.url;
      const detailedImages = [
        e.detailed_image_1?.file?.response?.image_url?.url,
        e.detailed_image_2?.file?.response?.image_url?.url,
        e.detailed_image_3?.file?.response?.image_url?.url,
        e.detailed_image_4?.file?.response?.image_url?.url
      ];

      // Format data to be sent
      const formattedUploadData = {
        title: e.title,
        price: e.price,
        discount: Boolean(e.discount_price),
        short_description: e.short_description,
        description: e.description,
        main_image: mainImageUrl,
        discount_price: Number(e.discount_price),
        detailed_images: detailedImages,
        category: e.category
      };

      // Post data to server
      const { data } = await axios({
        url: `flower/category/${e.category}`,
        method: "POST",
        data: formattedUploadData
      });

      // Update query cache
      queryClient.setQueryData(["my-products"], (oldData) => {
        return [...oldData, data.data];
      });

      // Notify success
      notification.success({
        message: "Product added successfully"
      });

      // Close the modal
      onCancelRequest();
    } catch (error) {
      // Handle errors (e.g., show an error notification)
      console.error("Error adding product:", error);
      notification.error({
        message: "Failed to add product",
        description: error.message || "An unexpected error occurred"
      });
    }
  };

  const onCancelRequest = () => {
    dispatch(setAddModal({ addModal: false }));
  };

  const products = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: "/user/products"
      });
      return data.data;
    }
  });

  const category = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: "/flower/category"
      });
      return data.data;
    }
  });

  return {
    onPublish,
    onDelete,
    products,
    category,
    onCancelRequest
  };
};
