import React from "react";
import Slider from "react-slick";

import { formatCarouselImages } from "../helpers/images"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel(props) {
  const { images } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  };

  return (
    <Slider {...settings}>
      {formatCarouselImages(images)}
    </Slider>
  )
}