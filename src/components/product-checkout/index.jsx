import BillingAddress from "./customs/billing-address";
import Header from "./customs/header";
import Order from "./customs/order";

const ProductCheckout = () => {
  return (
    <div className="w-[80%] m-auto">
      <Header />
      <div className="mt-[30px] mb-[30px] flex gap-9 max-md:flex-col">
        <BillingAddress />
        <Order />
      </div>
    </div>
  );
};

export default ProductCheckout;
