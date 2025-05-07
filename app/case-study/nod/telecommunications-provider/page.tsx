import HeroSection from '@/components/case-study/nod/HeroSection';
import Challenges from '@/components/case-study/nod/Challenges';
import NodHelp from '@/components/case-study/nod/NodHelp';
import UseCase from '@/components/case-study/nod/UseCase';
import Value from '@/components/case-study/nod/Value';
import Dashboard from '@/components/case-study/nod/Dashboard';
import Image from 'next/image';

const challengeData = [
  {
    icon: (
      <Image src="/images/case-study/telecommunications-provider/challenge-1.svg" alt="Smarter Network Investments" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Smarter Network Investments',
    description: 'Vast network usage data remains underutilized, leading to misaligned upgrades and higher costs.',
  },
  {
    icon: (
      <Image src="/images/case-study/telecommunications-provider/challenge-2.svg" alt="Proactive Service Protection" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Proactive Service Protection',
    description: 'Operational insights often go unnoticed, missing opportunities to proactively address failures.',
  },
  {
    icon: (
      <Image src="/images/case-study/telecommunications-provider/challenge-3.svg" alt="Churn Reduction Strategies" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Churn Reduction Strategies',
    description: 'Incomplete customer behavior analysis delays intervention, increasing dissatisfaction and churn.',
  },
  {
    icon: (
      <Image src="/images/case-study/telecommunications-provider/challenge-4.svg" alt="Faster Outage Recovery" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Faster Outage Recovery',
    description: 'Slow detection of network anomalies extends service downtime and impacts customer experience.',
  },
];

const nodHelpSections = [
  {
    title: 'Smarter Telecom with Unified AI',
    description:
      'NOD unifies network, customer, and market data to drive smarter, faster decisions. From optimizing infrastructure to enhancing support with NLP, it bridges technical metrics with real user experiences for impactful transformation.',
  },
  {
    title: 'Integration Framework',
    description:
      'NOD connects to network, CRM, and service platforms to unify data and extract insights using NLP and real-time analytics. It also integrates external sources and supports secure deployment across cloud, hybrid, or on-prem models.',
  },
  {
    title: 'Strategic Impact',
    description:
      'NOD helps telecoms connect technical metrics with customer insights, enabling smarter investments, reduced churn, and better service quality through AI-driven decisions and predictive actions.',
  },
];

const useCaseItems = [
  {
    title: 'Boost Network Investment ROI with +23% CapEx Efficiency',
    description: 'Smarter network investment decisions based on usage trends and demand forecasts. Optimize infrastructure spend while aligning with customer needs and traffic flows.',
  },
  {
    title: 'Predictive Maintenance Accuracy Up to 87%',
    description: 'AI models detect anomalies and predict failures before they impact service. This reduces downtime, maintenance costs, and customer complaints.',
  },
  {
    title: 'Customer Churn Reduction by 18%',
    description: 'Behavioral signals and interaction data reveal at-risk users early. Automated workflows can trigger personalized retention strategies.',
  },
  {
    title: 'Service Outage Duration Cut by 42%',
    description: 'Advanced analytics correlate network metrics for faster root-cause analysis. Field teams can resolve issues quicker, improving reliability and satisfaction.',
  },
];

const valueCards = [
  {
    title: 'Boost in Network Investment ROI',
    value: '+23%',
    subtitle: 'Investment Scale',
  },
  {
    title: 'Annual Value Potential',
    value: '$35M–$60M',
    subtitle: 'Through NOD adoption',
  },
  {
    title: 'Accuracy in Predictive Maintenance',
    value: '87%',
    subtitle: '',
  },
  {
    title: 'Reduction in Customer Churn',
    value: '18%',
    subtitle: 'Behavior-driven interventions',
  },
];

const dashboardBullets = [
  'ROI metrics and cost savings achieved',
  'User engagement statistics before and after implementation',
  'Efficiency gains in key processes',
  'Client satisfaction scores',
  'Time-to-value indicators',
];

export default function TelecomProviderCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Telecommunications Provider–"
        subtitle="Network Optimization & Customer Experience"
        description="Telecom providers generate vast amounts of data—from network operations to customer behavior—but siloed systems limit its use. As demand for reliable and personalized connectivity grows, they face pressure to modernize infrastructure and enhance customer experiences."
        image="/images/case-study/telecommunications-provider/hero.png"
        mobileImage="/images/case-study/telecommunications-provider/hero-mobile.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Untapped Data, Unmet Expectations"
        description="Despite having access to vast datasets, telecom companies often struggle to translate technical and behavioral data into actionable insights. This disconnect hampers their ability to proactively enhance network performance and elevate the customer experience."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/telecommunications-provider/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="NOD as a Centralized Intelligence Engine"
        image="/images/case-study/telecommunications-provider/use-case-bg.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Projected Value Creation"
        subtitle="NOD Impact Analysis for Telecom Enterprise"
        cards={valueCards}
      />
      <Dashboard
        title="Performance Dashboard: Measurable Impact"
        subtitle="Key metrics demonstrating how our solution transformed client outcomes"
        bullets={dashboardBullets}
        buttonText="Schedule a Demo"
        image="/images/case-study/telecommunications-provider/dashboard-web.png"
      />
    </main>
  );
} 