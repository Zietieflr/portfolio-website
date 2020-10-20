import React from "react";

import Title from "./Title";
import LifeSection from "./LifeSections"

import { puzzleEffectImages } from "../helpers/images"
import descriptions from "../helpers/lifeSectionDescriptions"

export default function About(){
  return(
    <>
      <Title text={"About Me"} />
      <LifeSection
        titleText={"Puzzle Effect"}
        images={puzzleEffectImages()}
        description={descriptions("puzzleEffect")}
      />
    </>
  )
}