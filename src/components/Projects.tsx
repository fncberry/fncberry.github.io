import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { existingShots } from "@/lib/assets";
import { ExternalLink } from "./ExternalLink";
import { ShotGallery } from "./ShotGallery";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="project-meta">
      <span>{project.role}</span>
      {project.badge ? (
        <span className={project.badge.live ? "badge-live" : undefined}>{project.badge.label}</span>
      ) : null}
    </div>
  );
}

function ProjectText({ project }: { project: Project }) {
  const titleId = `${project.id}-title`;
  return (
    <>
      <ProjectMeta project={project} />
      <h3 id={titleId}>
        {project.title}
        {project.workingTitle ? (
          <>
            {" "}
            <small className="working-title">{project.workingTitle}</small>
          </>
        ) : null}
      </h3>
      <p className="case-lead">{project.lead}</p>
      <ul className="highlights">
        {project.highlights.map((h) => (
          <li key={h.title}>
            <strong>{h.title}</strong>
            <span>{h.text}</span>
          </li>
        ))}
      </ul>
      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link) => (
          <ExternalLink key={link.href} href={link.href} className={link.primary ? "btn-primary" : undefined}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </>
  );
}

function Details({ project }: { project: Project }) {
  if (!project.details?.length) return null;
  return (
    <details className="more">
      <summary>구현 자세히 보기</summary>
      <ul className="contributions">
        {project.details.map((d) => (
          <li key={d.title}>
            <strong>{d.title}</strong>
            <span>{d.text}</span>
          </li>
        ))}
      </ul>
      {project.note ? <p className="project-note">{project.note}</p> : null}
    </details>
  );
}

function FeatureProject({ project }: { project: Project }) {
  const shots = existingShots(project.shots);
  return (
    <article className="project feature" id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className={`feature-shots ${project.theme}-visual`}>
        <div className="case-index">{project.index}</div>
        <p className="feature-tagline">{project.tagline}</p>
        {shots.length ? <ShotGallery shots={shots} /> : null}
      </div>
      <div className="feature-body">
        <ProjectText project={project} />
        <Details project={project} />
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  const shots = existingShots(project.shots);
  return (
    <article className="project compact" id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="compact-body">
        <ProjectText project={project} />
      </div>
      <div className={`compact-visual ${project.theme}-visual`}>
        <div className="case-index">{project.index}</div>
        <p className="feature-tagline">{project.tagline}</p>
        {project.concept ? (
          <div className="reading-concept">
            <span className="reading-label">{project.concept.label}</span>
            <p lang={project.concept.lang}>
              {project.concept.sample.map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
            <span className="reading-caption">{project.concept.caption}</span>
          </div>
        ) : null}
      </div>
      {shots.length ? (
        <div className="case-shots">
          <div className="case-shots-head">
            <span>SCREENS / 화면 구성</span>
            <span>눌러서 크게 보기</span>
          </div>
          <ShotGallery shots={shots} wide={project.wideShots} />
        </div>
      ) : null}
    </article>
  );
}

export function Projects() {
  const features = projects.filter((p) => p.layout === "feature");
  const compacts = projects.filter((p) => p.layout === "compact");
  return (
    <section id="work" className="section" aria-labelledby="projects-heading">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">01 — DEVELOPMENT EXPERIENCE</div>
            <h2 id="projects-heading">문제에서 시작한 프로젝트</h2>
          </div>
        </div>
        <ol className="project-index" aria-label="프로젝트 목록">
          {projects.map((p, i) => (
            <li key={p.id}>
              <a href={`#${p.id}`}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <strong>{p.shortTitle ?? p.title}</strong>
                <small>{p.summary}</small>
              </a>
            </li>
          ))}
        </ol>
        <div className="features">
          {features.map((p) => (
            <FeatureProject key={p.id} project={p} />
          ))}
        </div>
        {compacts.map((p) => (
          <CompactProject key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
