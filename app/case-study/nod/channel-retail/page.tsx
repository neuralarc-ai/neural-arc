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
      <Image src="/images/case-study/channel-retail/challenge-1.svg" alt="Poor demand forecasting" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Poor demand forecasting',
    description: "Without real-time, integrated data across all touchpoints, retailers struggle to accurately predict what products will sell, when, and where. As a result, they miss sales opportunities or over-order inventory that won't move.",
  },
  {
    icon: (
      <Image src="/images/case-study/channel-retail/challenge-2.svg" alt="Disjointed customer experience" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Disjointed customer experience',
    description: 'Siloed systems disrupt seamless digital-physical journeys, causing pricing inconsistencies, stock issues, and poor recommendations—ultimately hurting satisfaction and loyalty.',
  },
  {
    icon: (
      <Image src="/images/case-study/channel-retail/challenge-3.svg" alt="Excess inventory or stockouts" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Excess inventory or stockouts',
    description: 'Disconnected supply chain and sales data often lead to either too much stock sitting idle—tying up capital and increasing holding costs—or too little stock, resulting in missed sales and frustrated customers.',
  },
  {
    icon: (
      <Image src="/images/case-study/channel-retail/challenge-4.svg" alt="Generic, ineffective marketing campaign" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Generic, ineffective marketing campaign',
    description: 'Without a 360° view of customer behavior across channels, marketing efforts lack personalization. Campaigns are often broad and fail to resonate, driving poor engagement and low ROI.',
  },
];

const nodHelpSections = [
  {
    title: 'Significant Projected Value',
    description:
      'For a traditional retailer with $1B+ in annual revenue, NOD could unlock an estimated $40M+ in annual value through increased sales driven by targeted strategies, operational savings via inventory and logistics optimization, and improved marketing performance and reduced churn.',
  },
  {
    title: 'How NOD Solves It',
    description:
      'NOD would deploy a unified retail intelligence platform tailored for multi-channel environments. Key features include integrated online + offline data infrastructure, hyper-local merchandising, dynamic inventory allocation, and personalized marketing optimization.',
  },
  {
    title: 'Potential Impact of NOD',
    description:
      'NOD offers a transformative opportunity by consolidating fragmented data streams into a unified intelligence layer, unlocking value across the retail operation. This unified view empowers smarter decision-making at every level of your business.',
  },
];

const useCaseItems = [
  {
    title: 'Reversing Declining Store Sales',
    description: 'Shift stagnant or declining store performance to 4–5% positive growth through smarter customer targeting and assortment planning.',
  },
  {
    title: 'Lower Inventory Holding Costs',
    description: 'Implement dynamic inventory optimization strategies that could save millions annually by reducing overstock and improving stock rotation.',
  },
  {
    title: 'Enhanced Marketing ROI (25%+)',
    description: 'Leverage AI-driven customer insights for hyper-targeted marketing—boosting campaign effectiveness while reducing spend waste.',
  },
  {
    title: 'Sales Forecasting Accuracy of 90%+',
    description: 'Advanced predictive analytics to empower merchandising, logistics, and store operations with precise demand forecasting.',
  },
];

const valueCards = [
  {
    title: 'Current Annual Revenue',
    value: '$1B+',
    subtitle: 'Enterprise Scale',
  },
  {
    title: 'Current Annual Revenue',
    value: '4%',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Value Drivers',
    value: '2',
    subtitle: 'Sales growth + Cost reduction',
  },
  {
    title: 'Projected Annual Impact',
    value: '$40M+',
    subtitle: 'Boosting Revenue & Cutting Costs',
  },
];

const dashboardBullets = [
  'Actionable metrics tailored to your business',
  'Real-time visibility across channels',
  'AI-driven recommendations that reduce waste and boost sales'
];

export default function ChannelRetailCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Channel Retail–"
        subtitle="Unified Customer Intelligence"
        description="Traditional retailers, despite having strong brand equity, extensive store networks, and large customer bases, are increasingly struggling to compete with digital-native challengers. These online–first brands leverage advanced data capabilities to drive hyper–personalization, real–time insights, and seamless customer experiences—leaving legacy retailers behind in agility, responsiveness, and customer intelligence."
        image="/images/case-study/channel-retail/hero.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Operational Hurdles in Retail Intelligence"
        description="Brick-and-mortar retailers face a fundamental operational challenge: their data ecosystems are fragmented. Online channels (like e-commerce platforms and mobile apps) and offline systems (like point-of-sale data, in-store traffic, and loyalty programs) often operate in isolation, making it difficult to extract unified insights."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/channel-retail/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Unlocking value at every stage of the retail journey"
        image="/images/case-study/channel-retail/use-case-bg.png"
        mobileImage="/images/case-study/channel-retail/use-case-bg-mobile.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Transformational Value for Retail Enterprises"
        subtitle="Financial Impact Analysis for Enterprise Retail"
        cards={valueCards}
      />
      <Dashboard
        title="Experience Unified Retail Intelligence in Action"
        subtitle="See how NOD delivers real-time insights that drive smarter decisions—from demand forecasting to personalized marketing and inventory optimization."
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/channel-retail/dashboard-web.png"
        mobileImage="/images/case-study/channel-retail/dashboard-mobile.png"
      />
    </main>
  );
} 