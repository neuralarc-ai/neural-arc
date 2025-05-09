import React from 'react';
import ScrollSection from '@/components/ui/scroll-section';

const responsibleAISections = [
  {
    title: '1. Guiding Principles',
    content: `Our AI systems are governed by the following principles:\n\nTransparency: We strive to provide clear, accessible explanations of how our AI functions and is trained.\n\nFairness and Non-Discrimination: We actively mitigate bias in data and models to ensure equitable outcomes.\n\nAccountability: We take responsibility for our models' behavior and allow for oversight and redress mechanisms.`
  },
  {
    title: '2. Data Ethics',
    content: `We collect and use data in a lawful, transparent, and fair manner.\n\nWe respect user privacy and avoid the use of sensitive or personally identifiable data unless explicitly consented to.\n\nDatasets are evaluated for representativeness, accuracy, and bias mitigation.`
  },
  {
    title: '3. Human Oversight',
    content: `AI-generated outputs are reviewed by human moderators, particularly in high-impact domains. Final responsibility for decision-making remains with human users.`
  },
  {
    title: '4. Security and Safety',
    content: `We employ rigorous security protocols to prevent misuse, manipulation, or unintended consequences of our AI systems.`
  },
  {
    title: '5. Continuous Monitoring and Improvement',
    content: `We audit our AI systems periodically for performance, compliance, and alignment with ethical norms. User feedback is actively incorporated to refine outputs and eliminate harm.`
  },
  {
    title: '6. User Responsibilities',
    content: `Users of our platform are required to:\n\n• Use AI outputs responsibly and with appropriate human supervision;\n\n• Avoid using AI to generate deceptive, malicious, or unlawful content;\n\n• Report any concerning behavior or outputs immediately.`
  },
  {
    title: '7. Governance and Compliance',
    content: `We stay aligned with global AI regulatory frameworks, including the EU AI Act, India's Digital Personal Data Protection Act, and emerging best practices from industry consortiums.`
  }
];

export default function ResponsibleAIPolicyPage() {
  return (
    <div className="max-w-[1920px] mx-auto md:px-8 px-4 flex flex-col items-center space-y-8 pb-8">
      {/* Banner */}
      <ScrollSection>
        <div className="w-full relative flex items-center h-[216px] lg:h-[516px] justify-center bg-[url('/images/legal/disclaimer-banner.png')] bg-cover bg-center rounded-2xl overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-3xl lg:text-6xl text-[#392E26] font-semibold mb-4 tracking-tight text-center">Responsible & Ethical AI Policy</h1>
            <span className="text-base lg:text-[28px]">Effective Date: April, 2025</span>
          </div>
        </div>
      </ScrollSection>
      {/* Content */}
      <ScrollSection>
        <div className="w-full -mt-8 p-6 md:p-10 z-20 relative mx-auto max-w-[1820px]">
          {responsibleAISections.map((section) => (
            <div key={section.title} className="mb-8 last:mb-0">
              <h2 className="font-semibold text-lg lg:text-[32px] mb-2">{section.title}</h2>
              <p className="font-light text-sm lg:text-2xl whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </ScrollSection>
    </div>
  );
} 