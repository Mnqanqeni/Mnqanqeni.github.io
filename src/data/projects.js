import { skillsList } from "./skillsList";
import {levels} from "./levelsList";
import { categories } from "./categoriesList";

export const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind to showcase my projects.",
    categories: [categories.FRONTEND, categories.FULLSTACK],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/portfolio.png",
      thumbnail: "/images/thumbnails/portfolio-thumb.png",
      alt: "Screenshot of personal portfolio website"
    },
    liveDemo: "https://ndiyakholwa-mnqanqeni.netlify.app/",
    repo: "https://github.com/Mnqanqeni/Mnqanqeni.github.io",
    techStack: [
      skillsList.REACT,
      skillsList.TAILWIND,
      skillsList.VITE,
      skillsList.JAVASCRIPT,
      skillsList.FRAMER,
      skillsList.REST_API
    ],
    createdDate: "2024-12",
    latestUpdate: "2024-12",
    videoDemo: "https://youtu.be/example1"
  },
  {
    title: "Personal Blog",
    description: "A blog platform built with Django and React, allowing users to comment and share posts.",
    categories: [categories.FULLSTACK],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/ecommerce.png",
      thumbnail: "/images/thumbnails/ecommerce-thumb.png",
      alt: "Screenshot of personal blog platform"
    },
    liveDemo: "https://mystore.com",
    repo: "https://github.com/yourusername/ecommerce-app",
    techStack: [skillsList.DJANGO, skillsList.REACT],
    createdDate: "2024-12",
    latestUpdate: "2025-02",
    videoDemo: "https://youtu.be/example2"
  },
  {
    title: "To-Do List App",
    description: "A simple to-do list app built with React and Tailwind CSS.",
    categories: [categories.FRONTEND, categories.FULLSTACK],
    level: levels.BEGINNER,
    image: {
      src: "/images/todo-list.png",
      thumbnail: "/images/thumbnails/todo-list-thumb.png",
      alt: "Screenshot of to-do list application"
    },
    repo: "https://github.com/Mnqanqeni/to-do",
    techStack: [skillsList.REACT, skillsList.TAILWIND, skillsList.VITE],
    createdDate: "2024-12",
    latestUpdate: "2024-11",
    videoDemo: "https://youtu.be/example4"
  },
  {
    title: "Memory Game",
    description: "A fun memory game built with JavaScript and CSS animations.",
    categories: [categories.FRONTEND, categories.GAME],
    level: levels.BEGINNER,
    image: {
      src: "/images/memory-game.png",
      thumbnail: "/images/thumbnails/memory-game-thumb.png",
      alt: "Screenshot of memory card matching game"
    },
    liveDemo: "https://memorygame.com",
    repo: "https://github.com/Mnqanqeni/memory-game",
    techStack: [skillsList.HTML, skillsList.CSS, skillsList.JAVASCRIPT],
    createdDate: "2024-12",
    latestUpdate: "2025-01",
    videoDemo: "https://youtu.be/example5"
  },
  {
    title: "Express Form",
    description: "A simple form submission app using Express.js, PostgreSQL, and Docker Compose.",
    categories: [categories.BACKEND, categories.FULLSTACK],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/express-form.png",
      thumbnail: "/images/thumbnails/express-form-thumb.png",
      alt: "Screenshot of Express.js form submission app"
    },
    liveDemo: "https://expressform.com",
    repo: "https://github.com/Mnqanqeni/express-forms",
    techStack: [
      skillsList.NODE,
      skillsList.EXPRESS,
      skillsList.POSTGRESQL,
      skillsList.DOCKER
    ],
    createdDate: "2024-12",
    latestUpdate: "2024-12",
    videoDemo: "https://youtu.be/example6"
  },
  {
    title: "Semitone Differences",
    description: "A JavaScript script to calculate semitone differences between musical notes.",
    categories: [categories.GAME, categories.JAVASCRIPT],
    level: levels.BEGINNER,
    image: {
      src: "/images/semitone.png",
      thumbnail: "/images/thumbnails/semitone-thumb.png",
      alt: "Screenshot of semitone difference calculator"
    },
    liveDemo: "https://semitonedifferences.com",
    repo: "https://github.com/Mnqanqeni/semitone-difference",
    techStack: [
      skillsList.JAVASCRIPT,
      skillsList.HTML,
      skillsList.CSS,
      skillsList.MUSIC_THEORY
    ],
    createdDate: "2024-12",
    latestUpdate: "2025-02",
    videoDemo: "https://youtu.be/example7"
  }
];






