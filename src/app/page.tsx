import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileIntro from "@/components/ProfileIntro";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-[#e63946] selection:text-white">
      {/* Trailing Glowing Cursor */}
      <CustomCursor />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Profile Introduction */}
        <ProfileIntro />

        {/* Section 4: Key Metrics / Social Proof */}
        <Metrics />

        {/* Section 4: What I Do / Services */}
        <Services />

        {/* Section 5: Featured Work & Case Studies */}
        <FeaturedWork />

        {/* Section 6: Experience */}
        <Experience />

        {/* Section 7: Tech Stack & Tools */}
        <TechStack />

        {/* Section 8: About */}
        <About />

        <div className="end-grid-surface">
          {/* Section 9: Contact */}
          <Contact />

          {/* Section 10: Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
