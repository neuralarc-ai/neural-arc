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
      <Image src="/images/case-study/ecommerce/challenge-1.svg" alt="Inventory" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Inventory Management',
    description: 'Challenges with stock tracking, synchronization across channels, and preventing overstock/stockout situations',
  },
  {
    icon: (
      <Image src="/images/case-study/ecommerce/challenge-2.svg" alt="Order Processing" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Order Processing',
    description: 'Complexities in handling multi-channel orders, returns processing, and maintaining fulfillment accuracy',
  },
  {
    icon: (
      <Image src="/images/case-study/ecommerce/challenge-3.svg" alt="Customer Experience" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Customer Experience',
    description: 'Difficulties in providing personalized shopping journeys, consistent service across touchpoints, and managing customer expectations',
  },
  {
    icon: (
      <Image src="/images/case-study/ecommerce/challenge-4.svg" alt="Data Integration" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Data Integration',
    description: 'Struggles with connecting disparate systems, maintaining data consistency, and generating actionable insights from scattered information',
  },
];

const nodHelpSections = [
  {
    title: 'How NOD Can Help',
    description:
      'NOD syncs with sales data, supplier feeds, and market signals to deliver real-time demand forecasts. It uncovers overlooked patterns, enabling smarter restocking, pricing, and promotions while identifying supply chain bottlenecks for better resource allocation.',
  },
  {
    title: 'Alignment Across Teams',
    description:
      'NOD bridges inventory data with marketing, procurement, and finance—enabling smarter decisions, improved coordination, and scalable business growth. This cross-functional visibility helps businesses respond faster to demand shifts and market opportunities.',
  },
  {
    title: 'Customer Experience & Edge',
    description:
      "With better inventory alignment, customers enjoy faster fulfillment, fewer out-of-stock disappointments, and a more reliable shopping experience. This not only increases customer retention and repeat purchases but also strengthens the brand's reputation in a crowded online market—giving smaller players a real edge against larger competitors.",
  },
];

const useCaseItems = [
  {
    title: 'Inventory Carrying Cost Reduction',
    description: 'Eliminating slow-moving SKUs and prioritizing high-demand items can cut inventory costs by up to 40%, freeing capital and boosting operational agility.',
  },
  {
    title: 'Stockout Mitigation',
    description: 'Reducing stockouts by over 80% ensures better product availability, leading to higher order fulfillment rates, improved customer satisfaction, and fewer lost sales.',
  },
  {
    title: 'Trend Forecasting Accuracy',
    description: 'With over 90% accuracy in predicting seasonal trends, businesses can anticipate demand shifts early and adjust inventory with confidence.',
  },
  {
    title: 'Operational Efficiency',
    description: 'Forecasting time reduced by 85%, allowing staff to redirect their efforts toward more strategic initiatives, business growth, and enhancing the overall customer experience.',
  },
];

const valueCards = [
  {
    title: 'Current Annual Revenue',
    value: '$1M+',
    subtitle: 'Enterprise Scale',
  },
  {
    title: 'Annual Savings',
    value: '20%',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Value Drivers',
    value: '3',
    subtitle: 'Better availability + Lower deadstock',
  },
  {
    title: 'Projected Annual Impact',
    value: '$200K+',
    subtitle: 'Yearly Savings & Efficiency Gains',
  },
];

const dashboardBullets = [
  '40% inventory cost savings and $200K+ annual value gain for $1M+ businesses.',
  '80% fewer stockouts and 52% faster turnover (29→14 days).',
  'Clear visual contrast: traditional vs. AI-driven inventory management.'
];

export default function EcommerceCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Revolutionizing E-Commerce – "
        subtitle="Inventory Optimization Potential"
        description="Small and mid-sized e-commerce businesses face intense pressure to manage inventory efficiently. With limited resources, they often find themselves overstocking slow-moving items while running out of popular products. Manual forecasting based on gut instinct or incomplete data can lead to stockouts, deadstock, and missed revenue opportunities—ultimately tying up capital and straining operations."
        image="/images/case-study/case1-hero.png"
      />
      <Challenges
        title="Core Operational Challenges in E-Commerce"
        description="E-commerce brands, especially small to mid-sized players, often face mounting challenges with inventory management. Without accurate, data-driven forecasting, they risk tying up capital in unsold stock while simultaneously missing out on sales due to frequent stockouts—hindering both profitability and growth."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/ecommerce/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="NOD as a Centralized Intelligence Engine"
        image="/images/case-study/ecommerce/use-case-bg.svg"
        mobileImage="/images/case-study/ecommerce/use-case-bg-mobile.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Value Proposition"
        subtitle="Financial Impact Analysis for Online Retailers"
        cards={valueCards}
      />
      <Dashboard
        title="Performance Dashboard: Measurable Impact"
        subtitle="Key metrics demonstrating how our solution transformed client outcomes"
        bullets={dashboardBullets}
        buttonText="Schedule a Demo"
        image="/images/case-study/ecommerce/dashboard-web.png"
        mobileImage="/images/case-study/ecommerce/dashboard-mobile.png"
      />
    </main>
  );
} 