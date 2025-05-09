import React from 'react';
import ScrollSection from '@/components/ui/scroll-section';

const privacySections = [
  {
    title: '1. Information We Collect',
    content: `Personal Data: Name, email, company, contact details.\n\nTechnical Data: IP address, browser type, device identifiers, usage logs.\n\nCookies: We use cookies for analytics and personalization.`
  },
  {
    title: '2. Use of Information',
    content: `We use the information to:\n\n• Provide, maintain, and improve our Services;\n\n• Process transactions and communicate with you;\n\n• Monitor usage trends and enhance security;\n\n• Comply with legal obligations.`
  },
  {
    title: '3. Legal Basis for Processing',
    content: `Where applicable, we process your data on the basis of your consent, our contractual obligations, compliance with legal obligations, or legitimate interests.`
  },
  {
    title: '4. Data Sharing',
    content: `We do not sell or rent your data. We may share it with:\n\n• Authorized service providers (under strict confidentiality);\n\n• Legal or regulatory authorities, when required;\n\n• Affiliates and successors in interest, in the event of a business transfer.`
  },
  {
    title: '5. Data Retention',
    content: `We retain your data only as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.`
  },
  {
    title: '6. Security',
    content: `We implement appropriate administrative, technical, and physical safeguards to protect your information against unauthorized access or disclosure.`
  },
  {
    title: '7. Your Rights',
    content: `Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your data. Please contact us at support@neuralarc.ai.`
  },
  {
    title: '8. International Transfers',
    content: `If your data is transferred outside of India, we ensure appropriate safeguards are in place, including data processing agreements and, where applicable, standard contractual clauses.`
  },
  {
    title: '9. Changes',
    content: `We may update this Privacy Policy periodically. We encourage you to review this page regularly.`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[1920px] mx-auto md:px-8 px-4 flex flex-col items-center space-y-8 pb-8">
      {/* Banner */}
      <ScrollSection>
        <div className="w-full relative flex items-center h-[216px] lg:h-[516px] justify-center bg-[url('/images/legal/disclaimer-banner.png')] bg-cover bg-center rounded-2xl overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl lg:text-7xl text-[#392E26] font-semibold mb-4 tracking-tight">Privacy Policy</h1>
            <span className="text-base lg:text-[28px]">Effective Date: April, 2025</span>
          </div>
        </div>
      </ScrollSection>
      {/* Content */}
      <ScrollSection>
        <div className="w-full -mt-8 p-6 md:p-10 z-20 relative mx-auto max-w-[1820px]">
          {privacySections.map((section) => (
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