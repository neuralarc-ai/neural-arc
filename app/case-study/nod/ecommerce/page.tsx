import HeroSection from '@/components/case-study/nod/HeroSection';

export default function EcommerceCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4 grain-texture">
      <HeroSection
        title="Revolutionizing E-Commerce – "
        subtitle="Inventory Optimization Potential"
        description="Small and mid-sized e-commerce businesses face intense pressure to manage inventory efficiently. With limited resources, they often find themselves overstocking slow-moving items while running out of popular products. Manual forecasting based on gut instinct or incomplete data can lead to stockouts, deadstock, and missed revenue opportunities—ultimately tying up capital and straining operations."
        image="/images/case-study/case1-hero.png"
      />
    </main>
  );
} 