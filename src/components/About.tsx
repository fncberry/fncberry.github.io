import { aiCard, capabilityCards, teaching, training } from "@/data/about";
import { education, profile } from "@/data/profile";
import { SolvedBadge } from "./SolvedBadge";

const pad = (n: number) => String(n).padStart(2, "0");

function AiCard() {
  return (
    <article className="ai-card" aria-labelledby="ai-title">
      <div className="cap-kicker">{aiCard.kicker}</div>
      <h3 id="ai-title">{aiCard.title}</h3>
      <p className="ai-lead">{aiCard.lead}</p>
      <ol className="ai-flow">
        {aiCard.flow.map((step, i) => (
          <li key={step.title}>
            <span>{pad(i + 1)}</span>
            <strong>{step.title}</strong>
            <small>{step.text}</small>
          </li>
        ))}
      </ol>
      <ul className="ai-proof">
        {aiCard.proof.map((p) => (
          <li key={p.title}>
            <strong>{p.title}</strong>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
      <div className="chips on-blue">
        {aiCard.tools.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}

function CapabilityCards() {
  return (
    <div className="cap-grid">
      {capabilityCards.map((card) => (
        <article className="cap-card" aria-labelledby={`${card.id}-title`} key={card.id}>
          <div className="cap-kicker">{card.kicker}</div>
          <h3 id={`${card.id}-title`}>{card.title}</h3>
          <p className="cap-lead">{card.lead}</p>
          <div className="chips">
            {card.chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          <p className="cap-proof">{card.proof}</p>
          {card.solvedBadge ? <SolvedBadge handle={profile.handle} /> : null}
        </article>
      ))}
    </div>
  );
}

function Training() {
  const summary = training.segments.map((s) => `${s.label} ${s.hours}시간`).join(", ");
  return (
    <section className="learning" aria-labelledby="learning-title">
      <div className="learning-head">
        <div>
          <div className="cap-kicker">{training.kicker}</div>
          <h3 id="learning-title">{training.title}</h3>
        </div>
        <dl className="learning-stats">
          {training.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>
                {s.value}
                <small>{s.unit}</small>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hours-bar" role="img" aria-label={`분야별 이수시간: ${summary}`}>
        {training.segments.map((s) => (
          <span key={s.tone} className={`seg seg-${s.tone}`} style={{ flexGrow: s.hours }} title={`${s.label} ${s.hours}시간`}>
            <b>{s.hours}h</b>
          </span>
        ))}
      </div>
      <ul className="hours-legend">
        {training.segments.map((s) => (
          <li key={s.tone}>
            <i className={`dot seg-${s.tone}`} />
            {s.label}
            <span>{s.hours}h</span>
          </li>
        ))}
      </ul>
      <div className="data-track">
        <div className="data-track-head">
          <strong>{training.dataTrack.title}</strong>
          <span>{training.dataTrack.meta}</span>
        </div>
        <ol>
          {training.dataTrack.units.map((u, i) => (
            <li key={u.title}>
              <span>{pad(i + 1)}</span>
              <strong>{u.title}</strong>
              <small>{u.hours}h</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Teaching() {
  return (
    <section className="learning teaching" aria-labelledby="teaching-title">
      <div className="learning-head">
        <div>
          <div className="cap-kicker">{teaching.kicker}</div>
          <h3 id="teaching-title">{teaching.title}</h3>
          <p className="learning-meta">{teaching.meta}</p>
        </div>
      </div>
      <ol className="teach-list">
        {teaching.lectures.map((lecture, i) => (
          <li key={lecture.title} className={lecture.planned ? "planned" : undefined}>
            <span>
              {pad(i + 1)}
              {lecture.planned ? (
                <>
                  {" "}
                  <em>예정</em>
                </>
              ) : null}
            </span>
            <strong>{lecture.title}</strong>
            <small>{lecture.topic}</small>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Education() {
  return (
    <div className="education">
      <h3>학력</h3>
      {education.map((e) => (
        <div className="edu" key={e.school}>
          <div>
            <strong>{e.school}</strong>
            <small>{e.detail}</small>
          </div>
          <time>{e.period}</time>
        </div>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap two-col">
        <div>
          <div className="kicker">04 — ABOUT ME</div>
          <h2 id="about-title">
            개발 역량과
            <br />
            배움의 배경
          </h2>
        </div>
        <div>
          <div className="capabilities">
            <AiCard />
            <CapabilityCards />
          </div>
          <Training />
          <Teaching />
          <Education />
        </div>
      </div>
    </section>
  );
}
