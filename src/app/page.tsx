import HowCoHero from "./components/HowCoHero";
import HowCoNav from "./components/HowCoNav";
import AboutSection from "@/app/components/AboutSection";
import SectionDivider1 from "@/app/components/graphics/SectionDivider1";
import styles from "@/app/styles/howco.module.css";
import FrontToolsSection from "./components/FrontToolsSection";
import BackToolsSection from "./components/BackToolsSection";
import TiltDivider from "@/app/components/graphics/TiltDivider";
import SectionDivider2 from "@/app/components/graphics/SectionDivider2";
import PortfolioSection from "./components/PortfolioSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-[118vh] flex-col w-screen h-screen hero-image bg-center bg-cover bg-[url('/howco-hero-bg.jpg')]">
      <HowCoNav />
      <div className="container mt-36 mx-auto w-full">
        <HowCoHero />
      </div>
      <div id={styles.divider}>
        <SectionDivider1 />
      </div>
      <div className="mx-auto w-full">
        <AboutSection />
        <div className="bg-spacy bg-cover h-auto z-2">
          <FrontToolsSection />
        </div>
        <div id={styles.divider}>
          <TiltDivider className="rotate-180 transform scale-x-[-1] z-1" />
        </div>
        <div className="z-5  overflow-hidden">
          <BackToolsSection />
        </div>
        <div className="mt-[-1.25rem] w-screen">
          <SectionDivider2 />
        </div>
        <div className="mt-[-1px]">
          <PortfolioSection />
        </div>
        <div className="rotate-180 mt-[-1px]">
          <SectionDivider1 />
        </div>
        <div className="bg-spacy bg-cover h-auto">
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
