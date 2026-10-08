import type { NextConfig } from "next";

// GitHub Pages(fncberry.github.io)에 올리기 위해 정적 HTML로 내보냄.
// `npm run build` 결과물은 out/ 폴더에 생김.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
