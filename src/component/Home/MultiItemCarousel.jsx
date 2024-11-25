import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeal } from './topMeal';
import Carousel from './Carousel';

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeal.map((item) => (
          <Carousel
            key={item.id} // Ensure each item has a unique key
            image={item.image}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
