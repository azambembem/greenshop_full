import { Empty } from "antd";
import { useMyProductFeatures } from "../../../features";
import Loading from "../../../loading";
import Card from "./customs/card";

const Body = () => {
  const {
    products: { isLoading, isError, data }
  } = useMyProductFeatures();

  const loading = isLoading || isError;

  if (loading) return <Loading />;

  if (data?.lenght)
    return (
      <Empty
        className="mt-[10px]"
        description={
          <div>
            <h3 className="text-[18px] text-bold">No products yet...</h3>
          </div>
        }
      />
    );

  return (
    <div className="flex flex-col gap-3">
      {data?.map((product) => (
        <Card {...product} key={product._id} />
      ))}
    </div>
  );
};

export default Body;
