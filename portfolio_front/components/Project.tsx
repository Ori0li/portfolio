import React from "react";
import "./css/project.css";

const Project = () => {
  return (
    <section className="project-section">
      <div className="project-header">
        <div className="business-title">Our Business</div>
        <div className="date">(01/08)</div>
      </div>

      <h1 className="furniture-title">Furniture</h1>

      <p className="description">
        공간별 특성에 최적화된 디자인으로 삶의 가치를 높이고, 편안함에
        <br />
        품격을 더해, 본동의 일상에 특별함을 선사합니다
      </p>

      <a href="#" className="more-info">
        More info
        <span className="arrow">→</span>
      </a>
    </section>
  );
};

export default Project;
