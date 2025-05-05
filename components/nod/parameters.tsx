'use client'

import React from 'react';

const stats = [
  {
    value: '14.3B',
    label: 'Parameters',
    sublabel: 'analyzed per second',
  },
  {
    value: '3-5x',
    label: 'Faster Insights',
    sublabel: 'within first 90 days of implementation',
  },
  {
    value: '40+',
    label: 'Hours saved',
    sublabel: 'monthly on manual reporting',
  },
  {
    value: '2.1M',
    label: 'Models trained',
    sublabel: 'across industry datasets',
  },
  {
    value: '72%',
    label: 'Lower Infra Cost',
    sublabel: 'vs. custom AI stack builds',
  },
  {
    value: '9+',
    label: 'Verticals Supported',
    sublabel: 'from finance to healthcare',
  },
  {
    value: '6.5M+',
    label: 'Data Points Processed Daily',
    sublabel: 'across diverse industries',
  },
  {
    value: '80%',
    label: 'Reduction in Data Silos',
    sublabel: 'by unifying fragmented sources into one intelligence layer',
  },
];

const Parameters = () => {
  return (
    <section
      className="w-full rounded-3xl mx-auto my-12 px-2 py-4 lg:py-8 lg:px-8 bg-[url('/images/nod/parameters-bg-mobile.png')] lg:bg-[url('/images/nod/parameters-bg.png')] bg-no-repeat bg-cover bg-center"
    >
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:px-16 mx-auto"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col h-full rounded-2xl p-6 md:p-8 lg:p-10"
          >
            <span className="text-[#000000] text-[32px] md:text-4xl lg:text-[64px] font-bold mb-4 pl-4 border-l-4 border-[#86BCB7]">
              {stat.value}
            </span>
            <span className="text-[#373737] text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              {stat.label}
            </span>
            <span className="text-[#373737]/60 text-sm lg:text-lg">
              {stat.sublabel}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parameters;