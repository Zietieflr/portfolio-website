import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons"

export default function ProjectNavigation(props) {
  const { key, name, descriptionShort } = props.project;

  const [renderDescription, setRenderDescription] = useState(false);

  const showDescription = () => {
    return <p>{descriptionShort}</p>
  }
  return(
    <li className="projectNav">
      <Link to={"/projects/" + key}>
        {name}
      </Link>
      <button onClick={() => setRenderDescription(!renderDescription)}>
        <FontAwesomeIcon
          icon={ renderDescription ? faCaretDown : faCaretLeft } 
        />
      </button>
      { renderDescription ? showDescription() : null }
    </li>
  )
}