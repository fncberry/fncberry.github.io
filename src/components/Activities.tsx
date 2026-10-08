import { activities } from "@/data/career";
import { OrgLogo } from "./OrgLogo";

export function Activities() {
  return (
    <section id="activities" className="section">
      <div className="wrap two-col">
        <div>
          <div className="kicker">02 — EXPERIENCE</div>
          <h2>활동 및 경험</h2>
        </div>
        <ul className="experience-list">
          {activities.map((a) => (
            <li className="experience" key={a.name}>
              <OrgLogo logo={a.logo} />
              <div className="experience-main">
                <div className="experience-head">
                  <h3>{a.name}</h3>
                  <span className="experience-period">{a.period}</span>
                </div>
                <p className="experience-org">{a.org}</p>
                <p className="experience-role">{a.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
