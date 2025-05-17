import { skillsList } from "./skillsList";
import { levels } from "./levelsList";
import { categories } from "./categoriesList";
import { statuses } from "./statusList";
import semitone from "../assets/images/semitone.png";
import portfolio from "../assets/images/portfolio.png";
import proile2 from "../assets/images/profile2.png";

export const projects = [
  {
    title: "Portfolio Website",
    status: statuses.COMPLETED,
    description: "A personal portfolio built with React and Tailwind to showcase my projects.",
    categories: [categories.FRONTEND],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/portfolio.png",
      thumbnail: "/images/thumbnails/portfolio-thumb.png",
      alt: "Screenshot of personal portfolio website"
    },
    liveDemo: "https://ndiyakholwa-mnqanqeni.netlify.app/",
    repo: "https://github.com/Mnqanqeni/Mnqanqeni.github.io",
    repoFullName: "Mnqanqeni/Mnqanqeni.github.io",
    techStack: [
      skillsList.REACT,
      skillsList.TAILWIND,
      skillsList.VITE,
      skillsList.JAVASCRIPT,
      skillsList.FRAMER,
      skillsList.REST_API
    ],
    videoDemo: "https://youtu.be/example7",
    imgSrc: portfolio,
  },
  // {
  //   title: "Personal Blog",
  //   status: statuses.IN_PROGRESS,
  //   description: "A blog platform built with Django and React, allowing users to comment and share posts.",
  //   categories: [categories.FULLSTACK],
  //   level: levels.INTERMEDIATE,
  //   image: {
  //     src: "/images/ecommerce.png",
  //     thumbnail: "/images/thumbnails/ecommerce-thumb.png",
  //     alt: "Screenshot of personal blog platform"
  //   },
  //   liveDemo: "https://mystore.com",
  //   repo: "https://github.com/yourusername/ecommerce-app",
  //   repoFullName: "yourusername/ecommerce-app",
  //   techStack: [skillsList.DJANGO, skillsList.REACT],
  //   videoDemo: "https://youtu.be/example2"
  // },

  {
    title: "Memory Game",
    status: statuses.COMPLETED,
    description: "A fun memory game built with JavaScript and CSS animations.",
    categories: [categories.FRONTEND, categories.GAME_DEVELOPMENT],
    level: levels.BEGINNER,
    image: {
      src: "/images/memory-game.png",
      thumbnail: "/images/thumbnails/memory-game-thumb.png",
      alt: "Screenshot of memory card matching game"
    },
    liveDemo: "https://memorygame.com",
    repo: "https://github.com/Mnqanqeni/memory-game",
    repoFullName: "Mnqanqeni/memory-game",
    techStack: [skillsList.HTML, skillsList.CSS, skillsList.JAVASCRIPT],
    videoDemo: "https://youtu.be/example7",
    imgSrc: "../assets/images/semitone.png",
  },
  {
    title: "Express Form",
    status: statuses.COMPLETED,
    description: "A simple form submission app using Express.js, PostgreSQL, and Docker Compose.",
    categories: [categories.FRONTEND, categories.BACKEND, categories.FULLSTACK],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/express-form.png",
      thumbnail: "/images/thumbnails/express-form-thumb.png",
      alt: "Screenshot of Express.js form submission app"
    },
    liveDemo: "https://expressform.com",
    repo: "https://github.com/Mnqanqeni/express-forms",
    repoFullName: "Mnqanqeni/express-forms",
    techStack: [
      skillsList.NODE,
      skillsList.EXPRESS,
      skillsList.POSTGRESQL,
      skillsList.DOCKER,
      skillsList.HTML,
      skillsList.CSS
    ],
    videoDemo: "https://youtu.be/example7",
    imgSrc: "../assets/images/semitone.png",
  },
  {
    title: "Semitone Differences",
    status: statuses.COMPLETED,
    description: "A beginner-friendly JavaScript app that calculates semitone differences between musical notes, blending music theory with hands-on coding for an interactive learning experience.",
    categories: [categories.GAME_DEVELOPMENT, categories.FRONTEND, categories.CI_CD, categories.TESTING],
    level: levels.BEGINNER,
    image: {
      src: "/images/semitone.png",
      thumbnail: "/images/thumbnails/semitone-thumb.png",
      alt: "Screenshot of semitone difference calculator"
    },
    liveDemo: "https://mnqanqeni.github.io/semitone-difference/",
    repo: "https://github.com/Mnqanqeni/semitone-difference",
    repoFullName: "Mnqanqeni/semitone-difference",
    techStack: [skillsList.JAVASCRIPT, skillsList.HTML, skillsList.CSS,skillsList.WEBPACK,skillsList.GITHUB_ACTIONS,skillsList.JASMINE],
    videoDemo: "https://youtu.be/example7",
    imgSrc: semitone,
  }
];
