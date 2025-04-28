"use client";

import { motion } from "framer-motion";
import ProjectCard from "./subcomponents/ProjectCard";

const projects = [
  {
    id: "p1",
    name: "Project One",
    description: "설명 1",
    thumbnail: "/dosomething.jpg",
  },
  {
    id: "p2",
    name: "Project Two",
    description: "설명 2",
    thumbnail: "/dosomething.jpg",
  },
  {
    id: "p3",
    name: "Project Three",
    description: "설명 3",
    thumbnail: "/dosomething.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Project = () => {
  return (
    <motion.section
      className="project-section"
      id="project"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {projects.map((p) => (
        <motion.div key={p.id} variants={cardVariants}>
          <ProjectCard project={p} />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Project;
