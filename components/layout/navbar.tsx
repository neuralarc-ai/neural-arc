"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JoinWaitlistDialog from "./JoinWaitlistDialog";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediumMenuOpen, setIsMediumMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const pathname = usePathname();

  // Track window width for responsive behavior
  useEffect(() => {
    // Set the initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menus when pathname changes
  useEffect(() => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
    setIsMediumMenuOpen(false);
  }, [pathname]);

  // Check if we're in the medium screen range
  const isMediumScreen = windowWidth >= 1396 && windowWidth < 1800;
  // Check if we're in the large screen range
  const isLargeScreen = windowWidth >= 1800;
  // Check if we're in the mobile screen range
  const isMobileScreen = windowWidth < 1396;

  // Handle link clicks for mobile and medium menus
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMediumMenuOpen(false);
  };

  return (
    <>
      <JoinWaitlistDialog open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
      <motion.nav 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1920px] mx-auto md:px-8 px-4 md:pt-10 py-5"
      >
        {/* Top bar */}
        <div className="flex justify-between items-center mb-4">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/neural-arc-logo.svg"
                alt="NeuralArc"
                width={220}
                height={60}
                className="object-contain h-auto lg:w-[200px] w-[100px]"
                priority
              />
            </Link>
          </motion.div>

          <div className="flex gap-4 items-center">
            {/* Menu Toggle - Desktop (>1800px) */}
            {isLargeScreen && (
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-9 py-6 bg-[#BAB3AB] rounded-full hover:shadow-[0_2px_0_0_#6B5B4D] shadow-[0_4px_0_0_#6B5B4D] ease-in-out"
              >
                <span
                  className={cn(
                    "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                    isOpen ? "rotate-45 translate-y-[6.5px]" : ""
                  )}
                />
                <span
                  className={cn(
                    "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                    isOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                  )}
                />
              </motion.button>
            )}

            {/* Menu Toggle - Responsive (1396px-1800px) */}
            {isMediumScreen && (
              <DropdownMenu open={isMediumMenuOpen} onOpenChange={setIsMediumMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-9 py-6 bg-[#BAB3AB] rounded-full hover:shadow-[0_2px_0_0_#6B5B4D] shadow-[0_4px_0_0_#6B5B4D] ease-in-out"
                  >
                    <span
                      className={cn(
                        "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                        isMediumMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                      )}
                    />
                    <span
                      className={cn(
                        "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                        isMediumMenuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                      )}
                    />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="mt-4 border-none p-8 max-w-[1297px] bg-white rounded-2xl"
                  style={{
                    overflowY: "auto",
                    right: "0",
                    left: "auto",
                    transform: "translateX(40px)",
                  }}
                >
                  <div className="flex flex-col">
                    {/* Main Grid */}
                    <div className="flex gap-6 mb-6">
                      {/* Company Section */}
                      <div className="rounded-2xl p-8 pl-0 min-w-[280px]">
                        <h2 className="text-[40px] font-semibold text-[#87765D] mb-8 tracking-tight">
                          Company
                        </h2>
                        <div className="flex flex-col gap-6">
                          <Link href="/about" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                            <div className="w-8 h-8">
                              <Image
                                src="/icons/overview.svg"
                                alt="Overview"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                            <span className="text-2xl text-[#2F2C28]">Overview</span>
                          </Link>
                          <Link href="/contact" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                            <div className="w-8 h-8">
                              <Image
                                src="/icons/contact.svg"
                                alt="Contact"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                            <span className="text-2xl text-[#2F2C28]">Contact</span>
                          </Link>
                          <Link href="/careers" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                            <div className="w-8 h-8">
                              <Image
                                src="/icons/careers.svg"
                                alt="Careers"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                            <span className="text-2xl text-[#2F2C28]">Careers</span>
                          </Link>
                        </div>
                      </div>

                      {/* ORB Section */}
                      <div className="bg-[#E0E4DC] rounded-2xl p-8 min-w-[442px]">
                        <div className="flex items-center gap-2 mb-1">
                          <Image
                            src="/images/orb/orb.svg"
                            alt="ORB"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                          <h2 className="text-[40px] font-bold text-[#465855]">ORB</h2>
                        </div>
                        <p className="text-[#255B47]/45 font-semibold text-2xl mb-8">{"{Outlast. Reimagine. Build.}"}</p>
                        <div className="flex flex-col gap-4 mb-8">
                          <Link href="/orb" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                            <div className="w-8 h-8">
                              <Image
                                src="/icons/discover.svg"
                                alt="Discover"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-2xl text-[#2F2C28]">Discover</span>
                          </Link>
                          <Link href="/orb" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                            <div className="w-8 h-8">
                              <Image
                                src="/icons/value.svg"
                                alt="Value Scenarios"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-2xl text-[#2F2C28]">Value Scenarios</span>
                          </Link>
                        </div>
                        <Button className="w-fit bg-[#2F2C28] hover:bg-[#2F2C28] cursor-pointer text-white rounded-full py-6 px-8 text-base shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300" onClick={() => setWaitlistOpen(true)}>
                          Get Early Access
                        </Button>
                      </div>

                      {/* NOD Section */}
                      <div className="bg-[#CCBEAE] rounded-2xl p-8 min-w-[442px]">
                        <div className="flex items-center gap-2 mb-1">
                          <Image
                            src="/images/nod/nod.svg"
                            alt="NOD"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                          <h2 className="text-[40px] font-bold text-[#5F554F]">NOD</h2>
                        </div>
                        <p className="text-[#584F48]/75 font-semibold text-2xl mb-8">{"{Navigate. Optimize. Disrupt.}"}</p>
                        <div className="flex flex-col gap-4 mb-8">
                          <Link href="/nod" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                            <div className="w-8 h-8">
                              <Image
                                src="/icons/discover.svg"
                                alt="Discover"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-2xl text-[#2F2C28]">Discover</span>
                          </Link>
                          <Link href="/nod" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                            <div className="w-8 h-8">
                              <Image
                                src="/icons/value.svg"
                                alt="Value Scenarios"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-2xl text-[#2F2C28]">Value Scenarios</span>
                          </Link>
                        </div>
                        <Button className="w-fit bg-[#2F2C28] hover:bg-[#2F2C28] cursor-pointer text-white rounded-full py-6 px-8 text-base shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300" onClick={() => setWaitlistOpen(true)}>
                          Get Early Access
                        </Button>
                      </div>
                    </div>

                    {/* Banner Section */}
                    <div className="relative w-full bg-[url('/images/navbar/banner-medium.png')] p-6 border border-[#65584A]/60 bg-no-repeat bg-cover bg-right rounded-2xl overflow-hidden max-h-[252px]">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">

                        <h2 className="text-[70px] font-semibold text-[#8A7E73] max-w-[330px] tracking-tight leading-none px-4">
                          ARC&apos;s <br /> <span className="text-[40px] font-semibold">Micro SaaS Suite</span>
                        </h2>
                        <div className="max-w-[310px]">
                          <h3 className="text-2xl font-semibold text-[#6B6B6B] mb-4 tracking-tight">
                            Small Tools. Massive Impact.
                          </h3>
                          <p className="text-base text-[#6B6B6B] tracking-tight">
                            NeuralArc offers a growing suite of focused AI-powered micro products—each built to solve real business problems, fast. Explore lightweight tools that pack enterprise-grade intelligence into simple, scalable solutions.
                          </p>
                        </div>
                        </div>
                        <Button className="bg-[#55493D] hover:bg-[#2F2C28] text-white rounded-full px-8 py-6 text-lg shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300 self-start mt-16">
                          Explore the Suite <Image src="/icons/arrow.svg" alt="Arrow" width={30} height={30} className="ml-1" />
                        </Button>
                      </div>
                      <p className="absolute bottom-4 right-8 text-2xl text-[#6B6B6B]">
                        The suite is growing. Real needs. Lasting impact.
                      </p>
                    </div>

                    {/* Ampersand Section Below Banner */}
                    <div className="bg-[#EBEBEB] rounded-2xl p-8 mt-6 w-full">
                      <div className="flex justify-between items-center">
                        <Image
                          src="/icons/ampersand-logo.svg"
                          alt="Ampersand Logo"
                          width={100}
                          height={80}
                          className="object-contain"
                        />
                        <p className="text-lg text-[#575757] max-w-[60%]">
                          At Ampersand, we turn bold visions into tangible outcomes.
                          Through innovative solutions and strategic collaboration,
                          we empower startups and businesses to grow with purpose
                          and clarity.
                        </p>
                        <Link 
                          href="https://ampvc.co/"
                          target="_blank"
                          className="bg-[#575757] hover:bg-[#575757] text-white text-base rounded-full px-8 py-6 cursor-pointer hover:shadow-[0_3px_0_0_#C6AEA3] shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300 flex items-center justify-center"
                        >
                          Visit Website
                        </Link>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Menu Toggle - Mobile (<1396px) */}
            {isMobileScreen && (
              <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-6 py-6 bg-[#C1BBB4] rounded-full hover:shadow-[0_2px_0_0_#6B5B4D] shadow-[0_4px_0_0_#6B5B4D] ease-in-out"
                  >
                    <span
                      className={cn(
                        "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                        isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                      )}
                    />
                    <span
                      className={cn(
                        "block h-[2.5px] w-[27px] bg-[#2F2C28] transition-transform duration-300 rounded-full",
                        isMobileMenuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
                      )}
                    />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="mt-4 border-none p-4 max-w-[400px] bg-white rounded-[16px]"
                  style={{
                    overflowY: "auto",
                    boxShadow: "-4px 4px 10px 0 rgba(0, 0, 0, 0.12)",
                    right: "0",
                    left: "auto",
                    transform: "translateX(0)",
                    marginRight: "0",
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Company Section */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="company" className="border-none">
                        <AccordionTrigger className="hover:no-underline py-0 pr-4 [&>svg]:rotate-90 [&[data-state=open]>svg]:-rotate-90">
                          <h2 className="text-2xl font-semibold text-[#87765D] tracking-tight">Company</h2>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="flex flex-col gap-4 pl-2">
                            <Link href="/about" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                              <div className="w-8 h-8">
                                <Image
                                  src="/icons/overview.svg"
                                  alt="Overview"
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                />
                              </div>
                              <span className="text-2xl text-[#2F2C28]">Overview</span>
                            </Link>
                            <Link href="/contact" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                              <div className="w-8 h-8">
                                <Image
                                  src="/icons/contact.svg"
                                  alt="Contact"
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                />
                              </div>
                              <span className="text-2xl text-[#2F2C28]">Contact</span>
                            </Link>
                            <Link href="/careers" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                              <div className="w-8 h-8">
                                <Image
                                  src="/icons/careers.svg"
                                  alt="Careers"
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                />
                              </div>
                              <span className="text-2xl text-[#2F2C28]">Careers</span>
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* ORB Section */}
                    <Accordion type="single" collapsible className="w-full p-4 bg-[#E0E4DC] rounded-[8px]">
                      <AccordionItem value="orb" className="border-none">
                        <AccordionTrigger className="hover:no-underline [&>svg]:rotate-90 [&[data-state=open]>svg]:-rotate-90 ">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/orb/orb.svg"
                                alt="ORB"
                                width={24}
                                height={24}
                                className="object-contain"
                              />
                              <h2 className="text-2xl font-bold text-[#465855]">ORB</h2>
                            </div>
                            <p className="text-[#255B47]/45 font-semibold text-base">{"{Outlast. Reimagine. Build.}"}</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="flex flex-col gap-4 pl-2">
                            <Link href="/orb" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                              <div className="w-8 h-8">
                                <Image
                                  src="/icons/discover.svg"
                                  alt="Discover"
                                  width={24}
                                  height={24}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-base text-[#2F2C28]">Discover</span>
                            </Link>
                            <Link href="/orb" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                              <div className="w-8 h-8">
                                <Image
                                  src="/icons/value.svg"
                                  alt="Value Scenarios"
                                  width={24}
                                  height={24}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-base text-[#2F2C28]">Value Scenarios</span>
                            </Link>
                            <Button className="w-fit bg-[#2F2C28] hover:bg-[#2F2C28] cursor-pointer text-white rounded-full py-6 px-8 text-base shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300" onClick={() => setWaitlistOpen(true)}>
                              Get Early Access
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* NOD Section */}
                    <Accordion type="single" collapsible className="w-full bg-[#E1DBD4] p-4 rounded-[8px]">
                      <AccordionItem value="nod" className="border-none">
                        <AccordionTrigger className="hover:no-underline [&>svg]:rotate-90 [&[data-state=open]>svg]:-rotate-90">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/nod/nod.svg"
                                alt="NOD"
                                width={24}
                                height={24}
                                className="object-contain"
                              />
                              <h2 className="text-2xl font-bold text-[#5F554F]">NOD</h2>
                            </div>
                            <p className="text-[#584F48]/75 font-semibold text-base">{"{Navigate. Optimize. Disrupt.}"}</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="flex flex-col gap-4 pl-2">
                            <Link href="/nod" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                              <div className="w-8 h-8">
                                <Image
                                  src="/icons/discover.svg"
                                  alt="Discover"
                                  width={24}
                                  height={24}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-2xl text-[#2F2C28]">Discover</span>
                            </Link>
                            <Link href="/nod" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                              <div className="w-8 h-8">
                                <Image
                                  src="/icons/value.svg"
                                  alt="Value Scenarios"
                                  width={24}
                                  height={24}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-2xl text-[#2F2C28]">Value Scenarios</span>
                            </Link>
                            <Button className="w-fit bg-[#2F2C28] hover:bg-[#2F2C28] cursor-pointer text-white rounded-full py-6 px-8 text-base shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300" onClick={() => setWaitlistOpen(true)}>
                              Get Early Access
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* ARC's Micro SaaS Suite Section */}
                    <div className="bg-[#F5F5F5] rounded-2xl p-4 border border-[#65584A]/60">
                      <div className="flex flex-col gap-4">
                        <h2 className="text-[32px] font-semibold text-[#8A7E73] tracking-tight leading-none">
                          NeuralPaths <br /> <span className="text-[24px]">Micro SaaS Suite</span>
                        </h2>
                        <p className="text-sm text-[#6B6B6B]">
                          The suite is growing. Real needs. Lasting impact.
                        </p>
                        <Button className="w-full bg-[#55493D] hover:bg-[#2F2C28] text-white rounded-full py-6 text-base shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300">
                          Explore the Suite <Image src="/icons/arrow.svg" alt="Arrow" width={24} height={24} className="ml-1" />
                        </Button>
                      </div>
                    </div>

                    {/* Ampersand Section */}
                    <div className="bg-[#EBEBEB] rounded-2xl p-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/icons/ampersand-logo.svg"
                            alt="Ampersand Logo"
                            width={80}
                            height={60}
                            className="object-contain"
                          />
                          <p className="text-2xl font-semibold text-[#575757]">Ampersand</p>
                        </div>
                        <Link 
                          href="https://ampvc.co/"
                          target="_blank"
                          className="w-full bg-[#575757] hover:bg-[#575757] text-white text-base rounded-full py-6 cursor-pointer hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300 flex items-center justify-center"
                        >
                          Visit Website
                        </Link>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {!isMobileScreen && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button className="bg-[#2F2C28] hover:bg-[#2F2C28] rounded-full py-7 px-13 text-base hover:shadow-[0_3px_0_0_#C6AEA3] shadow-[0_5px_0_0_#C6AEA3] ease-in-out transition-all duration-300 cursor-pointer">
                  Sign In
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Expanding Menu - For Desktop (>1800px) */}
        <AnimatePresence>
          {isOpen && isLargeScreen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="overflow-hidden bg-white w-full px-8 py-6 mx-auto rounded-[16px] my-8"
            >
              {/* Main Grid */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                {/* Company Section */}
                <div className="rounded-2xl p-8 pl-0">
                  <h2 className="text-[40px] font-semibold text-[#87765D] mb-8 tracking-tight">
                    Company
                  </h2>
                  <div className="flex flex-col gap-6">
                    <Link href="/about" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8">
                        <Image
                          src="/icons/overview.svg"
                          alt="Overview"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <span className="text-2xl text-[#2F2C28]">Overview</span>
                    </Link>
                    <Link href="/contact" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8">
                        <Image
                          src="/icons/contact.svg"
                          alt="Contact"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <span className="text-2xl text-[#2F2C28]">Contact</span>
                    </Link>
                    <Link href="/careers" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8">
                        <Image
                          src="/icons/careers.svg"
                          alt="Careers"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <span className="text-2xl text-[#2F2C28]">Careers</span>
                    </Link>
                  </div>
                </div>

                {/* ORB Section */}
                <div className="bg-[#E0E4DC] rounded-2xl p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <Image
                      src="/images/orb/orb.svg"
                      alt="ORB"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <h2 className="text-[40px] font-bold text-[#465855]">ORB</h2>
                  </div>
                  <p className="text-[#255B47]/45 font-semibold text-2xl mb-8">{"{Outlast. Reimagine. Build.}"}</p>
                  <div className="flex flex-col gap-4 mb-8">
                    <Link href="/orb" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8">
                        <Image
                          src="/icons/discover.svg"
                          alt="Discover"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-2xl text-[#2F2C28]">Discover</span>
                    </Link>
                    <Link href="/orb" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8">
                        <Image
                          src="/icons/value.svg"
                          alt="Value Scenarios"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-2xl text-[#2F2C28]">Value Scenarios</span>
                    </Link>
                  </div>
                  <Button className="w-fit bg-[#2F2C28] hover:bg-[#2F2C28] cursor-pointer text-white rounded-full py-6 px-8 text-base shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300" onClick={() => setWaitlistOpen(true)}>
                    Get Early Access
                  </Button>
                </div>

                {/* NOD Section */}
                <div className="bg-[#CCBEAE] rounded-2xl p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <Image
                      src="/images/nod/nod.svg"
                      alt="NOD"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <h2 className="text-[40px] font-bold text-[#5F554F]">NOD</h2>
                  </div>
                  <p className="text-[#584F48]/75 font-semibold text-2xl mb-8">{"{Navigate. Optimize. Disrupt.}"}</p>
                  <div className="flex flex-col gap-4 mb-8">
                    <Link href="/nod" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8">
                        <Image
                          src="/icons/discover.svg"
                          alt="Discover"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-2xl text-[#2F2C28]">Discover</span>
                    </Link>
                    <Link href="/nod" onClick={handleLinkClick} className="group flex items-center gap-4 hover:bg-[#5454541A] p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8">
                        <Image
                          src="/icons/value.svg"
                          alt="Value Scenarios"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-2xl text-[#2F2C28]">Value Scenarios</span>
                    </Link>
                  </div>
                  <Button className="w-fit bg-[#2F2C28] hover:bg-[#2F2C28] cursor-pointer text-white rounded-full py-6 px-8 text-base shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300" onClick={() => setWaitlistOpen(true)}>
                    Get Early Access
                  </Button>
                </div>

                {/* Ampersand Section */}
                <div className="bg-[#EBEBEB] flex flex-col justify-between rounded-2xl py-16 px-8">
                  <div className="flex justify-between items-center mb-8">
                    <Image
                      src="/icons/ampersand-logo.svg"
                      alt="Ampersand Logo"
                      width={100}
                      height={80}
                      className="object-contain"
                    />
                    <Link 
                      href="https://ampvc.co/"
                      target="_blank"
                      className="bg-[#575757] hover:bg-[#575757] text-white text-base rounded-full px-8 py-4 cursor-pointer hover:shadow-[0_3px_0_0_#C6AEA3] shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300 flex items-center justify-center"
                    >
                      Visit Website
                    </Link>
                  </div>
                  <p className="text-lg text-[#575757]">
                    At Ampersand, we turn bold visions into tangible outcomes.
                    Through innovative solutions and strategic collaboration,
                    we empower startups and businesses to grow with purpose
                    and clarity.
                  </p>
                </div>
              </div>

              {/* Banner Section */}
              <div className="relative w-full bg-[url('/images/navbar/banner-web.png')] px-4 border border-[#65584A]/60 bg-no-repeat bg-cover bg-center rounded-2xl overflow-hidden max-h-[252px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-[70px] font-semibold text-[#8A7E73] max-w-[360px] leading-none px-4">
                    ARC&apos;s <br /> <span className="text-[40px] font-semibold">Micro SaaS Suite</span>
                  </h2>
                  <div className="max-w-[387px]">
                    <h3 className="text-2xl font-semibold text-[#6B6B6B] mb-4">
                      Small Tools. Massive Impact.
                    </h3>
                    <p className="text-base text-[#6B6B6B]">
                      NeuralArc offers a growing suite of focused AI-powered micro products—each built to solve real business problems, fast. Explore lightweight tools that pack enterprise-grade intelligence into simple, scalable solutions.
                    </p>
                  </div>
                  <div className="relative w-fit h-full">
                    <Image
                      src="/images/navbar/logos.png"
                      alt="Suite Logos"
                      width={573}
                      height={251}
                      className="object-contain"
                    />
                  </div>
                  
                  <Link href="https://neuralpaths.ai" target="_blank" className="flex gap-2 flex-shrink-0 bg-[#55493D] hover:bg-[#55493D] cursor-pointer text-white rounded-full px-8 py-4 text-lg shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-300 self-start mt-16">
                    Explore the Suite <Image src="/icons/arrow.svg" alt="Arrow" width={30} height={30} className="ml-1" />
                  </Link>
                </div>
                <p className="absolute bottom-4 right-8 text-2xl text-[#6B6B6B]">
                  The suite is growing. Real needs. Lasting impact.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
