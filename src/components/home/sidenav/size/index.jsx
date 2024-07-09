import { useSearchParams } from "../../../../hooks/useSearchParams";
const Sizes = () => {
  const { getParams, setParams } = useSearchParams();

  const normal_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer";
  const active_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer";

  const selectedSize = getParams("size") ?? "small";

  return (
    <div className="mt-[38px]">
      <h3 className="font-bold">Sizes</h3>
      <div className="pl-[12px] w-full">
        <div
          onClick={() => setParams({ size: "small" })}
          className={selectedSize === "small" ? active_text : normal_text}
        >
          <h3>Small</h3>
          <h3>(12)</h3>
        </div>
        <div
          onClick={() => setParams({ size: "medium" })}
          className={selectedSize === "medium" ? active_text : normal_text}
        >
          <h3>Medium</h3>
          <h3>(12)</h3>
        </div>
        <div
          onClick={() => setParams({ size: "large" })}
          className={selectedSize === "large" ? active_text : normal_text}
        >
          <h3>Large</h3>
          <h3>(12)</h3>
        </div>
      </div>
    </div>
  );
};

export default Sizes;
