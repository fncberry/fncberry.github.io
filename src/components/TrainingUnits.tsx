import type { ReactNode } from "react";
import { ContentDialog } from "./ContentDialog";

type Unit = { grade: number; semester: number; name: string; hours: number };

export function TrainingUnits({ units, children }: { units: Unit[]; children: ReactNode }) {
  const totalHours = units.reduce((sum, unit) => sum + unit.hours, 0);

  return (
    <ContentDialog
      id="training-units-dialog"
      kicker="TRAINING / NCS"
      title="이수한 능력단위"
      description={`${units.length}개 이수 내역 · 총 ${totalHours}시간`}
      triggerClassName="training-units-trigger"
      trigger={
        <>
          {children}
          <span className="training-units-prompt">능력단위 목록 보기 <span aria-hidden="true">↗</span></span>
        </>
      }
      footer={<p className="training-units-note">같은 능력단위의 여러 이수 내역은 각각 표시했습니다.</p>}
    >
      <table className="training-units-table">
        <caption className="sr-only">능력단위 이름과 이수시간</caption>
        <thead>
          <tr><th scope="col">능력단위명</th><th scope="col">시간</th></tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={`${unit.grade}-${unit.semester}-${unit.name}`}>
              <th scope="row">{unit.name}</th>
              <td>{unit.hours}h</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContentDialog>
  );
}
