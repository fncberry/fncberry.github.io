// 사이트에 들어가는 모든 콘텐츠의 형태. 디자인을 바꿔도 이 타입은 그대로 쓰면 됨.

export type Link = { label: string; href: string; primary?: boolean };

export type Shot = {
  /** public/ 기준 경로. 파일이 없으면 빌드할 때 자동으로 빠짐 */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Highlight = { title: string; text: string };

export type Project = {
  id: string;
  /** 'feature'는 스크린샷과 함께 크게, 'compact'는 작은 가로 카드 */
  layout: "feature" | "compact";
  index: string;
  title: string;
  /** 프로젝트 목록 카드에 쓰는 짧은 이름 (없으면 title) */
  shortTitle?: string;
  workingTitle?: string;
  tagline: string;
  /** 비주얼 영역 배경 테마 */
  theme: "taxi" | "quest" | "english";
  role: string;
  badge?: { label: string; live?: boolean };
  lead: string;
  highlights: Highlight[];
  tags: string[];
  links: Link[];
  /** 'feature'에서 접어 두는 상세 설명 */
  details?: Highlight[];
  note?: string;
  shots: Shot[];
  /** 가로(데스크톱) 화면 스크린샷이면 true */
  wideShots?: boolean;
  /** 프로젝트 목록 카드에 쓰는 한 줄 요약 */
  summary: string;
  /** 'compact' 카드 비주얼 영역에 들어가는 개념 예시 */
  concept?: { label: string; sample: string[]; caption: string; lang?: string };
};

export type OrgLogo =
  | { kind: "image"; src: string; alt: string; variant?: "dark" | "fill" | "wide" | "round" }
  | { kind: "mono"; text: string };

export type Activity = {
  name: string;
  period: string;
  org: string;
  role: string;
  logo: OrgLogo;
};

export type Award = {
  title: string;
  subtitle?: string;
  /** subtitle을 영문 부제(작은 글씨)로 쓸지, 트랙명(둘째 줄)으로 쓸지 */
  subtitleStyle?: "english" | "track";
  results: { year: string; prize: string }[];
  logo: OrgLogo;
};

export type PipelineStep = {
  no: string;
  name: string;
  scope: string;
  proof: string;
  ncsHours: number;
  href: string;
};

export type CapabilityCard = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  chips: string[];
  proof: string;
  solvedBadge?: boolean;
};

export type TrainingSegment = { label: string; hours: number; tone: "plan" | "design" | "build" | "ship" | "data" };

export type Lecture = { title: string; topic: string; planned?: boolean };
