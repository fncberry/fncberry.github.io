import type { Activity, Award } from "./types";

export const activities: Activity[] = [
  {
    name: "지느러미",
    period: "현재 활동 중",
    org: "고려대학교 창업동아리",
    role: "SW·AI 개발자",
    logo: { kind: "image", src: "/assets/logo-jinuremi.webp", alt: "지느러미 로고", variant: "fill" },
  },
  {
    name: "The Hackerton",
    period: "현재 활동 중",
    org: "서울대학교·연세대학교·고려대학교·KAIST 연합 창업·바이브코딩 학회",
    role: "고려대학교 지부 부회장 겸 교육 담당 운영진",
    logo: { kind: "image", src: "/assets/logo-hackerton.webp", alt: "The Hackerton 로고", variant: "dark" },
  },
  {
    name: "코드베이커리",
    period: "고교 재학 중",
    org: "한국디지털미디어고등학교 코딩 교육봉사 동아리",
    role: "부원",
    logo: { kind: "image", src: "/assets/logo-codebakery.webp", alt: "코드베이커리 로고", variant: "fill" },
  },
];

export const awards: Award[] = [
  {
    title: "한국정보올림피아드 본선",
    subtitle: "Korea Olympiad in Informatics",
    subtitleStyle: "english",
    results: [
      { year: "2022", prize: "동상" },
      { year: "2023", prize: "장려상" },
    ],
    logo: { kind: "image", src: "/assets/logo-koi.webp", alt: "한국정보올림피아드 로고", variant: "round" },
  },
  {
    title: "NYPC",
    subtitle: "Nexon Youth Programming Challenge",
    subtitleStyle: "english",
    results: [{ year: "2022 · 2023 · 2024", prize: "특별상" }],
    logo: { kind: "image", src: "/assets/logo-nypc.webp", alt: "NYPC 로고", variant: "wide" },
  },
  {
    title: "대한민국학생창업주간",
    subtitle: "리버스 BMC 트랙",
    subtitleStyle: "track",
    results: [{ year: "2026", prize: "최우수상" }],
    logo: { kind: "image", src: "/assets/logo-startup-week.webp", alt: "대한민국학생창업주간 로고" },
  },
  {
    title: "CPS Festival",
    subtitle: "Creative Problem Solving Festival",
    subtitleStyle: "english",
    results: [{ year: "2024", prize: "금상" }],
    logo: { kind: "image", src: "/assets/logo-cps.webp", alt: "CPS Festival 로고" },
  },
  {
    title: "goorm Highschool Algorithm Challenge",
    results: [{ year: "2022", prize: "대상" }],
    logo: { kind: "image", src: "/assets/logo-goorm.webp", alt: "goorm 로고", variant: "wide" },
  },
];
