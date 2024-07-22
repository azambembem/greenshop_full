import { useState } from "react";
import { useProductFeatures } from "../../features";
import DescriptionComponent from "./description";
import Review from "./review";

const Description = () => {
  const [active, setActive] = useState("description");
  const {
    product: { data }
  } = useProductFeatures();

  const active_style = "hover:text-[#46A358] text-[#46A358]";
  return (
    <div>
      <div className="flex gap-5 border-b border-[#46A358] pb-[5px]">
        <h3
          className={`cursor-pointer ${
            active === "description" && active_style
          }`}
          onClick={() => setActive("description")}
        >
          Product Description
        </h3>
        <h3
          onClick={() => setActive("review")}
          className={`cursor-pointer ${active === "review" && active_style}`}
        >
          Review (0)
        </h3>
      </div>
      {active === "description" ? <DescriptionComponent /> : <Review />}
    </div>
  );
};

export default Description;
