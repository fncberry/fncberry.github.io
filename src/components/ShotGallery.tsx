"use client";

import { useRef, useState } from "react";
import type { Shot } from "@/data/types";

/** 스크린샷 목록 + 눌렀을 때 크게 보여주는 라이트박스 */
export function ShotGallery({ shots, wide = false }: { shots: Shot[]; wide?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Shot | null>(null);

  const open = (shot: Shot) => {
    setActive(shot);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <ol className={wide ? "shots wide" : "shots"}>
        {shots.map((shot, i) => (
          <li key={shot.src}>
            <figure className="shot">
              <button type="button" onClick={() => open(shot)} aria-label={`${shot.caption} 크게 보기`}>
                <img src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} decoding="async" />
              </button>
              <figcaption>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {shot.caption}
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
        onClose={() => setActive(null)}
      >
        <button type="button" className="lightbox-close" onClick={close}>
          닫기
        </button>
        {active ? (
          <>
            <img src={active.src} alt={active.alt} />
            <p>{active.caption}</p>
          </>
        ) : null}
      </dialog>
    </>
  );
}
