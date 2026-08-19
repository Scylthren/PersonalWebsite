export default function About() {
  return (
    <div className="wrap">
      <p className="eyebrow">Hello</p>
      <h1 className="page-title">
        I'm Your Name — I build things and write about it here.
      </h1>
      <div className="about-body">
        <p>
          Replace this with a couple of real paragraphs about who you are,
          what you work on, and what you're currently into. Keep it in your
          voice — this page is doing the job of a first impression, not a
          resume.
        </p>
        <p>
          A second paragraph is a good place for what you're curious about
          right now, or a project you're proud of, with a link into the{" "}
          <a href="/projects">projects page</a>.
        </p>
      </div>
      <div className="about-links">
        <a href="mailto:you@example.com">Email</a>
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
