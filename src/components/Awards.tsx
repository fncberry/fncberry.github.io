import { awards } from "@/data/career";
import { OrgLogo } from "./OrgLogo";

export function Awards() {
  return (
    <section id="journey" className="section">
      <div className="wrap two-col">
        <div>
          <div className="kicker">03 — AWARDS</div>
          <h2>주요 수상</h2>
        </div>
        <ul className="awards awards-best">
          {awards.map((award) => (
            <li className="award" key={award.title}>
              <OrgLogo logo={award.logo} />
              <h3 className="award-title">
                {award.title}
                {award.subtitle && award.subtitleStyle === "track" ? (
                  <>
                    <br />
                    <span className="award-track">{award.subtitle}</span>
                  </>
                ) : null}
                {award.subtitle && award.subtitleStyle !== "track" ? (
                  <small className="award-english" lang="en">
                    {award.subtitle}
                  </small>
                ) : null}
              </h3>
              <div className="award-results">
                {award.results.map((r) => (
                  <span className="award-result" key={r.year + r.prize}>
                    <span className="award-year">{r.year}</span>
                    <span className="award-prize">{r.prize}</span>
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
