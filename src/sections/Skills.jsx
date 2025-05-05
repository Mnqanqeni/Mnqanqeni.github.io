import { useState } from "react";

const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind to showcase my projects.",
      categories: ["Frontend", "Full-Stack"],
      level: "Beginner",
      image: "/images/portfolio.png",
      liveDemo: "https://yourportfolio.com",
      repo: "https://github.com/yourusername/portfolio",
      techStack: ["React", "Tailwind CSS", "Vite"],
      date: "2024-12",
      videoDemo: "https://youtu.be/example1"
    },
    {
      title: "E-Commerce Store",
      description: "A full-stack e-commerce site with cart, login, and payment integration.",
      categories: ["Full-Stack"],
      level: "Advanced",
      image: "/images/ecommerce.png",
      liveDemo: "https://mystore.com",
      repo: "https://github.com/yourusername/ecommerce-app",
      techStack: ["React", "Express", "MongoDB", "Stripe API"],
      date: "2025-02",
      videoDemo: "https://youtu.be/example2"
    },
    {
      title: "Linux File Permissions CLI Tool",
      description: "A command-line tool to teach and simulate Linux file permissions.",
      categories: ["Linux", "Security"],
      level: "Intermediate",
      image: "/images/linux-cli.png",
      repo: "https://github.com/yourusername/linux-cli-tool",
      techStack: ["Python", "argparse", "Bash"],
      date: "2024-08",
      videoDemo: "https://youtu.be/example3"
    },
    {
      title: "CI/CD with GitHub Actions",
      description: "Configured CI/CD pipelines for a Node.js app using GitHub Actions.",
      categories: ["DevOps"],
      level: "Intermediate",
      image: "/images/github-actions.png",
      repo: "https://github.com/yourusername/devops-ci-cd",
      techStack: ["GitHub Actions", "Node.js", "Jest"],
      date: "2024-11",
      videoDemo: "https://youtu.be/example4"
    },
    {
      title: "Network Scanner",
      description: "Built a Python-based LAN scanner to detect connected devices.",
      categories: ["Networking", "Security"],
      level: "Advanced",
      image: "/images/network-scanner.png",
      repo: "https://github.com/yourusername/network-scanner",
      techStack: ["Python", "Scapy", "Socket"],
      date: "2025-01",
      videoDemo: "https://youtu.be/example5"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather app using OpenWeather API.",
      categories: ["Frontend", "API"],
      level: "Beginner",
      image: "/images/weather-app.png",
      liveDemo: "https://weatherapp.com",
      repo: "https://github.com/yourusername/weather-dashboard",
      techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      date: "2024-07",
      videoDemo: "https://youtu.be/example6"
    },
    {
      title: "Secure Login System",
      description: "Authentication system using bcrypt and JWT with Node.js backend.",
      categories: ["Security", "Backend"],
      level: "Intermediate",
      image: "/images/login-system.png",
      repo: "https://github.com/yourusername/secure-login",
      techStack: ["Node.js", "Express", "JWT", "bcrypt"],
      date: "2024-10",
      videoDemo: "https://youtu.be/example7"
    },
    {
      title: "AWS VPC Setup",
      description: "Configured and secured a Virtual Private Cloud (VPC) on AWS with subnets.",
      categories: ["Cloud", "Networking"],
      level: "Advanced",
      image: "/images/aws-vpc.png",
      techStack: ["AWS", "VPC", "IAM", "EC2"],
      date: "2025-03",
      videoDemo: "https://youtu.be/example8"
    }
  ];

  

export default function Skills() {
    return (
        <section className="flex flex-col items-center justify-between">
            <div className="text-3xl font-bold py-16">
                <h1> <span className="text-secondary">My </span>Skills</h1>
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}