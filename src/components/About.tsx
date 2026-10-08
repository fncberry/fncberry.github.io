import { aiCard, capabilityCards } from "@/data/about";
import { profile } from "@/data/profile";
import { SolvedBadge } from "./SolvedBadge";

const pad = (n: number) => String(n).padStart(2, "0");

function AiCard() {
  return (
    <article className="ai-card" aria-labelledby="ai-title">
      <div className="ai-card-top">
        <div className="cap-kicker">{aiCard.kicker}</div>
        <div className="chips on-blue" aria-label="사용 도구">
          {aiCard.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
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
          {card.proof ? <p className="cap-proof">{card.proof}</p> : null}
          {card.solvedBadge ? <SolvedBadge handle={profile.handle} /> : null}
        </article>
      ))}
    </div>
  );
}

/** 일하는 방식(AI-native)과 핵심 역량 */
export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">03 — HOW I BUILD</div>
            <h2 id="about-title">개발 역량</h2>
          </div>
        </div>
        <div className="capabilities">
          <AiCard />
          <CapabilityCards />
        </div>
      </div>
    </section>
  );
}
