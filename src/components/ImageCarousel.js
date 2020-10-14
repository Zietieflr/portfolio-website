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
  };

  return (
    <Slider {...settings}>
      <img src={curse1} />
      <img src={curse2} />
      <img src={curse3} />
      <img src={gs1} />
      <img src={gs2} />
      <img src={gs3} />
      <img src={lab1} />
      <img src={lab2} />
      <img src={lab3} />
    </Slider>
  )
}