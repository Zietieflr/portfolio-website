import React from "react";
import { useWindowDimensions } from "../hooks/useWindDimensions";

export default function Project(props) {
  const { name, links, descriptionShort, descriptionLong } = props.project;

  let windowDimensions = useWindowDimensions();
  let iFrameWidth = iFrameSize();

  function iFrameSize() {
    return (windowDimensions.width*.8) > 560 ? 560 : windowDimensions.width*.8
  }

  function renderVideo() {
    return links.video
      ? <iframe
        title={`${name} Video`}
        className="project-video"
        width={iFrameWidth} 
        height={iFrameWidth*.5625} 
        src={links.video} 
        frameBorder="0" 
        allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture" 
        allowFullScreen
      ></iframe>
      : null;
  }
  return (
    <>
      <h4>{name}</h4>
      <h5>{descriptionShort}</h5>
      {renderVideo()}
      <p>{descriptionLong}</p>
    </>
  )
}