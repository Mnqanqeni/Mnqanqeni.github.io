import React from "react";
import { motion } from "framer-motion";
import cvFile from '../assets/doc/cv.pdf';
import {timeLineData} from "../data/timeLineData"


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
    <section id="experience" className="bg-primary px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center m-12">
        <h2 className="text-3xl font-bold xl:text-5xl ">Education <span className="text-secondary">and Experience</span></h2>

        <a
          href={cvFile}
          download
          className="inline-block mt-8 px-8 py-4 text-sm font-medium text-white bg-secondary rounded-full shadow hover:bg-accent/90 transition"
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
          {timeLineData.education.map((item, index) => (
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
          {timeLineData.experience.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index + timeLineData.education.length}
            />
          ))}
        </motion.div>
      </div>
      <div className="w-full h-1 bg-gradient-frame-line mt-20" />
    </section>
  );
}
