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
      <Image src="/images/case-study/pharmaceutical-enterprise/challenge-1.svg" alt="Prolonged R&D Timelines" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Prolonged R&D Timelines',
    description: 'Clinical trials often span years, and identifying the right patient cohorts remains a major bottleneck. The result is delayed time-to-market and inflated R&D spend.',
  },
  {
    icon: (
      <Image src="/images/case-study/pharmaceutical-enterprise/challenge-2.svg" alt="Disjointed Decision-Making" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Disjointed Decision-Making',
    description: 'Fragmented data across research, regulatory, and commercial teams reduces visibility and leads to suboptimal pipeline decisions and missed opportunities.',
  },
  {
    icon: (
      <Image src="/images/case-study/pharmaceutical-enterprise/challenge-3.svg" alt="Regulatory Complexity" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Regulatory Complexity',
    description: 'Disconnected supply chain and sales data often lead to either too much stock sitting idle—tying up capital and increasing holding costs—or too little stock, resulting in missed sales and frustrated customers.',
  },
  {
    icon: (
      <Image src="/images/case-study/pharmaceutical-enterprise/challenge-4.svg" alt="Inefficient Commercial Targeting" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Inefficient Commercial Targeting',
    description: 'Without a 360° view of customer behavior across channels, marketing efforts lack personalization. Campaigns are often broad and fail to resonate, driving poor engagement and low ROI.',
  },
];

const nodHelpSections = [
  {
    title: 'How NOD Can Help',
    description:
      'NOD unifies clinical, regulatory, and commercial data to accelerate R&D, streamline compliance workflows, and enhance targeting for therapies using real-time insights and evidence correlation.',
  },
  {
    title: 'Technical Integration Potential',
    description:
      'NOD integrates seamlessly with LIMS, regulatory platforms, and commercial systems, ensuring secure handling of clinical data. This connectivity enables end-to-end intelligence from research to market execution.',
  },
  {
    title: 'Strategic Advantage',
    description:
      'In a competitive, outcomes-driven pharma landscape, fast, informed decisions are essential. NOD unifies R&D and commercialization intelligence—turning disconnected data into business value from lab to market.',
  },
];

const useCaseItems = [
  {
    title: 'Clinical Trial Enrollment Efficiency: +28%',
    description: 'Accelerate trial startup by identifying ideal participants using EHR, demographic, and behavioral insights.',
  },
  {
    title: 'R&D Decision Quality: +34%',
    description: 'Leverage multi-source data to prioritize promising compounds and abandon unviable candidates early.',
  },
  {
    title: 'Regulatory Cycle Time: -21%',
    description: 'Automate documentation compilation and ensure real-time compliance monitoring across jurisdictions.',
  },
  {
    title: 'Manufacturing Deviation Reduction: -17%',
    description: 'Detect early anomalies in batch data to improve quality control and reduce product recalls.',
  },
];

const valueCards = [
  {
    title: 'Accelerated Clinical Trials',
    value: '+28%',
    subtitle: 'Enrollment Efficiency',
  },
  {
    title: 'Estimated Annual Value',
    value: '$75M–$120M',
    subtitle: "Through NOD's implementation",
  },
  {
    title: 'Improved R&D Outcomes',
    value: '+34%',
    subtitle: 'Decision-Making Accuracy',
  },
  {
    title: 'Reduced Product Recalls',
    value: '-17%',
    subtitle: 'Manufacturing Deviations',
  },
];

const dashboardBullets = [
  'ROI metrics and cost savings achieved',
  'User engagement statistics before and after implementation',
  'Efficiency gains in key processes',
  'Client satisfaction scores',
  'Time-to-value indicators',
];

export default function PharmaceuticalEnterpriseCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Pharmaceutical Enterprise–"
        subtitle="Research Acceleration & Commercial Effectiveness"
        description="Pharmaceuticals is a data-heavy, tightly regulated industry requiring precision and high investment across every stage—from discovery to post-market. Yet, trial complexity, evolving regulations, and commercial pressure strain even top enterprises to stay agile and efficient."
        image="/images/case-study/pharmaceutical-enterprise/hero.png"
        mobileImage="/images/case-study/pharmaceutical-enterprise/hero-mobile.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Key Operational Hurdles in Pharma"
        description="Pharma companies face long R&D cycles, complex compliance demands, and market access hurdles. These challenges slow innovation, raise costs, and impact time-to-market for critical therapies."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/pharmaceutical-enterprise/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Strategic Value Drivers Across the Pharmaceutical Lifecycle"
        image="/images/case-study/pharmaceutical-enterprise/use-case-bg.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Projected Value"
        subtitle="NOD Impact Analysis for Pharmaceutical Enterprise"
        cards={valueCards}
      />
      <Dashboard
        title="Performance Dashboard: Measurable Impact"
        subtitle="Key metrics demonstrating how our solution transformed client outcomes"
        bullets={dashboardBullets}
        buttonText="Schedule a Demo"
        image="/images/case-study/pharmaceutical-enterprise/dashboard-web.png"
      />
    </main>
  );
} 