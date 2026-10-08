"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

type Item = { id: string; title: string };

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * 프로젝트 캐러셀. 현재 프로젝트는 가운데 크게, 나머지는 양옆 뒤에 작고 흐리게.
 * 카드 양옆 화살표·제목 옆 탭·스와이프·←/→ 키로 돌려 보고, 끝에서 처음으로 이어짐.
 */
export function ProjectSlider({ head, items, children }: { head: ReactNode; items: Item[]; children: ReactNode }) {
  const [active, setActive] = useState(0);
  const slides = Children.toArray(children);
  const count = slides.length;
  const swipeStart = useRef<number | null>(null);

  const go = (i: number) => setActive(((i % count) + count) % count);

  // 히어로·파이프라인 등에서 #project-... 로 들어오면 그 프로젝트를 가운데로
  useEffect(() => {
    const sync = () => {
      const i = items.findIndex((p) => `#${p.id}` === window.location.hash);
      if (i >= 0) setActive(i);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [items]);

  /** 가운데 기준 상대 위치: 0 가운데, -1 왼쪽 뒤, 1 오른쪽 뒤 */
  const offsetOf = (i: number) => {
    let d = (i - active + count) % count;
    if (d > count / 2) d -= count;
    return d;
  };

  return (
    <>
      <div className="section-head">
        {head}
        <ol className="project-tabs" aria-label="프로젝트 목록">
          {items.map((p, i) => (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                aria-current={i === active ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go(i);
                }}
              >
                <span className="idx">{pad(i + 1)}</span>
                {p.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div
        className="slider"
        role="region"
        aria-roledescription="캐러셀"
        aria-label="프로젝트"
        onKeyDown={(e) => {
          // 스크린샷 라이트박스 안의 ←/→는 라이트박스가 처리
          if ((e.target as HTMLElement).closest("dialog")) return;
          if (e.key === "ArrowLeft") go(active - 1);
          else if (e.key === "ArrowRight") go(active + 1);
        }}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") swipeStart.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (swipeStart.current === null) return;
          const dx = e.clientX - swipeStart.current;
          swipeStart.current = null;
          if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
        }}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
      >
        <button type="button" className="slider-arrow prev" onClick={() => go(active - 1)} aria-label="이전 프로젝트">
          ←
        </button>
        <button type="button" className="slider-arrow next" onClick={() => go(active + 1)} aria-label="다음 프로젝트">
          →
        </button>
        {slides.map((slide, i) => {
          const offset = offsetOf(i);
          const title = items[i]?.title ?? "";
          return (
            <div
              className="slide"
              key={items[i]?.id ?? i}
              data-offset={Math.max(-2, Math.min(2, offset))}
              role="group"
              aria-roledescription="슬라이드"
              aria-label={`${i + 1} / ${count} ${title}`}
              aria-hidden={offset !== 0 || undefined}
            >
              <div className="slide-card" inert={offset !== 0}>
                {slide}
              </div>
              {offset !== 0 ? (
                <button type="button" className="slide-peek" tabIndex={-1} aria-hidden="true" onClick={() => go(i)} />
              ) : null}
            </div>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {items[active] ? `${active + 1}번째 프로젝트, ${items[active].title}` : ""}
      </p>
    </>
  );
}
