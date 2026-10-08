import type { AnchorHTMLAttributes } from "react";

/** 새 탭으로 여는 외부 링크 */
export function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
