import React from "react";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";

import Title from "./Title";
import ExternalLinks from "./ExternalLinks";

import { gitLabShowcase, gitHubShowcase } from "../helpers/repositoryShowcase";
import url from "../helpers/urls";

export default function GitHub(){
  function showcase(examples, icon) {
    return examples().map(showcase => {
      const {name, link, shortDescription} = showcase;
      return (
        <li key={name} className="project-item">
          <ExternalLinks link={link} text={name} icon={icon} />
          <p>{shortDescription}</p>
        </li>
      )
    })
  }

  return(
    <>
      <Title text="GitLab" link={url("gitLab")} />
      <h4><a href="https://www.mythictable.com/">Mythic Table</a></h4>
      <h5>
        In an effort to connect and work with more developers I have started 
        contributing to the open source project Mythic Table. Games have been 
        one of the highlights for me over the past year, and Mythic Table 
        seeks to bring the tabletop roleplaying game experience into the 
        modern era. With a focus on making an online experience people want to 
        use, I have found a home with these passionate developers. 
      </h5>
      <ul className="project-list">
        {showcase(gitLabShowcase, faGitlab)}
      </ul>
      <Title text="GitHub" link={url("gitHub")} />
      <h4>Side Code</h4>
      <h5>
        This list has various repositories which I have worked with that don't 
        constitute full projects, but may be interesting to browse through. These
        were never intended to be published, GitHub is their one and only home.  
      </h5>
      <ul className="project-list">
        {showcase(gitHubShowcase, faGithub)}
      </ul>
    </>
  )
}