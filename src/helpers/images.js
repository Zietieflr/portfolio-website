import React from "react";

import curse1 from "../images/puzzleEffect/Curse1.jpg";
import curse2 from "../images/puzzleEffect/Curse2.jpg";
import curse3 from "../images/puzzleEffect/Curse3.jpg";
import gs1 from "../images/puzzleEffect/GS1.jpg";
import gs2 from "../images/puzzleEffect/GS2.jpg";
import gs3 from "../images/puzzleEffect/GS3.jpg";
import lab1 from "../images/puzzleEffect/Lab1.jpg";
import lab2 from "../images/puzzleEffect/Lab2.jpg";
import lab3 from "../images/puzzleEffect/Lab3.jpg";
import rescue1 from "../images/puzzleEffect/Rescue1.jpg";
import rescue2 from "../images/puzzleEffect/Rescue2.jpg";
import rescue3 from "../images/puzzleEffect/Rescue3.jpg";

import dragon1 from "../images/dragons/dragon1.jpg";
import dragon2 from "../images/dragons/dragon2.jpg";
import dragon3 from "../images/dragons/dragon3.jpg";
import dragon4 from "../images/dragons/dragon4.jpg";

export function formatCarouselImages(imageGroups) {
  const images = [];
  imageGroups.forEach(imageGroup => {
    const { srcs, alt } = imageGroup;
    srcs.forEach(src => {
      images.push(<img key={src} src={src} alt={alt} className="carousel-image" />)
    });
  });
  return images;
}

export const puzzleEffectList = [
  {
    srcs: [gs1, gs3, gs2],
    alt: "Image from Puzzle Effect's Grim Stacks. "
      + "A magical book store escape room."
  },
  {
    srcs: [curse1, curse3, curse2],
    alt: "Image from Puzzle Effect's Curse of the Emerald Sea. " 
      + "A pirate ship escape room."
  },
  {
    srcs: [rescue1, rescue2, rescue3],
    alt: "Image from Puzzle Effect's Rescue. "
      + "A race to save a kidnapped girl, in escape room format."
  },
  {
    srcs: [lab2, lab1, lab3],
    alt: "Image from Puzzle Effect of a secret lab." 
      + "An alchemy lab escape room."
  },
];

export const dragonList = [
  {
    srcs: [dragon1, dragon2, dragon3, dragon4],
    alt: "A dragon, or dragons from my collection."
  },
]

export function puzzleEffectImages(){
  return puzzleEffectList;
}