import type { CapabilityCard, Lecture, TrainingSegment } from "./types";

export const aiCard = {
  kicker: "CORE / HOW I BUILD",
  title: "AI-native Development",
  lead: "AI로 빠르게 만들고, 검증할 수 있는 구조로 통제합니다.",
  flow: [
    { title: "스펙 정리", text: "요구사항과 화면 흐름을 먼저 문서로" },
    { title: "에이전트 구현", text: "Claude Code로 기능 단위 구현" },
    { title: "교차 검증", text: "회귀 테스트 + Codex로 한 번 더" },
    { title: "직접 리뷰", text: "결과를 읽고 고치며 반복 개선" },
  ],
  proof: [
    { title: "택시투게더", text: "Claude Code로 기획부터 배포까지 전체 개발. 정산·매칭 로직은 순수 함수로 분리해 AI가 바꿔도 회귀 테스트로 확인합니다." },
    { title: "로컬퀘스트", text: "Claude Code와 Codex 두 에이전트로 이중 검증하며 원스토어 출시까지 완료했습니다." },
    { title: "The Hackerton", text: "연합 바이브코딩 학회의 교육 담당 운영진으로 에이전트 개발 환경, Git, GitHub 협업 강의를 진행하고 있습니다." },
  ],
  tools: ["Claude Code", "Codex"],
};

export const capabilityCards: CapabilityCard[] = [
  {
    id: "ps",
    kicker: "FOUNDATION",
    title: "Problem Solving",
    lead: "알고리즘과 자료구조로 문제를 정확하게 푸는 힘이 개발의 바탕입니다.",
    chips: ["C", "Python", "Algorithms", "Data Structures"],
    proof: "KOI 본선 2회 입상 · NYPC 3년 연속 특별상 · 구름 알고리즘 챌린지 대상",
    solvedBadge: true,
  },
  {
    id: "pe",
    kicker: "PRODUCT",
    title: "Product Engineering",
    lead: "서비스 기획부터 화면, 데이터, 배포까지 혼자서 끝까지 만듭니다.",
    chips: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel", "Kakao API"],
    proof: "익명 인증 · 실시간 데이터 갱신 · 지도·길찾기 API 연동 · 서비스 기획",
  },
];

export const training = {
  kicker: "TRAINING",
  title: "NCS 기반 소프트웨어 실무 교육",
  stats: [
    { label: "총 이수", value: "598", unit: "h" },
    { label: "능력단위", value: "19", unit: "개" },
    { label: "성취도 A", value: "18", unit: "/19" },
  ],
  segments: [
    { label: "기획", hours: 107, tone: "plan" },
    { label: "디자인", hours: 42, tone: "design" },
    { label: "개발", hours: 255, tone: "build" },
    { label: "배포", hours: 61, tone: "ship" },
    { label: "데이터 분석", hours: 133, tone: "data" },
  ] satisfies TrainingSegment[],
  dataTrack: {
    title: "Data Analysis",
    meta: "빅데이터 분석 · 133h",
    units: [
      { title: "탐색적 데이터 분석", hours: 49 },
      { title: "피처 엔지니어링", hours: 29 },
      { title: "분석 모델링", hours: 33 },
      { title: "결과 시각화", hours: 22 },
    ],
  },
};

// 강의를 진행하면 planned를 지우면 됨. 새 예정 강의는 같은 형식으로 추가.
export const teaching = {
  kicker: "TEACHING",
  title: "바이브코딩 강의",
  meta: "The Hackerton · 교육 담당 운영진 · 매주 진행",
  lectures: [
    { title: "Agent 프로그래밍 환경 세팅", topic: "AI 코딩 에이전트" },
    { title: "Git 관리 방법", topic: "버전 관리" },
    { title: "GitHub 협업 방법", topic: "협업 워크플로" },
    { title: "Skill과 MCP 사용법", topic: "에이전트 확장", planned: true },
    { title: "Vercel 배포 방법", topic: "웹 배포", planned: true },
    { title: "마크다운으로 에이전트 대형 프로젝트 관리", topic: "프로젝트 관리", planned: true },
  ] satisfies Lecture[],
};
