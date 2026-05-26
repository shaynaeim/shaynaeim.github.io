function RoleBlock({ year, title, highlights = [] }) {
  return (
    <div className="work-experience-role">
      <p className="work-experience-year">{year}</p>
      <h4 className="work-experience-role-title">{title}</h4>
      {highlights.length > 0 && (
        <ul className="work-experience-highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function WorkExperienceCompanyGroup({ company, roles = [], images = [] }) {
  const hasImages = images.length > 0;

  return (
    <article className={`work-experience-item work-experience-item--group${hasImages ? ' has-images' : ''}`}>
      <div className="work-experience-body">
        <h3 className="work-experience-title work-experience-company-heading">{company}</h3>
        <div className="work-experience-roles">
          {roles.map((role) => (
            <RoleBlock key={role.slug} {...role} />
          ))}
        </div>
      </div>

      {hasImages && (
        <div className="work-experience-images">
          {images.map((image) => (
            <figure key={image.src} className="work-experience-figure">
              <img src={image.src} alt={image.alt || company} loading="lazy" />
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
