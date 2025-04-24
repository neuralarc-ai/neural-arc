import Hero from "@/components/layout/hero-section";
import DNA from "@/components/layout/dna";
import FAQ from "@/components/layout/faq";
import LLM from "@/components/layout/llm";
import CaseStudies from "@/components/layout/case-studies";
import Orb from "@/components/layout/orb";
import OrbFeatures from "@/components/layout/orb-features";
import Nod from "@/components/layout/nod";
import CaseStudiesMobile from "@/components/layout/case-studies-mobile";
import Suite from "@/components/layout/suite";
import OrbFeaturesMobile from "@/components/layout/orb-features-mobile";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4 grain-texture">
      <Hero />
      <Orb />
      <OrbFeatures />
      <OrbFeaturesMobile />
      <LLM />
      <Nod />
      <CaseStudies />
      <CaseStudiesMobile />
      <Suite />
      <DNA />
      <FAQ />
    </main>
  );
}
