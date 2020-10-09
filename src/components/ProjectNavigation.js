import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function ProjectNavigation(props) {
  const { key, name, descriptionShort } = props.project;

  const [renderDescription, setRenderDescription] = useState(false);

  const showDescription = () => {
    return <p>{descriptionShort}</p>
  }
  return(
    <>
      <li>
        <NavLink to={"/projects/" + key}>
          {name}
        </NavLink>
        <button 
          onClick={() => setRenderDescription(!renderDescription)} 
          className="more-info"
        >
          <FontAwesomeIcon
            icon={ renderDescription ? faCaretDown : faCaretLeft } 
          />
        </button>
        { renderDescription ? showDescription() : null }
      </li>
    </>
  )
}