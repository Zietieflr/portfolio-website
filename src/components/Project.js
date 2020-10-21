import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import ExternalLinks from "./ExternalLinks"
import EmbeddedVideo from "./EmbeddedVideo";

export default function Project(props) {
  const { name, links, descriptionShort, descriptionLong } = props.project;

  function renderVideo() {
    return links.video 
      ? <EmbeddedVideo name={name} link={links.video} />
      : null;
  }

  function renderLinks() {
    return Object.entries(links).map(link => {
      return <ExternalLinks
        key={link[0]}
        link={link[1]}
        text={link[0]}
        icon={faExternalLinkAlt}
      />
    })
  }

  return (
    <>
      <h4>{name}</h4>
      <h5>{descriptionShort}</h5>
      {renderVideo()}
      {renderLinks()}
      <p className="project-item">{descriptionLong}</p>
    </>
  )
}