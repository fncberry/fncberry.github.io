import { teaching, training } from "@/data/about";
import { education } from "@/data/profile";
import { TrainingUnits } from "./TrainingUnits";

const pad = (n: number) => String(n).padStart(2, "0");

function Training() {
  // 총 시간·능력단위 수는 이수 내역에서 계산 (여러 학기에 들은 같은 능력단위는 1개로 셈)
  const totalHours = training.units.reduce((sum, u) => sum + u.hours, 0);
  const unitCount = new Set(training.units.map((u) => u.code)).size;
  const stats = [
    { label: "총 이수", value: totalHours, unit: "h" },
    { label: "능력단위", value: unitCount, unit: "개" },
  ];
  return (
    <section className="learning" aria-labelledby="learning-title">
      <div className="learning-head">
        <div>
          <div className="cap-kicker">{training.kicker}</div>
          <h3 id="learning-title">{training.title}</h3>
        </div>
        <dl className="learning-stats">
          {stats.map((s) => (
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
      <TrainingUnits segments={training.segments} units={training.units} />
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

/** NCS 교육·학력(왼쪽)과 강의(오른쪽) */
export function Learning() {
  return (
    <section id="learning" className="section" aria-labelledby="learning-section-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">04 — LEARNING &amp; TEACHING</div>
            <h2 id="learning-section-title">배움과 가르침</h2>
          </div>
        </div>
        <div className="learning-grid">
          <div className="learning-col">
            <Training />
            <Education />
          </div>
          <Teaching />
        </div>
      </div>
    </section>
  );
}
