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
      <Image src="/images/case-study/global-retailer/challenge-1.svg" alt="Inventory Management Inefficiencies" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Inventory Management Inefficiencies',
    description: 'Difficulty maintaining optimal stock levels across stores and warehouses globally. This leads to increased carrying costs, frequent stockout, and lost sales opportunities, ultimately impacting both revenue and customer satisfaction',
  },
  {
    icon: (
      <Image src="/images/case-study/global-retailer/challenge-2.svg" alt="Supply Chain Visibility Gaps" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Supply Chain Visibility Gaps',
    description: 'Lack of real-time insights leading to overstocking, stockouts, and delays. Without end-to-end supply chain transparency, retailers struggle to forecast demand accurately, react to disruptions, and ensure timely product availability',
  },
  {
    icon: (
      <Image src="/images/case-study/global-retailer/challenge-3.svg" alt="Misaligned Merchandising Strategy" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Misaligned Merchandising Strategy',
    description: 'Challenges in tailoring product assortments to local customer preferences. This mismatch results in slower inventory turnover, higher markdown rates, and missed revenue opportunities in key markets.',
  },
  {
    icon: (
      <Image src="/images/case-study/global-retailer/challenge-4.svg" alt="Fragmented Customer Experiences" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Fragmented Customer Experiences',
    description: 'Inconsistent interactions across digital and physical channels due to siloed systems. Customers expect seamless omnichannel experiences, but data disconnection leads to frustration, lower loyalty, and decreased lifetime value.',
  },
];

const nodHelpSections = [
  {
    title: 'Unified Data Intelligence',
    description:
      'Integrates e-commerce, POS, supply chain, and customer loyalty data into a single neural network, enabling real-time visibility into inventory, sales patterns, and customer behavior across all channels.',
  },
  {
    title: 'Predictive Optimization',
    description:
      'Applies AI-driven analytics to forecast demand, prevent stockouts, optimize replenishment cycles, personalize marketing, and dynamically adjust pricing and merchandising strategies by region and season.',
  },
  {
    title: 'Seamless Omnichannel Experience',
    description:
      'Bridges online and offline retail by offering services like buy-online-pickup-in-store (BOPIS), curbside pickup, and consistent personalized experiences, boosting customer satisfaction and lifetime value.',
  },
];

const useCaseItems = [
  {
    title: 'POS System Connectivity',
    description: 'Seamless connection to diverse point-of-sale systems across regions. This integration empowers retailers to synchronize inventory, sales, and customer engagement',
  },
  {
    title: 'E-commerce Platform Integration',
    description: 'Integrating with platforms like Shopify, Magento, and Salesforce Commerce Cloud enables seamless data synchronization, enhancing operational efficiency and providing a unified view of customer interactions.',
  },
  {
    title: 'Supply Chain Systems',
    description: 'Direct integration with ERP, WMS (Warehouse Management Systems), and TMS (Transportation Management Systems).',
  },
  {
    title: 'Customer Management',
    description: 'By integrating data from loyalty programs, purchase histories, social media interactions, and customer service engagements, businesses can construct comprehensive, real-time profiles.',
  },
];

const valueCards = [
  {
    title: 'Annual Value Addition',
    value: '$80M to $130M',
    subtitle: '',
  },
  {
    title: 'Conversion rates',
    value: '32%',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Projected Financial Impact',
    value: '$10 billion',
    subtitle: '',
  },
  {
    title: 'Reduction in markdowns',
    value: '15%',
    subtitle: 'Optimizing pricing strategies',
  },
];

const dashboardBullets = [
  'Revenue Impact $80M–$130M Annual value creation for global retailers',
  'Performance Metrics +32% | Multichannel conversion improvement',
  'Growth Potential $10B New market opportunity with enhanced intelligence',
];

export default function GlobalRetailerCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Global Retailer Growth–"
        subtitle="Profit Through Precision"
        description="By leveraging DataNeuron's Unified Commerce & Supply Chain Intelligence, a global retailer can transform their operations into a true omnichannel powerhouse, delivering superior customer experiences, operational efficiency, and substantial financial gains. In an increasingly competitive market, DataNeuron provides the technological edge needed for sustainable, scalable growth."
        image="/images/case-study/global-retailer/hero.png"
        mobileImage="/images/case-study/global-retailer/hero-mobile.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Industry Challenge for Retailer Growth"
        description="Multi-national retailers face critical barriers to growth and efficiency."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/global-retailer/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Technical Integration Potential"
        image="/images/case-study/global-retailer/use-case-bg.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="DataNeuron's Impact on Global Retailers"
        subtitle="Driving Operational Efficiency and Customer Engagement"
        cards={valueCards}
      />
      <Dashboard
        title="Retail Revolution: Unlocking Growth Potential"
        subtitle="Transform Your Global Retail Operations with DataNeuron Intelligence"
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/global-retailer/dashboard-web.png"
      />
    </main>
  );
} 