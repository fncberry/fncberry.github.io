"use client";

import { useState } from "react";
import type { TrainingSegment, TrainingTone, TrainingUnit } from "@/data/types";
import { ContentDialog } from "./ContentDialog";

type MergedUnit = { name: string; code: string; hours: number };

/** 분야별로 묶고, 여러 학기에 나눠 이수한 같은 능력단위는 합침 */
function groupUnits(segments: TrainingSegment[], units: TrainingUnit[]) {
  return segments.map((segment) => {
    const merged: MergedUnit[] = [];
    for (const unit of units.filter((u) => u.tone === segment.tone)) {
      const existing = merged.find((m) => m.code === unit.code);
      if (existing) existing.hours += unit.hours;
      else merged.push({ name: unit.name, code: unit.code, hours: unit.hours });
    }
    return { ...segment, hours: merged.reduce((sum, u) => sum + u.hours, 0), units: merged };
  });
}

/** NCS 이수시간 그래프. 분야를 가리키면 강조되고, 누르면 그 분야의 능력단위 목록이 열림 */
export function TrainingUnits({ segments, units }: { segments: TrainingSegment[]; units: TrainingUnit[] }) {
  const [active, setActive] = useState<TrainingTone | null>(null);
  const groups = groupUnits(segments, units);
  const totalHours = groups.reduce((sum, g) => sum + g.hours, 0);
  const current = groups.find((g) => g.tone === active);

  // 마우스·키보드 포커스 모두 같은 강조 상태를 씀
  const hoverProps = (tone: TrainingTone) => ({
    "data-on": active === tone || undefined,
    onMouseEnter: () => setActive(tone),
    onFocus: () => setActive(tone),
    onBlur: () => setActive(null),
  });

  return (
    <ContentDialog
      id="training-units-dialog"
      kicker="LEARNING / NCS"
      title="이수한 능력단위"
      description={`능력단위 ${groups.reduce((sum, g) => sum + g.units.length, 0)}개 · 총 ${totalHours}시간`}
      footer={<p className="training-units-note">여러 학기에 나눠 이수한 능력단위는 시간을 합쳐 표시했습니다. 번호는 NCS 능력단위 코드입니다.</p>}
      renderTrigger={(open) => {
        const openAt = (tone: TrainingTone | null) => {
          open();
          requestAnimationFrame(() => {
            if (tone) document.getElementById(`units-${tone}`)?.scrollIntoView({ block: "start" });
          });
        };
        return (
          <>
            <div className="hours-bar" data-active={active ?? undefined} onMouseLeave={() => setActive(null)}>
              {groups.map((g) => (
                <button
                  type="button"
                  key={g.tone}
                  className={`seg seg-${g.tone}`}
                  style={{ flexGrow: g.hours }}
                  aria-haspopup="dialog"
                  aria-label={`${g.label} ${g.hours}시간, 능력단위 ${g.units.length}개 보기`}
                  onClick={() => openAt(g.tone)}
                  {...hoverProps(g.tone)}
                >
                  <b aria-hidden="true">{g.hours}h</b>
                </button>
              ))}
            </div>
            <div className="hours-info">
              <p className="hours-detail">
                {current ? (
                  <>
                    <strong>{current.label}</strong>
                    {current.units.map((u) => u.name).join(" · ")}
                  </>
                ) : (
                  <>
                    <span className="hint-hover">분야를 가리키면 능력단위가, 누르면 자세한 목록이 나옵니다</span>
                    <span className="hint-touch">분야를 누르면 능력단위 목록이 열립니다</span>
                  </>
                )}
              </p>
              <button type="button" className="training-units-open" aria-haspopup="dialog" onClick={() => openAt(null)}>
                능력단위 목록 보기 <span aria-hidden="true">↗</span>
              </button>
            </div>
            <ul className="hours-legend" data-active={active ?? undefined} onMouseLeave={() => setActive(null)}>
              {groups.map((g) => (
                <li key={g.tone}>
                  <button type="button" className="legend-item" aria-haspopup="dialog" onClick={() => openAt(g.tone)} {...hoverProps(g.tone)}>
                    <i className={`dot seg-${g.tone}`} />
                    {g.label}
                    <span>{g.hours}h</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        );
      }}
    >
      <div className="units-groups">
        {groups.map((g) => (
          <section className="units-group" id={`units-${g.tone}`} key={g.tone} aria-labelledby={`units-${g.tone}-title`}>
            <h4 id={`units-${g.tone}-title`}>
              <i className={`dot seg-${g.tone}`} />
              {g.label}
              <span>
                {g.hours}h · {g.units.length}개
              </span>
            </h4>
            <ul>
              {g.units.map((u) => (
                <li key={u.code}>
                  <div>
                    <strong>{u.name}</strong>
                    <code>{u.code}</code>
                  </div>
                  <b>{u.hours}h</b>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </ContentDialog>
  );
}
