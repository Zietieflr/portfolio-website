import React, { useEffect } from "react";

export default function Medium(){
  function initialScript(src) {
    return new Promise(function(resolve) {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => resolve());
      document.body.appendChild(script);
    })
  };

  function renderMedium() {
    const $renderMedium = document.createElement("script");
    $renderMedium.innerHTML = `MediumWidget.Init({
      renderTo: '#medium-widget',
      params: {"resource":"https://medium.com/@lrmcguire93",
      "postsPerLine":1,
      "limit":5,
      "picture":"small",
      "fields":["description"],
      "ratio":"landscape"}
    })`;
    $renderMedium.async = true;
    document.body.appendChild($renderMedium);
  }

  useEffect(() => {    
    initialScript("https://medium-widget.pixelpoint.io/widget.js").then(renderMedium);
  }, []);

  return(
    <>
      <h3>Medium</h3>
      <article id="medium-widget"></article>
    </>
  )
}
