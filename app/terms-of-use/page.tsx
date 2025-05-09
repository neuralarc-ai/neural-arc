import React from 'react';
import ScrollSection from '@/components/ui/scroll-section';

const termsSections = [
  {
    title: '1. Eligibility and Account Responsibility',
    content: `You must be at least 18 years of age and capable of entering into a legally binding contract to access or use the Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities occurring under your account.`
  },
  {
    title: '2. License to Use Services',
    content: `Subject to your compliance with these Terms, NeuralArc grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal business purposes. You shall not use the Services to develop competing products or reverse engineer any aspect of the platform.`
  },
  {
    title: '3. Prohibited Conduct',
    content: `You shall not:\n\n• Use the Services in any manner that infringes any intellectual property or proprietary rights of any party;\n\n• Use or access the Services to violate any applicable law or regulation;\n\n• Introduce malware or harmful code, scrape data, or interfere with service functionality;\n\n• Misrepresent your identity or affiliation.`
  },
  {
    title: '4. Ownership and Intellectual Property',
    content: `All content, trademarks, and software associated with the Services are the exclusive property of NeuralArc or its licensors. No rights are granted except as explicitly set forth herein.`
  },
  {
    title: '5. Third-Party Integrations',
    content: `The Services may contain links or integrations with third-party platforms. NeuralArc is not responsible for the content, functionality, or privacy practices of such third parties.`
  },
  {
    title: '6. Disclaimers',
    content: `The Services are provided "as is" and "as available." NeuralArc makes no warranties or representations, express or implied, regarding the Services, including but not limited to merchantability, fitness for a particular purpose, accuracy, or non-infringement.`
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, NeuralArc shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits or revenue, arising from or related to your use of the Services.`
  },
  {
    title: '8. Indemnification',
    content: `You agree to indemnify, defend, and hold harmless NeuralArc, its officers, directors, employees, and affiliates from any claim, demand, liability, or expense arising out of your breach of these Terms or violation of applicable law.`
  },
  {
    title: '9. Governing Law and Jurisdiction',
    content: `These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.`
  },
  {
    title: '10. Changes',
    content: `We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance of the updated Terms.`
  }
];

export default function TermsOfUsePage() {
  return (
    <div className="max-w-[1920px] mx-auto md:px-8 px-4 flex flex-col items-center space-y-8 pb-8">
      {/* Banner */}
      <ScrollSection>
        <div className="w-full relative flex items-center h-[216px] lg:h-[516px] justify-center bg-[url('/images/legal/disclaimer-banner.png')] bg-cover bg-center rounded-2xl overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl lg:text-7xl text-[#392E26] font-semibold mb-4 tracking-tight">Terms of Use</h1>
            <span className="text-base lg:text-[28px]">Effective Date: April, 2025</span>
          </div>
        </div>
      </ScrollSection>
      {/* Content */}
      <ScrollSection>
        <div className="w-full -mt-8 p-6 md:p-10 z-20 relative mx-auto max-w-[1820px]">
          {termsSections.map((section) => (
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