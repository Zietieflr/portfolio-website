import React, { useEffect, useState } from "react";

import url from "../helpers/urls"
import gitHubShowcases from "../helpers/gitHubShowcase"

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
      document.body.removeChild($rendingScript);
      document.body.removeChild($gitHubScript);
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
      return (
        <li>
          <h6>
            <a href={showcase.link}>{showcase.name}</a>
          </h6>
          <p>{showcase.shortDescription}</p>
        </li>
      )
    })
  }

  return(
    <>
      <h3>
        <a href="https://github.com/Zietieflr">GitHub</a>
      </h3>
      {verifyGitHubWidget()}
      <h4>Side Code</h4>
      <h5>
        This list has various repositories which I have worked with that don't 
        constitute full projects, but may be interesting to browse through. These
        were never intended to be published, GitHub is their only and intended home.  
      </h5>
      <ul className="project-list">
        {gitHubShowcase()}
      </ul>
    </>
  )
}