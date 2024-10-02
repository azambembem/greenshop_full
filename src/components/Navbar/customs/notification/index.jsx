import { useQuery } from "@tanstack/react-query";
import { UserOutlined, SendOutlined } from "@ant-design/icons";
import { useAxios } from "../../../../hooks/useAxios";
import { Spin } from "antd";

const Notifications = () => {
  const axios = useAxios();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const { data } = await axios({
        url: "user/notification"
      });

      return data.data;
    }
  });

  if (isLoading || isError)
    return (
      <div className="flex flex-col gap-2 mt-2 items-center">
        <Spin size="large" />

        <h3>Loading...</h3>
      </div>
    );

  return (
    <div>
      {data.notification_stack.map((notification, i) => (
        <div
          className="flex items-center gap-2 border-b border-b-[#e5e5e5] mt-[5px] pb-[5px] mx-[10px]"
          key={i}
        >
          <div className="flex justify-center items-center w-[35px] h-[30px] rounded-full bg-[#45A358] text-white">
            {notification.type === "follow_stack" ? (
              <UserOutlined />
            ) : (
              <SendOutlined />
            )}
          </div>
          <div className="w-full">
            <h3 className="text-bold">{notification.message}</h3>
            <div className="w-full flex justify-between gap-4">
              <p className="text-[12px] cursor-pointer text-[#45A358]">
                Go to profile
              </p>
              <p className="text-[12px] cursor-pointer">
                {new Date(notification.time_stamp).toLocaleDateString("en-us", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
