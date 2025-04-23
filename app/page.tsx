import Hero from "@/components/layout/hero-section";
import DNA from "@/components/layout/dna";
import Testimonials from "@/components/layout/testimonials";
import FAQ from "@/components/layout/faq";
import LLM from "@/components/layout/llm";
import CaseStudies from "@/components/layout/case-studies";
import Orb from "@/components/layout/orb";
import OrbFeatures from "@/components/layout/orb-features";
import Nod from "@/components/layout/nod";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4 grain-texture">
      <Hero />
      <Orb />
      <OrbFeatures />
      <LLM />
      <Nod />
      <CaseStudies />
      <DNA />
      <Testimonials />
      <FAQ />
    </main>
  );
}
