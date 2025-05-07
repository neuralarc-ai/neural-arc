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
      <Image src="/images/case-study/food-service/challenge-1.svg" alt="High Food Waste" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'High Food Waste',
    description: 'Over-ordering and poor inventory planning lead to spoilage rates exceeding 20%. Without real-time visibility, restaurants struggle to align stock with actual demand, driving up costs and waste.',
  },
  {
    icon: (
      <Image src="/images/case-study/food-service/challenge-2.svg" alt="Unclear Menu Profitability" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Unclear Menu Profitability',
    description: 'Restaurants often lack insight into which dishes drive margins versus those that underperform. This limits their ability to optimize menus for profitability or make data-driven pricing decisions.',
  },
  {
    icon: (
      <Image src="/images/case-study/food-service/challenge-3.svg" alt="Labor Inefficiency" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Labor Inefficiency',
    description: 'Static schedules misaligned with actual demand result in understaffing or unnecessary payroll costs. Without data-driven forecasting, labor inefficiencies persist during both peak and off-peak hours.',
  },
  {
    icon: (
      <Image src="/images/case-study/food-service/challenge-4.svg" alt="Generic Customer Experience" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Generic Customer Experience',
    description: 'Limited integration between customer data and operations leads to generic experiences and weaker personalization. This reduces customer satisfaction, loyalty, and long-term engagement.',
  },
];

const nodHelpSections = [
  {
    title: 'How NOD Can Help',
    description:
      'NOD connects to POS, inventory, suppliers, and kitchen ops to deliver real-time insights. It analyzes ingredient data, prep time, and sales to reveal profitable items, reduce waste, optimize pricing, and flag labor inefficiencies.',
  },
  {
    title: 'Real-Time Operational Agility',
    description:
      'In fast-paced restaurants, agility is key. NOD delivers real-time alerts on inventory spikes, sales drops, and staffing issues, enabling instant adjustments that boost efficiency and long-term performance.',
  },
  {
    title: 'Scalable Intelligence for Chains',
    description:
      'NOD provides both enterprise-wide and location-specific insights, helping restaurant groups stay consistent while adapting to local trends—ensuring scalable, market-smart growth.',
  },
];

const useCaseItems = [
  {
    title: 'Food Waste Reduction',
    description: 'Reduce waste from over 20% to under 10% by aligning prep with actual demand through better forecasting, real-time data, and improved communication.',
  },
  {
    title: 'Menu Profitability',
    description: 'Boost margins by up to 25% by highlighting high-performing items and retiring low-margin dishes, streamlining operations, and maximizing profitability.',
  },
  {
    title: 'Labor Efficiency',
    description: 'Reduce staffing costs by aligning schedules with demand forecasts and kitchen complexity.',
  },
  {
    title: 'Customer Experience',
    description: 'Use data to personalize promotions, streamline ordering, and improve consistency—boosting satisfaction by 15%+.',
  },
];

const valueCards = [
  {
    title: 'Estimated Annual Value',
    value: '$750K+',
    subtitle: 'For a mid-sized restaurant',
  },
  {
    title: 'Additional Annual Profit',
    value: '$90,000',
    subtitle: '',
  },
  {
    title: 'Faster Patient Recruitment',
    value: '25%',
    subtitle: 'Accelerate enrollment timelines',
  },
  {
    title: 'Smarter Trial Monitoring',
    value: '35%',
    subtitle: 'Enhance monitoring efficiency',
  },
];

const dashboardBullets = [
  'Live Monitoring: Track food waste, sales trends, and staffing efficiency in real-time.',
  'Predictive Analytics: Forecast demand and optimize resource planning automatically.',
  'Customer Experience Trends: Measure satisfaction scores and loyalty growth over time.'
];

export default function FoodServiceCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Restaurant/Food Service–"
        subtitle="Menu Engineering & Waste Reduction"
        description="Restaurants operate on tight margins and high variability. With shifting consumer preferences, fluctuating ingredient prices, and growing demand for sustainability, operators must balance quality, cost, and speed. However, many still lack the analytical tools to optimize performance across menu design, staffing, and waste management."
        image="/images/case-study/food-service/hero.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Operational Hurdles in a Fast-Paced Food Service World"
        description="From food waste and thin margins to labor inefficiencies, restaurants face constant pressure to balance quality with profitability. Without data-driven insights, these challenges remain persistent and costly."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/food-service/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Comprehensive Business Impact"
        image="/images/case-study/food-service/use-case-bg.png"
        mobileImage="/images/case-study/food-service/use-case-bg-mobile.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Projected ROI"
        subtitle="Forecasting Financial Gains from Smarter Operations"
        cards={valueCards}
      />
      <Dashboard
        title="Operational Excellence Dashboard"
        subtitle="Real-time insights to drive smarter, faster decisions across food service operations"
        bullets={dashboardBullets}
        buttonText="View Dashboard"
        image="/images/case-study/food-service/dashboard-web.png"
        mobileImage="/images/case-study/food-service/dashboard-mobile.png"
      />
    </main>
  );
} 