import "./ProjectCard.css";
import PropTypes from "prop-types";

const ProjectCard = ({ project, showFeaturedBadge = false }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#00ff00";
      case "in-progress":
        return "#ffff00";
      case "planned":
        return "#0099ff";
      default:
        return "#666";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "⚡";
      case "planned":
        return "📋";
      default:
        return "❓";
    }
  };

  return (
    <div className="project-card">
      {showFeaturedBadge && project.featured && (
        <div className="featured-badge">⭐ FEATURED</div>
      )}

      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span className="project-year">[{project.year}]</span>
          <span
            className="project-status"
            style={{ color: getStatusColor(project.status) }}
          >
            {getStatusIcon(project.status)} {project.status}
          </span>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-technologies">
        <h4>Technologies:</h4>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {project.github && (
          <a
            href={project.github}
            className="project-link github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📁 Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="project-link demo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 Demo
          </a>
        )}
      </div>

      <div className="project-category">
        <span className="category-label">Category:</span>
        <span className="category-value">{project.category}</span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    github: PropTypes.string,
    demo: PropTypes.string,
    status: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
  showFeaturedBadge: PropTypes.bool,
};

export default ProjectCard;
