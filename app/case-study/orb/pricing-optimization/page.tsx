import HeroSection from '@/components/case-study/nod/HeroSection';
import Challenges from '@/components/case-study/nod/Challenges';
import NodHelp from '@/components/case-study/nod/NodHelp';
import UseCase from '@/components/case-study/nod/UseCase';
import Value from '@/components/case-study/nod/Value';
import Dashboard from '@/components/case-study/nod/Dashboard';
import Image from 'next/image';

const challengeData = [
  {
    title: 'Reactive Pricing Decisions',
    description: 'Many companies adjust prices only in response to competitor moves, sacrificing margins without strategic rationale and creating a downward spiral of value erosion.',
    icon: (
      <Image src="/images/case-study/pricing-optimization/challenge-1.svg" alt="Reactive Pricing Decisions" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Limited Competitive Visibility',
    description: 'Without reliable market intelligence, teams operate with dangerous blind spots around competitor pricing strategies, promotional calendars, and packaging innovations.',
    icon: (
      <Image src="/images/case-study/pricing-optimization/challenge-2.svg" alt="Limited Competitive Visibility" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Value Communication Gaps',
    description: 'Sales teams struggle to articulate premium pricing positions, defaulting to discounting rather than effectively communicating differentiated value.',
    icon: (
      <Image src="/images/case-study/pricing-optimization/challenge-3.svg" alt="Value Communication Gaps" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Revenue Leakage',
    description: 'Poorly structured pricing tiers, excessive discounting, and inconsistent negotiation practices create substantial hidden revenue losses that compound over time.',
    icon: (
      <Image src="/images/case-study/pricing-optimization/challenge-4.svg" alt="Revenue Leakage" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
];

const nodHelpSections = [
  {
    title: 'Strategic Pricing Intelligence',
    description: 'ORB delivers a 50-60% improvement in pricing optimization potential through comprehensive competitive analysis, enabling companies to position offerings based on true market value rather than guesswork.',
  },
  {
    title: 'Real-Time Competitive Awareness',
    description: 'With near real-time detection of competitor promotions and pricing changes, ORB reduces margin erosion by 75%+ and improves customer value perception by 35% through more strategic positioning.',
  },
  {
    title: 'Revenue Opportunity Capture',
    description: 'Companies using ORB report capturing 80%+ more revenue opportunities by identifying optimal pricing windows and strengthening value articulation, resulting in $300,000+ in additional profit.',
  },
];

const useCaseItems = [
  {
    title: 'Comprehensive Market Monitoring',
    description: 'ORB continuously analyzes thousands of digital touchpoints including pricing pages, contract terms, promotional messaging, and customer feedback to deliver complete competitive awareness.',
  },
  {
    title: 'Early Detection of Strategic Shifts',
    description: 'The platform identifies subtle competitor pricing signals—like changes to tier structures, feature bundling, or discount thresholds—well before they impact the market.',
  },
  {
    title: 'Data-Driven Decision Support',
    description: 'ORB transforms raw market intelligence into actionable recommendations that balance competitive positioning with profit optimization, eliminating pricing guesswork.',
  },
  {
    title: 'Strategic Price Leadership',
    description: 'By combining historical pricing data with real-time competitive intelligence, companies move from reactive price matching to confident, proactive pricing strategies that defend premium positions when warranted and adapt when market conditions demand.',
  },
];

const valueCards = [
  {
    title: 'Faster pricing intelligence adoption',
    value: '85%',
    subtitle: 'through seamless integration with existing CRM systems, CPQ platforms, and sales enablement tools',
  },
  {
    title: 'Reduction in internal pricing conflicts',
    value: '60%',
    subtitle: 'by providing cross-functional teams unified access to competitive pricing intelligence dashboards',
  },
  {
    title: 'Increase in pricing strategy execution speed',
    value: '3.5x',
    subtitle: 'as frontline teams leverage real-time competitive data during actual sales negotiations',
  },
  {
    title: 'Improvement in pricing resilience',
    value: '40%',
    subtitle: 'through machine learning algorithms that continuously refine pricing models based on win/loss data and competitor movements',
  },
];

const dashboardBullets = [
  '+75% improvement in margin protection and +50% boost in pricing optimization',
  'ORB surfaces pricing threats early via hiring, patents, and executive signals',
  'ROI up to 8.2x with revenue capture gains across FinTech, HealthTech, and MarTech',
];

export default function PricingOptimizationCaseStudy() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Growth-Stage B2B SaaS"
        subtitle="Pricing and Offer Optimization"
        description="This case study focuses on growth-stage B2B SaaS companies in competitive markets where pricing directly impacts acquisition, retention, and profitability. Limited pricing expertise and fragmented data often lead to suboptimal decisions, eroding margins and missing revenue opportunities."
        image="/images/case-study/pricing-optimization/hero.png"
      />
      <Challenges
        title="Critical Pricing Challenges for Growth-Stage SaaS Companies"
        description="Optimizing SaaS pricing isn't just about numbers—it's about strategic advantage. These common challenges erode margins, limit revenue potential, and leave companies vulnerable to competitors with more sophisticated pricing intelligence."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/pricing-optimization/orb-help.png"
        sections={nodHelpSections}
      />
      <UseCase
        title="From Pricing Reactivity to Strategic Leadership"
        image="/images/case-study/pricing-optimization/use-case-bg.png"
        mobileImage="/images/case-study/pricing-optimization/use-case-bg-mobile.png"
        imageAlt="ORB Pricing Optimization Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Implementation & Long-Term Value"
        subtitle="Converting Pricing Intelligence into Sustainable Advantage"
        cards={valueCards}
      />
      <Dashboard
        title="ORB Pricing Intelligence Dashboard"
        subtitle="Maximizing revenue and margin through early competitive pricing signals"
        bullets={dashboardBullets}
        image="/images/case-study/pricing-optimization/dashboard-web.png"
        mobileImage="/images/case-study/pricing-optimization/dashboard-mobile.png"
        buttonText="Get Early Access"
      />
    </main>
  );
} 