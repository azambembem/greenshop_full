import { Divider, Rate, Tag } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useProductFeatures } from "../../../../features";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../../redux/generic-slices/modals";
import { useAuth } from "../../../../../../configs/auth";
import { useParams } from "react-router-dom";

const Details = () => {
  const { productId, category } = useParams();
  const { isAuthed } = useAuth();
  const dispatch = useDispatch();
  const {
    product: { data }
  } = useProductFeatures();

  const addToWishlist = () => {
    if (!isAuthed()) {
      return dispatch(setAuthModal());
    }
    // Add your wishlist logic here
  };

  if (!data) {
    return <div>Loading...</div>; // 데이터가 없을 때 로딩 상태를 표시합니다.
  }

  return (
    <div className="flex-1">
      <h3 className="text-[28px] font-bold">Barberton Daisy</h3>

      <div className="flex w-full justify-between">
        <h3 className="text-[28px] text-[#46A358] font-bold">${data.price}</h3>
        <div className="flex gap-2">
          <Rate />
          <p className="text-[12px]">{data.comments?.length} Customer Review</p>
        </div>
      </div>

      <Divider />

      <div className="mt-[24px]">
        <h3 className="text-[15px] font-medium">Short Description:</h3>
        <p className="text-[14px] text-[#727272]">{data.short_description}</p>
      </div>
      <div className="mt-[24px]">
        <h3 className="text-[15px] font-medium">Size:</h3>
        <div className="text-[14px] text-[#727272] flex gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <div
              key={size}
              className="rounded-full flex items-center justify-center h-[28px] w-[28px] border border-[#EAEAEA] cursor-pointer"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[24px] flex gap-[26px]">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="w-[35px] h-[35px] bg-[#46A358] border rounded-full flex gap-2 justify-center items-center cursor-pointer text-[#fff]"
          >
            -
          </button>
          <h3>1</h3>
          <button
            type="button"
            className="w-[35px] h-[35px] bg-[#46A358] border rounded-full flex gap-2 justify-center items-center cursor-pointer text-[#fff]"
          >
            +
          </button>
        </div>

        <div className="flex gap-[10px]">
          <button
            type="button"
            className="w-[100px] h-[35px] bg-[#46A358] rounded-[6px] flex gap-2 justify-center items-center text-white cursor-pointer"
          >
            BUY NOW
          </button>
          <button
            type="button"
            className="w-[120px] h-[35px] border-[#46A358] border rounded-[6px] flex gap-2 justify-center items-center text-[#46A358] cursor-pointer"
          >
            ADD TO CART
          </button>
          <button
            onClick={addToWishlist}
            type="button"
            className="w-[40px] h-[35px] border-[#46A358] border rounded-[6px] flex gap-2 justify-center items-center cursor-pointer text-[#46A358]"
          >
            <HeartOutlined />
          </button>
        </div>
      </div>
      <div className="mt-[24px]">
        <p className="text-[14px] text-[#727272]">
          <span className="text-[15px] font-medium mt-[24px] mr-2">SKU:</span>
          {productId}
        </p>
        <p className="text-[14px] text-[#727272]">
          <span className="text-[15px] font-medium mt-[24px] mr-2">
            Categories:
          </span>
          {category?.toUpperCase()}
        </p>
        <p className="text-[14px] text-[#727272]">
          <span className="text-[15px] font-medium mt-[24px] mr-2">Tags:</span>
          {data?.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Details;
