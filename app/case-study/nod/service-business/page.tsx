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
      <Image src="/images/case-study/service-business/challenge-1.svg" alt="High Customer Acquisition Costs" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'High Customer Acquisition Costs',
    description: 'Many service businesses invest heavily in marketing but struggle with poor conversion rates, leading to elevated acquisition costs. Without targeted insights, campaigns often miss the mark, reducing ROI and draining budgets.',
  },
  {
    icon: (
      <Image src="/images/case-study/service-business/challenge-2.svg" alt="Inconsistent Attendance and Engagement" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Inconsistent Attendance and Engagement',
    description: 'Fluctuating client attendance leads to underused services, impacting both customer experience and revenue potential. This unpredictability also complicates scheduling and resource planning.',
  },
  {
    icon: (
      <Image src="/images/case-study/service-business/challenge-3.svg" alt="Unpredictable Staffing Requirements" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'Unpredictable Staffing Requirements',
    description: 'Without accurate forecasting, businesses are often over- or under-staffed—resulting in wasted labor, strained teams, and inconsistent service quality.',
  },
  {
    icon: (
      <Image src="/images/case-study/service-business/challenge-4.svg" alt="High Member Churn" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
    title: 'High Member Churn',
    description: 'Lack of personalized engagement and timely follow-ups often leads to high dropout rates, reduced loyalty, and lost recurring revenue.',
  },
];

const nodHelpSections = [
  {
    title: 'NOD Makes a Difference',
    description:
      'NOD helps service businesses optimize operations and revenue by analyzing data on attendance, customer preferences, and local trends. It provides actionable insights for scheduling, retention, staffing, and marketing, integrating seamlessly with existing CRM, booking, and POS systems.',
  },
  {
    title: 'Real-World Implementation',
    description:
      'NOD integrates seamlessly without system overhauls, scaling with businesses from single-location studios to large service chains. Its AI models adapt to local behavior, seasonal trends, and operational goals, making it perfect for businesses of all sizes.',
  },
  {
    title: 'Enhancing Customer Experience',
    description:
      'DataNeuron also helps personalize offers, automate retention triggers, and strengthen loyalty programs. This elevates engagement and turns casual users into long-term members.',
  },
];

const useCaseItems = [
  {
    title: 'Reduction in Acquisition Costs',
    description: 'Smart targeting and optimized marketing reduce customer acquisition costs by focusing on high-conversion segments, ensuring more efficient spending.',
  },
  {
    title: 'Utilization Increased',
    description: 'Data-driven scheduling optimizes class timings and service availability, ensuring higher occupancy rates and better resource utilization.',
  },
  {
    title: 'Churn Rate Reduction',
    description: 'Predictive insights help identify at-risk members early, allowing for targeted retention strategies and reducing churn.',
  },
  {
    title: 'Boost in Monthly Recurring Revenue',
    description: 'Increased retention and optimized service utilization contribute to consistent revenue growth, ensuring long-term profitability.',
  },
];

const valueCards = [
  {
    title: 'Current Annual Revenue',
    value: '$500K+',
    subtitle: 'Enterprise Scale',
  },
  {
    title: 'Additional Income',
    value: '30%',
    subtitle: 'Of yearly revenue',
  },
  {
    title: 'Value Drivers',
    value: '3',
    subtitle: 'Churn + Acquisition + Operations',
  },
  {
    title: 'Projected Annual Impact',
    value: '$150K+',
    subtitle: 'Additional Income',
  },
];

const dashboardBullets = [
  'Achieved 50% reduction in acquisition costs, 30% increase in utilization, and 35% MRR growth.',
  'Retained 45% of at-risk customers through early detection and targeted intervention.',
  'Identified highest ROI segments, with urban fitness (38%) and salon (27%) leading investment focus.'
];

export default function ServiceBusinessCaseStudyPage() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Service Business–"
        subtitle="Customer Retention & Resource Optimization"
        description="Service businesses thrive on steady customer engagement, personalized experiences, and efficient operations. Whether it's a boutique fitness studio, a wellness spa, or a grooming salon, revenue depends heavily on maximizing customer lifetime value while minimizing operational waste. However, these businesses often lack the advanced data tools needed to make informed decisions at scale."
        image="/images/case-study/service-business/hero.png"
        buttonText="Try Now"
      />
      <Challenges
        title="Key Challenges Faced by Service Businesses"
        description="Service businesses often face fluctuating demand, high churn, and inefficient resource use. Without data-driven clarity, scaling sustainably becomes a real challenge."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/service-business/nod-help.png"
        imageAlt="NOD Help Illustration"
        sections={nodHelpSections}
      />
      <UseCase
        title="Transforming Service Businesses for Sustained Growth and Efficiency"
        image="/images/case-study/service-business/use-case-bg.png"
        mobileImage="/images/case-study/service-business/use-case-bg-mobile.png"
        imageAlt="NOD Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Projected ROI for Service Business"
        subtitle="NOD Financial Impact Analysis"
        cards={valueCards}
      />
      <Dashboard
        title="Transforming Service Operations with NOD"
        subtitle="Discover how NOD drove smarter decisions across service businesses—cutting costs, boosting retention, and uncovering new revenue streams through actionable data insights."
        bullets={dashboardBullets}
        buttonText="Get Early Access"
        image="/images/case-study/service-business/dashboard-web.png"
        mobileImage="/images/case-study/service-business/dashboard-mobile.png"
      />
    </main>
  );
} 