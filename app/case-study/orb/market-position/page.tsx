import HeroSection from '@/components/case-study/nod/HeroSection';
import Challenges from '@/components/case-study/nod/Challenges';
import NodHelp from '@/components/case-study/nod/NodHelp';
import UseCase from '@/components/case-study/nod/UseCase';
import Value from '@/components/case-study/nod/Value';
import Dashboard from '@/components/case-study/nod/Dashboard';
import Image from 'next/image';

const challengeData = [
  {
    title: 'Limited Visibility',
    description: 'Growth-stage teams lack tools to monitor competitor moves across multiple channels, resulting in outdated insights.',
    icon: (
      <Image src="/images/case-study/market-position/challenge-1.svg" alt="Limited Visibility" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Delayed Responses',
    description: 'Strategy shifts often lag behind market changes, taking weeks or months to execute after competitor signals emerge.',
    icon: (
      <Image src="/images/case-study/market-position/challenge-2.svg" alt="Delayed Responses" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Reactive Decision-Making',
    description: 'Teams operate on guesswork and partial data, leading to reactive, rather than proactive, strategic choices.',
    icon: (
      <Image src="/images/case-study/market-position/challenge-3.svg" alt="Reactive Decision-Making" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Missed Opportunities',
    description: 'Blind spots in competitor tracking result in lost market share and late entries into emerging trends or customer segments.',
    icon: (
      <Image src="/images/case-study/market-position/challenge-4.svg" alt="Missed Opportunities" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
];

const nodHelpSections = [
  {
    title: 'How ORB Can Help',
    description: "ORB tracks thousands of digital signals—like hiring trends, product updates, and executive moves—to detect strategic shifts before they go public. This early insight helps clients act fast, reallocate resources, and outmaneuver competitors. ORB users don't react to change—they anticipate it.",
  },
  {
    title: 'Integration for Scalable Impact',
    description: 'ORB integrates effortlessly into existing tools and workflows, making insights instantly accessible across teams. With no complex setup, teams from product to sales can align quickly, pivot fast, and execute more effectively with a shared view of competitor activity.',
  },
  {
    title: 'Competitive Advantage',
    description: 'Beyond quick wins, ORB builds long-term strategic resilience. As companies grow, it adapts—learning from past patterns, tracking new competitors, and refining alerts. This creates a strategic memory that supports smarter forecasting, stronger investor confidence, and sharper decision-making.',
  },
];

const useCaseItems = [
  {
    title: 'Early Competitive Signal Detection',
    description: 'ORB delivers a 75%+ boost in early detection of competitor moves by tracking subtle signals—like hiring trends, patents, and executive shifts—giving SaaS companies a strategic edge.',
  },
  {
    title: 'Reduced Strategic Surprise',
    description: 'With a 90% drop in surprise competitor moves, ORB keeps organizations prepared and agile. Real-time insights enable quick pivots and proactive protection of market share.',
  },
  {
    title: 'Accelerated Response Time',
    description: 'Companies using ORB cut strategic response times from months to days. Timely insights let leaders act fast, reallocate resources, and seize opportunities before they close.',
  },
  {
    title: 'Improved Clarity and Confidence',
    description: 'With 85%+ fewer blind spots and a 65%+ boost in decision confidence, ORB powers data-driven strategic planning. Leaders gain clarity to drive faster, smarter, and more aligned execution.',
  },
];

const valueCards = [
  {
    title: 'Current Annual Revenue',
    value: '$500K+',
    subtitle: 'Enterprise Scale',
  },
  {
    title: 'Current Annual Revenue',
    value: '30%+',
    subtitle: 'Of annual revenue',
  },
  {
    title: 'Value Drivers',
    value: '3',
    subtitle: 'Faster Strategic Decisions + Capturing Emerging Demand + Cross-Functional Alignment',
  },
  {
    title: 'Projected Annual Impact',
    value: '$450K+',
    subtitle: 'Yearly Savings & Efficiency Gains',
  },
];

const dashboardBullets = [
  '75% boost in early signal detection, 90% fewer surprises, and $450K+ in added revenue.',
  'Strategic response time reduced from 30–45 days to under 15 days.',
  'Hiring (88%) and patents (80%) are top predictors; FinTech shows highest ROI at 8.2x.',
];

export default function MarketPositionCaseStudy() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="SaaS Intelligence"
        subtitle="Smart SaaS Growth"
        description="SaaS sectors like FinTech, HealthTech, and MarTech face fast innovation, short product cycles, and intense competition. Growth-stage companies must scale quickly with lean teams, ambitious targets, and limited time to lead. Without real-time intelligence, they risk falling behind. In this landscape, early strategic insight is a must-have advantage."
        image="/images/case-study/market-position/hero.png"
      />
      <Challenges
        title="Strategic Hurdles Facing Growth-Stage SaaS"
        description="Scaling a SaaS company isn't just about speed—it's about precision. These common challenges limit visibility, slow decision-making, and leave teams vulnerable to smarter, faster-moving competitors."
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/market-position/orb-help.png"
        sections={nodHelpSections}
      />
      <UseCase
        title="Driving Transformative Results with ORB Intelligence"
        image="/images/case-study/market-position/use-case-bg.png"
        mobileImage="/images/case-study/market-position/use-case-bg-mobile.png"
        imageAlt="ORB Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Quantifiable Value Creation"
        subtitle="Financial Impact Analysis for Enterprise SaaS"
        cards={valueCards}
      />
      <Dashboard
        title="Performance Dashboard: Measurable Impact"
        subtitle="Key metrics demonstrating how our solution transformed client outcomes"
        bullets={dashboardBullets}
        image="/images/case-study/market-position/dashboard-web.png"
        mobileImage="/images/case-study/market-position/dashboard-mobile.png"
        buttonText="Schedule a Demo"
      />
    </main>
  );
} 