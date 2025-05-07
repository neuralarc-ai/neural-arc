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
      <Image src="/images/case-study/supply-chain/challenge-1.svg" alt="Lack of Predictive Visibility" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Lack of Predictive Visibility',
    description: 'Most logistics networks operate with limited foresight into potential disruptions. Without advanced predictive tools, companies remain reactive, responding to problems only after they occur.',
  },
  {
    icon: (
      <Image src="/images/case-study/supply-chain/challenge-2.svg" alt="Fragmented Data Sources" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Fragmented Data Sources',
    description: 'Data is often siloed across various departments, systems, and external partners, making it difficult to form a unified and actionable view of the supply chain ecosystem.',
  },
  {
    icon: (
      <Image src="/images/case-study/supply-chain/challenge-3.svg" alt="High Operational Costs from Reactive Measure" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'High Operational Costs from Reactive Measure',
    description: 'Expedited shipping, last-minute rerouting, and emergency inventory management significantly increase operational expenses when disruptions are handled reactively.',
  },
  {
    icon: (
      <Image src="/images/case-study/supply-chain/challenge-4.svg" alt="Overreliance on Manual Monitoring" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Overreliance on Manual Monitoring',
    description: 'Supply chain analysts spend thousands of hours tracking data and events manually, leaving little room for strategic analysis or proactive decision-making.',
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
    title: 'Early Disruption Detection',
    description: 'Over 65% of potential supply chain disruptions can be identified before they impact operations, allowing for timely intervention.',
  },
  {
    title: 'Improved Delivery Performance',
    description: 'Delivery delays can be reduced from an average of 15% to under 5%, improving service level agreements and reliability.',
  },
  {
    title: 'Major Cost Savings',
    description: 'For a $1B+ logistics firm, DataNeuron could save over $20M annually by cutting expedited shipping costs and optimizing route planning.',
  },
  {
    title: 'Strategic Workforce',
    description: 'Thousands of analyst hours currently spent on manual monitoring can be redirected toward high-value strategic initiatives, improving productivity and innovation.',
  },
];

const valueCards = [
  {
    title: 'Current Annual Revenue',
    value: '$1B+',
    subtitle: 'Global Logistics Enterprise',
  },
  {
    title: 'Current Annual Revenue',
    value: '30%+',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Value Drivers',
    value: '4',
    subtitle: 'Optimized Routing + Fewer Penalties + Improved Inventory + Workforce Efficiency',
  },
  {
    title: 'Projected Annual Impact',
    value: '$20–30M',
    subtitle: 'Boosting Revenue & Cutting Costs',
  },
];

const dashboardBullets = [
  '65% fewer disruptions, 30% better delivery, 15% fewer delays, 40% higher analyst productivity, $20M+ savings',
  'Strongest impact on weather (78%) and port congestion (70%)',
  'Pre/post metrics highlight ROI across all supply chain level'
];

export default function SupplyChainCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Global Supply Chain–"
        subtitle="Disruption Prediction Model"
        description="Global logistics companies are under constant pressure to ensure smooth operations across complex, interdependent supply chains. However, in a world affected by geopolitical instability, climate change, pandemics, and shifting market demands, predicting and mitigating disruptions has become increasingly difficult. Traditional methods often fall short in providing the necessary foresight to navigate these volatile conditions."
        image="/images/case-study/supply-chain/hero.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Common Challenges in Global Supply Chain"
        description="Global supply chains face mounting pressure from geopolitical shifts, demand fluctuations, and fragmented data systems. These challenges make it difficult for organizations to maintain efficiency, visibility, and responsiveness at scale."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/supply-chain/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Transformative Outcomes Across Efficiency, Cost"
        image="/images/case-study/supply-chain/use-case-bg.png"
        mobileImage="/images/case-study/supply-chain/use-case-bg-mobile.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Transformational Value for Retail Enterprises"
        subtitle="Financial Impact Analysis for Enterprise Retail"
        cards={valueCards}
      />
      <Dashboard
        title="Comprehensive Overview of Performance Impact and Key Results"
        subtitle="This dashboard visualizes the impact of DataNeuron's AI-driven optimization for Global Supply Chain"
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/supply-chain/dashboard-web.png"
        mobileImage="/images/case-study/supply-chain/dashboard-mobile.png"
      />
    </main>
  );
} 