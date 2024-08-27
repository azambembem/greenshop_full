import { Descriptions } from "antd";
import { useNavigate } from "react-router-dom";
import { useShoppingService } from "../../../../service/shopping";
import { useRef, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Total = () => {
  const navigate = useNavigate();
  const [applying, setApplying] = useState(false);
  const { products, applyCoupon, coupon } = useShoppingService();
  const couponRef = useRef();

  const total = products.reduce((prev, { quantity, price }) => {
    return quantity * price + prev;
  }, 0);

  const onHandleCoupon = async () => {
    if (!couponRef.current?.value || applying) return;

    setApplying(true);
    await applyCoupon(coupon?.current?.value);
    setApplying(false);
  };

  return (
    <div className="w-[30%] max-lg:w-[100%]">
      <h3 className="font-bold pb-[11px] border-b border-[#46A358]">
        Card Total
      </h3>
      <div className="flex h-[40px] mt-[35px]">
        <input
          ref={couponRef}
          placeholder="Enter coupon code here..."
          className="w-4/5 border border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg"
        />
        <button
          onClick={onHandleCoupon}
          disabled={applying}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none"
        >
          {applying ? <LoadingOutlined /> : "Apply"}
        </button>
      </div>
      <Descriptions className="mt-[30px]">
        <Descriptions.Item span={3} label="Subtotal">
          $
          {coupon ? total - total * Number(`0.${coupon?.discount_for}`) : total}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Coupon Discount">
          - ${coupon ? total * Number(`0.${coupon?.discount_for}`) : 0}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Shiping">
          $16
        </Descriptions.Item>
      </Descriptions>
      <div className="flex justify-between">
        <h1>Total</h1>
        <h1 className="text-[#46A358]">
          {coupon ? (
            <div>
              <h1 className="line-through">&{total + 16}</h1>
              <h1>${total - total * Number(`0.${coupon?.discount_for}`)}</h1>
            </div>
          ) : (
            <div>${total + 16}</div>
          )}
        </h1>
      </div>
      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]">
        Proceed to Checkout
      </button>
      <h3
        onClick={() => navigate("/")}
        className="mt-[14px] text-center text-[#46A358] cursor-pointer"
      >
        Continue Shopping
      </h3>
    </div>
  );
};

export default Total;
