import React, { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GitHubCalendar } from "github-calendar"

import Title from "./Title";
import ExternalLinks from "./ExternalLinks";

import gitHubShowcases from "../helpers/gitHubShowcase";
import url from "../helpers/urls";

export default function GitHub(){
  const [gitHubScriptWorking, setGitHubScriptWorking] = useState(true);

  function addGitHubScript(src) {
    return new Promise(function(resolve, reject) {
      const $script = document.createElement("script");
      $script.id = "git-hub-script";
      $script.src = src;
      $script.addEventListener("load", resolve);
      $script.addEventListener("error", reject)
      document.body.appendChild($script);
      setGitHubScriptWorking(true);
    })
  }

  function renderGitHubScript() {
    const $renderGitHub = document.createElement("script");
    $renderGitHub.id = "rendering-script";
    $renderGitHub.innerHTML = `GitHubCalendar("#git-hub-calendar", "Zietieflr", {
      responsive: true,
      global_stats: false,
      tooltips: true,
    })`;
    // GitHubCalendar()
    $renderGitHub.async = true; 
    document.body.appendChild($renderGitHub);
  }

  function renderError() {
    setGitHubScriptWorking(false);
  }

  useEffect(() => {    
    addGitHubScript(url("gitHubWidget")).then(renderGitHubScript, renderError);
    return () => {
      const $rendingScript = document.getElementById("rendering-script");
      const $gitHubScript = document.getElementById("git-hub-script");
      if ($rendingScript) {document.body.removeChild($rendingScript)};
      if ($gitHubScript) {document.body.removeChild($gitHubScript)};
    }
  }, []);

  function verifyGitHubWidget() {
    return gitHubScriptWorking
      ? <figure id="git-hub-calendar"></figure>
      : <p className="widget-error">
        Sorry, GitHub is being shy and doesn't want to show itself. 
        You can see my articles <a href={url("github")}>here.</a>
      </p>
  }

  function gitHubShowcase() {
    return gitHubShowcases().map(showcase => {
      const {name, link, shortDescription} = showcase;
      return (
        <li key={name} className="project-item">
          <ExternalLinks link={link} text={name} icon={faGithub} />
          <p>{shortDescription}</p>
        </li>
      )
    })
  }

  return(
    <>
      <Title text={"GitHub"} link={url("gitHub")} />
      {verifyGitHubWidget()}
      <h4>Side Code</h4>
      <h5>
        This list has various repositories which I have worked with that don't 
        constitute full projects, but may be interesting to browse through. These
        were never intended to be published, GitHub is their one and only home.  
      </h5>
      <ul className="project-list">
        {gitHubShowcase()}
      </ul>
    </>
  )
}