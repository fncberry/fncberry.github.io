"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "./ExternalLink";

/** solved.ac 티어 배지. 외부 이미지를 못 불러오면 통째로 숨김 */
export function SolvedBadge({ handle }: { handle: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  // 하이드레이션 전에 이미 실패한 경우 onError가 불리지 않으므로 직접 확인
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  if (failed) return null;
  return (
    <ExternalLink className="ps-badge" href={`https://solved.ac/profile/${handle}`} aria-label={`solved.ac 프로필 ${handle}`}>
      <img
        ref={imgRef}
        src={`https://mazassumnida.wtf/api/v2/generate_badge?boj=${handle}`}
        alt="solved.ac 티어 배지"
        width={173}
        height={84}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </ExternalLink>
  );
}
