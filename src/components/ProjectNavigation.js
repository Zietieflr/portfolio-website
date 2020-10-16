import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectNavigation(props) {
  const { key, name } = props.project;
  return(
      <li>
        <NavLink to={"/projects/" + key}>
          {name}
        </NavLink>
      </li>
  )
}