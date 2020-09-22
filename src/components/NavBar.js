import React from 'react'
import { BrowserRouter as Router, NavLink} from "react-router-dom"

export default function NavBar() {
  return(
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
      <NavLink to="/github">GitHub</NavLink>
      <NavLink to="/medium">Medium</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  )
}