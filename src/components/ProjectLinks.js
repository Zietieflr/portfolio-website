import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectLinks(props) {
  const { link, text } = props;

  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
  return (
    <h6>
      <a href={link}>
        {capitalizeText(text)}
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    </h6>
  )
}