import HeroSection from '@/components/case-study/nod/HeroSection';
import Challenges from '@/components/case-study/nod/Challenges';
import NodHelp from '@/components/case-study/nod/NodHelp';
import UseCase from '@/components/case-study/nod/UseCase';
import Value from '@/components/case-study/nod/Value';
import Dashboard from '@/components/case-study/nod/Dashboard';
import Image from 'next/image';

const challengeData = [
  {
    title: 'Uncertain Competitive Landscape',
    description: "Lack of clear intelligence on rivals' positioning and strategies creates significant uncertainty.",
    icon: (
      <Image src="/images/case-study/market-expansion/challenge-1.svg" alt="Uncertain Competitive Landscape" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Blind Spots in Market Nuances',
    description: 'Insufficient understanding of new market dynamics leads to misinformed decisions.',
    icon: (
      <Image src="/images/case-study/market-expansion/challenge-2.svg" alt="Blind Spots in Market Nuances" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Risk of Misaligned Offerings',
    description: 'Without proper insight, product offerings may fail to resonate with the new market.',
    icon: (
      <Image src="/images/case-study/market-expansion/challenge-3.svg" alt="Risk of Misaligned Offerings" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Struggle for Market Traction',
    description: 'Ultimately, the absence of intelligence hinders effective market entry and growth.',
    icon: (
      <Image src="/images/case-study/market-expansion/challenge-4.svg" alt="Struggle for Market Traction" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
];

const nodHelpSections = [
  {
    title: 'Gain Unmatched Competitive Foresight',
    description: 'Achieve a 95%+ improvement in identifying competitive threats by deeply analyzing competitor strategies, customer sentiment, and partnerships, enabling accurate anticipation of their moves.',
  },
  {
    title: 'Drive Strategic Market Entry and Product Alignment',
    description: 'Enhance new market entry strategy effectiveness by 70%+ and product-market fit accuracy by 80%+ through predictive intelligence that reveals market nuances and unmet customer needs.',
  },
  {
    title: 'Optimized Acquisition & First to Market',
    description: 'Reduce customer acquisition costs by 45% via precision positioning and increase first-mover opportunities by 65% by identifying emerging trends and underexploited niches.',
  },
];

const useCaseItems = [
  {
    title: 'Predict Competitor Strategies',
    description: 'ORB analyzes product roadmaps, marketing, customer sentiment, and partnerships to forecast competitor moves, providing a crucial head start.',
  },
  {
    title: 'Identify Untapped Opportunities',
    description: 'Go beyond surface-level analysis to uncover hidden market needs and emerging trends for unique entry points.',
  },
  {
    title: 'Enable Proactive Market Positioning',
    description: 'Anticipate market shifts and competitor actions, allowing you to strategically position your offerings ahead of the curve.',
  },
  {
    title: 'Make Data-Driven Entry Decisions',
    description: 'Leverage predictive insights and a comprehensive understanding of the competitive landscape for confident and effective market entry.',
  },
];

const valueCards = [
  {
    title: 'Accelerated Revenue',
    value: '$25M+',
    subtitle: 'Effective Entry Drives Major Revenue Gains with ORB.',
  },
  {
    title: 'Faster Market Penetration & Reduced Costs',
    value: '',
    subtitle: 'Strategic insights lead to quicker market entry and more efficient, targeted marketing spend.',
  },
  {
    title: 'Enhanced Customer Lifetime Value',
    value: '',
    subtitle: 'Improved product-market fit, driven by ORB intelligence, increases customer loyalty and long-term value.',
  },
  {
    title: 'Strong, Defensible Market Positions',
    value: '',
    subtitle: 'ORB empowers companies to establish robust market presence and achieve sustainable growth.',
  },
];

const dashboardBullets = [
  '95%+ improvement in competitive threat detection and 80%+ boost in product-market fit accuracy',
  'ORB accelerates revenue by enhancing entry timing, precision targeting, and customer acquisition efficiency',
  '$25M+ value created through fast market penetration, LTV gains, and reduced marketing spend',
];

export default function MarketExpansionCaseStudy() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Market Expansion Intelligence"
        subtitle="Navigating New Terrains with Foresight"
        description="Expanding into new markets is tough without clear competitive intelligence. Lack of insight into rivals, their strategies, and market nuances leads to poor decisions, wrong products, and weak market share."
        image="/images/case-study/market-expansion/hero.png"
      />
      <Challenges
        title="Navigating New Markets: The Intelligence Imperative"
        description="The Challenge of Expansion Without Foresight"
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/market-expansion/orb-help.png"
        sections={nodHelpSections}
      />
      <UseCase
        title="Predictive Intelligence for Market Dominance"
        image="/images/case-study/market-expansion/use-case-bg.png"
        mobileImage="/images/case-study/market-expansion/use-case-bg-mobile.png"
        imageAlt="ORB Market Expansion Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Tangible Value in Market Expansion"
        subtitle="Accelerating Revenue Growth and Securing Market Leadership"
        cards={valueCards}
      />
      <Dashboard
        title="ORB Market Expansion Dashboard"
        subtitle="Powering faster, smarter entry with $25M+ in accelerated revenue impact"
        bullets={dashboardBullets}
        image="/images/case-study/market-expansion/dashboard-web.png"
        mobileImage="/images/case-study/market-expansion/dashboard-mobile.png"
        buttonText="Schedule a Demo"
      />
    </main>
  );
} 