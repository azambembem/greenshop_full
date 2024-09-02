import Header from "./customs/header";
import Body from "./customs/header/body";

const MyProduct = () => {
  return (
    <div className="w-full">
      <button
        className={
          "bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[15px] py-[8px] ml-auto   "
        }
      >
        Add
      </button>
      <Header />
      <Body />
    </div>
  );
};

export default MyProduct;
