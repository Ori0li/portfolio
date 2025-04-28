"use client";

import { motion } from "framer-motion";
import "../../css/skill.css";

const Skill = () => {
  const skills = {
    frontend: [
      { icon: "https://cdn.simpleicons.org/html5/000000", name: "HTML" },
      { icon: "https://cdn.simpleicons.org/css3/000000", name: "CSS" },
      {
        icon: "https://cdn.simpleicons.org/javascript/000000",
        name: "JavaScript",
      },
      {
        icon: "https://cdn.simpleicons.org/typescript/000000",
        name: "TypeScript",
      },
      { icon: "https://cdn.simpleicons.org/react/000000", name: "React" },
      { icon: "https://cdn.simpleicons.org/nextdotjs/000000", name: "NextJS" },
    ],
    backend: [
      { icon: "https://cdn.simpleicons.org/nodedotjs/000000", name: "NodeJS" },
      { icon: "https://cdn.simpleicons.org/express/000000", name: "Express" },
      { icon: "https://cdn.simpleicons.org/mysql/000000", name: "MySQL" },
    ],
    devOps: [
      { icon: "https://cdn.simpleicons.org/git/000000", name: "Git" },
      { icon: "https://cdn.simpleicons.org/github/000000", name: "Github" },
      {
        icon: "https://cdn.simpleicons.org/amazonwebservices/000000",
        name: "AWS",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      rotate: [-30, 30, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="skill"
      id="skill"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="skill-grid">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            className="skill-category"
            variants={categoryVariants}
          >
            {skillList.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={skillItemVariants}
                whileHover="hover"
              >
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  width={60}
                  height={60}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skill;
