import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import "../../../styles/project.css";
import { Project } from "@/types/project";

type ProjectProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <section className="project-card">
      <motion.div
        className="card-text"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="card-title">{project.title}</h2>
        <p className="card-description">{project.description}</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <motion.a
            className="card-button"
            href={project.github}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Github <FaGithub />
          </motion.a>
          <motion.a
            className="card-button"
            href={project.demo}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Demo <BiLinkExternal />
          </motion.a>
          <motion.a
            href={`/project/${project.id}`}
            className="card-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            More Info <BsInfoCircle />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="card-image-container"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          src={project.image}
          alt={`${project.title} thumbnail`}
          className="card-image"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default ProjectCard;
