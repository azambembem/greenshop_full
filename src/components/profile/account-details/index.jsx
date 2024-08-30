import { Button, Form, Input, Upload } from "antd";
import { useAuth } from "../../../configs/auth";
import { UploadOutlined } from "@ant-design/icons";

const AcoounDetails = () => {
  const { getUser } = useAuth();

  const { user } = getUser();
  const onFinish = () => {
    console.log("Form submitted");
  };
  return (
    <Form
      name="complex-form"
      labelCol={{
        span: 12
      }}
      wrapperCol={{
        span: 26
      }}
      layout="vertical"
      className="w-full"
      size="large"
      initialValues={{
        name: String(user?.name),
        surname: String(user?.surname),
        email: String(user?.email),
        phone_number: String(user?.phone_number ?? ""),
        username: String(user?.username)
      }}
      onFinish={onFinish}
    >
      <Form.Item
        rules={[
          {
            required: true
          }
        ]}
        style={{
          marginBottom: 0
        }}
      >
        <Form.Item
          label="First name"
          name="name"
          rules={[
            {
              required: true
            }
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)"
          }}
        >
          <Input placeholder="Type your first name..." />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="surname"
          rules={[
            {
              required: true
            }
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px"
          }}
        >
          <Input placeholder="Type your last name..." />
        </Form.Item>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true
          }
        ]}
        style={{
          marginBottom: 0
        }}
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              required: true
            }
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)"
          }}
        >
          <Input placeholder="Your email address..." />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            {
              required: true
            }
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px"
          }}
        >
          <Input addonBefore={"+998"} placeholder="Your phone number..." />
        </Form.Item>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true
          }
        ]}
        style={{
          marginBottom: 0
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true
            }
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)"
          }}
        >
          <Input placeholder="Your username..." />
        </Form.Item>
        <Form.Item
          label="Profile photo"
          name="profile_photo"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px"
          }}
        >
          <Upload
            name="image"
            action={
              "https://greenshop.abduvoitov.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
            }
            listType="picture"
            data={{ type: "img" }}
            headers={{
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }}
            accept=".png,.jpg,.jpeg"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form.Item>
      <button
        type="submit"
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px]"
      >
        Save changes
      </button>
    </Form>
  );
};

export default AcoounDetails;
