import React from "react";

import { useWindowDimensions } from "../hooks/useWindDimensions";

export default function EmbeddedVideo(props) {
  const { name, link, maxWidth } = props;

  let windowDimensions = useWindowDimensions();
  let iFrameWidth = iFrameSize();

  function iFrameSize() {
    return (windowDimensions.width*.8) > maxWidth
      ? maxWidth
      : windowDimensions.width*.8;
  }

  return (
  <iframe
        title={`${name} Video`}
        className="project-video"
        width={iFrameWidth} 
        height={iFrameWidth*.5625} 
        src={link} 
        frameBorder="0" 
        allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture" 
        allowFullScreen
      ></iframe>
  )
}