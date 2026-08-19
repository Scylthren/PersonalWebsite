import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <div className="wrap">
      <p className="eyebrow">Work</p>
      <h1 className="page-title">Projects</h1>
      <p className="lede">
        A running list of things I've built, roughly newest first.
      </p>

      <div className="catalog">
        {projects.map((project, i) => (
          <div className="catalog-item" key={project.title}>
            <div className="catalog-num">
              NO. {String(projects.length - i).padStart(3, "0")}
            </div>
            <div>
              <h2 className="catalog-title">
                <a
                  className="catalog-title-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                </a>
              </h2>
              <p className="catalog-desc">{project.description}</p>
              <div className="catalog-meta">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
                <span className="catalog-date">{project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
