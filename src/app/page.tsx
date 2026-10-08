import { About } from "@/components/About";
import { Career } from "@/components/Career";
import { Contact, Footer } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Learning } from "@/components/Learning";
import { Pipeline } from "@/components/Pipeline";
import { Projects } from "@/components/Projects";

// 섹션 순서를 바꾸려면 아래 순서만 바꾸면 됨.
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        본문으로 이동
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Pipeline />
        <Projects />
        <Career />
        <About />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
