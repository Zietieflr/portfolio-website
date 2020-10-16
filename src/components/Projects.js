import React from "react";
import { Route } from "react-router-dom";

import Project from "./Project";
import ProjectNavigation from "./ProjectNavigation";
import projects from "../helpers/projects";

export default function Projects(props){
  const renderProjects = () => {
    return projects().map(project => {
      const key = project["key"];
      return (
          <ProjectNavigation key={key} project={project} />
      );
    });
  }

  const findProject = () => {
    const key = props.routerProps.location.pathname.slice(10);
    return projects().find(project => project["key"] === key);
  }
  return(
    <>
      <h3>Projects</h3>
        <Route path="/projects" render={() => {
          return (
            <nav className="project-nav">
              <ul>
                {renderProjects()}
              </ul>
            </nav>
          )
        }} />
        <Route strict path="/projects/" render={() => {
          return <Project project={findProject()} />
        }} />
    </>
  );
}