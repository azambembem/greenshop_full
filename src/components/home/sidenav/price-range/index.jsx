import { Slider } from "antd";
import { useState } from "react";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const PriceRange = () => {
  const { getParams, setParams } = useSearchParams();

  const min = Number(getParams("min")) ?? 0;
  const max = Number(getParams("max")) ?? 1500;

  const [range, setRange] = useState([min, max]);

  return (
    <div className="mt-[38px]">
      <h3 className="font-bold">Price Range</h3>
      <div className="pl-[12px] w-full ">
        <Slider min={0} value={range} max={1500} onChange={setRange} range />
        <div>
          Price:{" "}
          <span className="text-[#46A358] font-bold">
            ${range[0]} -${range[1]}
          </span>
        </div>
        <button
          type="button"
          className=" mt-2 w-[100px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] flex gap-2 justify-center items-center text-white cursor-pointer"
          onClick={() => {
            setParams({
              min: range[0],
              max: range[1]
            });
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
