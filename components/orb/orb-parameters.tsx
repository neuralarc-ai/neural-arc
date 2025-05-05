'use client'

import React from 'react';

const stats = [
  {
    value: '77%',
    label: '1',
    sublabel: 'SMBs using AI gain competitive parity',
  },
  {
    value: '$495M',
    label: '2',
    sublabel: '2025 Competitive Intelligence Market',
  },
  {
    value: '9+',
    label: '3',
    sublabel: 'global languages decoded',
  },
  {
    value: '92%',
    label: '4',
    sublabel: 'of firms increasing AI investment',
  },
  {
    value: '3–7x',
    label: '5',
    sublabel: 'faster strategic pivots',
  },
  {
    value: '>1M ',
    label: '6',
    sublabel: 'competitor signals tracked per month',
  },
];

const OrbParameters = () => {
  return (
    <section
      className="w-full rounded-3xl mx-auto my-12 px-2 py-4 lg:py-8 lg:px-8 bg-[url('/images/nod/parameters-bg-mobile.png')] lg:bg-[url('/images/nod/parameters-bg.png')] bg-no-repeat bg-cover bg-center"
    >
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:px-16 mx-auto"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col h-full rounded-2xl p-6 md:p-8 lg:p-10"
          >
            <span className="text-[#000000] text-[32px] md:text-4xl lg:text-[64px] font-bold mb-4 pl-4 border-l-4 border-[#86BCB7]">
              {stat.value}
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

export default OrbParameters;