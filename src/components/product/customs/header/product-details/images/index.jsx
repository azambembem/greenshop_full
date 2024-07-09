import { useState } from "react";
import { useProductFeatures } from "../../../../features";

const Images = () => {
  const [activeImage, setActiveImage] = useState(null);
  const {
    product: { data }
  } = useProductFeatures();

  return (
    <div className="flex-1 flex gap-[29px]">
      <div className="w-[100px] h-full">
        {data?.detailed_images.map((url, idx) => (
          <div
            key={url}
            onClick={() => setActiveImage(idx)}
            className="w-[100px] h-[100px] bg-[#f5f5f5] cursor-pointer"
          >
            <img src={url} alt="image-select" />
          </div>
        ))}
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <img
          src={data?.detailed_images?.[activeImage] ?? data?.main_image}
          alt="image-select"
        />
      </div>
    </div>
  );
};

export default Images;
