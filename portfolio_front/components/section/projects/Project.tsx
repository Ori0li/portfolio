"use client";

import { motion } from "framer-motion";
import ProjectCard from "./subcomponents/ProjectCard";
import { getAllProjects } from "@/utils/api";
import "../../styles/project.css";

const projects = await getAllProjects();

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
    <section id="project" className="project-section">
      <div className="project-container">
        <h1 className="project-title">Projects</h1>
        <motion.div
          className="project-grid"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
