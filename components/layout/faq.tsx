// faq.tsx
"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Neural Paths?",
    answer:
      "Neural Paths is an AI company making advanced analytics accessible to every business—no data team required. Through our Neural Nexus platform and targeted MicroSaaS tools, we deliver fast, industry-specific insights powered by large language models.",
  },
  {
    question: "How does Neural Nexus differ from existing analytics platforms?",
    answer:
      "Neural Nexus provides industry-specific insights powered by large language models, enabling businesses to gain advanced analytics without needing a dedicated data team.",
  },
  {
    question: "What kind of data sources can Neural Nexus connect to?",
    answer:
      "Neural Nexus can integrate with various data sources, including CRM systems, marketing platforms, and ERP software.",
  },
  {
    question: "Do I need a data science team to use Neural Nexus?",
    answer:
      "No, Neural Nexus is designed for business users without requiring a data science team.",
  },
  {
    question: "How long does it take to implement Neural Nexus?",
    answer:
      "Implementation typically takes 4-6 weeks, depending on the complexity of the integration and data sources.",
  },
  {
    question: "What are the MicroSaaS applications and who are they for?",
    answer:
      "Our MicroSaaS tools are designed for specific business functions, such as finance, marketing, and sales, to provide targeted insights and solutions.",
  },
  {
    question: "What does Neural Paths cost?",
    answer:
      "Pricing is tailored based on the size and needs of your business. Contact us for a customized quote.",
  },
  {
    question: "How does Neural Paths ensure data security and privacy?",
    answer:
      "We follow industry-standard security practices and comply with GDPR and other privacy regulations to ensure your data is protected.",
  },
  {
    question:
      "What kind of ROI can I expect from implementing Neural Paths solutions?",
    answer:
      "Our solutions are designed to increase operational efficiency and drive measurable business outcomes, such as time saved, increased sales, and better decision-making.",
  },
  {
    question:
      "Does Neural Paths require any special hardware or IT infrastructure?",
    answer:
      "No, Neural Paths is a cloud-based platform and does not require special hardware or IT infrastructure.",
  },
  {
    question:
      "How does Neural Paths compare to building an in-house data analytics capability?",
    answer:
      "Neural Paths provides a faster, more cost-effective solution, avoiding the need to hire and train a data team.",
  },
  {
    question:
      "How do you achieve 97% prediction accuracy when most AI systems are less accurate?",
    answer:
      "We use a combination of advanced machine learning techniques, a large volume of industry-specific data, and continual optimization to ensure high accuracy.",
  },
];

const FAQ: React.FC = () => {

  return (
    <section className="max-w-[1538px] mx-auto lg:py-24 py-12 grain-hero">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Column: Title */}
        <div className="lg:w-2/7 md:text-6xl text-3xl font-semibold text-[#373737] mb-6 lg:mb-0 tracking-tight text-center lg:text-start">
          <h2>What Everyone Asks Us</h2>
        </div>
        {/* Right Column: Accordion List */}
        <div className="lg:w-4/7">
          <Accordion
            type="single"
            defaultValue="item-1" 
            collapsible
            className="space-y-2"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-none"
              >
                <AccordionTrigger className="py-4 text-lg font-medium text-[#232121] hover:no-underline justify-between flex items-center border-b-[#C6C6C640] border-b rounded-none px-0 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="py-4 text-lg text-[#646464] text-balance">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
