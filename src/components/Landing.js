import React from "react";
import EmbeddedVideo from "./EmbeddedVideo";

import url from "../helpers/urls";

export default function Landing() {
  return (
    <EmbeddedVideo
      name="Portfolio introduction video"
      link={url("introVideo")}
      maxWidth={900}
      htmlClass={"intro-video"}
    />
  )
}