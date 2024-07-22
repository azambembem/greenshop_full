import { useProductFeatures } from "../../../features";

const Description = () => {
  const {
    product: { data }
  } = useProductFeatures();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data?.description }} />
    </div>
  );
};

export default Description;
