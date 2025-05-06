'use client'

import React, { useState, useCallback } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  metrics?: Metric[];
}

const startupCases: CaseStudy[] = [
  {
    title: "Revolutionizing E-Commerce",
    slug: "ecommerce",
    description: "Small and mid-sized e-commerce businesses often struggle with inventory inefficiencies, leading to stockouts, deadstock, and lost revenue.",
    metrics: [
      { value: "20%", label: "Annual Savings" },
      { value: "$1M+", label: "Current Annual Revenue" }
    ]
  },
  {
    title: "Service Business",
    slug: "service-business",
    description: "Service businesses rely on customer retention and efficiency but often lack the data tools to scale smart, informed decisions.",
    metrics: [
      { value: "30%", label: "Additional Income" },
      { value: "$150K+", label: "Value Drivers" }
    ]
  },
  {
    title: "Restaurant/Food Service",
    slug: "food-service",
    subtitle: "Menu Engineering & Waste Reduction",
    description: "Restaurants face margin pressure and constant change but often lack the analytics to optimize."
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    subtitle: "Enhancing Efficiency and Reducing Costs",
    description: "Health systems generate massive data, but disconnected tools keep decisions and lower operational costs below expectations."
  },
  {
    title: "Channel Retail",
    slug: "channel-retail",
    subtitle: "Unified Customer Intelligence",
    description: "Traditional retail and omni-channel digital-native brands trust us for advanced data to personalize, target, and smarter customer experiences."
  },
  {
    title: "Global Supply Chain",
    slug: "supply-chain",
    description: "Global logistics firms face rising disruption risks, but traditional methods often lack the foresight needed to navigate today's volatile supply chains.",
    metrics: [
      { value: "30%+", label: "Current Annual Revenue" },
      { value: "$1B+", label: "Fewer delivery deal Global Logistics Enterprises" }
    ]
  }
];

const enterpriseCases: CaseStudy[] = [
  {
    title: "Telecommunications Provider",
    slug: "telecom-provider",
    description: "Telecom providers generate massive data, but siloed systems limit its value—hindering efforts to modernize and deliver smarter, personalized connectivity.",
    metrics: [
      { value: "+23%", label: "Increased ROI" },
      { value: "18%", label: "Customer Churn" }
    ]
  },
  {
    title: "Global Financial Services",
    slug: "financial-services",
    subtitle: "Operational Excellence & Supply Chain Resilience",
    description: "Large manufacturers face mounting pressure to cut waste, boost efficiency, and adapt fast—yet siloed data, aging systems, and complexity hinder real-time agility and sustainability.",
    metrics: [
      { value: "+38%", label: "Increased Revenue" },
      { value: "24%", label: "Cost Reduction" }
    ]
  },
  {
    title: "Global Retailer",
    slug: "global-retailer",
    subtitle: "Profit Through Precision",
    description: "By leveraging Neural Nexus' Unified Commerce & Supply Chain Intelligence, global retailers can unlock true omnichannel power—enhancing customer experience, efficiency, and long-term growth in a highly competitive market."
  },
  {
    title: "Insurance Corporation",
    slug: "insurance-corporation",
    subtitle: "Risk Assessment & Claims Optimization",
    description: "Insurance firms rely on data for risk, claims, and fraud—but fragmented systems and low AI adoption drive inefficiencies and poor customer experiences."
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    subtitle: "Operational Excellence & Supply Chain Resilience",
    description: "Large manufacturers face mounting pressure to cut waste, boost efficiency, and adapt fast—yet siloed data, aging systems, and complexity hinder real-time agility and sustainability."
  },
  {
    title: "Pharmaceutical Enterprise",
    slug: "pharmaceutical-enterprise",
    description: "Pharma faces high stakes data demands but bring risk-averse and regulatory while change moves from insights to impact.",
    metrics: [
      { value: "+28%", label: "Operational Efficiency" },
      { value: "+34%", label: "Risk Management" }
    ]
  }
];

const nodStartupColors = [
  '#CFD4C9',
  '#DDDED6',
  '#CBE3E0',
  '#9AC0BD',
  '#C0C8B6',
  '#A7BEAB',
];

