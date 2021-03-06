import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return(
    <nav className="primary-nav">
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/repositories">Repositories</NavLink>
        </li>
        <li>
          <NavLink to="/projects/o-tock">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/medium">Medium</NavLink>
        </li>
      </ul>
    </nav>
  )
}