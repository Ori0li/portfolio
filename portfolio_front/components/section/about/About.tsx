"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../../css/about.css";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0, rotateX: -90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <motion.section
      ref={sectionRef}
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      style={{ opacity, scale }}
    >
      <div className="about-container">
        <motion.div
          className="about-title"
          variants={titleVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>Who am I?</h2>
        </motion.div>
        <motion.div className="about-content" variants={contentVariants}>
          <motion.div
            className="about-determination"
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {Array.from("IMPOSSIBLE? I'M POSSIBLE").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                style={{ display: "inline-block" }}
                whileHover={{
                  color: "#6e8b3d",
                  y: -5,
                  rotate: Math.random() * 20 - 10,
                  scale: 1.2,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="about-explanation"
            variants={contentVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.p
              whileHover={{
                scale: 1.1,
                x: -20,
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              매번 새로운 도전을 즐길줄 아는
            </motion.p>
            <motion.p
              whileHover={{
                scale: 1.1,
                x: -20,
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <strong>무궁무진한 가능성</strong>을 가진{" "}
              <strong>배우는 것</strong>을 즐기는 개발자가 되도록 하겠습니다
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
