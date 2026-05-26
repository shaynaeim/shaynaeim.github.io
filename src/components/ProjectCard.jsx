function renderDescription(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return <span key={index}>{part}</span>;
  });
}

export default function ProjectCard({ title, tagline, badges, description, tags, repoUrl, images = [] }) {
  const readmeUrl = `${repoUrl}#readme`;

  return (
    <article className="project-card">
      <header className="project-card-header">
        <h3 className="project-card-title">
          {title}
          <span className="project-card-tagline"> — {tagline}</span>
        </h3>
      </header>

      {images.length > 0 && (
        <div className="project-card-images">
          {images.map((image) => (
            <figure key={image.src} className="project-card-figure">
              <img src={image.src} alt={image.alt || title} loading="lazy" />
            </figure>
          ))}
        </div>
      )}

      {badges?.length > 0 && (
        <div className="project-card-badges">
          {badges.map((badge) => (
            <span key={badge.label} className={`project-badge project-badge--${badge.tone}`}>
              {badge.label}
            </span>
          ))}
        </div>
      )}

      <p className="project-card-description">{renderDescription(description)}</p>

      {tags?.length > 0 && (
        <div className="project-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="project-card-actions">
        <a href={repoUrl} target="_blank" rel="noreferrer" className="project-action-btn">
          Repo
        </a>
        <a href={readmeUrl} target="_blank" rel="noreferrer" className="project-action-btn">
          README
        </a>
      </div>
    </article>
  );
}
