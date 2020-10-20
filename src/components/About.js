import React from "react";

import Title from "./Title";
import LifeSection from "./LifeSections"
import { puzzleEffectImages } from "../helpers/images"

export default function About(){
  return(
    <>
      <Title text={"About Me"} />
      <LifeSection titleText={"Puzzle Effect"} images={puzzleEffectImages()} />
    </>
  )
}