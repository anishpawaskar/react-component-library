import { Slider } from "./Slider";
import { DATA } from "./slider.constant";

export const SliderPage = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-4">Slider Component</h1>
      <Slider
        sliderPerView={1}
        breakPoints={{
          640: {
            sliderPerView: 2,
            spaceBetween: 20,
          },
          768: {
            sliderPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            sliderPerView: 5,
            spaceBetween: 50,
          },
        }}
        data={DATA}
      ></Slider>
    </div>
  );
};
