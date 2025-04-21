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
]

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
    description: "Speed is essential for growth insights but limited tools and siloed data limit the potential.",
    metrics: [
      { value: "+38%", label: "Increased Revenue" },
      { value: "24%", label: "Cost Reduction" }
    ]
  },
  {
    title: "Global Retailer",
    subtitle: "Profit Through Precision",
    description: "Large retailers need unified data views but struggle with fragmented systems and manual processes."
  },
  {
    title: "Insurance Corporation",
    subtitle: "Risk Assessment & Claims Optimization",
    description: "Insurance providers face rising costs but lack unified data views to optimize decisions."
  },
  {
    title: "Pharmaceutical Enterprise",
    description: "Pharma faces high stakes data demands but bring risk-averse and regulatory while change moves from insights to impact.",
    metrics: [
      { value: "+28%", label: "Operational Efficiency" },
      { value: "+34%", label: "Risk Management" }
    ]
  }
]

const CaseStudies = () => {
  return (
    <section className="w-full mx-auto py-16">
      <div className="max-w-[1713px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-xl xl:text-4xl text-[#807C65] mb-4">
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
              className="px-8 py-6 rounded-full text-2xl font-bold data-[state=active]:bg-[#2F2C28] data-[state=active]:text-white text-[#252525] transition-all duration-300"
            >
              Startups
            </TabsTrigger>
            <TabsTrigger 
              value="enterprises"
              className="px-8 py-6 rounded-full text-2xl font-bold data-[state=active]:bg-[#2F2C28] data-[state=active]:text-white text-[#252525] transition-all duration-300"
            >
              Enterprises
            </TabsTrigger>
          </TabsList>

          {/* Startups Content */}
          <TabsContent value="startups" className="mt-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* E-commerce Case - Large Card */}
              <div className="bg-[#E3DED7] p-8 rounded-3xl relative">
                <div className="mb-16">
                  <p className="text-[#000000] text-lg mb-8">{startupCases[0].description}</p>
                  <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F2C28] text-white rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300">
                    Read story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {startupCases[0].metrics && (
                  <div className="flex gap-12">
                    {startupCases[0].metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-4xl font-semibold text-[#000000]">{metric.value}</p>
                        <p className="text-sm text-[#000000]/50">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="absolute bottom-8 right-8 text-[#000000]/25 text-6xl">
                  Revolutionizing<br />E-Commerce
                </p>
              </div>

              {/* Service Business Case */}
              <div className="bg-[#F7F7F7] p-8 rounded-3xl relative">
                <div className="mb-16">
                  <p className="text-[#000000] text-lg mb-8">Service businesses rely on customer retention and efficiency but often lack the data tools to scale smart, informed decisions.</p>
                  <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F2C28] text-white rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300">
                    Read story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex gap-12">
                  <div>
                    <p className="text-4xl font-semibold text-[#000000]">30%</p>
                    <p className="text-sm text-[#000000]/50">Additional Income</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold text-[#000000]">$150K+</p>
                    <p className="text-sm text-[#000000]/50">Value Created</p>
                  </div>
                </div>
                <p className="absolute bottom-8 right-8 text-[#000000]/25 text-6xl">
                  Service<br />Business
                </p>
              </div>

              {/* Other Cases - 3 Column Grid */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                {startupCases.slice(1, 4).map((caseStudy, index) => (
                  <div key={index} className={`p-8 rounded-3xl relative ${
                    index === 0 ? 'bg-[#F3EBE7]' : 
                    index === 1 ? 'bg-[#E3DED7]' : 
                    'bg-[#D9D9D9]'
                  }`}>
                    {caseStudy.subtitle && (
                      <p className="text-2xl font-semibold text-[#000000] mb-4">{caseStudy.subtitle}</p>
                    )}
                    <p className="text-[#000000] text-base mb-8">{caseStudy.description}</p>
                    <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F2C28] text-white rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="absolute bottom-8 right-8 text-[#000000]/25 text-2xl">
                      {index === 0 ? 'Restaurant/\nFood Service' : 
                       index === 1 ? 'Healthcare' : 
                       'Channel\nRetail'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Global Supply Chain - Full Width */}
              <div className="md:col-span-2 bg-[#E3DED7] p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="flex-1">
                    <p className="text-[#000000] text-lg mb-8">{startupCases[4].description}</p>
                    <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F2C28] text-white rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="flex gap-12">
                    {startupCases[4].metrics && startupCases[4].metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-4xl font-semibold text-[#000000]">{metric.value}</p>
                        <p className="text-sm text-[#000000]/50">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#000000]/25 text-6xl whitespace-nowrap">Global Supply Chain</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Enterprises Content */}
          <TabsContent value="enterprises" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Telecom Case - Large Card */}
              <div className="bg-[#E3DED7] p-8 rounded-3xl">
                <div className="mb-8">
                  <p className="text-[#000000]/50 text-4xl mb-4">{enterpriseCases[0].title}</p>
                  <p className="text-[#000000] text-lg mb-8">{enterpriseCases[0].description}</p>
                  <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F2C28] text-white rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300">
                    Read story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {enterpriseCases[0].metrics && (
                  <div className="flex gap-12">
                    {enterpriseCases[0].metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-4xl font-semibold text-[#000000]">{metric.value}</p>
                        <p className="text-sm text-[#000000]/50">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Financial Services Case */}
              <div className="bg-[#F7F7F7] p-8 rounded-3xl">
                <p className="text-[#000000]/50 text-lg mb-2">Global Financial Services</p>
                <p className="text-2xl font-semibold text-[#000000] mb-4">{enterpriseCases[1].subtitle}</p>
                <p className="text-[#000000] text-lg mb-8">{enterpriseCases[1].description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-12">
                    {enterpriseCases[1].metrics && enterpriseCases[1].metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-4xl font-semibold text-[#000000]">{metric.value}</p>
                        <p className="text-sm text-[#000000]/50">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F2C28] text-white rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300">
                    Read story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Other Cases - 3 Column Grid */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                {enterpriseCases.slice(2, 5).map((caseStudy, index) => (
                  <div key={index} className={`p-8 rounded-3xl ${
                    index === 0 ? 'bg-[#D9D9D9]' : 
                    index === 1 ? 'bg-[#E3DED7]' : 
                    'bg-[#F3EBE7]'
                  }`}>
                    <p className="text-[#000000]/50 text-lg mb-2">{caseStudy.title}</p>
                    {caseStudy.subtitle && (
                      <p className="text-2xl font-semibold text-[#000000] mb-4">{caseStudy.subtitle}</p>
                    )}
                    <p className="text-[#000000] text-base mb-8">{caseStudy.description}</p>
                    {caseStudy.metrics && (
                      <div className="flex gap-8 mb-8">
                        {caseStudy.metrics.map((metric, index) => (
                          <div key={index}>
                            <p className="text-4xl font-semibold text-[#000000]">{metric.value}</p>
                            <p className="text-sm text-[#000000]/50">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F2C28] text-white rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300">
                      Read story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default CaseStudies