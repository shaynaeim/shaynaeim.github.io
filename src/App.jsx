import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const FULLPAGE_LICENSE = 'gplv3-license';

export default function App() {
  return (
    <>
      <Header />
      <ReactFullpage
        licenseKey={FULLPAGE_LICENSE}
        scrollingSpeed={1000}
        navigation
        controlArrows={false}
        anchors={['home', 'about', 'work-experience', 'projects', 'contact']}
        menu="#menu"
        sectionsColor={['#1b2836', '#FAFAFA', '#FAFAFA', '#1b2836', '#1b2836']}
        sectionSelector=".vertical-scrolling"
        credits={{ enabled: false }}
        render={() => (
          <ReactFullpage.Wrapper>
            <section className="vertical-scrolling">
              <HomeSection />
            </section>
            <section className="vertical-scrolling section-about">
              <AboutSection />
            </section>
            <section className="vertical-scrolling section-work-experience">
              <WorkExperienceSection />
            </section>
            <section className="vertical-scrolling section-projects">
              <ProjectsSection />
            </section>
            <section className="vertical-scrolling section-contact">
              <ContactSection />
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}
