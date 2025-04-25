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

const Project = () => {
  return (
    <section style={{ padding: "100px" }}>
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: false, amount: 0.4 }}
          style={{
            marginTop: i === 0 ? 0 : 120, // 겹쳐 보이게
            zIndex: projects.length - i, // 위에 올라올수록 앞에
            position: "relative",
          }}
        >
          <ProjectCard project={p} />
        </motion.div>
      ))}
    </section>
  );
};

export default Project;
