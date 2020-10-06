import React, { useEffect, useState } from "react";

import url from "../helpers/urls"

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

  return(
    <>
      <h3>
        <a href="https://github.com/Zietieflr">GitHub</a>
      </h3>
      {verifyGitHubWidget()}
    </>
  )
}