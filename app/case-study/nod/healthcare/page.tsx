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
      <Image src="/images/case-study/healthcare/challenge-1.svg" alt="Delayed Insights & Slow Decision-Making" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Delayed Insights & Slow Decision-Making',
    description: 'Siloed data and outdated reporting tools delay actionable insights, hindering timely decisions and reducing operational efficiency, which negatively impacts patient care and outcomes.',
  },
  {
    icon: (
      <Image src="/images/case-study/healthcare/challenge-2.svg" alt="Inefficient Scheduling & Flow" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Inefficient Scheduling & Flow',
    description: 'Rigid scheduling systems create bottlenecks, leading to missed appointments, underutilized slots, and long wait times. This results in increased patient dissatisfaction and operational inefficiencies.',
  },
  {
    icon: (
      <Image src="/images/case-study/healthcare/challenge-3.svg" alt="Unpredictable Patient Volume" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Unpredictable Patient Volume',
    description: 'Inaccurate forecasting leads to under- or over-utilization of staff and resources, causing inefficiencies, increased operational costs, and compromised patient care.',
  },
  {
    icon: (
      <Image src="/images/case-study/healthcare/challenge-4.svg" alt="High Operational Costs" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'High Operational Costs',
    description: 'Difficulty in adjusting operations in real-time leads to inefficiencies, increased overheads, missed revenue opportunities, and reduced quality of care.',
  },
];

const nodHelpSections = [
  {
    title: 'NOD Makes a Difference',
    description:
      'NOD transforms fragmented healthcare data into real-time insights, enabling smarter decisions. It integrates with EMRs and scheduling tools to optimize planning, reduce wait times, and boost operational efficiency—while ensuring HIPAA compliance. Its predictive capabilities help providers stay ahead of demand and improve patient care.',
  },
  {
    title: 'Real-World Implementation',
    description:
      'NOD integrates seamlessly with existing healthcare systems, ensuring compliance, stability, and scalability without IT disruptions. Its intuitive dashboards provide stakeholders with key insights, while predictive intelligence and alerts address issues before they escalate.',
  },
  {
    title: 'Scalable, Adaptable for Services',
    description:
      'NOD integrates seamlessly with existing healthcare systems, ensuring compliance, stability, and scalability without IT disruptions. Its intuitive dashboards provide stakeholders with key insights, while predictive intelligence and alerts address issues before they escalate.',
  },
];

const useCaseItems = [
  {
    title: '80%+ Reduction in Insight Latency',
    description: 'Real-time dashboards replace static reports, speeding up decision-making and enabling faster responses to operational changes and patient needs.',
  },
  {
    title: '15–20% Increase in Scheduling',
    description: 'Enhanced resource planning drives significant cost reductions for large healthcare networks, improving both financial performance and service delivery.',
  },
  {
    title: '$5–8M Annual Savings',
    description: 'Enhanced resource planning drives significant cost reductions for large healthcare networks, optimizing operations and maximizing ROI.',
  },
  {
    title: '90%+ Patient Volume Forecast',
    description: 'AI-driven models optimize staffing, room availability, and supplies by forecasting demand, improving efficiency and resource allocation.',
  },
];

const valueCards = [
  {
    title: 'Current Annual Revenue',
    value: '$1B+',
    subtitle: 'Enterprise Scale',
  },
  {
    title: 'Projected Annual Savings',
    value: '0.5% – 0.8%',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Value Drivers',
    value: '3',
    subtitle: 'Operational Savings + Reduced Patient Churn + Increased Staff Productivity',
  },
  {
    title: 'Projected Annual Impact',
    value: '$5–8M',
    subtitle: 'Operational Savings & Improved Care',
  },
];

const dashboardBullets = [
  '80%+ faster insights via real-time dashboards for quicker decisions.',
  '18% better scheduling with fewer no-shows and delays.',
  '90%+ patient volume forecast accuracy, saving $6.5M annually in $1B+ networks.'
];

export default function HealthcareCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Healthcare Operational Intelligence–"
        subtitle="Enhancing Efficiency and Reducing Costs"
        description="Modern healthcare systems generate vast amounts of data, but actionable insights often remain trapped in disconnected systems. This leads to delayed decision-making, inefficient operations, and gaps in patient experience, creating barriers to growth and cost-efficiency."
        image="/images/case-study/healthcare/hero.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Key Challenges Faced by Healthcare Networks"
        description="Healthcare systems rely on timely, accurate data to deliver quality care—but many organizations struggle with fragmented information, leading to delayed decisions, operational inefficiencies, and compromised patient experiences."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/healthcare/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Transformative Gains in Efficiency, Accuracy, and Cost Savings"
        image="/images/case-study/healthcare/use-case-bg.png"
        mobileImage="/images/case-study/healthcare/use-case-bg-mobile.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Transformational Value for Retail Enterprises"
        subtitle="Financial Impact Analysis for Enterprise Retail"
        cards={valueCards}
      />
      <Dashboard
        title="NOD : Healthcare Intelligence Dashboard"
        subtitle="Real-time insights to drive smarter, faster decisions across food service operations"
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/healthcare/dashboard-web.png"
        mobileImage="/images/case-study/healthcare/dashboard-mobile.png"
      />
    </main>
  );
} 