const gitHubShowcaseArray = [];
const gitLabShowcaseArray = [];

export function gitHubShowcase() {
  return gitHubShowcaseArray;
}

export function gitLabShowcase() {
  return gitLabShowcaseArray;
}

gitHubShowcaseArray.push({
  name: "HackerRank",
  link: "https://github.com/Zietieflr/HackerRank",
  shortDescription: "Algorithm and data structure training. " 
    + "Testing has been implemented. "
    + "Current focus is Javascript and Jest.",
});

gitLabShowcaseArray.push({
  name: "Mythic Table",
  link: "https://gitlab.com/mythicteam/mythictable",
  shortDescription: "Open source virtual tabletop for roll playing games.",
});
