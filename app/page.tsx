import Hero from "@/components/layout/hero-section";
import DrivingValue from "@/components/layout/driving-value";
import NeuralNexus from "@/components/layout/neural-nexus";
import DNA from "@/components/layout/dna";
import Testimonials from "@/components/layout/testimonials";
import FAQ from "@/components/layout/faq";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <Hero />
      <NeuralNexus />
      <DrivingValue />
      <DNA />
      <Testimonials />
      <FAQ />
    </main>
  );
}
