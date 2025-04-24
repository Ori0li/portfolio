"use client";

import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

type ProjectModalProps = {
  title: string;
  image: string;
  description: string;
  onClose: () => void;
  codeUrl?: string;
  demoUrl?: string;
  skills: string[];
};

const ProjectModal = ({
  title,
  image,
  description,
  onClose,
  skills,
}: ProjectModalProps) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          <IoClose size={24} />
        </button>
        <div className="text-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <img src={image} alt={title} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
