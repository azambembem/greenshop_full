import { Button, Form, Input, notification, Radio } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAuth } from "../../../../configs/auth";
import { useDispatch } from "react-redux";
import {
  setAuthModal,
  setConfirmModal
} from "../../../../redux/generic-slices/modals";
import { useAxios } from "../../../../hooks/useAxios";
import { useShoppingService } from "../../../../service/shopping";

const BillingAddress = () => {
  const { products, coupon } = useShoppingService();
  const axios = useAxios();
  const dispatch = useDispatch();
  const { isAuthed } = useAuth();
  const [loading, setLoading] = useState(false);

  const total = products?.reduce((prev, { quantity, price }) => {
    return quantity * price + prev;
  }, 0);

  const onFinish = async (values) => {
    if (!isAuthed()) dispatch(setAuthModal());

    setLoading(true);
    await axios({
      url: "/order/make-order",
      method: "POST",
      data: {
        shop_list: products.map((product) => ({
          ...product,
          count: product.quantity
        })),
        billing_address: values,
        extra_shop_info: {
          total_price: coupon
            ? total
            : Number(total * Number(`0.${coupon?.discount_for ?? 0}`)),
          method: values.payment_method,
          coupon: {
            has_coupon: Boolean(coupon),
            discount_for: coupon?.discount_for ?? 0
          }
        }
      }
    });
    setLoading(false);
    dispatch(setConfirmModal());
    notification.success({
      message: "Order placed successfully"
    });
  };

  return (
    <div className="w-[60%] max-md:w-100%">
      <h3 className="font-bold mb-[20px]">BillingAddress</h3>
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
            name="first_name"
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
            name="last_name"
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
            label=" "
            name="additional_street_address"
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
            <Input placeholder="Type your email..." />
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
            label="Payment Method"
            name="payment_method"
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
            <Radio.Group
              defaultValue={"other-payment-methods"}
              className="flex flex-col gap-3"
            >
              <Radio
                value="other-payment-methods"
                className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                  alt="methods"
                />
              </Radio>
              <Radio
                value="dorect-bank-transfer"
                className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
              >
                Direct bank transfer
              </Radio>
              <Radio
                value="cash-on-delivery"
                className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
              >
                Cash on delivery
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Order notes (optional)" name="order_notes">
          <Input.TextArea
            rows={10}
            placeholder="Your order notes, thoughts, feedback, etc..."
          />
        </Form.Item>
        <Button
          disabled={loading}
          htmlType="submit"
          className={
            "bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-full h-[40px]"
          }
        >
          {loading ? <LoadingOutlined /> : "Place Order"}
        </Button>
      </Form>
    </div>
  );
};

export default BillingAddress;