const nodEnterpriseColors = [
  '#DDE0D8',
  '#BDD1C1',
  '#DBECEA',
  '#D0D7C8',
  '#E8E9E3',
  '#E9E9E4',
];

const getCardStyles = (index: number, isStartups: boolean) => {
  if (isStartups) {
    return {
      bg: `bg-[${nodStartupColors[index]}]`,
    };
  } else {
    return {
      bg: `bg-[${nodEnterpriseColors[index]}]`,
    };
  }
};

const NodCaseStudiesMobile = () => {
  const [activeTab, setActiveTab] = useState("startups");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps'
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const cases = activeTab === "startups" ? startupCases : enterpriseCases;

  return (
    <section className="w-full mx-auto py-8 lg:hidden">
      <div className="mx-auto">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center px-4">
            <TabsList className="flex gap-2 mb-8 bg-[#D9D8D8] px-2 py-6 rounded-full">
              <TabsTrigger 
                value="startups"
                className="px-6 py-4 cursor-pointer rounded-full text-lg font-semibold data-[state=active]:bg-[#2F2C28] data-[state=active]:text-white text-[#252525] transition-all duration-300"
              >
                Startups
              </TabsTrigger>
              <TabsTrigger 
                value="enterprises"
                className="px-6 py-4 cursor-pointer rounded-full text-lg font-semibold data-[state=active]:bg-[#2F2C28] data-[state=active]:text-white text-[#252525] transition-all duration-300"
              >
                Enterprises
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Slider Content */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cases.map((item, index) => {
                const isStartups = activeTab === "startups";
                const styles = getCardStyles(index, isStartups);
                const descriptionClass = styles && 'description' in styles && styles.description ? ` ${styles.description}` : '';
                const metricsClass = styles && 'metrics' in styles && styles.metrics ? ` ${styles.metrics}` : '';
                const titleClass = styles && 'title' in styles && styles.title ? ` ${styles.title}` : '';
                return (
                  <div
                    key={index}
                    className="min-w-[85%] pl-4 first:pl-4"
                    style={{
                      opacity: index === currentIndex ? 1 : 0.7,
                      transform: `scale(${index === currentIndex ? 1 : 1})`,
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <div className={`rounded-2xl p-6 h-[378px] flex flex-col ${styles.bg}`}>
                      {item.metrics ? (
                        // Layout for cards with metrics
                        <>
                          <div className="flex-1">
                            <p className={`text-base mb-2 leading-5${descriptionClass}`}>{item.description}</p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              {item.metrics.map((metric, idx) => (
                                <div key={idx}>
                                  <p className={`text-2xl font-semibold${metricsClass}`}>{metric.value}</p>
                                  <p className={`text-xs opacity-75${metricsClass}`}>{metric.label}</p>
                                </div>
                              ))}
                            </div>
                            <div className="w-full h-[1px] bg-[#71717133] mb-4"></div>
                            <p className={`text-2xl font-semibold leading-none${titleClass}`}>{item.title}</p>
                          </div>
                          <Link
                            href={`/case-study/nod/${item.slug}`}
                            className="inline-flex w-full justify-center items-center gap-2 px-6 py-3 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out mt-4"
                          >
                            Read story <ArrowRight className="w-4 h-4" />
                          </Link>
                        </>
                      ) : (
                        // Layout for cards without metrics
                        <>
                          <div className="flex-1">
                            <h3 className={`text-xl font-semibold mb-2${descriptionClass}`}>{item.subtitle}</h3>
                            <p className={`text-base mb-4 leading-5 tracking-tight${descriptionClass}`}>{item.description}</p>
                            <div className="w-full h-[1px] bg-[#71717133] mb-2"></div>
                            <p className={`text-2xl font-semibold${titleClass}`}>{item.title}</p>
                          </div>
                          <Link
                            href={`/case-study/nod/${item.slug}`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-full mt-4"
                          >
                            Read story <ArrowRight className="w-4 h-4" />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-[#2F2C28]' : 'w-2 bg-[#D9D8D8]'
                }`}
              />
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default NodCaseStudiesMobile; 