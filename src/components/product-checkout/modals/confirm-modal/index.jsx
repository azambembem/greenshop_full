import { Modal } from "antd";
import { useShoppingService } from "../../../../service/shopping";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmModal } from "../../../../redux/generic-slices/modals";
import { useNavigate } from "react-router-dom";

const ConfirmModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { confirmModal } = useSelector(({ modal }) => modal);
  const { products, coupon, setInitial } = useShoppingService();

  const total = products?.reduce((prev, { quantity, price }) => {
    return quantity * price + prev;
  }, 0);

  return (
    <Modal
      open={confirmModal}
      title="Order Confirmation"
      footer={false}
      width={600}
      onCancel={() => {
        dispatch(setConfirmModal());
        setInitial();
        navigate("/");
      }}
    >
      <div className="grid grid-cols-4 max-sm:grid-cols-2">
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Order Number</h3>
          <p className="font-bold">{new Date().getTime()}</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Date</h3>
          <p className="font-bold">{new Date().toDateString()}</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Total</h3>
          {coupon ? (
            <div>
              <p className="font-bold line-through">${total || 0}</p>
              <p className="font-bold">
                $
                {Number(
                  total - Number(total * Number(`0.${coupon.discount_for}`))
                ).toFixed(2) || 0}
              </p>
            </div>
          ) : (
            <p className="font-bold">${total || 0}</p>
          )}
        </div>
        <div className="m-[4px]">
          <h3 className="font-light">Payment Method</h3>
          <p className="font-bold">Cash on delivery</p>
        </div>
      </div>
      <h3 className="font-bold mt-[30px] text-xl border-b border-[#46A35880]">
        Order Details
      </h3>
      <div className="flex flex-col gap-3">
        {products.map((value) => (
          <Card key={value._id} {...value} />
        ))}
      </div>
      <div className="mt-[20px] flex flex-col gap-3 border-b border-[#46A35880]">
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <h1 className="font-bold text-[#46A358]">$16.00</h1>
        </div>
        <div className="flex justify-between">
          <h1>Total</h1>
          <h1 className="font-bold text-[#46A358]">
            {coupon ? (
              <div>
                <h1 className="text-[#46A358] line-through">${total || 0}</h1>
                <h1 className="text-[#46A358]">
                  $
                  {Number(
                    total - Number(total * Number(`0.${coupon.discount_for}`))
                  ).toFixed(2) || 0}
                </h1>
              </div>
            ) : (
              <h1 className="text-[#46A358]">${total || 0}</h1>
            )}
          </h1>
        </div>
      </div>
      <p className="w-4/5 text-center m-auto mt-[16px]">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>
      <button
        onClick={() => {
          dispatch(setConfirmModal());
          setInitial();
          navigate("/profile/track-order");
        }}
        className="m-auto mt-[50px] w-[145px] h-[45px] bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white"
      >
        Track your order
      </button>
    </Modal>
  );
};

export default ConfirmModal;
