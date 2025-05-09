import React from "react";
import { motion } from "framer-motion";

const timelineData = {
  education: [
    {
      title: "Software Engineering",
      org: "WeThinkCode_",
      location: "Cape Town, South Africa",
      date: "Feb 2023 – Dec 2024",
      description: [
        "Peer-to-peer learning model with no lectures.",
        "Projects in Java, Python, and systems engineering.",
        "Focus on algorithms, data structures, and networking.",
      ],
    },
    {
      title: "Web Development",
      org: "Umuzi Academy",
      location: "Johannesburg, South Africa",
      date: "Jan 2024 – Present",
      description: [
        "Hands-on projects using JavaScript, Node.js, and PostgreSQL.",
        "Agile methodology and version control with Git.",
        "Real-world client-facing team work.",
      ],
    },
  ],
  experience: [
    {
      title: "Frontend Developer Intern",
      org: "Umuzi",
      location: "Remote",
      date: "Jan 2024 – Present",
      description: [
        "Built React-based dashboards and internal tools.",
        "Implemented reusable components and UI logic.",
        "Collaborated in a remote agile team.",
      ],
    },
    {
      title: "Teaching Assistant",
      org: "WeThinkCode_",
      location: "Cape Town",
      date: "Jul 2023 – Dec 2023",
      description: [
        "Facilitated peer learning sessions and code reviews.",
        "Supported students with debugging and test-driven development.",
      ],
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const TimelineItem = ({ title, org, location, date, description, index }) => (
  <motion.div
    className="relative pl-6 border-l border-secondary/40 pb-8 last:pb-0"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    whileHover={{ y: -4, boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)" }}
    viewport={{ once: true }}
    custom={index}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  >
    <span className="absolute -left-2 top-1 w-4 h-4 bg-accent rounded-full border-2 border-secondary shadow-sm"></span>
    <div className="ml-2 bg-dark-gradient p-3 rounded-lg hover:bg-secondary/5 transition shadow-customBlue">
      <h4 className="text-lg font-semibold text-secondary">{title}</h4>
      <p className="text-sm text-gray-400">
        {org} <span className="text-gray-400">• {location}</span>
      </p>
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold ">Education <span className="text-secondary">and Experience</span></h2>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-2 text-sm font-medium text-white bg-secondary rounded-full shadow hover:bg-accent/90 transition"
        >
          Download Resume
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h3 className="text-2xl font-semibold text-secondary mb-6 border-b border-secondary/20 pb-2">
            Education
          </h3>
          {timelineData.education.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h3 className="text-2xl font-semibold text-secondary mb-6 border-b border-secondary/20 pb-2">
            Experience
          </h3>
          {timelineData.experience.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index + timelineData.education.length}
            />
          ))}
        </motion.div>
      </div>
      <div className="w-full h-1 bg-gradient-frame-line mt-20" />
    </section>
  );
}
