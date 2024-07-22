import Header from "./customs/header";
import Products from "./customs/products";
import Total from "./customs/total";

const ShoppingCard = () => {
  return (
    <div className="w-[80%] m-auto">
      <Header />
      <div className="flex justify-center gap-9 max-lg:flex-col mt-[50px]">
        <Products />
        <Total />
      </div>
    </div>
  );
};

export default ShoppingCard;
