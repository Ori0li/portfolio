"use client";

import { FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../css/contact.css";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className="contact-heading" variants={itemVariants}>
        Contact Me
      </motion.h2>
      <motion.p className="contact-subheading" variants={itemVariants}>
        Let's build something awesome together!
      </motion.p>

      {/* 연락 수단 */}
      <motion.div className="contact-links" variants={itemVariants}>
        <motion.p
          className="icon-link"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaEnvelope size={24} /> gogo5125@naver.com
        </motion.p>

        <motion.a
          href="https://github.com/Ori0li"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub size={24} /> GitHub
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
