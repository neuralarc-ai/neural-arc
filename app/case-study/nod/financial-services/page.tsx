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
      <Image src="/images/case-study/financial-services/challenge-1.svg" alt="Smarter Risk Assessment" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Smarter Risk Assessment',
    description: 'Manual, inconsistent processes slow down risk evaluation and introduce variability. AI can standardize and speed up assessments, improving accuracy and decision-making.',
  },
  {
    icon: (
      <Image src="/images/case-study/financial-services/challenge-2.svg" alt="Enhanced Fraud Detection" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Enhanced Fraud Detection',
    description: 'Legacy systems often miss subtle, cross-product fraud patterns. AI models detect emerging threats in real time, enabling quicker, more effective responses.',
  },
  {
    icon: (
      <Image src="/images/case-study/financial-services/challenge-3.svg" alt="Unified Customer Intelligence" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Unified Customer Intelligence',
    description: 'Siloed data creates blind spots in customer understanding. A unified AI layer connects the dots, revealing insights that drive retention and growth.',
  },
  {
    icon: (
      <Image src="/images/case-study/financial-services/challenge-4.svg" alt="Streamlined Compliance Reporting" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Streamlined Compliance Reporting',
    description: 'Manual reporting is resource-heavy and prone to errors. Automated compliance tools ensure accurate, real-time reporting with minimal effort.',
  },
];

const nodHelpSections = [
  {
    title: 'Smarter Finance with Unified AI',
    description:
      'NOD unifies siloed data systems, connects disparate information, and creates a comprehensive view of risk and customer relationships. The platform transforms how financial institutions understand and respond to both threats and opportunities.',
  },
  {
    title: 'Integration Framework',
    description:
      'NOD connects to existing systems, APIs, and data warehouses while maintaining regulatory compliance. Its advanced adaptors and machine learning capabilities enable seamless connection with core banking, payment processing, and customer platforms.',
  },
  {
    title: 'Strategic Impact',
    description:
      'NOD forms a centralized intelligence layer between existing systems and decision makers, enabling institution-wide insights and predictive actions for enhanced risk management and customer engagement.',
  },
];

const useCaseItems = [
  {
    title: 'Boost Risk Assessment Efficiency by 65%',
    description: 'Reduces risk assessment cycle from days to hours through automated data collection and analysis. Continuous monitoring enables proactive risk identification and threat mitigation.',
  },
  {
    title: 'Predictive Fraud Accuracy: 87%',
    description: 'AI models detect anomalies and patterns across transactions and customer interactions. This reduces fraud losses, minimizes false positives, and safeguards customer assets.',
  },
  {
    title: 'Customer Attrition Reduction by 24%',
    description: 'Behavioral analytics and early warning systems identify at-risk customers. Proactive interventions with targeted engagement strategies improve retention.',
  },
  {
    title: 'Regulatory Reporting Time Cut by 52%',
    description: 'Advanced analytics automate compliance data collection and reporting. Centralized data access ensures regulatory readiness and auditability.',
  },
];

const valueCards = [
  {
    title: 'Boost in Risk Management ROI',
    value: '+38%',
    subtitle: 'Investment Scale',
  },
  {
    title: 'Annual Value Potential',
    value: '$25M–$40M',
    subtitle: 'Through NOD adoption',
  },
  {
    title: 'Accuracy in Fraud Detection',
    value: '87%',
    subtitle: '',
  },
  {
    title: 'Reduction in Customer Churn',
    value: '24%',
    subtitle: 'Behavior-driven interventions',
  },
];

const dashboardBullets = [
  'Improved risk management ROI by 38% and reduced reporting time by 52%.',
  'Achieved 87% fraud detection accuracy with minimized false positives.',
  'Reduced customer attrition by 24% through behavioral analytics and targeted retention efforts.',
];

export default function FinancialServicesCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Global Financial Services–"
        subtitle="Risk Management & Customer Intelligence"
        description="Telecom providers collect vast amounts of data – from network operations to customer interactions. However, fragmented systems typically limit their ability to analyze this information and extract actionable intelligence. DataNeuron's integrated data architecture and advanced intelligence platform enables unprecedented insights."
        image="/images/case-study/financial-services/hero.png"
        mobileImage="/images/case-study/financial-services/hero-mobile.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Untapped Data, Unmet Expectations"
        description="Financial institutions struggle with siloed data systems, making it impossible to develop a comprehensive view of risk and customer relationships. This disconnect means missed opportunities for risk mitigation, customer retention, and revenue growth."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/financial-services/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="NOD as a Centralized Intelligence Engine"
        image="/images/case-study/financial-services/use-case-bg.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Projected Value Creation"
        subtitle="NOD Impact Analysis for Financial Enterprise"
        cards={valueCards}
      />
      <Dashboard
        title="Elevating Financial Operations Through Intelligence"
        subtitle="This case study reveals how NOD enhanced risk management, fraud detection, and customer retention—delivering over $32M in annual value."
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/financial-services/dashboard-web.png"
      />
    </main>
  );
} 