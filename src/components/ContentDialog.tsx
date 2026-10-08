"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  trigger: ReactNode;
  triggerClassName: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function ContentDialog({ id, kicker, title, description, trigger, triggerClassName, children, footer }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className={triggerClassName} aria-haspopup="dialog" aria-controls={id}
        onClick={() => dialogRef.current?.showModal()}>
        {trigger}
      </button>
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
