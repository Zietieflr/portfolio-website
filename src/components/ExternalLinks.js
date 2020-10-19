import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExternalLinks(props) {
  const { link, text, icon } = props;
  const target = "_blank";
  const rel = "noopener noreferrer"

  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function renderText() {
    return text
      ? <a href={link} target={target} rel={rel}>{capitalizeText(text)}</a>
      : null;
  }
  return (
    <h6 className="external-link" >
      <a href={link} target={target} rel={rel}>
        <FontAwesomeIcon icon={icon} />
      </a>
      {renderText()}
    </h6>
  )
}