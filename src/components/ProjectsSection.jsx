import { projectDomains } from '../config/projectsData';
import ProjectCard from './ProjectCard';
import ScrollHint from './ScrollHint';

export default function ProjectsSection() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-page-title">Projects by Domain</h1>

      {projectDomains.map((domain) => (
        <section key={domain.name} className="projects-domain">
          <h2 className="projects-domain-title">{domain.name}</h2>
          <div className="projects-grid">
            {domain.projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      ))}
      <ScrollHint variant="dark" />
    </div>
  );
}
