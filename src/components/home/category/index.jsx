import Body from "./body";
import Header from "./header";
import CategoryModal from "./modals/category";

const Category = () => {
  return (
    <>
      <CategoryModal />
      <div className="w-full">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default Category;
