"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import "./projectDetail.css";
import { getProject } from "@/utils/api";
import { useState, useEffect } from "react";
import { Project } from "@/types/project";
import Comment from "@/components/comment/Comment";

const ProjectPage = () => {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!params?.id) return;
      const data = await getProject(params.id as string);
      setProject(data);
    };
    fetchProject();
  }, [params?.id]);

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
      <h1 className="project-title">{project.title}</h1>
      <img
        src={`/${project.image}`}
        alt={`${project.id} 상세 이미지`}
        className="project-image"
      />

      <div className="skills-container">
        <h2 className="skills-title">사용 기술</h2>
        <div className="skills-list">
          {project.tag.map((skill, index) => (
            <span key={index} className="skill-tag">
              # {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="project-content">
        <h2 className="content-title">프로젝트 상세</h2>
        <p className="project-description">{project.description}</p>
      </div>

      <Comment projectId={project.id.toString()} />
    </motion.div>
  );
};

export default ProjectPage;
