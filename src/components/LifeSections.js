import React from "react";

import ImageCarousel from "./ImageCarousel";

export default function LifeSection(props) {
  const {titleText, images} = props;
  return (
    <>
      <h4>{titleText}</h4>
      <ImageCarousel images={images} />
    </>
  )
}