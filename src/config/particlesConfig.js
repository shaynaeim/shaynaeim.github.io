export const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: '#7d7d7d',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      onClick: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 81,
        duration: 0.4,
      },
    },
  },
  detectRetina: true,
};
