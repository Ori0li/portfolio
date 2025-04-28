"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import "./projectDetail.css";
import Comment from "@/components/comment/Comment";

const projects = [
  {
    id: "p1",
    name: "Project One",
    description: "설명 1",
    thumbnail: "/dosomething.jpg",
    skills: ["React", "TypeScript", "Next.js"],
    details:
      "이 프로젝트는 React와 TypeScript를 활용하여 개발된 웹 애플리케이션입니다. Next.js 프레임워크를 사용하여 서버사이드 렌더링을 구현했습니다.",
  },
  {
    id: "p2",
    name: "Project Two",
    description: "설명 2",
    thumbnail: "/dosomething.jpg",
    skills: ["Node.js", "Express", "MongoDB"],
    details:
      "Node.js와 Express를 사용한 백엔드 API 서버입니다. MongoDB를 데이터베이스로 활용했습니다.",
  },
  {
    id: "p3",
    name: "Project Three",
    description: "설명 3",
    thumbnail: "/dosomething.jpg",
    skills: ["React Native", "Firebase"],
    details:
      "React Native로 개발된 모바일 앱입니다. Firebase를 활용하여 실시간 데이터베이스와 인증을 구현했습니다.",
  },
];

const ProjectPage = () => {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="not-found">프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-container"
    >
      <h1 className="project-title">{project.name}</h1>
      <img
        src={project.thumbnail}
        alt={`${project.name} 상세 이미지`}
        className="project-image"
      />

      <div className="skills-container">
        <h2 className="skills-title">사용 기술</h2>
        <div className="skills-list">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              # {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="project-content">
        <h2 className="content-title">프로젝트 상세</h2>
        <p className="project-description">{project.details}</p>
      </div>

      <Comment />
    </motion.div>
  );
};

export default ProjectPage;
