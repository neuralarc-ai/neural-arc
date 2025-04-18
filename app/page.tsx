import Hero from "@/components/layout/hero-section";
import NeuralNexus from "@/components/layout/neural-nexus";
import DNA from "@/components/layout/dna";
import Testimonials from "@/components/layout/testimonials";
import FAQ from "@/components/layout/faq";
import LLM from "@/components/layout/llm";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <Hero />
      <NeuralNexus />
      <LLM />
      <DNA />
      <Testimonials />
      <FAQ />
    </main>
  );
}
