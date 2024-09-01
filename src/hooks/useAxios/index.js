import axios from "axios";
import { useAuth } from "../../configs/auth";

export const useAxios = () => {
  const { getUser } = useAuth();
  const { user } = getUser();

  return async ({ url, method = "GET", params, data, headers }) => {
    return await axios({
      url: `http://localhost:8080/api/${url}`,
      method,
      params: {
        access_token: user?._id ?? "64bebc1e2c6d3f056a8c85b7",
        ...params
      },
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...headers
      }
    });
  };
};
