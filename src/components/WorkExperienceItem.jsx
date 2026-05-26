export default function WorkExperienceItem({
  year,
  title,
  company,
  highlights = [],
  description,
  images = [],
}) {
  const hasImages = images.length > 0;
  const hasHighlights = highlights.length > 0;

  return (
    <article className={`work-experience-item${hasImages ? ' has-images' : ''}`}>
      <div className="work-experience-body">
        <p className="work-experience-year">{year}</p>
        <h3 className="work-experience-title">{title}</h3>
        {company && <p className="work-experience-company">{company}</p>}
        {hasHighlights ? (
          <ul className="work-experience-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          description && <p className="work-experience-description">{description}</p>
        )}
      </div>

      {hasImages && (
        <div className="work-experience-images">
          {images.map((image) => (
            <figure key={image.src} className="work-experience-figure">
              <img src={image.src} alt={image.alt || title} loading="lazy" />
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
