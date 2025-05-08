import HeroSection from '@/components/case-study/nod/HeroSection';
import Challenges from '@/components/case-study/nod/Challenges';
import NodHelp from '@/components/case-study/nod/NodHelp';
import UseCase from '@/components/case-study/nod/UseCase';
import Value from '@/components/case-study/nod/Value';
import Dashboard from '@/components/case-study/nod/Dashboard';
import Image from 'next/image';

const challengeData = [
  {
    title: 'Blind Spots in Competitor Research',
    description: 'Enterprises often miss early indicators of where competitors are investing, leading to reactive or redundant research efforts.',
    icon: (
      <Image src="/images/case-study/strategic-research/challenge-1.svg" alt="Blind Spots in Competitor Research" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Duplicate Innovation and Wasted Spend',
    description: 'Without cross-industry visibility, internal teams unknowingly replicate work already in development elsewhere—wasting time and resources.',
    icon: (
      <Image src="/images/case-study/strategic-research/challenge-2.svg" alt="Duplicate Innovation and Wasted Spend" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Weak IP Strategy Positioning',
    description: 'A lack of foresight into competitor patent activity results in rushed or misaligned intellectual property strategy.',
    icon: (
      <Image src="/images/case-study/strategic-research/challenge-3.svg" alt="Weak IP Strategy Positioning" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
  {
    title: 'Poor Strategic Research Alignment',
    description: "Dispersed research teams lack coordination on priority areas, reducing the enterprise's ability to scale focused innovation.",
    icon: (
      <Image src="/images/case-study/strategic-research/challenge-4.svg" alt="Poor Strategic Research Alignment" width={80} height={80} className="w-[60px] h-[60px] lg:w-20 lg:h-20" />
    ),
  },
];

const nodHelpSections = [
  {
    title: 'Gain a Decisive Edge Through Early Innovation Detection',
    description: 'ORB dramatically improves the early detection of competitor innovation directions (by over 80%) by tracking a diverse range of signals like publications, talent moves, startups, and patents, providing foresight before public announcements.',
  },
  {
    title: 'Enhance Strategic Alignment and Efficiency in R&D',
    description: 'The platform fosters better synchronization of research efforts across business units (over 60% improvement), minimizing duplication and maximizing strategic clarity, ultimately leading to more efficient research investment (40-50% improvement).',
  },
  {
    title: 'Unlock Markets with IP Strategy',
    description: 'ORB enables stronger patent and IP strategies (over 50% improvement) by revealing patterns in IP activity and helps companies discover under-explored innovation zones to create differentiated market positions (over 70% improvement).',
  },
];

const useCaseItems = [
  {
    title: 'Early Identification of Competitor Innovation',
    description: 'ORB provides an 80%+ improvement in early detection of competitor innovation focus by analyzing diverse data sources before public knowledge.',
  },
  {
    title: 'Enhanced Strategic R&D Alignment',
    description: 'Achieve over 60% improvement in synchronizing R&D efforts across teams, minimizing redundancy and maximizing strategic clarity.',
  },
  {
    title: 'Optimized IP Strategy and Protection',
    description: 'Gain a 50%+ improvement in patent and IP strategy through insights into filing patterns and legal activity, enabling smarter protection.',
  },
  {
    title: 'Identification of Unique Market Opportunities',
    description: 'Discover underexplored innovation zones with a 70%+ improvement, allowing for the creation of distinct market positions.',
  },
];

const valueCards = [
  {
    title: 'Savings via R&D Efficiency',
    value: '$15M+',
    subtitle: '',
  },
  {
    title: 'Improvement in Strategic R&D Alignment',
    value: '60%',
    subtitle: '',
  },
  {
    title: 'Reduces Redundancy in Research Efforts',
    value: '',
    subtitle: '',
  },
  {
    title: 'Enables Smarter, Faster Innovation Investments',
    value: '',
    subtitle: '',
  },
];

const dashboardBullets = [
  'Real-time view of innovation trends, competitor activity, and markets.',
  'Tailored dashboards with key metrics for different teams.',
  'Early insights via AI forecasts for proactive strategy.',
];

export default function StrategicResearchCaseStudy() {
  return (
    <main className="max-w-[1920px] mx-auto md:px-8 px-4">
      <HeroSection
        title="Strategic Research Intelligence"
        subtitle="Driving Smarter Innovation Through Predictive Insight"
        description="Large enterprises in sectors like Pharma, Manufacturing, Telecom, and Semiconductors invest heavily in R&D but often lack visibility into competitor innovation—leading to duplication and missed opportunities. ORB delivers predictive intelligence to detect early signals, align strategy, and stay ahead in fast-moving markets."
        image="/images/case-study/strategic-research/hero.png"
      />
      <Challenges
        title="Critical Research Challenges in Enterprise R&D"
        description="Why Leading Innovators Stumble: The Need for Unified, Predictive Intelligence in Research"
        challenges={challengeData}
      />
      <NodHelp
        image="/images/case-study/strategic-research/orb-help.png"
        sections={nodHelpSections}
      />
      <UseCase
        title="Unlocking Innovation Efficiency and Strategic Foresight with ORB"
        image="/images/case-study/strategic-research/use-case-bg.png"
        mobileImage="/images/case-study/strategic-research/use-case-bg-mobile.png"
        imageAlt="ORB Strategic Research Use Case Illustration"
        items={useCaseItems}
      />
      <Value
        title="Quantifiable Value Creation"
        subtitle="Financial Impact Analysis for Enterprise"
        cards={valueCards}
      />
      <Dashboard
        title="Visualize the Future of Innovation with ORB Dashboards"
        subtitle="Actionable Insights at Your Fingertips: Drive Strategic R&D Decisions"
        bullets={dashboardBullets}
        image="/images/case-study/strategic-research/dashboard-web.png"
        mobileImage="/images/case-study/strategic-research/dashboard-mobile.png"
        buttonText="Schedule a Demo"
      />
    </main>
  );
} 