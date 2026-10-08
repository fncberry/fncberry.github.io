import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Noto_Sans_KR } from "next/font/google";
import { site } from "@/data/profile";
import "./globals.css";

// 빌드할 때 내려받아 사이트와 같이 배포됨 (외부 CSS 요청 없음)
const sans = Noto_Sans_KR({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: site.ogTitle,
    description: site.ogDescription,
    locale: "ko_KR",
    // 이미지를 바꾸면 v 숫자를 올려야 카카오톡·슬랙 등이 예전 미리보기를 다시 가져옴
    images: [{ url: "/assets/og.png?v=2", width: 1200, height: 630, alt: "김민서 · AI 시대의 풀스택 프로그래머 — 일상의 문제를 서비스로 풀다." }],
  },
  twitter: { card: "summary_large_image" },
};

// 헤더 배경(--paper)과 맞춤. 다크모드가 없으므로 라이트로 고정
export const viewport: Viewport = { themeColor: "#f8f9fc", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
