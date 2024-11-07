import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMells } from "./TopMeels";
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {topMells.map((item, index) => (
          <CarouselItem
            key={index}
            imageCarousel={item.image}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
