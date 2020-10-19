import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import curse1 from "../images/puzzleEffect/Curse1.jpg"
import curse2 from "../images/puzzleEffect/Curse2.jpg"
import curse3 from "../images/puzzleEffect/Curse3.jpg"
import gs1 from "../images/puzzleEffect/GS1.jpg"
import gs2 from "../images/puzzleEffect/GS2.jpg"
import gs3 from "../images/puzzleEffect/GS3.jpg"
import lab1 from "../images/puzzleEffect/Lab1.jpg"
import lab2 from "../images/puzzleEffect/Lab2.jpg"
import lab3 from "../images/puzzleEffect/Lab3.jpg"

export default function ImageCarousel() {
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
      <img src={gs1} className="carousel-image" />
      <img src={gs3} className="carousel-image" />
      <img src={gs2} className="carousel-image" />
      <img src={curse1} className="carousel-image" />
      <img src={curse3} className="carousel-image" />
      <img src={curse2} className="carousel-image" />
      <img src={lab1} className="carousel-image" />
      <img src={lab2} className="carousel-image" />
      <img src={lab3} className="carousel-image" />
    </Slider>
  )
}