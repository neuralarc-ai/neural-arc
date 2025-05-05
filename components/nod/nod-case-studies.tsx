import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  subtitle?: string;
  description: string;
  metrics?: Metric[];
}

const startupCases: CaseStudy[] = [
  {
    title: "Revolutionizing E-Commerce",
    description: "Small and mid-sized e-commerce businesses often struggle with inventory inefficiencies, leading to stockouts, deadstock, and lost revenue.",
    metrics: [
      { value: "20%", label: "Annual Savings" },
      { value: "$1M+", label: "Current Annual Revenue" }
    ]
  },
  {
    title: "Service Business",
    description: "Service businesses rely on customer retention and efficiency but often lack the data tools to scale smart, informed decisions.",
    metrics: [
      { value: "30%", label: "Additional Income" },
      { value: "$150K+", label: "Value Drivers" }
    ]
  },
  {
    title: "Restaurant/Food Service",
    subtitle: "Menu Engineering & Waste Reduction",
    description: "Restaurants face margin pressure and constant change but often lack the analytics to optimize."
  },
  {
    title: "Healthcare",
    subtitle: "Enhancing Efficiency and Reducing Costs",
    description: "Health systems generate massive data, but disconnected tools keep decisions and lower operational costs below expectations."
  },
  {
    title: "Channel Retail",
    subtitle: "Unified Customer Intelligence",
    description: "Traditional retail and omni-channel digital-native brands trust us for advanced data to personalize, target, and smarter customer experiences."
  },
  {
    title: "Global Supply Chain",
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
    description: "Telecom providers generate massive data, but siloed systems limit its value—hindering efforts to modernize and deliver smarter, personalized connectivity.",
    metrics: [
      { value: "+23%", label: "Increased ROI" },
      { value: "18%", label: "Customer Churn" }
    ]
  },
  {
    title: "Global Financial Services",
    subtitle: "Operational Excellence & Supply Chain Resilience",
    description: "Large manufacturers face mounting pressure to cut waste, boost efficiency, and adapt fast—yet siloed data, aging systems, and complexity hinder real-time agility and sustainability.",
    metrics: [
      { value: "+38%", label: "Increased Revenue" },
      { value: "24%", label: "Cost Reduction" }
    ]
  },
  {
    title: "Global Retailer",
    subtitle: "Profit Through Precision",
    description: "By leveraging Neural Nexus' Unified Commerce & Supply Chain Intelligence, global retailers can unlock true omnichannel power—enhancing customer experience, efficiency, and long-term growth in a highly competitive market."
  },
  {
    title: "Insurance Corporation",
    subtitle: "Risk Assessment & Claims Optimization",
    description: "Insurance firms rely on data for risk, claims, and fraud—but fragmented systems and low AI adoption drive inefficiencies and poor customer experiences."
  },
  {
    title: "Pharmaceutical Enterprise",
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

const NodCaseStudies = () => {
  return (
    <section className="w-full mx-auto py-16 hidden lg:block">
      <div className="max-w-[1713px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-xl xl:text-4xl text-[#807C65] font-semibold tracking-tight mb-4">
            From risk reduction to revenue growth
          </h3>
          <h2 className="text-4xl xl:text-6xl font-semibold text-[#373737] mb-8 tracking-tighter">
            Here is what&apos;s possible when data meets intelligence.
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="startups" className="w-full flex flex-col items-center">
          <TabsList className="flex gap-2 mb-12 bg-[#D9D8D8] px-2 py-8 rounded-full">
            <TabsTrigger 
              value="startups"
              className="px-8 py-6 cursor-pointer rounded-full text-2xl font-semibold data-[state=active]:bg-[#2F2C28] data-[state=active]:text-white text-[#252525] transition-all duration-300"
            >
              Startups
            </TabsTrigger>
            <TabsTrigger 
              value="enterprises"
              className="px-8 py-6 cursor-pointer rounded-full text-2xl font-semibold data-[state=active]:bg-[#2F2C28] data-[state=active]:text-white text-[#252525] transition-all duration-300"
            >
              Enterprises
            </TabsTrigger>
          </TabsList>

          {/* Startups Content */}
          <TabsContent value="startups" className="mt-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* E-commerce Case - Large Card */}
              <div className="py-8 px-10 rounded-[16px] flex flex-col gap-8 min-h-[425px]" style={{backgroundColor: nodStartupColors[0]}}>
                <div>
                  <p className="text-[#000000] text-3xl mb-8">{startupCases[0].description}</p>
                  <div className="w-full h-[1px] bg-[#71717133] mb-8"></div>
                  <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                    Read story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex justify-between items-end">
                  {startupCases[0].metrics && (
                    <div className="flex gap-12">
                      {startupCases[0].metrics.map((metric, index) => (
                        <div key={index}>
                          <p className="text-[#55493D] text-4xl font-semibold mb-1">{metric.value}</p>
                          <p className="text-[#55493D] text-xl font-semibold">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-[#A2A89C] text-[54px] font-semibold tracking-tighter leading-none text-right">
                    Revolutionizing<br />E-Commerce
                  </p>
                </div>
              </div>

              {/* Service Business Case */}
              <div className="py-8 px-10 rounded-[16px] relative flex flex-col justify-between min-h-[425px]" style={{backgroundColor: nodStartupColors[1]}}>
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                    <p className="text-[#AEACA9] text-[54px] font-semibold tracking-tighter leading-none">Service Business</p>
                    <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-[#080507] text-xl">Service businesses rely on customer retention and efficiency but often lack the data tools to scale smart, informed decisions.</p>
                  <div className="w-full h-[1px] bg-[#71717133]"></div>
                </div>
                <div className="grid grid-cols-2 justify-between">
                    <div>
                      <p className="text-[40px] font-semibold text-[#55493D]">30%</p>
                      <p className="text-xl text-[#AEACA9]">Additional Income</p>
                    </div>
                    <div>
                      <p className="text-[40px] font-semibold text-[#55493D]">$150K+</p>
                      <p className="text-xl text-[#AEACA9]">Value Drivers</p>
                    </div>
                </div>
              </div>

              {/* Other Cases - 3 Column Grid */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                {startupCases.slice(2, 5).map((caseStudy, index) => (
                  <div key={index} className={`py-8 px-10 rounded-[16px] relative flex flex-col justify-between min-h-[403px]`} style={{backgroundColor: nodStartupColors[index+2]}}>
                    <div className="flex flex-col gap-4">
                      <p className={`text-[38px] font-semibold tracking-tight`}>{caseStudy.subtitle}</p>
                      <p className={`text-[18px]`}>{caseStudy.description}</p>
                      <div className="w-full h-[1px] bg-[#71717133]"></div>
                    </div>
                    <div className="flex flex-row items-center w-full">
                      <p className={`text-[40px] leading-none font-semibold w-2/3`}>
                        {caseStudy.title}
                      </p>
                      <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit justify-center">
                        Read story <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Supply Chain - Full Width */}
              <div className="md:col-span-2 py-8 px-10 rounded-[16px]" style={{backgroundColor: nodStartupColors[5]}}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex-1 flex flex-row justify-between items-center">
                    <p className="text-[#2F2C28] text-[28px] font-semibold max-w-[930px] tracking-tight">{startupCases[5].description}</p>
                    <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex gap-12">
                    {startupCases[5].metrics && startupCases[5].metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-[40px] font-semibold text-[#55493D]">{metric.value}</p>
                        <p className="text-xl text-[#55493D]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#000000]/25 text-[64px] font-semibold tracking-tighter whitespace-nowrap">Global Supply Chain</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Enterprises Content - updated colors */}
          <TabsContent value="enterprises" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Telecom Provider - Large Card */}
              <div className="md:col-span-2 py-8 px-10 rounded-[16px]" style={{backgroundColor: nodEnterpriseColors[0]}}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex-1 flex flex-row justify-between items-center">
                    <p className="text-[#2F2C28] text-[28px] font-semibold max-w-[960px] tracking-tight">{enterpriseCases[0].description}</p>
                    <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex gap-12">
                    {enterpriseCases[0].metrics && enterpriseCases[0].metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-[40px] font-semibold text-[#55493D]">{metric.value}</p>
                        <p className="text-xl text-[#55493D] max-w-[180px]">
                          {index === 0 ? 'Boost in Network\nInvestment ROI' : 'Reduction in\nCustomer Churn'}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#AEACA9] text-[54px] font-semibold tracking-tight leading-none text-right">Telecommunications<br />Provider</p>
                </div>
              </div>

              {/* Middle Three Cards */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                {enterpriseCases.slice(1, 4).map((caseStudy, index) => (
                  <div key={index} className={`py-8 px-10 rounded-[16px] relative flex flex-col justify-between min-h-[403px]`} style={{backgroundColor: nodEnterpriseColors[index+1]}}>
                    <div className="flex flex-col gap-4">
                      <p className={`text-[38px] font-semibold tracking-tight ${
                        index === 0 ? 'text-[#2F2C28]' : 
                        index === 1 ? 'text-[#4D4D4D]' : 
                        'text-[#3A3A3A]'
                      }`}>{caseStudy.subtitle}</p>
                      <p className={`text-[18px] leading-5 tracking-tight ${
                        index === 0 ? 'text-[#739079]' : 
                        index === 1 ? 'text-[#606060]' : 
                        'text-[#7A746C]'
                      }`}>{caseStudy.description}</p>
                      <div className="w-full h-[1px] bg-[#71717133]"></div>
                    </div>
                    <div className="flex flex-row items-end w-full mt-auto">
                      <p className={`leading-none font-semibold w-2/3 ${
                        index === 0 ? 'text-[#4A7571AD] text-[32px]' : 
                        index === 1 ? 'text-[#83B2AB] text-[54px]' : 
                        'text-[#859472] text-[40px]'
                      }`}>
                        {index === 0 ? 'Manufacturing' : 
                         index === 1 ? 'Global\nRetailer' : 
                         'Insurance\nCorporation'}
                      </p>
                      <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit justify-center">
                        Read story <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Two Cards */}
              <div className="py-8 px-10 rounded-[16px] relative flex flex-col justify-between min-h-[403px]" style={{backgroundColor: nodEnterpriseColors[4]}}>
                <div className="flex flex-col gap-8 h-full">
                  <div className="flex justify-between items-center">
                    <p className="text-[#080507] text-xl max-w-[496px] text-[28px] tracking-tight">{enterpriseCases[4].description}</p>
                    <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="w-full h-[1px] bg-[#71717133] mb-4"></div>
                  <div className="flex justify-between items-end mt-auto">
                    <div className="grid grid-cols-2 gap-16">
                      <div className="flex flex-col">
                        <p className="text-[40px] font-semibold text-[#55493D]">+38%</p>
                        <p className="text-xl text-[#55493D] text-nowrap">disruptions predicted <br /> in advance</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[40px] font-semibold text-[#55493D]">24%</p>
                        <p className="text-xl text-[#55493D]">Reduction in Customer Churn</p>
                      </div>
                    </div>
                    <p className="text-[#A2A89C] text-[54px] min-w-[370px] font-semibold tracking-tighter leading-none text-right">Global Financial<br />Services</p>
                  </div>
                </div>
              </div>

              <div className="py-8 px-10 rounded-[16px] relative flex flex-col justify-between" style={{backgroundColor: nodEnterpriseColors[5]}}>
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                    <p className="text-[#BAA894] text-[54px] font-semibold tracking-tighter leading-none">Pharmaceutical<br />Enterprise</p>
                    <Link href="#" className="inline-flex flex-shrink-0 items-center gap-2 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-[#080507] text-xl">Pharma faces high-stakes data demands, but rising trial complexity and regulatory shifts challenge even top firms to stay agile and efficient.</p>
                  <div className="w-full h-[1px] bg-[#71717133] mb-4"></div>
                </div>
                <div className="grid grid-cols-2 justify-between">
                  <div>
                    <p className="text-[40px] font-semibold text-[#55493D]">+28%</p>
                    <p className="text-xl text-[#898278]">Accelerated Clinical Trials</p>
                  </div>
                  <div>
                    <p className="text-[40px] font-semibold text-[#55493D]">+34%</p>
                    <p className="text-xl text-[#898278]">Decision-Making Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default NodCaseStudies; 