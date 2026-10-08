import { activities, awards } from "@/data/career";
import { OrgLogo } from "./OrgLogo";

function ActivityList() {
  return (
    <ul className="experience-list">
      {activities.map((a) => (
        <li className="experience" key={a.name}>
          <OrgLogo logo={a.logo} />
          <div className="experience-main">
            <div className="experience-head">
              <h4>{a.name}</h4>
              <span className="experience-period">{a.period}</span>
            </div>
            <p className="experience-org">{a.org}</p>
            <p className="experience-role">{a.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function AwardList() {
  return (
    <ul className="awards awards-best">
      {awards.map((award) => (
        <li className="award" key={award.title}>
          <OrgLogo logo={award.logo} />
          <h4 className="award-title">
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
          </h4>
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
  );
}

/** 활동(왼쪽)과 수상(오른쪽)을 한 섹션에 나란히. 좁은 화면에서는 위아래로 */
export function Career() {
  return (
    <section id="activities" className="section" aria-labelledby="career-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">02 — EXPERIENCE &amp; AWARDS</div>
            <h2 id="career-title">활동과 수상</h2>
          </div>
        </div>
        <div className="career-cols">
          <div className="career-col" aria-labelledby="activities-title">
            <h3 className="career-sub" id="activities-title">
              활동 및 경험 <small>{activities.length}</small>
            </h3>
            <ActivityList />
          </div>
          {/* 파이프라인 '기획' 단계가 #journey로 연결됨 */}
          <div className="career-col" id="journey" aria-labelledby="awards-title">
            <h3 className="career-sub" id="awards-title">
              주요 수상 <small>{awards.length}</small>
            </h3>
            <AwardList />
          </div>
        </div>
      </div>
    </section>
  );
}
