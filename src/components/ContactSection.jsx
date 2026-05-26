export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="home-bg">
        <div className="bg-layer1 bg-layer" />
        <div className="bg-layer2 bg-layer" />
        <div className="bg-layer4 bg-layer">
          <div className="shayesteh">
            <ul
              className="scene"
              style={{
                transform: 'translate3d(0px, 0px, 0px)',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                position: 'relative',
              }}
            >
              <li
                className="layer"
                data-depth="0.10"
                style={{
                  transform: 'translate3d(5.79038px, -2.2224px, 0px)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  position: 'relative',
                  display: 'block',
                  left: '0px',
                  top: '0px',
                }}
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="center main-wrap type-wrap">
          <div className="contact-form">
            <div className="contact-info">
              <div className="content">
                <h3>Get In Touch</h3>
                <p>naeim.shay [at] gmail [dot] com</p>
                <div className="social">
                  <a href="https://www.linkedin.com/in/shaynaeim/" target="_blank" rel="noreferrer">
                    <img src="/img/linkedin_gray.png" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/shaynaeim" target="_blank" rel="noreferrer">
                    <img src="/img/github_gray.png" alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="super-wrap-copyright wrap-copyright">
        <div className="align-center">
          <div className="copyright">
            <p>
              <span id="date">© {year}</span>{' '}
              <span className="capital-small">S</span>HAY <span className="capital-small">N</span>
              AEIM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
