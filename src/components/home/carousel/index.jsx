import { Carousel } from "antd";
import Slide from "./slide";
import { carousel_mock } from "../../../utils/mock";

const SliderSecion = () => {
  return (
    <div>
      <Carousel>
        {carousel_mock.map((item) => (
          <Slide key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderSecion;
