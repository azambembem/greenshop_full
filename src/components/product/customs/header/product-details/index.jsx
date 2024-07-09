import Details from "./details";
import Images from "./images";

const ProductDetails = () => {
  return (
    <div className="flex gap-[52px] mt-[43px] h-[448px]">
      <Images />
      <Details />
    </div>
  );
};

export default ProductDetails;
