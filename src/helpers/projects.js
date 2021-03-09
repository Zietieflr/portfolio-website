const projectsArray = [];

export default function projects() {
  return projectsArray;
}

projectsArray.push({
  key: "o-tock",
  name: "O'Tock",
  links: {
    gitHub: "https://github.com/Zietieflr/project-mod5-frontend",
    video: "https://www.youtube.com/embed/g8NV0A0ktT0",
    website: "https://o-tock.web.app/",
  },
  descriptionShort: "A pomodoro style timer.",
  descriptionLong: "This project was built in ten days using Vue.js and Ruby on Rails."
    + "Having worked from home for several months I wanted to find a better way to "
    + "work. During this time I discovered pomodoro timers and decided to build one "
    + "which would work for me. I knew it needed to have separate work and break timers, "
    + "the ability to set several at the same time, and to communicate with the user. "
    + "To this end I used the Web Notification API to ask for system notifications "
    + "permission. From there I used Vue to construct the components with connected logic "
    + "and integrated SweetAlerts for the modal windows and Chart.js for a visual timer. "
    + "Most of the front end integrations were possible due to Vue wrappers for the "
    + "different libraries, including the FontAwesome icons. "
    + "I knew I wanted schedules to persist, so I incorporated Ruby on Rails "
    + "with Bcrypt and JWT to enable full user authentication and persistent schedules. " 
    + "I stored the user hash in local storage to allow for persistent login. "
    + "This project was completely styled with CSS. To interact with or see the code which "
    + "brought this project to life, please see the links provided above."
});

projectsArray.push({
  key: "bodle",
  name: "bodle",
  links: {
    gitHub: "https://github.com/Zietieflr/Project-Mod3-Frontend",
    video: "https://www.youtube.com/embed/RIta49j5Eus",
  },
  descriptionShort: "Use video to draw.",
  descriptionLong: "This project was the culmination of a week long foray into machine learning. "
    + "I was inspired by Google's 'Quick, Draw!' and my current fascination with using ML models. "
    + "For this project I used vanilla Javascript and CDNs for both ML5.js and P5.js to "
    + "use body movement to create simple doodles. Through ML5 I was able to use TensorFlow's "
    + "Pose.net library to track various points of the body. In this case I chose to focus on "
    + "one of the two wrists. Being a left paw, choosing handedness was very important to me. "
    + "With the P5 integration I was able to mirror and render the video to be seen by the user. "
    + "At this point I had the video loaded into Pose.net and was able to track where the wrist "
    + "was on the canvas. I stored each point/coordinate into an array and then used P5 to render "
    + "those points into a line. From there I implemented CSS styling for visual appeal, generated "
    + "a random prompt from 'Quick, Draw!', and set a time limit. "
    + "In the future I would like to revisit this project to train the model to guess what each "
    + "doodle was based off of its training. I also have several ideas about implementing the ability "
    + "to lift the 'pencil' to help make the drawing a tad easier."
});

projectsArray.push({
  key: "2eSheet",
  name: "Pathfinder 2e Character Sheet",
  links: {
    gitHub: "https://github.com/Zietieflr/project-week-frontend-Mod4",
    video: "https://www.youtube.com/embed/wsU3MPdfwTo",
  },
  descriptionShort: "A large form.",
  descriptionLong: "For the last five years I have done a deep dive into the world of "
    + "collaborative storytelling. There are as many systems for exploring the "
    + "genre as there are coding languages and frameworks, the most recognized being "
    + "Dungeons and Dragons. This app records some of the stats for a Pathfinder "
    + "Second Edition character sheet. Essentially this app boils down to being a "
    + "large fully editable text form. This will store the relevant information in an "
    + "easily accessible format. During the time I worked on this project I focused on "
    + "intelligent conditional rendering to make the navigation as simple as possible. "
    + "I built this app using React and Ruby on Rails. With React I was able cleanly render "
    + "the character sheet as well as fully implement hooks. Using Rails I was able to send "
    + "nested attributes back and forth reducing the number of requests I had to make while "
    + "working on a character sheet. This app was the first step, now that I have a better "
    + "sense of what I am trying to do I will be building a more robust version."
});

projectsArray.push({
  key: "portfolio",
  name: "Portfolio Website",
  links: {
    gitHub: "https://github.com/Zietieflr/portfolio-website",
  },
  descriptionShort: "This site!",
  descriptionLong: "I built this site to showcase a bit about myself and continue working "
    + "on my skills as a developer. I used React and React Router to build all of the basic "
    + "functionality. I included widgets for the Medium Blog display and React "
    + "Slick for the image carousels."
});