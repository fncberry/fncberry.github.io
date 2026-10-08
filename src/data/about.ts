import type { CapabilityCard, Lecture, TrainingSegment, TrainingUnit } from "./types";

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
  tools: ["Claude Code", "Codex"],
};

export const capabilityCards: CapabilityCard[] = [
  {
    id: "ps",
    kicker: "FOUNDATION",
    title: "Problem Solving",
    lead: "알고리즘과 자료구조로 문제를 정확하게 푸는 힘이 개발의 바탕입니다.",
    chips: ["C", "Python", "Algorithms", "Data Structures"],
    solvedBadge: true,
  },
  {
    id: "pe",
    kicker: "PRODUCT",
    title: "Product Engineering",
    lead: "서비스 기획부터 화면, 데이터, 배포까지 혼자서 끝까지 만듭니다.",
    chips: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "Supabase", "PostgreSQL", "Vercel", "Kakao API", "Gemini API"],
    proof: "익명 인증 · 실시간 데이터 갱신 · 지도·길찾기 API 연동 · 서비스 기획",
  },
];

export const training = {
  kicker: "LEARNING",
  title: "NCS 기반 소프트웨어 실무 교육",
  /** 그래프 분야. 분야별 시간은 아래 units에서 합산 */
  segments: [
    { label: "기획", tone: "plan" },
    { label: "디자인", tone: "design" },
    { label: "개발", tone: "build" },
    { label: "배포", tone: "ship" },
    { label: "데이터 분석", tone: "data" },
  ] satisfies TrainingSegment[],
  // 성적표 순서. code는 NCS 능력단위 코드, tone은 그래프 분야.
  // 같은 능력단위를 여러 학기에 이수하면 학기별로 따로 적고, 화면에서는 합쳐서 보여줌.
  units: [
    { grade: 1, semester: 1, name: "IoT 서비스 모형 기획", code: "2001010603_16v1", hours: 16, tone: "plan" },
    { grade: 1, semester: 1, name: "IoT 응용소프트웨어 기획", code: "2001010607_16v1", hours: 36, tone: "plan" },
    { grade: 1, semester: 2, name: "IoT 서비스 모형 기획", code: "2001010603_16v1", hours: 37, tone: "plan" },
    { grade: 1, semester: 2, name: "IoT 응용소프트웨어 기획", code: "2001010607_16v1", hours: 18, tone: "plan" },
    { grade: 2, semester: 1, name: "화면 구현", code: "2001020225_16v4", hours: 18, tone: "build" },
    { grade: 2, semester: 1, name: "UI 디자인", code: "2001020707_14v1", hours: 33, tone: "design" },
    { grade: 2, semester: 2, name: "화면 구현", code: "2001020225_16v4", hours: 41, tone: "build" },
    { grade: 2, semester: 2, name: "UI 테스트", code: "2001020709_14v1", hours: 9, tone: "design" },
    { grade: 3, semester: 1, name: "데이터베이스 요구사항 분석", code: "2001020401_19v4", hours: 40, tone: "build" },
    { grade: 3, semester: 1, name: "데이터베이스 구현", code: "2001020405_19v4", hours: 29, tone: "build" },
    { grade: 3, semester: 1, name: "프로그래밍 언어 활용", code: "2001020215_15v3", hours: 33, tone: "build" },
    { grade: 3, semester: 1, name: "응용 SW 기초 기술 활용", code: "2001020216_15v3", hours: 36, tone: "build" },
    { grade: 3, semester: 1, name: "빅데이터 분석 결과 시각화", code: "2001010509_21v4", hours: 22, tone: "data" },
    { grade: 3, semester: 1, name: "탐색적 데이터 분석", code: "2001010511_21v4", hours: 49, tone: "data" },
    { grade: 3, semester: 2, name: "SQL활용", code: "2001020413_19v4", hours: 58, tone: "build" },
    { grade: 3, semester: 2, name: "애플리케이션 배포", code: "2001020214_19v5", hours: 31, tone: "ship" },
    { grade: 3, semester: 2, name: "개발자 환경 구축", code: "2001020233_19v4", hours: 30, tone: "ship" },
    { grade: 3, semester: 2, name: "분석 데이터 피처(Feature) 엔지니어링", code: "2001010512_21v1", hours: 29, tone: "data" },
    { grade: 3, semester: 2, name: "빅데이터 분석 모델링", code: "2001010513_21v1", hours: 33, tone: "data" },
  ] satisfies TrainingUnit[],
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
