// import { useDispatch, useSelector } from "react-redux";
// import { setOrderModal } from "../../../../../redux/generic-slices/modals";
// import { useAxios } from "../../../../../hooks/useAxios";
// import { notification } from "antd";
// import { useQueryClient } from "@tanstack/react-query";

// export const useViewOrderFeatures = () => {
//   const queryClient = useQueryClient();
//   const dispatch = useDispatch();
//   const axios = useAxios();
//   const {
//     orderModal: { data: redux_data }
//   } = useSelector(({ modal }) => modal);

//   const onCancelRequest = () => {
//     dispatch(setOrderModal({ show: false, data: null }));
//   };

//   const onDelete = async () => {
//     queryClient.setQueryData(["order"], (oldData) => {
//       return oldData.filter((order) => order._id !== redux_data._id);
//     });

//     notification.success({
//       message: "Order deleted successfully"
//     });

//     onCancelRequest();

//     await axios({
//       url: "order/delete-order",
//       method: "DELETE",
//       data: {
//         _id: redux_data._id
//       }
//     });
//   };

//   return { onCancelRequest, onDelete };
// };

import { useDispatch, useSelector } from "react-redux";
import { setOrderModal } from "../../../../../redux/generic-slices/modals";
import { useAxios } from "../../../../../hooks/useAxios";
import { notification } from "antd";
import { useQueryClient } from "@tanstack/react-query";

export const useViewOrderFeatures = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const axios = useAxios();
  const {
    orderModal: { data: redux_data }
  } = useSelector(({ modal }) => modal);

  const onCancelRequest = () => {
    dispatch(setOrderModal({ show: false, data: null }));
  };

  const onDelete = async () => {
    try {
      // Optimistically update the client-side data
      queryClient.setQueryData(["order"], (oldData) => {
        if (!oldData) return [];
        return oldData.filter((order) => order._id !== redux_data._id);
      });

      // Send delete request to the server
      await axios({
        url: "order/delete-order",
        method: "DELETE",
        data: {
          _id: redux_data._id
        }
      });

      // Show success notification
      notification.success({
        message: "Order deleted successfully"
      });

      // Close the modal
      onCancelRequest();
    } catch (error) {
      // Revert the optimistic update if the request fails
      queryClient.invalidateQueries(["order"]);
    }
  };

  return { onCancelRequest, onDelete };
};
