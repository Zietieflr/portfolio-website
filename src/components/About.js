import React from "react";

import Title from "./Title";
import LifeSection from "./LifeSections"

import { hobbiesList, puzzleEffectList, dragonList } from "../helpers/images"
import descriptions from "../helpers/lifeSectionDescriptions"

export default function About(){
  return(
    <>
      <Title text={"About Me"} />
      <p>
        My mind never rests, always needing some stimulation. I love building 
        and transforming one (or many) pieces into a new whole. Here are some 
        of the joys in my life outside of coding. Whether, building immersive 
        experiences or camaraderie every day brings something new.
      </p>
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