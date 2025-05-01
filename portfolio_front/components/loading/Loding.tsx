"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/loading.css";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const progressVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="loading-container"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="loading-inner">
        <motion.div
          className="progress-circle"
          variants={progressVariants}
          initial="initial"
          animate="animate"
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(212, 205, 187, 0.1)"
              strokeWidth="8"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#d4cdbb"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: "center" }}
            />
          </svg>
        </motion.div>
      </div>
      <motion.h2
        className="loading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Loading
      </motion.h2>
    </motion.div>
  );
};

export default LoadingPage;
