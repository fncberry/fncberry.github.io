"use client";

import { useRef, type ReactNode } from "react";

type Base = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
};

/** 버튼 하나로 열거나(trigger), 여러 요소에서 열 수 있게 open 함수를 받아 직접 그림(renderTrigger) */
type Props = Base &
  ({ trigger: ReactNode; triggerClassName: string; renderTrigger?: never } | { renderTrigger: (open: () => void) => ReactNode; trigger?: never; triggerClassName?: never });

export function ContentDialog({ id, kicker, title, description, trigger, triggerClassName, renderTrigger, children, footer }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = () => dialogRef.current?.showModal();

  return (
    <>
      {renderTrigger ? (
        renderTrigger(open)
      ) : (
        <button type="button" className={triggerClassName} aria-haspopup="dialog" aria-controls={id} onClick={open}>
          {trigger}
        </button>
      )}
      <dialog ref={dialogRef} id={id} className="content-dialog"
        aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
            event.currentTarget.close();
          }
        }}>
        <div className="content-dialog-header">
          <div>
            <div className="cap-kicker">{kicker}</div>
            <h3 id={`${id}-title`}>{title}</h3>
            <p id={`${id}-description`}>{description}</p>
          </div>
          <button type="button" className="content-dialog-close" onClick={() => dialogRef.current?.close()} autoFocus>
            닫기 <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="content-dialog-scroll" tabIndex={0} role="region" aria-label={`${title} 내용`}>
          {children}
        </div>
        {footer}
      </dialog>
    </>
  );
}
