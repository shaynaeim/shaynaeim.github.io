import { workExperiences } from '../config/workExperienceData';
import WorkExperienceCompanyGroup from './WorkExperienceCompanyGroup';
import WorkExperienceItem from './WorkExperienceItem';
import ScrollHint from './ScrollHint';

export default function WorkExperienceSection() {
  return (
    <div className="work-experience-wrapper">
      <h1 className="work-experience-page-title">Work Experience</h1>
      <div className="work-experience-list">
        {workExperiences.map((entry) =>
          entry.roles ? (
            <WorkExperienceCompanyGroup key={entry.slug} {...entry} />
          ) : (
            <WorkExperienceItem key={entry.slug} {...entry} />
          ),
        )}
      </div>
      <ScrollHint variant="light" />
    </div>
  );
}
