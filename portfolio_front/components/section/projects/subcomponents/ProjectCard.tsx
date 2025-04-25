import "../../../css/project.css";

type Project = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

type ProjectProp = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectProp) => {
  return (
    <section className="project-card" id="pr">
      <div className="card-text">
        <h2 className="card-title">{project.name}</h2>
        <p className="card-description">{project.description}</p>
        <button className="card-button">More Info</button>
      </div>
      <div className="card-image-container">
        <img
          src={project.thumbnail}
          alt={`${project.name} thumbnail`}
          className="card-image"
        />
      </div>
    </section>
  );
};

export default ProjectCard;
