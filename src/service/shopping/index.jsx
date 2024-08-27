import { useDispatch, useSelector } from "react-redux";
import { setCoupon, setShoppingProducts } from "../../redux/slices/shopping";
import { notification } from "antd";
import { useAxios } from "../../hooks/useAxios";

export const useShoppingService = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const { products, coupon } = useSelector(({ shopping }) => shopping);
  // add
  // remove
  // update increment | decrement

  const onAdd = (product) => {
    const index = products.find((item) => item._id === product._id);

    if (!index)
      return dispatch(
        setShoppingProducts([...products, { ...product, quantity: 1 }])
      );

    dispatch(
      setShoppingProducts(
        products.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    );
  };

  const onDelete = (product) => {
    dispatch(
      setShoppingProducts(products.filter((item) => item._id !== product._id))
    );
  };

  const onIncrement = (product) => {
    dispatch(
      setShoppingProducts(
        products.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    );
  };

  const onDecrement = (product) => {
    dispatch(
      setShoppingProducts(
        products.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
      )
    );
  };

  const applyCoupon = async (coupon_code) => {
    const { data } = await axios({
      url: "/features/coupon",
      method: "GET",
      params: {
        coupon_code
      }
    });

    notification.success({ message: "Coupon applied successfully" });
    console.log(data);

    dispatch(setCoupon(data?.data));
  };

  return {
    onAdd,
    products,
    onDelete,
    onIncrement,
    onDecrement,
    applyCoupon,
    coupon
  };
};
