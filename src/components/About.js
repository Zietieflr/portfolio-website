import React from "react";

import Title from "./Title";
import LifeSection from "./LifeSections"

import { hobbiesList, puzzleEffectList, dragonList } from "../helpers/images"
import descriptions from "../helpers/lifeSectionDescriptions"

export default function About(){
  return(
    <>
      <Title text={"About Me"} />
      <LifeSection
        titleText={"Hobbies"}
        images={hobbiesList}
        description={descriptions("hobbies")}
      />
      <LifeSection
        titleText={"Puzzle Effect"}
        images={puzzleEffectList}
        description={descriptions("puzzleEffect")}
      />
      <LifeSection
        titleText={"Dragons"}
        images={dragonList}
        description={descriptions("dragons")}
      />
    </>
  )
}