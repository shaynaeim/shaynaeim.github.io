import ParticlesBackground from './ParticlesBackground';
import { useTyped } from '../hooks/useTyped';

function ScrollHint({ label }) {
  return (
    <div className="super-wrap-header-home wrap-scroll">
      <div className="center">
        <span className="s3">{label}</span>
        <div className="center center-line">
          <div className="line-scroll-wrap">
            <div className="line-1" />
            <div className="line-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeSection() {
  const typedRef = useTyped();

  return (
    <ul className="responsive">
      <li className="header-section" id="header-section">
        <ParticlesBackground />
        <div className="home-bg">
          <div className="bg-layer1 bg-layer" />
          <div className="bg-layer2 bg-layer" />
          <div className="bg-layer3 bg-layer">
            <div id="container" className="shayesteh">
              <ul
                id="scene"
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
                >
                  <div className="shayestehn" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="title-wrapper">
          <div className="center main-wrap type-wrap center main-wrap type-wrap padding-main-wrap">
            <h1 className="welcome">Shay Naeimabadi</h1>
            <span id="typed" ref={typedRef} style={{ whiteSpace: 'pre' }} />
          </div>
        </div>
        <ScrollHint label="About" />
      </li>
    </ul>
  );
}
