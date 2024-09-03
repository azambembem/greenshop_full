import { useDispatch } from "react-redux";
import Header from "./customs/header";
import Body from "./customs/header/body";
import Create from "./modals/create";
import { setAddModal } from "../../../redux/generic-slices/modals";

const MyProduct = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Create />
      <div className="w-full">
        <button
          className={
            "bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[15px] py-[8px] ml-auto   "
          }
          onClick={() => dispatch(setAddModal({ addModal: true }))}
        >
          Add
        </button>
        <Header />
        <Body />
      </div>
    </>
  );
};

export default MyProduct;
