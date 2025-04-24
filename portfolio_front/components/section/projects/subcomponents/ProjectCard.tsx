type ProjectCardProps = {
  image: string;
  title: string;
  onClick: () => void;
  github?: string;
  demo?: string;
  description: string;
  skills: string[];
};

const ProjectCard = ({
  image,
  title,
  onClick,
  github,
  demo,
  description,
  skills,
}: ProjectCardProps) => {
  return (
    <div className="slide" onClick={onClick}>
      <div className="text-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
        <div className="button-group">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="code-btn">코드 보기</button>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="deploy-btn">데모 보기</button>
            </a>
          )}
        </div>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default ProjectCard;
