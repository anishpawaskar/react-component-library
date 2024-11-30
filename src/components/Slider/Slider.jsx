import { useEffect, useState } from "react";
import { SliderListItem } from "./SliderListItem";
import { useGetScreenSize } from "../../utils/useGetScreenSize";

export const Slider = ({
  sliderPerView,
  pagination,
  breakPoints,
  data,
  children,
}) => {
  const [gap, setGap] = useState(10);
  const [paginationButtons, setPaginationButtons] = useState(0);
  const [slidesPerView, setSlidePerView] = useState(sliderPerView);
  const [pages, setPages] = useState(0);
  const [width, setWidth] = useState(0);

  //for dots
  //   const value = ((data.length - sliderPerView) / 1) + 1;

  const screen = useGetScreenSize();

  const handleSliderSettings = () => {
    const breakpoints = Object.keys(breakPoints).map(Number);

    breakpoints.sort((a, b) => a + b);

    breakpoints.forEach((breakPoint) => {
      if (screen.width >= breakPoint) {
        setSlidePerView(breakPoints[breakPoint].sliderPerView);
        setGap(breakPoints[breakPoint].spaceBetween);

        const totalPages = Math.ceil(
          data.length / breakPoints[breakPoint].sliderPerView
        );
        setPages(totalPages);

        const browserWidth = screen.width;
        const totalSpaceBetween =
          browserWidth -
          breakPoints[breakPoint].spaceBetween *
            (breakPoints[breakPoint].sliderPerView - 1);
        const slideWidth =
          totalSpaceBetween / breakPoints[breakPoint].sliderPerView;

        setWidth(slideWidth);
      }
    });
  };

  useEffect(() => {
    handleSliderSettings();
  }, [screen]);

  return (
    <div className="slider w-full h-full mx-auto my-auto relative z-10 overflow-clip">
      <div
        style={{ gap: `${gap}px` }}
        className="slider-list relative w-full h-full flex z-10 box-content"
      >
        {data.map((item) => {
          return <SliderListItem key={item.id} item={item} width={width} />;
        })}
      </div>
    </div>
  );
};
