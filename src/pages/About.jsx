import { getAssetPath } from "../components/paths";

export default function About() {
  return (
    <div className="wrap">
      <p className="eyebrow">Hello</p>
      <h1 className="page-title">
        Hi! I'm Noah Aguillon — I build the occasional project, and like to experiment with new technologies.
      </h1>
      <img className="wrap-image" src={`${getAssetPath("images/noahA.jpeg")}`} alt="Noah Aguillon" />
      <div className="about-body">
        <p>
          I graduated from the University of Texas at Austin in 2026. During my time in college, I found a passion for building 
          web applications, working with databases, and configuring cloud infrastructure. 
          I've had multiple opportunities to work on projects with peers that have allowed me to develop my skills in team environments, 
          and I look forward to continuing to learn and grow as a developer.
        </p>
        <p>
          What's on my docket as of late: building a web application that compiles chatlogs to create a storylike representation of the conversations. Check it out on the <a href="/projects">projects page</a>.
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
        <a
          href={`${getAssetPath("Noah_Aguillon_Resume.pdf")}`}
          download="Noah_Aguillon_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
