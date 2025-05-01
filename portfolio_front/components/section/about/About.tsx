"use client";

import { motion } from "framer-motion";
import "../../styles/about.css";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        staggerChildren: 0.08,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="about-container">
        <motion.div className="about-header" variants={textVariants}>
          <motion.h1
            className="about-title"
            whileHover={{
              scale: 1.03,
              rotate: 1,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            About Me
          </motion.h1>
          <motion.div className="about-subtitle" variants={textVariants}>
            <span>
              :Be <br /> Full Stack Developer
            </span>
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
        <div className="about-cards">
          <motion.div
            className="about-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 15px 35px rgba(212, 205, 187, 0.15)",
              y: -5,
              rotate: 1,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {[
              "efficient",
              "punctual",
              "creative",
              "adaptable",
              "flexible",
              "detail",
              "proactive",
            ].map((skill, index) => (
              <motion.p
                key={index}
                variants={skillVariants}
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  x: 5,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 12,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                # {skill}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-quote"
          variants={textVariants}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 8px 20px rgba(212, 205, 187, 0.12)",
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
        >
          <blockquote>
            {Array.from("Small changes make a big difference.").map(
              (char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              )
            )}
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
