"use client";

interface ValueCard {
  title: string;
  value: string;
  subtitle: string;
}

interface ValueProps {
  title: string;
  subtitle: string;
  cards: ValueCard[];
}

const cardColors = [
  "bg-[#B7A694]",
  "bg-[#B7BEAE]",
  "bg-[#939090]",
  "bg-[#DFCFC9]",
];

export default function Value({ title, subtitle, cards }: ValueProps) {
  return (
    <section className="w-full px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 text-[#232323]">{title}</h2>
      <p className="text-lg md:text-xl text-center mb-10 text-[#7A7A7A]">{subtitle}</p>
      {/* Desktop Grid */}
      <div className="hidden max-w-[1654px] mx-auto lg:grid grid-cols-2 gap-6">
        {/* First 3 cards: special layout */}
        {cards.slice(0, 3).map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl ${cardColors[idx]} h-[403px] flex flex-col justify-between p-8`}
          >
            <div className={`${(idx === 1) ? 'text-[#232323]' : 'text-[#fff]'} text-xl md:text-2xl xl:text-[48px] font-semibold mb-2 tracking-tight leading-tight`}>{card.title}</div>
            <div className="flex flex-row justify-between items-end w-full">
              <div className={`${(idx === 1) ? 'text-[#232323]' : 'text-[#fff]'} text-base leading-tight tracking-tight lg:text-[32px] self-end font-semibold`}>{card.subtitle}</div>
              <div className="text-5xl 2xl:text-[164px] lg:text-[90px] font-semibold text-[#fff] opacity-50">{card.value}</div>
            </div>
          </div>
        ))}
        {/* Fourth card: vertical layout */}
        <div className={`rounded-2xl ${cardColors[3]} h-[403px] flex flex-col justify-between p-8`}>
          <div className="text-xl md:text-2xl font-semibold mb-2 text-[#232323]">{cards[3].title}</div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="text-5xl 2xl:text-[128px] lg:text-[90px] font-semibold text-[#fff] mb-2">{cards[3].value}</div>
          </div>
          <div className="text-base leading-tight tracking-tight lg:text-[32px] text-[#232323] text-start font-semibold">{cards[3].subtitle}</div>
        </div>
      </div>
      {/* Mobile/Tablet Stack */}
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl ${cardColors[idx]} h-[198px] flex flex-col justify-between items-center p-4 text-center`}
          >
            <div className="text-xl font-semibold text-[#fff]">{card.title}</div>
            <div className="text-5xl font-semibold text-[#fff] opacity-50">{card.value}</div>
            <div className="text-2xl font-semibold text-[#fff] pretty">{card.subtitle}</div>
          </div>
        ))}
      </div>
      {/* Disclaimer */}
      <p className="text-sm text-[#7F8C8D] text-center mt-8 lg:px-24 mx-auto">
        *The data presented herein has been compiled from publicly available open sources believed to be reliable. However, no representation or warranty, express or implied, is made as to the accuracy, completeness, timeliness, or reliability of the data. The information is provided &quot;as is&quot; for general informational purposes only and does not constitute professional advice or assurance of any kind. Users are advised to independently verify all data before relying on it for any purpose. We disclaim any and all liability arising from the use of or reliance on this data.
      </p>
    </section>
  );
} 