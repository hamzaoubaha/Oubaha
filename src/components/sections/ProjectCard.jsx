import { ExternalLink, Github } from 'lucide-react';
import Tag from '../shared/Tag';
import './ProjectCard.css';

const tagColors = ['accent', 'emerald', 'purple', 'gold'];

const ProjectCard = ({ project, variant = 'default' }) => {
  const { title, description, technologies, liveUrl, githubUrl, category, year, image } = project;

  // Generate live screenshot from URL using a free service (thum.io)
  // If no liveUrl is present, fallback to local image, then to letter placeholder
  const isLiveUrlValid = liveUrl && liveUrl.startsWith('http');
  const screenshotUrl = isLiveUrlValid ? `https://image.thum.io/get/width/800/crop/800/${liveUrl}` : null;
  const finalImage = screenshotUrl || image;

  return (
    <div className={`project-card project-card--${variant}`}>
      {/* Image / placeholder */}
      <div className="project-card__image">
        {finalImage ? (
          <img src={finalImage} alt={title} className="project-card__img" />
        ) : (
          <div className="project-card__image-placeholder">
            <div className="project-card__image-inner">
              <span className="project-card__project-initial font-mono">
                {title.charAt(0)}
              </span>
            </div>
          </div>
        )}
        <div className="project-card__overlay">
          <div className="project-card__links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{category}</span>
          <span className="project-card__year">{year}</span>
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <div className="project-card__tags">
          {technologies.slice(0, 4).map((tech, i) => (
            <Tag key={tech} label={tech} color={tagColors[i % tagColors.length]} />
          ))}
          {technologies.length > 4 && (
            <Tag label={`+${technologies.length - 4}`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
