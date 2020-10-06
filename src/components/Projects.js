import React from "react";
import { Switch, Route } from "react-router-dom"

import Project from "./Project"
import ProjectNavigation from "./ProjectNavigation";
import { projects } from "../helpers/projects"

export default function Projects(props){
  const renderProjects = () => {
    return projects().map(project => {
      const key = project["key"]
      return <ProjectNavigation key={key} project={project} />
    })
  }

  const findProject = () => {
    const key = props.routerProps.location.pathname.slice(10)
    return projects().find(project => project["key"] === key)
  }
  return(
    <>
      <h3>Projects</h3>
      <Switch>
        <Route exact path="/projects" render={() => {
          return (
            <nav className="projectNav">
              <ul className="projectNav">
                {renderProjects()}
              </ul>
            </nav>
          )
        }} />
        <Route strict path="/projects/" render={(routerProps) => {
          return <Project project={findProject()} />
        }} />
      </Switch>
    </>
  )
}