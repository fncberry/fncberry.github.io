import type { ReactNode } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { existingShots } from "@/lib/assets";
import { ExternalLink } from "./ExternalLink";
import { ShotGallery } from "./ShotGallery";
import { ContentDialog } from "./ContentDialog";
import { ProjectSlider } from "./ProjectSlider";

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

/** action: 링크 줄 오른쪽 끝에 붙는 버튼 (예: 구현 자세히 보기) */
function ProjectText({ project, action }: { project: Project; action?: ReactNode }) {
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
        {action}
      </div>
    </>
  );
}

function Details({ project }: { project: Project }) {
  if (!project.details?.length) return null;
  return (
    <ContentDialog
      id={`${project.id}-details`}
      kicker="PROJECT / IMPLEMENTATION"
      title={`${project.title} 구현 이야기`}
      description={`${project.role} · ${project.details.length}개 구현 항목`}
      triggerClassName="project-details-trigger"
      trigger={<><span>구현 자세히 보기</span><span className="project-details-count">{project.details.length}개 항목</span><span className="project-details-arrow" aria-hidden="true">↗</span></>}
    >
      <div className="project-details-content">
        <ol className="project-details-list">
          {project.details.map((d, i) => (
            <li key={d.title}>
              <span className="project-details-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div><h4>{d.title}</h4><p>{d.text}</p></div>
            </li>
          ))}
        </ol>
        {project.note ? <p className="project-note">{project.note}</p> : null}
      </div>
    </ContentDialog>
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
        <ProjectText project={project} action={<Details project={project} />} />
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  const shots = existingShots(project.shots);
  return (
    <article className="project compact" id={project.id} aria-labelledby={`${project.id}-title`}>
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
      <div className="compact-body">
        <ProjectText project={project} />
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
  return (
    <section id="work" className="section" aria-labelledby="projects-heading">
      <div className="wrap">
        <ProjectSlider
          head={
            <div>
              <div className="kicker">01 — DEVELOPMENT EXPERIENCE</div>
              <h2 id="projects-heading">문제에서 시작한 프로젝트</h2>
            </div>
          }
          items={projects.map((p) => ({ id: p.id, title: p.shortTitle ?? p.title }))}
        >
          {projects.map((p) =>
            p.layout === "feature" ? <FeatureProject key={p.id} project={p} /> : <CompactProject key={p.id} project={p} />,
          )}
        </ProjectSlider>
      </div>
    </section>
  );
}
