import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExternalLinks(props) {
  const { link, text, icon } = props;

  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
  return (
    <h6 className="external-link">
      <a href={link}>
        <FontAwesomeIcon icon={icon} />
      </a>
      <a href={link}>
        {capitalizeText(text)}
      </a>
    </h6>
  )
}