// const projects = [
//     {
//       title: "Portfolio Website",
//       description: "A personal portfolio built with React and Tailwind to showcase my projects.",
//       categories: ["Frontend", "Full-Stack"],
//       level: "Beginner",
//       image: aboutMe,
//       liveDemo: "https://yourportfolio.com",
//       repo: "https://github.com/yourusername/portfolio",
//       techStack: ["React", "Tailwind CSS", "Vite"],
//       date: "2024-12",
//       videoDemo: "https://youtu.be/example1"
//     },
//     {
//       title: "E-Commerce Store",
//       description: "A full-stack e-commerce site with cart, login, and payment integration.",
//       categories: ["Full-Stack"],
//       level: "Advanced",
//       image: "/images/ecommerce.png",
//       liveDemo: "https://mystore.com",
//       repo: "https://github.com/yourusername/ecommerce-app",
//       techStack: ["React", "Express", "MongoDB", "Stripe API"],
//       date: "2025-02",
//       videoDemo: "https://youtu.be/example2"
//     },
//     {
//       title: "Linux File Permissions CLI Tool",
//       description: "A command-line tool to teach and simulate Linux file permissions.",
//       categories: ["Linux", "Security"],
//       level: "Intermediate",
//       image: "/images/linux-cli.png",
//       repo: "https://github.com/yourusername/linux-cli-tool",
//       techStack: ["Python", "argparse", "Bash"],
//       date: "2024-08",
//       videoDemo: "https://youtu.be/example3"
//     },
//     {
//       title: "CI/CD with GitHub Actions",
//       description: "Configured CI/CD pipelines for a Node.js app using GitHub Actions.",
//       categories: ["DevOps"],
//       level: "Intermediate",
//       image: "/images/github-actions.png",
//       repo: "https://github.com/yourusername/devops-ci-cd",
//       techStack: ["GitHub Actions", "Node.js", "Jest"],
//       date: "2024-11",
//       videoDemo: "https://youtu.be/example4"
//     },
//     {
//       title: "Network Scanner",
//       description: "Built a Python-based LAN scanner to detect connected devices.",
//       categories: ["Networking", "Security"],
//       level: "Advanced",
//       image: "/images/network-scanner.png",
//       repo: "https://github.com/yourusername/network-scanner",
//       techStack: ["Python", "Scapy", "Socket"],
//       date: "2025-01",
//       videoDemo: "https://youtu.be/example5"
//     },
//     {
//       title: "Weather Dashboard",
//       description: "A responsive weather app using OpenWeather API.",
//       categories: ["Frontend", "API"],
//       level: "Beginner",
//       image: "/images/weather-app.png",
//       liveDemo: "https://weatherapp.com",
//       repo: "https://github.com/yourusername/weather-dashboard",
//       techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
//       date: "2024-07",
//       videoDemo: "https://youtu.be/example6"
//     },
//     {
//       title: "Secure Login System",
//       description: "Authentication system using bcrypt and JWT with Node.js backend.",
//       categories: ["Security", "Backend"],
//       level: "Intermediate",
//       image: "/images/login-system.png",
//       repo: "https://github.com/yourusername/secure-login",
//       techStack: ["Node.js", "Express", "JWT", "bcrypt"],
//       date: "2024-10",
//       videoDemo: "https://youtu.be/example7"
//     },
//     {
//       title: "AWS VPC Setup",
//       description: "Configured and secured a Virtual Private Cloud (VPC) on AWS with subnets.",
//       categories: ["Cloud", "Networking"],
//       level: "Advanced",
//       image: "/images/aws-vpc.png",
//       techStack: ["AWS", "VPC", "IAM", "EC2"],
//       date: "2025-03",
//       videoDemo: "https://youtu.be/example8"
//     }
//   ];