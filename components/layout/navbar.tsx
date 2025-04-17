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
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediumMenuOpen, setIsMediumMenuOpen] = useState(false);
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
  const isMediumScreen = windowWidth >= 769 && windowWidth < 1800;
  // Check if we're in the large screen range
  const isLargeScreen = windowWidth >= 1800;
  // Check if we're in the mobile screen range
  const isMobileScreen = windowWidth <= 768;

  return (
    <nav className="relative w-full max-w-[1920px] mx-auto md:px-8 px-4 md:py-10 py-5">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="grain-texture">
          <Link href="/" className="block">
            <Image
              src="/icons/neural-paths-logo.svg"
              alt="Neural Paths"
              width={100}
              height={100}
              className="object-contain h-auto w-20"
              priority
            />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {/* Menu Toggle - Desktop (>1800px) */}
          {isLargeScreen && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-9 py-6 bg-[#BAB3AB] rounded-full grain-texture hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out"
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
            </button>
          )}

          {/* Menu Toggle - Responsive (769px-1800px) */}
          {isMediumScreen && (
            <DropdownMenu onOpenChange={(open) => setIsMediumMenuOpen(open)}>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-9 py-6 bg-[#BAB3AB] rounded-full grain-texture hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out">
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
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="mt-4 border-none p-8 w-[848px] bg-white rounded-2xl"
                style={{
                  overflowY: "auto",
                }}
              >
                <div className="flex flex-col">
                  <div className="flex gap-16 mb-8">
                    {/* Products Grid */}
                    <div className="flex-1">
                      <h2 className="text-[40px] font-semibold text-[#14141459] mb-6">
                        Products
                      </h2>
                      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                        {[
                          {
                            name: "Rovyk",
                            sub: "AI Powerhouse",
                            icon: "/icons/rovyk.svg",
                            href: "https://rovyk.com"
                          },
                          {
                            name: "Lawbit",
                            sub: "AI for Legal Intelligence",
                            icon: "/icons/lawbit.svg",
                            href: "https://lawbit.ai"
                          },
                          {
                            name: "Spider",
                            sub: "AI Pitch Deck Analyzer",
                            icon: "/icons/spider.svg",
                            href: "#"
                          },
                          {
                            name: "Kashew",
                            sub: "AI for Invoicing",
                            icon: "/icons/kashew.svg",
                            href: "#"
                          },
                        ].map((product) => (
                          <div
                            key={product.name}
                            className="flex items-center gap-4"
                          >
                            <Image
                              src={product.icon}
                              alt={product.name}
                              width={100}
                              height={100}
                              className="w-auto h-12 object-contain"
                            />
                            <div>
                              <Link href={product.href} target="_blank">        
                                <p className="text-xl font-semibold text-[#2F2C28]">
                                  {product.name}
                                </p>
                                <p className="text-base text-[#666666]">
                                  {product.sub}
                                </p>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="bg-[#F8F8F8] px-8 py-6 rounded-2xl h-fit flex flex-col gap-8 min-w-[300px] ">
                      {[
                        { name: "Home", icon: "/icons/home.svg", href: "/" },
                        { name: "About Us", icon: "/icons/about.svg", href: "/about" },
                        { name: "Contact", icon: "/icons/contact.svg", href: "/contact" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-2 hover:bg-[#5454541A] duration-300 transition-all ease-in-out p-3 rounded-md"
                        >
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={32}
                            height={32}
                            className="w-auto h-10 object-contain aspect-[4/3] group-hover:grayscale-0 group-hover:brightness-0 transition-all duration-300"
                          />
                          <Link href={item.href}>
                            <span className="text-xl text-[#2F2C28]">
                              {item.name}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-8">
                    {/* Neural Nexus Section */}
                    <div className="flex flex-col h-full relative">
                      <h2 className="text-[40px] font-semibold text-[#14141459] mb-0">
                        Platform
                      </h2>

                      <div className="relative bg-[#493E32] p-6 rounded-[16px] min-w-[388px] overflow-hidden">
                        {/* Background Image */}
                        <Image
                          src="/icons/navbar-circle.svg"
                          alt="background circle"
                          width={200}
                          height={200}
                          className="absolute bottom-0 right-0 z-0 pointer-events-none select-none"
                        />

                        {/* Foreground Content */}
                        <div className="relative z-10">
                          <h2 className="text-[24px] font-semibold text-[#84725E] mb-2">
                            Neural Nexus
                          </h2>
                          <p className="text-[#DCDCDC] text-base mb-4">
                            Unlock real-time, tailored AI insights with Neural
                            Nexus—cutting through complexity to reveal what
                            others miss.
                          </p>
                          <Button className="bg-[#FAF9F6] hover:bg-[#FAF9F6] text-[#55493D] rounded-full px-10 py-6 text-base flex items-center gap-2 cursor-pointer hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out transition-all duration-300">
                            Read Use Cases
                            <Image
                              src="/icons/arrow-navbar.svg"
                              alt="arrow"
                              width={24}
                              height={24}
                              className="w-8 h-6 object-contain"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bg-[#EBEBEB] text-white rounded-2xl p-10 flex flex-col gap-8 max-w-[460px]">
                      <div className="flex justify-between items-center">
                        <Image
                          src="/icons/ampersand-logo.svg"
                          alt="Ampersand Logo"
                          width={80}
                          height={80}
                          className="object-contain w-20 h-auto"
                        />
                        <Button className="bg-[#575757] hover:bg-[#575757] text-white text-lg rounded-full px-10 py-6 cursor-pointer hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out transition-all duration-300">
                          Visit Website
                        </Button>
                      </div>
                      <p className="text-base leading-relaxed text-[#575757]">
                        At Ampersand, we turn bold visions into tangible
                        outcomes. Through innovative solutions and strategic
                        collaboration, we empower startups and businesses to
                        grow with purpose and clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Menu Toggle - Mobile (<769px) */}
          {isMobileScreen && (
            <DropdownMenu onOpenChange={(open) => setIsMobileMenuOpen(open)}>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer space-y-1.5 transition-all duration-300 group focus:outline-none px-6 py-6 bg-[#C1BBB4] rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out">
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
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="mt-4 border-none p-6 max-w-[400px] bg-white rounded-[16px]"
                style={{
                  overflowY: "auto",
                  boxShadow: "-4px 4px 10px 0 rgba(0, 0, 0, 0.12)",
                }}
              >
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Section - Navigation Links */}
                  <div className="flex flex-col gap-6 mt-2">
                    {["Home", "About Us", "Contact"].map(
                      (item) => (
                        <span
                          key={item}
                          className="text-sm md:text-lg text-[#2F2C28] cursor-pointer "
                        >
                          {item}
                        </span>
                      )
                    )}
                    <Button className="bg-[#2F2C28] rounded-full py-5 px-8 text-base w-fit grain-texture hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out cursor-pointer duration-300 transition-all">
                      Sign In
                    </Button>
                  </div>

                  {/* Right Section - Products */}
                  <div>
                    <h2 className="md:text-[24px] text-base font-semibold text-[#000000] mb-6">
                      Products
                    </h2>
                    <div className="flex flex-col gap-6">
                      {[
                        { name: "Rovyk", icon: "/icons/rovyk.svg", href: "https://rovyk.com" },
                        { name: "Lawbit", icon: "/icons/lawbit.svg", href: "https://lawbit.ai" },
                        { name: "Spider", icon: "/icons/spider.svg", href: "#" },
                        { name: "kashew", icon: "/icons/kashew.svg", href: "#" },
                      ].map((product) => (
                        <div
                          key={product.name}
                          className="flex items-center gap-3"
                        >
                          <Image
                            src={product.icon}
                            alt={product.name}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                          <Link href={product.href} target="_blank">
                          <span className="text-sm md:text-lg text-[#000000]">
                            {product.name}
                          </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Neural Nexus Section */}
                <div className="mt-4">
                  <div className="bg-[#493E32] p-4 rounded-[16px] md:w-full w-[286px]">
                    <h2 className="text-[18px] font-semibold text-white mb-2">
                      Neural Nexus
                    </h2>
                    <p className="text-white text-sm mb-4">
                      Unlock real-time, tailored AI insights with Neural
                      Nexus—cutting through complexity to reveal what others
                      miss.
                    </p>
                    <Button className="bg-white text-[#493E32] rounded-full px-4 py-8 text-sm flex items-center gap-2 w-full">
                      Read Use Cases
                      <Image
                        src="/icons/arrow.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                    </Button>
                  </div>
                </div>

                {/* Bottom Section - Ampersand */}
                <div className="bg-[#EBEBEB] text-[#575757] md:w-full w-[286px] rounded-[16px] p-4 mt-8 flex flex-col gap-4">
                  <Image
                    src="/icons/ampersand-logo.svg"
                    alt="Ampersand Logo"
                    width={40}
                    height={40}
                    className="object-contain w-10 h-auto"
                  />
                  <p className="text-sm leading-normal text-[#575757]">
                    Ampersand transforms bold visions into impactful growth
                    through innovation and strategic collaboration.
                  </p>
                  <Button className="bg-[#575757] text-white text-base rounded-full py-6 w-full hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out transition-all duration-300">
                    Visit Website
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {!isMobileScreen && (
            <Button className="bg-[#2F2C28] rounded-full py-7 px-13 text-base grain-texture hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out transition-all duration-300 cursor-pointer">
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
            animate={{ height: 335, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
              height: {
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              },
              opacity: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="overflow-hidden bg-white w-full px-8 py-6 mx-auto rounded-[16px] grain-navbar"
          >
            <div className="flex justify-between items-start h-full gap-4">
              {/* Products Section */}
              <div className="mr-6">
                <h2 className="text-[40px] font-semibold text-[#14141459] mb-6">
                  Products
                </h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                  {[
                    {
                      name: "Rovyk",
                      sub: "AI Powerhouse",
                      icon: "/icons/rovyk.svg",
                    },
                    {
                      name: "Lawbit",
                      sub: "AI for Legal Intelligence",
                      icon: "/icons/lawbit.svg",
                    },
                    {
                      name: "Spider",
                      sub: "AI Pitch Deck Analyzer",
                      icon: "/icons/spider.svg",
                    },
                    {
                      name: "Kashew",
                      sub: "AI for Invoicing",
                      icon: "/icons/kashew.svg",
                    },
                  ].map((product) => (
                    <div
                      key={product.name}
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <Image
                        src={product.icon}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="w-auto h-10 object-contain"
                      />
                      <div>
                        <p className="text-[24px] font-semibold text-[#2F2C28]">
                          {product.name}
                        </p>
                        <p className="text-lg text-[#7B746B]">{product.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-[2px] h-[222px] bg-[#0000000D] mt-12"></div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 mt-12 min-w-[289px] px-10">
                {[
                  { name: "Home", icon: "/icons/home.svg", href: "/" },
                  { name: "About Us", icon: "/icons/about.svg", href: "/about" },
                  { name: "Contact", icon: "/icons/contact.svg", href: "/contact" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-4 p-4 rounded-[8px] hover:bg-[#5454541A] transition-colors duration-300 cursor-pointer min-w-[200px]"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-auto h-9 object-contain aspect-[4/3] group-hover:grayscale-0 group-hover:brightness-0 transition-all duration-300"
                    />
                    <Link href={item.href}>
                      <span className="text-[#5B5B5B] group-hover:text-[#2F2C28] transition-colors text-[24px] font-semibold">
                        {item.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Neural Nexus Section */}
              <div className="relative">
                <h2 className="text-[40px] font-semibold text-[#14141459] mb-0">
                  Platform
                </h2>

                <div className="relative bg-[#493E32] p-6 rounded-[16px] max-w-[441px] h-full overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src="/icons/navbar-circle.svg"
                    alt="background circle"
                    width={250}
                    height={250}
                    className="absolute bottom-0 right-0 z-0 pointer-events-none select-none"
                  />

                  {/* Foreground Content */}
                  <div className="relative z-10">
                    <h2 className="text-[24px] font-semibold text-[#84725E] mb-1">
                      Neural Nexus
                    </h2>
                    <p className="text-white text-base mb-4 max-w-[90%]">
                      Unlock real-time, tailored AI insights with Neural
                      Nexus—cutting through complexity to reveal what others
                      miss.
                    </p>
                    <Button className="bg-[#FAF9F6] text-[#55493D] hover:bg-[#FAF9F6] rounded-full px-6 py-6 text-base flex items-center gap-2 cursor-pointer hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out transition-all duration-300">
                      Read Use Cases
                      <Image
                        src="/icons/arrow-navbar.svg"
                        alt="arrow"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Ampersand Section */}
              <div className="bg-[#EBEBEB] text-[#575757] rounded-[16px] p-12 flex flex-col justify-between max-w-[460px] h-full">
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/icons/ampersand-logo.svg"
                      alt="Ampersand Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <Button className="bg-[#575757] hover:bg-[#575757] text-white text-base rounded-full px-8 py-6 cursor-pointer hover:shadow-[0_5px_0_0_#C6AEA3] ease-in-out transition-all duration-300">
                      Visit Website
                    </Button>
                  </div>
                  <p className="text-base text-[#575757]">
                    At Ampersand, we turn bold visions into tangible outcomes.
                    Through innovative solutions and strategic collaboration, we
                    empower startups and businesses to grow with purpose and
                    clarity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}