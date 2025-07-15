
import Navbar from "@core/components/navbar";
import AboutSection from "@core/components/aboutSection";
import HeroSection from "@core/components/heroSection";

import AlasanSection from "@core/components/alasanSection";
import { reasonItems } from "@core/data/reasonItems";
import Footer from "@core/components/footer";
import VarianPopuler from "@core/components/varianPopulerSection";
import VoicesSection from "@core/components/voicesSection";


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
       
        <AlasanSection items={reasonItems} />
        <VoicesSection /> {/* Tambahkan komponen VoicesSection di sini */}
      </main>
      <Footer />
    </div>
  );
}
