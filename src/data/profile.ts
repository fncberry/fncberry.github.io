import type { Link, PipelineStep } from "./types";

export const site = {
  url: "https://fncberry.github.io",
  title: "FNCBERRY — 김민서의 포트폴리오",
  description:
    "김민서의 개발 포트폴리오. 기획부터 배포까지 혼자서도 끝까지 만드는 개발자. 택시투게더, 원스토어 출시 앱 로컬퀘스트를 소개합니다.",
  ogTitle: "김민서 · fncberry 포트폴리오",
  ogDescription: "일상의 문제를 서비스로 풀다. 기획부터 배포까지 혼자서도 끝까지 만드는 개발자 김민서의 포트폴리오.",
};

export const profile = {
  name: "김민서",
  handle: "fncberry",
  email: "mseo2454@gmail.com",
  school: ["고려대학교 정보대학", "컴퓨터학과 · 26학번"],
  photo: { src: "/assets/profile.webp", width: 600, height: 681 },
  github: "https://github.com/fncberry",
};

export const hero = {
  eyebrow: "FNCBERRY / PERSONAL PORTFOLIO",
  titleTop: "일상의 문제를",
  titleAccent: "서비스로 풀다.",
  greeting: "안녕하세요, 김민서입니다.",
  intro: ["문제를 찾는 것부터 기획, 디자인, 개발, 배포까지.", "서비스 하나를 처음부터 끝까지, 혼자서도 완성합니다."],
  /** 프로필 사진 뒤에 비스듬히 놓이는 앱 화면 */
  apps: [
    { side: "left", href: "#project-taxi", label: "택시투게더", tag: "LIVE DEMO", src: "/assets/taxi-2-match.webp", width: 674, height: 1210 },
    { side: "right", href: "#project-quest", label: "로컬퀘스트", tag: "ONE STORE", live: true, src: "/assets/localquest-1.webp", width: 731, height: 1300 },
  ] as const,
};

export const nav: Link[] = [
  { label: "프로젝트", href: "#work" },
  { label: "활동", href: "#activities" },
  { label: "주요 수상", href: "#journey" },
  { label: "소개", href: "#about" },
  { label: "연락하기", href: "#contact" },
];

export const pipeline = {
  title: "아이디어에서 출시까지, 한 사람이 끝까지",
  steps: [
    { no: "01 / PLAN", name: "기획", scope: "문제 정의 · 비즈니스 모델", proof: "학생창업주간 BMC 최우수상", ncsHours: 107, href: "#journey" },
    { no: "02 / DESIGN", name: "디자인", scope: "사용자 흐름 · 화면 설계", proof: "지도·바텀시트 중심 UX", ncsHours: 42, href: "#project-quest" },
    { no: "03 / BUILD", name: "개발", scope: "프론트엔드 · 백엔드 · 로직", proof: "택시투게더 전체 개발", ncsHours: 255, href: "#project-taxi" },
    { no: "04 / SHIP", name: "배포", scope: "웹 배포 · 앱 스토어 출시", proof: "Vercel 데모 · 원스토어 출시", ncsHours: 61, href: "#project-quest" },
  ] satisfies PipelineStep[],
};

export const contact = {
  kicker: "05 — GET IN TOUCH",
  title: ["새로운 이야기는", "여기서 시작해요."],
  lead: "프로젝트 이야기, 협업 제안, 가벼운 인사도 좋습니다.",
  socials: [
    { label: "GitHub", href: "https://github.com/fncberry" },
    { label: "solved.ac", href: "https://solved.ac/profile/fncberry" },
    { label: "Dreamhack", href: "https://dreamhack.io/users/39311" },
    { label: "Discord", href: "https://discord.com/users/473786591870058518" },
    { label: "Instagram", href: "https://www.instagram.com/h.f.kms/" },
  ] satisfies Link[],
};

export const education = [
  { school: "고려대학교", detail: "정보대학 컴퓨터학과 · 26학번", period: "2026 — 재학 중" },
  { school: "한국디지털미디어고등학교", detail: "웹프로그래밍과 22기", period: "2023 — 2025" },
];
