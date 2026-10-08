"use client";

import { useState } from "react";
import { ExternalLink } from "./ExternalLink";

/** solved.ac 티어 배지. 외부 이미지를 못 불러오면 통째로 숨김 */
export function SolvedBadge({ handle }: { handle: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <ExternalLink className="ps-badge" href={`https://solved.ac/profile/${handle}`} aria-label={`solved.ac 프로필 ${handle}`}>
      <img
        src={`https://mazassumnida.wtf/api/v2/generate_badge?boj=${handle}`}
        alt="solved.ac 티어 배지"
        height={84}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </ExternalLink>
  );
}
