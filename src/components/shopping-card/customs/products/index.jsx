import { useNavigate } from "react-router-dom";
import { useShoppingService } from "../../../../service/shopping";
import Card from "./card";
import { Result } from "antd";

const Products = () => {
  const navigate = useNavigate();
  const { products } = useShoppingService();
  return (
    <div className="w-[65%] max-lg:w-[100%]">
      <div className="pb-[11px] border-b border-[#46A358] flex max-lg:hidden">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[20%]">Quantity</h3>
        <h3 className="w-[20%]">Total</h3>
      </div>
      <div className="flex flex-col gap-5 mt-[11px]">
        {products?.length ? (
          products.map((item) => <Card key={item._id} {...item} />)
        ) : (
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            onClick={() => navigate("/")}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
