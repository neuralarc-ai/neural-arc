'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Track window width for responsive behavior
  useEffect(() => {
    // Set the initial width
    setWindowWidth(window.innerWidth);
    
    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Check if we're in the medium screen range
  const isMediumScreen = windowWidth >= 769 && windowWidth < 1800;
  // Check if we're in the large screen range
  const isLargeScreen = windowWidth >= 1800;
  // Check if we're in the mobile screen range
  const isMobileScreen = windowWidth <= 768;
  
  return (
    <nav className="relative w-full max-w-[1920px] mx-auto md:px-8 px-4 md:py-10 py-5">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <Image
          src="/icons/neural-paths-logo.svg"
          alt="Neural Paths"
          width={100}
          height={100}
          className="object-contain h-auto w-20"
        />

        <div className="flex gap-4 items-center">
          {/* Menu Toggle - Desktop (>1800px) */}
          {isLargeScreen && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-9 py-6 bg-[#BAB3AB] rounded-full"
            >
              <span
                className={cn(
                  'block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full',
                  isOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                )}
              />
              <span
                className={cn(
                  'block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full',
                  isOpen ? '-rotate-45 -translate-y-[2.5px]' : ''
                )}
              />
            </button>
          )}

          {/* Menu Toggle - Responsive (769px-1800px) */}
          {isMediumScreen && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-9 py-6 bg-[#BAB3AB] rounded-full">
                  <span className="block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full" />
                  <span className="block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="mt-4 border-none p-8 w-[827px] bg-white rounded-2xl"
                style={{
                  overflowY: 'auto',
                }}
              >
                <div className="flex flex-col">
                  <div className="flex gap-16 mb-8">
                    {/* Products Grid */}
                    <div className="flex-1">
                      <h2 className="text-[40px] font-semibold text-[#14141459] mb-6">Products</h2>
                      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                        {[
                          { name: "Rovyk", sub: "AI Powerhouse", icon: "/icons/rovyk.svg" },
                          { name: "Lawbit", sub: "AI for Legal Intelligence", icon: "/icons/lawbit.svg" },
                          { name: "Spider", sub: "AI Pitch Deck Analyzer", icon: "/icons/spider.svg" },
                          { name: "Kashew", sub: "AI for Invoicing", icon: "/icons/kashew.svg" },
                        ].map((product) => (
                          <div key={product.name} className="flex items-center gap-4">
                            <Image
                              src={product.icon}
                              alt={product.name}
                              width={100}
                              height={100}
                              className='w-auto h-12 object-contain'
                            />
                            <div>
                              <p className="text-xl font-semibold text-[#2F2C28]">{product.name}</p>
                              <p className="text-base text-[#666666]">{product.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="bg-[#F8F8F8] px-8 py-12 rounded-2xl h-fit flex flex-col gap-8 min-w-[300px]">
                      {[
                        { name: "Home", icon: "/icons/home.svg" },
                        { name: "About Us", icon: "/icons/about.svg" },
                        { name: "Contact", icon: "/icons/contact.svg" },
                        { name: "Use Cases", icon: "/icons/usecases.svg" },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center gap-4">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={32}
                            height={32}
                            className='w-auto h-10 object-contain aspect-[4/3] group-hover:grayscale-0 group-hover:brightness-0 transition-all duration-300'
                          />
                          <span className="text-xl text-[#2F2C28]">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="bg-[#2F2C28] text-white rounded-2xl p-10 flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                      <Image
                        src="/icons/ampersand-logo.svg"
                        alt="Ampersand Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                      <Button className="bg-white text-black text-lg rounded-full px-10 py-6">
                        Visit Website
                      </Button>
                    </div>
                    <p className="text-base leading-relaxed">
                      At Ampersand, we turn bold visions into tangible outcomes. Through
                      innovative solutions and strategic collaboration, we empower startups
                      and businesses to grow with purpose and clarity.
                    </p>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Menu Toggle - Mobile (<769px) */}
          {isMobileScreen && (
            <DropdownMenu onOpenChange={(open) => setIsMobileMenuOpen(open)}>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-6 py-6 bg-[#C1BBB4] rounded-full">
                  <span className={cn(
                    "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                    isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                  )} />
                  <span className={cn(
                    "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                  )} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="mt-4 border-none p-6 max-w-[400px] bg-white rounded-[16px]"
                style={{
                  overflowY: 'auto',
                  boxShadow: '-4px 4px 10px 0 rgba(0, 0, 0, 0.12)'
                }}
              >
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Section - Navigation Links */}
                  <div className="flex flex-col gap-6 mt-2">
                    {["Home", "About Us", "Contact Us", "Use Cases"].map((item) => (
                      <span key={item} className="text-sm md:text-lg text-[#2F2C28] cursor-pointer">
                        {item}
                      </span>
                    ))}
                    <Button className="bg-[#2F2C28] rounded-full py-5 px-8 text-base w-fit">
                      Sign In
                    </Button>
                  </div>

                  {/* Right Section - Products */}
                  <div>
                    <h2 className="md:text-[24px] text-base font-semibold text-[#000000] mb-6">Products</h2>
                    <div className="flex flex-col gap-6">
                      {[
                        { name: "Rovyk", icon: "/icons/rovyk.svg" },
                        { name: "Lawbit", icon: "/icons/lawbit.svg" },
                        { name: "Spider", icon: "/icons/spider.svg" },
                        { name: "kashew", icon: "/icons/kashew.svg" },
                      ].map((product) => (
                        <div key={product.name} className="flex items-center gap-3">
                          <Image
                            src={product.icon}
                            alt={product.name}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                          <span className="text-sm md:text-lg text-[#000000]">{product.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Ampersand */}
                <div className="bg-[#1D1D1D] text-white md:w-full w-[286px] rounded-[16px] p-4 mt-8 flex flex-col gap-4">
                  <Image
                    src="/icons/ampersand-logo.svg"
                    alt="Ampersand Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <p className="text-sm leading-normal ">
                    Ampersand transforms bold visions into impactful growth through innovation and strategic collaboration.
                  </p>
                  <Button className="bg-white text-black text-base rounded-full py-6 w-full">
                    Visit Website
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {!isMobileScreen && (
            <Button className="bg-[#2F2C28] rounded-full py-7 px-10 text-base">
              Sign In
            </Button>
          )}
        </div>
      </div>

      {/* Expanding Menu - For Desktop (>1800px) */}
      <AnimatePresence>
        {isOpen && isLargeScreen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 325, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden bg-white w-full px-8 py-6 mx-auto rounded-[16px]"
          >
            <div className="flex justify-between items-center h-full">
              {/* Navigation Links */}
              <div className="grid grid-cols-2 gap-8 mt-25">
                {[
                  { label: 'Home', icon: '/icons/home.svg' },
                  { label: 'About Us', icon: '/icons/about.svg' },
                  { label: 'Contact', icon: '/icons/contact.svg' },
                  { label: 'Use Cases', icon: '/icons/usecases.svg' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 bg-white/40 p-4 rounded-[8px] hover:bg-[#5454541A] transition-colors duration-300 cursor-pointer"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={28}
                      height={28}
                      className='w-auto h-10 object-contain aspect-[4/3] group-hover:grayscale-0 group-hover:brightness-0 transition-all duration-300'
                    />
                    <span className="text-[#5B5B5B] group-hover:text-[#2F2C28] transition-colors text-[24px] font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Separator Line */}
              <div className="w-[1px] h-[250px] bg-[#00000033]"></div>

              {/* Products Section */}
              <div>
                <h2 className="text-[40px] font-semibold text-[#14141459] mb-9 ">Products</h2>
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                  {[
                    { name: 'Rovyk', sub: 'AI Powerhouse', icon: '/icons/rovyk.svg' },
                    { name: 'Lawbit', sub: 'AI for Legal Intelligence', icon: '/icons/lawbit.svg' },
                    { name: 'Spider', sub: 'AI Pitch Deck Analyzer', icon: '/icons/spider.svg' },
                    { name: 'Kashew', sub: 'AI for Invoicing', icon: '/icons/kashew.svg' },
                  ].map((product) => (
                    <div key={product.name} className="flex items-center gap-4  cursor-pointer">
                      <Image
                        src={product.icon}
                        alt={product.name}
                        width={100}
                        height={100}
                        className='w-auto h-12 object-contain'
                      />
                      <div>
                        <p className="text-[24px] font-semibold text-[#2F2C28]">{product.name}</p>
                        <p className="text-lg text-[#7B746B]">{product.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ampersand Section */}
              <div className="bg-[#2F2C28] text-white rounded-[16px] p-12 flex flex-col justify-between max-w-[653px] h-full">
                <div className="flex justify-between items-center mb-4">
                  <Image
                    src="/icons/ampersand-logo.svg"
                    alt="Ampersand Logo"
                    width={100}
                    height={100}
                    className="object-contain w-25 h-auto"
                  />
                  <Button className="bg-white text-black text-base rounded-full px-10 py-7 hover:drop-shadow-lg hover:bg-white transition-all duration-300 cursor-pointer">
                    Visit Website
                  </Button>
                </div>
                <p className="text-lg leading-normal">
                  At Ampersand, we turn bold visions into tangible outcomes. Through
                  innovative solutions and strategic collaboration, we empower startups and
                  businesses to grow with purpose and clarity.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
