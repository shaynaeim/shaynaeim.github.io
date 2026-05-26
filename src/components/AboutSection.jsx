import ScrollHint from './ScrollHint';

export default function AboutSection() {
  return (
    <div className="about-wrapper">
      <div className="about-img">
        <img src="/img/developer.jpeg" alt="Front-End Developer" />
      </div>
      <div className="biref-about-intro">
        <p>
          I&apos;m a detail-oriented and agile learner with a PhD in Mathematics and over three
          years of software development experience. Beyond building applications, I apply my
          expertise in scientific modeling, statistical analysis, and knowledge representation to
          tackle data-driven challenges. Skilled in Python, SQL, TensorFlow, LLMs, and machine
          learning, I combine rigorous mathematical research with practical engineering to design
          and deploy effective solutions.
        </p>
        <br />
        <p>
          I&apos;m genuinely passionate about research and coding, and I can immerse myself in it
          for hours. I chose this career for its continuous challenges and growth opportunities.
          <br />
          <br />
          I love starting my mornings by making my own hand-crafted latte, which some days
          it&apos;s a heart, a tulip, or a rosetta, and other days it turns into an abstract
          masterpiece! I&apos;m still on a mission to perfect my swan latte art. I&apos;m also a
          loyal customer at a specific local coffee shop. My all-time favorite drink is a classic
          hot latte with silky foam art, though lately, I&apos;ve been loving the refreshing iced
          strawberry matcha latte trend.
        </p>
      </div>
      <ScrollHint variant="light" />
    </div>
  );
}