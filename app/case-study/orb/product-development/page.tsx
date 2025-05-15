import HeroSection from '@/components/case-study/nod/HeroSection';
import Challenges from '@/components/case-study/nod/Challenges';
import NodHelp from '@/components/case-study/nod/NodHelp';
import UseCase from '@/components/case-study/nod/UseCase';
import Value from '@/components/case-study/nod/Value';
import Dashboard from '@/components/case-study/nod/Dashboard';
import Image from 'next/image';

const challengeData = [
  {
    title: 'Feature Parity Trap',
    description: 'Teams often replicate competitor features without assessing market demand or differentiation value, resulting in bloated, indistinct products.',
    icon: (
      <Image src="/images/case-study/product-development/challenge-1.svg" alt="Feature Parity Trap" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Blindspot in Market Trends',
    description: 'Lack of foresight into evolving customer expectations prevents organizations from capitalizing on new opportunities early.',
    icon: (
      <Image src="/images/case-study/product-development/challenge-2.svg" alt="Blindspot in Market Trends" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Inefficient Resource Allocation',
    description: 'Without precise intelligence, development spend often goes toward low-impact features, inflating costs, extending timelines, and missing higher-value opportunities.',
    icon: (
      <Image src="/images/case-study/product-development/challenge-3.svg" alt="Inefficient Resource Allocation" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Sluggish Time-to-Market',
    description: 'Delays in identifying market openings allow competitors to launch first, eroding potential share and influence. This late response often forces teams into catch-up mode, reducing the impact of future releases.',
    icon: (
      <Image src="/images/case-study/product-development/challenge-4.svg" alt="Sluggish Time-to-Market" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
];

const nodHelpSections = [
  {
    title: 'How ORB Transforms Results',
    description: 'The ORB platform analyzes a broad spectrum of signals—product releases, user sentiment, hiring activity, and tech investments—to deliver a forward-looking view of where markets and competitors are headed. This enables product leaders to act on insight, not assumption, crafting roadmaps that anticipate customer needs and outpace competitors. Instead of chasing trends, companies lead them—with purpose-built features and timely execution.',
  },
  {
    title: 'Innovation Strategy',
    description: 'ORB empowers product teams to prioritize what matters most: innovation that serves unmet market needs. By highlighting intersections between customer demand and competitive gaps, the platform fuels a development pipeline focused on differentiation and relevance.',
  },
  {
    title: 'Competitive Timing Advantage',
    description: 'With ORB, companies gain a 3+ month edge in identifying and acting on opportunities. This early-mover advantage leads to better-prepared launches, improved positioning, and sustained competitive separation as rivals scramble to catch up.',
  },
];

const useCaseItems = [
  {
    title: '+90% Market Differentiation',
    description: 'ORB reveals whitespace and unmet customer needs, guiding innovative feature development that aligns with emerging demand and avoids feature commoditization.',
  },
  {
    title: '65% More Efficient Roadmapping',
    description: 'Predictive insight aligns product plans with real-time market realities, enabling teams to prioritize high-impact features and eliminate wasteful iterations that drain time and resources.',
  },
  {
    title: '8+ Months Market Foresight',
    description: "ORB detects shifts in customer demand and competitor focus long before they're visible to the market, empowering teams to act early, shape category direction, and secure first-mover advantage.",
  },
  {
    title: '40% Development Efficiency Gain',
    description: 'Resources are focused on high-impact features, improving ROI, accelerating delivery, and minimizing time and effort spent on low-value or misaligned initiatives.',
  },
];

const valueCards = [
  {
    title: 'Current Annual Revenue',
    value: '$500K+',
    subtitle: 'Enterprise Scale',
  },
  {
    title: 'Current Annual Revenue',
    value: '30%+',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Value Drivers',
    value: '3',
    subtitle: 'Strategic Timing + Product-Market Fit + Efficient Development',
  },
  {
    title: 'Projected Annual Impact',
    value: '750K+',
    subtitle: 'Additional Product Revenue with ORB',
  },
];

const dashboardBullets = [
  '+90% improvement in product differentiation and 65% more efficient roadmapping',
  'Early signal detection through hiring patterns, patents, and executive commentary',
  'Up to 8.2x ROI and $750K in revenue gains across leading SaaS industries',
];

export default function ProductDevelopmentCaseStudy() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Product Development Advantage–"
        subtitle="Driving smarter roadmaps through competitive foresight"
        description="In enterprise software, rapid innovation and fierce competition demand smarter product decisions. Yet many teams lack visibility into competitor moves and market shifts, leading to reactive roadmaps and undifferentiated features. Without timely insights, companies risk falling behind despite heavy R&D investment."
        image="/images/case-study/product-development/hero.png"
      />
      <Challenges
        title="Key Challenges in Product Development"
        description="Enterprise software teams often build in the dark—replicating features, missing market shifts, and wasting resources on low-impact development. This reactive approach slows innovation and weakens competitive positioning."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/product-development/orb-help.png"
        sections={nodHelpSections}
      />
      <UseCase
        title="How ORB Converts Market Intelligence into Measurable Product Acceleration"
        image="/images/case-study/product-development/use-case-bg.png"
        mobileImage="/images/case-study/product-development/use-case-bg-mobile.png"
        imageAlt="ORB Product Development Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Quantifiable Value Creation"
        subtitle="Financial Impact Analysis for Enterprise"
        cards={valueCards}
      />
      <Dashboard
        title="ORB Intelligence Dashboard"
        subtitle="Real-time foresight to accelerate product strategy and ROI"
        bullets={dashboardBullets}
        image="/images/case-study/product-development/dashboard-web.png"
        mobileImage="/images/case-study/product-development/dashboard-mobile.png"
        buttonText="Get Early Access"
      />
    </main>
  );
} 