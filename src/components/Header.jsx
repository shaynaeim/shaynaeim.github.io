import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((open) => !open);
  const closeNav = () => setNavOpen(false);

  return (
    <header className={`site-header${navOpen ? ' nav-open' : ''}`}>
      <div className="header-top clearfix">
        <ul id="menu">
          <li className="nav-logo-item" data-menuanchor="home" id="nav-logo">
            <a href="#home" data-menuanchor="home" className="site-logo l-left">
              <img src="/img/sh-moon.png" alt="Shay Naeimabadi home" />
            </a>
          </li>
          <li className="nav-link-item" data-menuanchor="about">
            <a href="#about">About</a>
          </li>
          <li className="nav-link-item" data-menuanchor="work-experience">
            <a href="#work-experience">Work Experience</a>
          </li>
          <li className="nav-link-item" data-menuanchor="projects">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link-item" data-menuanchor="contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div
          id="myNav"
          className="overlay"
          style={{
            display: navOpen ? 'block' : 'none',
            height: navOpen ? '100%' : '0%',
          }}
        >
          <div className="overlay-content">
            <a href="#home" onClick={closeNav}>
              Home
            </a>
            <a href="#about" onClick={closeNav}>
              About
            </a>
            <a href="#work-experience" onClick={closeNav}>
              Work Experience
            </a>
            <a href="#projects" onClick={closeNav}>
              Projects
            </a>
            <a href="#contact" onClick={closeNav}>
              Contact
            </a>
          </div>
        </div>
        <button
          type="button"
          id="hamburger-menu"
          className={navOpen ? 'is-open' : ''}
          onClick={toggleNav}
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          aria-controls="myNav"
        >
          {navOpen ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
