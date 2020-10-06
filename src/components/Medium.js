import React, { useEffect, useState } from "react";
import url from "../helpers/urls";

export default function Medium(){
  const [articleWidgetWorking, setArticleWidgetWorking] = useState(true)

  function initialScript(src) {
    return new Promise(function(resolve, reject) {
      const $script = document.createElement("script");
      $script.id = "mediumScript";
      $script.src = src;
      $script.addEventListener("load", resolve);
      $script.addEventListener("error", reject)
      document.body.appendChild($script);
      setArticleWidgetWorking(true);
    })
  };

  function renderMedium() {
    const $renderMedium = document.createElement("script");
    $renderMedium.id = "renderingScript";
    $renderMedium.innerHTML = `MediumWidget.Init({
      renderTo: '#medium-widget',
      params: {"resource":"${url("medium")}",
      "postsPerLine":1,
      "limit":5,
      "picture":"small",
      "fields":["description"],
      "ratio":"landscape"}
    })`;
    $renderMedium.async = true;
    document.body.appendChild($renderMedium);
  }

  function renderError() {
    setArticleWidgetWorking(false);
  }

  useEffect(() => {    
    initialScript(url("mediumWidget")).then(renderMedium, renderError);
    return () => {
      const $rendingScript = document.getElementById("renderingScript");
      const $mediumScript = document.getElementById("mediumScript");
      document.body.removeChild($rendingScript);
      document.body.removeChild($mediumScript);
    }
  }, []);

  function verifyArticleWidget() {
    return articleWidgetWorking
      ? <article id="medium-widget"></article>
      : <p className="widget-error">
        Sorry, Medium is being shy and doesn't want to show itself. 
        You can see my articles <a href={url("medium")}>here.</a>
      </p>
  }

  return(
    <>
      <h3>
        <a href={url("medium")}>Medium</a>
      </h3>
      {verifyArticleWidget()}
    </>
  )
}
