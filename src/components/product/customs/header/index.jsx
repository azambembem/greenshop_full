import { Breadcrumb } from "antd";

const Header = () => {
  return (
    <div className="mt-8">
      <Breadcrumb
        items={[
          {
            title: "Home"
          },
          {
            title: "Shop"
          }
        ]}
      />
    </div>
  );
};

export default Header;
