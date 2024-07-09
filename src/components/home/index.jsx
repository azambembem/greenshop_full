import SideNav from "./sidenav";
import SliderSecion from "./carousel";
import Category from "./category";
const Home = () => {
  return (
    <>
      <SliderSecion />
      <div className="flex w-[80%] m-auto mt-[46px] gap-8">
        <SideNav />
        <Category />
      </div>
    </>
  );
};

export default Home;
