export default function About() {
  return (
    <div className="wrap">
      <p className="eyebrow">Hello</p>
      <h1 className="page-title">
        I'm Noah Aguillon — I build the occasional project, and like to expereiment with new technologies.
      </h1>
      <img className="wrap-image" src="/src/data/noahA.jpeg" alt="Noah Aguillon" />
      <div className="about-body">
        <p>
          I graduated from the University of Texas at Austin in 2026. During my time in college, I found a passion for building web applications, working with databases, and configuring cloud infastructure.
          I've had multiple opprtunities to work on projects with peers that allowed me to develope my skills within team environments, and I look forward to continuing to learn and grow as a developer.
        </p>
        <p>
          Whats on my docket as of late: building my database to keep track and recommend myself books that fit my interests. Check it out on the <a href="/projects">projects page</a>.
        </p>
      </div>
      <div className="about-links">
        <a href="mailto:noahaguillon03@gmail.com">Email</a>
        <a href="https://github.com/Scylthren" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/noah-aguillon"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
