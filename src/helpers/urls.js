const urls = {
  medium: "https://medium.com/@lrmcguire93",
  mediumWidget: "https://medium-widget.pixelpoint.io/widget.js",
  github: "https://github.com/Zietieflr",
  gitHubWidget: "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js",
  linkedIn: "https://www.linkedin.com/in/logan-mcguire/",
}

export default function url(key) {
  return urls[key];
}