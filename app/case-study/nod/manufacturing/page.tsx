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
      <Image src="/images/case-study/manufacturing/challenge-1.svg" alt="Inconsistent Operational Visibility" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Inconsistent Operational Visibility',
    description: 'Fragmented data across ERP, MES, and SCADA systems makes it hard to track key metrics like OEE or spot inefficiencies in real time.',
  },
  {
    icon: (
      <Image src="/images/case-study/manufacturing/challenge-2.svg" alt="Persistent Quality Control Issues" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Persistent Quality Control Issues',
    description: 'Without unified monitoring, quality issues often go undetected until late, leading to rework, waste, and customer complaints that drive up cost and risk.',
  },
  {
    icon: (
      <Image src="/images/case-study/manufacturing/challenge-3.svg" alt="Supply Chain Vulnerabilities" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Supply Chain Vulnerabilities',
    description: 'Material delays from supplier issues, logistics disruptions, or inventory errors can significantly impact production especially in complex global supply chains.',
  },
  {
    icon: (
      <Image src="/images/case-study/manufacturing/challenge-4.svg" alt="Overreliance on Manual Monitoring" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Overreliance on Manual Monitoring',
    description: 'High energy use in equipment-heavy environments raises costs and hampers sustainability efforts, especially without detailed visibility into energy data.',
  },
];

const nodHelpSections = [
  {
    title: 'NOD Makes a Difference',
    description:
      'DataNeuron would create a unified logistics intelligence platform by integrating internal data like inventory and shipments with external signals such as weather, politics, and supplier metrics. Using AI, it uncovers hidden risk patterns, delivers early warnings, and offers real-time insights—helping logistics teams shift from reactive responses to proactive, data-driven decisions.',
  },
  {
    title: 'Long-Term Scalability',
    description:
      'As the system evolves with ongoing data ingestion and model refinement, the accuracy and responsiveness of the platform will only improve over time. This continuous learning capability ensures long-term adaptability, making DataNeuron a future-proof investment for logistics providers aiming to stay ahead in a rapidly changing environment.',
  },
  {
    title: 'Enhanced Customer Experience',
    description:
      'By reducing disruptions and improving delivery accuracy, DataNeuron directly enhances the customer experience. Clients benefit from more consistent service, better communication around potential delays, and faster resolution when issues do arise. This increased reliability leads to stronger brand trust and long-term customer loyalty—critical advantages in a market driven by performance and transparency.',
  },
];

const useCaseItems = [
  {
    title: 'Equipment Efficiency',
    description: 'DataNeuron can increase Overall Equipment Effectiveness (OEE) by 15–22%, driven by improved machine utilization, reduced downtime, and predictive maintenance.',
  },
  {
    title: 'Enhanced Product Quality',
    description: 'Real-time monitoring and early anomaly detection could reduce quality defects by up to 32%, minimizing rework and warranty costs while improving customer satisfaction.',
  },
  {
    title: 'Smarter Scheduling',
    description: 'Production scheduling accuracy can improve to over 95%, allowing operations to better align with demand forecasts and reduce idle time or overproduction.',
  },
  {
    title: 'Supply Chain Resilience',
    description: 'The platform can mitigate up to 47% of supply disruptions by detecting early risks and recommending alternate sourcing or adjustments.',
  },
];

const valueCards = [
  {
    title: 'Estimated Annual Value',
    value: '$5B+',
    subtitle: 'For Retailers',
  },
  {
    title: 'Current Annual Revenue',
    value: '30%+',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Value Drivers',
    value: '4',
    subtitle: 'Improved Production + Reduced Defects + Supply Chain Stability + Resource Optimization',
  },
  {
    title: 'Projected Annual Impact',
    value: '$50–75M',
    subtitle: 'Increased by',
  },
];

const dashboardBullets = [
  'Revenue Growth: $40M+ | Measurable impact on bottom line',
  'Sales Forecasting: 25% | Improved accuracy across channels',
  'Customer Loyalty: 90% | Enhanced retention with margin growth of 4–5%',
];

export default function ManufacturingCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Manufacturing Conglomerate –"
        subtitle="Operational Excellence & Supply Chain Resilience"
        description="Large manufacturing conglomerates face rising pressure to boost efficiency, reduce waste, and respond quickly to market shifts. With complex operations spread across plants and regions, challenges like quality issues, downtime, and supply disruptions are common. Aging infrastructure, siloed data, and the push for sustainability further demand real-time insights and greater operational agility."
        image="/images/case-study/manufacturing/hero.png"
        mobileImage="/images/case-study/manufacturing/hero-mobile.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Common Challenges in Manufacturing Conglomerate"
        description="Manufacturing conglomerates struggle with disconnected systems, quality inconsistencies, and supply chain risks across global operations. These challenges limit efficiency, increase costs, and reduce responsiveness in a competitive market."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/manufacturing/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Boosting Efficiency, Quality, and Supply Chain Agility at Scale"
        image="/images/case-study/manufacturing/use-case-bg.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Transformational Value for Retail Enterprises"
        subtitle="Financial Impact Analysis for Enterprise Retail"
        cards={valueCards}
      />
      <Dashboard
        title="Transforming Multi-Channel Retail"
        subtitle="Unified Intelligence Platform for Seamless Operations"
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/manufacturing/dashboard-web.png"
      />
    </main>
  );
} 