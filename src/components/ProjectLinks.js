import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectLinks(props) {
  const { link, text } = props;

  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
  return (
    <h6 className="project-link">
      <a href={link}>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
      <a href={link}>
        {capitalizeText(text)}
      </a>
    </h6>
  )
}