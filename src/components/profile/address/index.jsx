import { Checkbox, Form, Input, notification } from "antd";
import { useAuth } from "../../../configs/auth";
import { useAxios } from "../../../hooks/useAxios";

const Address = () => {
  const { getUser, updateUser } = useAuth();
  const { user } = getUser();
  const axios = useAxios();

  const onFinish = async (e) => {
    await axios({
      url: "user/address",
      method: "POST",
      data: {
        _id: user?._id,
        ...e
      }
    });

    updateUser({
      setter: {
        ...user,
        name: String(e?.name),
        surname: String(e?.surname),
        email: String(e?.email),
        phone_number: String(e?.phone_number),
        billing_address: {
          country: String(e.country),
          extra_address: String(e.extra_address),
          state: String(e.state),
          street_address: String(e?.street_address),
          town: String(e?.town),
          zip: String(e?.zip)
        }
      }
    });

    notification.success({
      message: "Address updated successfully!",
      type: "success"
    });
  };
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[30px]">
        <div>
          <h3 className="mb-[10px] font-bold">Billing Address</h3>
          <p className="font-light">
            The following addresses will be used on the checkout page by
            default.
          </p>
        </div>
        <p className="font-bold text-[#46A358] cursor-pointer">Add</p>
      </div>

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
        onFinish={onFinish}
        initialValues={{
          name: String(user?.name),
          surname: String(user?.surname),
          email: String(user?.email),
          phone_number: String(user?.phone_number),
          country: String(user?.billing_address?.country),
          town: String(user?.billing_address?.town),
          street_address: String(user?.billing_address?.street_address),
          extra_address: String(user?.billing_address?.extra_address),
          state: String(user?.billing_address?.state),
          zip: String(user?.billing_address?.zip)
        }}
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
            label="Country / Region"
            name="country"
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
            <Input placeholder="Select your country..." />
          </Form.Item>
          <Form.Item
            label="Town / City"
            name="town"
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
            <Input placeholder="Select your town..." />
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
            label="Streed Address"
            name="street_address"
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
            <Input placeholder="House number and street name" />
          </Form.Item>
          <Form.Item
            label="Extra address"
            name="extra_address"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px"
            }}
          >
            <Input placeholder="Appartment, suite, unit, etc. (optional)" />
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
            label="State"
            name="state"
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
            <Input placeholder="Select a state..." />
          </Form.Item>
          <Form.Item
            label="Zip"
            name="zip"
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
            <Input placeholder="Appartment, suite, unit, etc. (optional)" />
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
            <Input disabled placeholder="Type your email..." />
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
            <Input
              addonBefore={"+998"}
              placeholder="Type your phone number..."
            />
          </Form.Item>
        </Form.Item>
        <button
          type="submit"
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px]"
        >
          Save changes
        </button>
      </Form>

      <div className="flex justify-between mt-[30px]">
        <div>
          <h3 className="mb-[10px] font-bold">Shipping Address</h3>
          <p className="font-light">
            You have not set up this type of address yet.
          </p>
        </div>
        <div>
          <Checkbox className="mb-[10px]">Same as billing address</Checkbox>
          <p className="font-bold text-[#46A358] cursor-pointer">Add</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
