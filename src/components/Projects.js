import React from "react";
import { Link, Switch, Route } from "react-router-dom"

import Project from "./Project"
import projects from "../helpers/projects"

export default function Projects(props){
  const renderProjects = () => {
    return projects().map(project => {
      const key = project["key"]
      return <li key={key}><Link to={"/projects/" + key} >{project["name"]}</Link></li>
    })
  }

  const findProject = () => {
    const key = props.routerProps.location.pathname.slice(10)
    return projects().find(project => project["key"] === key)
  }
  return(
    <section>
      <h3>Projects</h3>
      <Switch>
        <Route exact path="/projects" render={() => {
          return <ul>{renderProjects()}</ul>
        }} />
        <Route strict path="/projects/" render={(routerProps) => {
          return <Project project={findProject()} />
        }} />
      </Switch>
    </section>
  )
}