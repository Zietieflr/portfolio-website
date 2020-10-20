import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import ImageCarousel from "./ImageCarousel";

export default function LifeSection(props) {
  const {titleText, images, description} = props;

  const [showDescription, setShowDescription] = useState(false);
  
  function renderDescription() {
  return showDescription ? <p>{description}</p> : null
  }

  function caretDirection() {
    return showDescription ? faCaretDown : faCaretRight;
  }

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <>
      <h4>
        <button onClick={toggleDescription}>
          <FontAwesomeIcon icon={caretDirection()}/>
          {" " + titleText}
        </button>
      </h4>
      {renderDescription()}
      <ImageCarousel images={images} />
    </>
  )
}