import Description from "./customs/description";
import Header from "./customs/header";
import ProductDetails from "./customs/header/product-details";

const Product = () => {
  return (
    <div className="w-[80%] m-auto">
      <Header />
      <ProductDetails />
      <Description />
    </div>
  );
};

export default Product;
