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
      <Image src="/images/case-study/insurance-corporation/challenge-1.svg" alt="Inaccurate Pricing & Limited Fraud" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Inaccurate Pricing & Limited Fraud',
    description: 'Outdated models lack real-time data, mispricing policies and increasing financial exposure. Rule-based systems also fail to detect nuanced fraud patterns, leading to significant undetected losses.',
  },
  {
    icon: (
      <Image src="/images/case-study/insurance-corporation/challenge-2.svg" alt="Slow, Manual Claims Processing" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Slow, Manual Claims Processing',
    description: 'Reliance on manual workflows slows down claims resolution, increases human error, and impacts operational efficiency.',
  },
  {
    icon: (
      <Image src="/images/case-study/insurance-corporation/challenge-3.svg" alt="Disconnected Operations" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Disconnected Operations',
    description: 'Lack of integration between underwriting, claims, and service teams creates data silos and inconsistent customer experiences.',
  },
  {
    icon: (
      <Image src="/images/case-study/insurance-corporation/challenge-4.svg" alt="Slow, Manual Claims Processing" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Slow, Manual Claims Processing',
    description: 'Reliance on manual workflows slows down claims resolution, increases human error, and impacts operational efficiency.',
  },
];

const nodHelpSections = [
  {
    title: 'Quantifiable Value Delivered',
    description:
      'Insurers using NOD have achieved 26% better risk pricing, 38% faster claims processing, 41% higher fraud detection, 29% improved customer satisfaction, and 32% more efficient underwriting through AI-driven automation and insights.',
  },
  {
    title: 'Technical Integration',
    description:
      'NOD integrates across the insurance value chain, enhancing underwriting, automating claims with NLP, and personalizing CRM with predictive insights. It also ingests external risk data and supports flexible, secure deployment.',
  },
  {
    title: 'From Firefighting to Foresight',
    description:
      'With NOD, insurance companies evolve from being reactive service providers to proactive intelligence-led organizations, capable of anticipating risk, streamlining resolution, and delivering exceptional customer experiences.',
  },
];

const useCaseItems = [
  {
    title: 'Predict Risk with Greater Accuracy',
    description: "Anticipate risk with greater accuracy by leveraging real-time data, historical trends, and external indicators. NOD's AI models enable proactive decision-making before issues escalate.",
  },
  {
    title: 'Detect anomalies and potential fraud in real-time.',
    description: 'Detect unusual patterns and suspicious activities instantly using advanced anomaly detection algorithms. NOD helps reduce fraud losses by identifying threats as they emerge in real time.',
  },
  {
    title: 'AI-Powered Underwriting Insights.',
    description: 'Leverage behavioral, historical, and market data to generate smart underwriting recommendations. NOD empowers underwriters with real-time, context-rich insights for faster, more accurate decisions.',
  },
  {
    title: 'Engagement Starts with Trust, Powered by Transparent AI.',
    description: 'Advanced predictive analytics to empower merchandising, logistics, and store operations with precise demand forecasting.',
  },
];

const valueCards = [
  {
    title: 'Estimated Annual Value',
    value: '$40–65M',
    subtitle: 'Through better risk, fraud, and efficiency gains',
  },
  {
    title: 'Improved Risk Prediction',
    value: '+25%',
    subtitle: 'AI risk assessments and predictive modeling.',
  },
  {
    title: 'Operational Cost Savings',
    value: '-20%',
    subtitle: '',
  },
  {
    title: 'Fraud Loss Reduction',
    value: '+30%',
    subtitle: '',
  },
];

const dashboardBullets = [
  'Track risk, claims, and engagement in one unified view.',
  'Surface fraud signals, pricing gaps, and churn risks instantly.',
  'Automate decision-making and reduce manual overhead.',
];

export default function InsuranceCorporationCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Insurance Corporation–"
        subtitle="Risk Assessment & Claims Optimization"
        description="Insurance firms operate in data-intensive environments where accurate risk pricing, efficient claims processing, and fraud prevention are mission-critical. Yet, fragmented systems and limited AI adoption often lead to operational inefficiencies, increased losses, and subpar customer experiences."
        image="/images/case-study/insurance-corporation/hero.png"
        mobileImage="/images/case-study/insurance-corporation/hero-mobile.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Critical Barriers to Insurance Innovation"
        description="The insurance industry runs on trust, speed, and precision—yet many organizations still operate within fragmented data environments that hinder visibility across the policy and claims lifecycle. This lack of unified insight delays decision-making, heightens fraud risk, and undermines customer confidence."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/insurance-corporation/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Unified Intelligence Driving Smarter Insurance Decisions"
        image="/images/case-study/insurance-corporation/use-case-bg.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Insurance Enterprise Value Projection"
        subtitle="Financial Impact Analysis for Enterprise Insurance"
        cards={valueCards}
      />
      <Dashboard
        title="Real-Time Insights Driving Real-World Impact"
        subtitle="This sample dashboard reveals how NOD delivers real-time insights across risk, claims, and customer engagement—driving smarter, faster decisions"
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/insurance-corporation/dashboard-web.png"
      />
    </main>
  );
} 