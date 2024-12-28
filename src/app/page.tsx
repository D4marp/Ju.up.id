
import Navbar from "@core/components/navbar";
import AboutSection from "@core/components/aboutSection";
import HeroSection from "@core/components/heroSection";
import KemasanSection from "@core/components/kemasanSection";
import AlasanSection from "@core/components/alasanSection";
import { reasonItems } from "@core/data/reasonItems";
import Footer from "@core/components/footer";
import VarianPopuler from "@core/components/varianPopulerSection";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="h-screen flex flex-col gap-4 overflow-hidden">
        <Navbar />
        <HeroSection />
      </header>
      <main className="main-container">
        <AboutSection />
        <VarianPopuler />
        <KemasanSection />
        <AlasanSection items={reasonItems} />
      </main>
      <Footer />
    </div>
  );
}
