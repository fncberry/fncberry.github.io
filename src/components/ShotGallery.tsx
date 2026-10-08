"use client";

import { useRef, useState } from "react";
import type { Shot } from "@/data/types";

/** 스크린샷 목록 + 눌렀을 때 크게 보여주는 라이트박스 (←/→로 넘기기) */
export function ShotGallery({ shots, wide = false }: { shots: Shot[]; wide?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const multiple = shots.length > 1;

  const open = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (d: number) => setActive((i) => (i === null ? i : (i + d + shots.length) % shots.length));
  const shot = active === null ? null : shots[active];

  return (
    <>
      <ol className={wide ? "shots wide" : "shots"}>
        {shots.map((s, i) => (
          <li key={s.src}>
            <figure className="shot">
              <button type="button" onClick={() => open(i)} aria-label={`${s.caption} 크게 보기`}>
                <img src={s.src} width={s.width} height={s.height} alt={s.alt} loading="lazy" decoding="async" />
              </button>
              <figcaption>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="스크린샷 크게 보기"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (!multiple) return;
          if (e.key === "ArrowRight") step(1);
          else if (e.key === "ArrowLeft") step(-1);
        }}
        // close 이벤트가 늦게 오면 그사이 다시 연 사진이 지워지므로, 실제로 닫혀 있을 때만 비움
        onClose={() => {
          if (!dialogRef.current?.open) setActive(null);
        }}
      >
        <button type="button" className="lightbox-close" onClick={close}>
          닫기
        </button>
        {shot ? (
          <>
            <img src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} />
            <div className="lightbox-bar">
              {multiple ? (
                <button type="button" className="lightbox-step" onClick={() => step(-1)} aria-label="이전 스크린샷">
                  ←
                </button>
              ) : null}
              <p aria-live="polite">
                {shot.caption}
                {multiple ? (
                  <span className="lightbox-count">
                    {active! + 1} / {shots.length}
                  </span>
                ) : null}
              </p>
              {multiple ? (
                <button type="button" className="lightbox-step" onClick={() => step(1)} aria-label="다음 스크린샷">
                  →
                </button>
              ) : null}
            </div>
          </>
        ) : null}
      </dialog>
    </>
  );
}
