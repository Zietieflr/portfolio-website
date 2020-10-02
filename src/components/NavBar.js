import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return(
    <nav className="primaryNav">
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
        <li>
          <NavLink to="/github">GitHub</NavLink>
        </li>
        <li>
          <NavLink to="/medium">Medium</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  )
}