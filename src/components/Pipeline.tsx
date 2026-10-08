import { pipeline } from "@/data/profile";

export function Pipeline() {
  return (
    <section className="strip" aria-labelledby="pipeline-title">
      <div className="wrap">
        <div className="pipeline-head">
          <h2 id="pipeline-title">{pipeline.title}</h2>
        </div>
        <ol className="pipeline">
          {pipeline.steps.map((step) => (
            <li key={step.no}>
              <a href={step.href}>
                <span className="step-top">
                  <span className="step-no">{step.no}</span>
                  <span className="step-hours">
                    <span aria-hidden="true">NCS {step.ncsHours}h</span>
                    <span className="sr-only">NCS 이수시간 {step.ncsHours}시간</span>
                  </span>
                </span>
                <strong>{step.name}</strong>
                <small>{step.scope}</small>
                <em>{step.proof}</em>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
