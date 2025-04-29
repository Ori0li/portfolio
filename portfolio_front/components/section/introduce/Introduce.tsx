"use client";

import { motion } from "framer-motion";
import "../../styles/introduce.css";

const Introduce = () => {
  return (
    <section className="introduce" id="introduce">
      <div className="introduce-job">
        <motion.span>
          {Array.from("Full Stack Developer").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
        <motion.div
          className="underline"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            height: "4px",
            background: "currentColor",
          }}
        />
      </div>
      <div className="introduce-who">
        <motion.span>
          {Array.from("YOONG").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: index * 0.1 + 2.2 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
        <motion.span>
          {Array.from("PORTFOLIO").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: index * 0.1 + 2.7 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
        <motion.div
          className="underline"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 3.7 }}
          style={{
            height: "2px",
            background: "currentColor",
          }}
        />
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
      >
        <div>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
          >
            <path d="M5 12l7 7 7-7" />
          </motion.svg>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.5,
              delay: 0.5,
            }}
            style={{ marginTop: "-15px" }}
          >
            <path d="M5 12l7 7 7-7" />
          </motion.svg>
          <p
            style={{ fontSize: "12px", marginTop: "10px", textAlign: "center" }}
          >
            Scroll
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduce;
