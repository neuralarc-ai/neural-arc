import Hero from "@/components/layout/hero-section";
import DrivingValue from "@/components/layout/driving-value";
import NeuralNexus from "@/components/layout/neural-nexus";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <Hero />
      <NeuralNexus />
      <DrivingValue />
    </main>
  );
}
