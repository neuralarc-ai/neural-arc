import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-[#2E2A25] text-white py-12 z-10 shadow-[0_-8px_0_0_#7E7367] rounded-t-2xl">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Left Section */}
          <div className="flex flex-col justify-between lg:h-[216px]">
            {/* Logo Section */}
            <div className="lg:mb-12">
              <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center gap-4 2xl:gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/neural-paths-footer.svg"
                    alt="NeuralArc"
                    width={66}
                    height={66}
                    className="w-auto lg:h-12 h-8"
                  />
                  <span className="text-white text-[30px] font-semibold">NeuralArc</span>
                </div>
                <div className="h-[1px] w-full 2xl:w-[1px] 2xl:h-8 bg-[#FFFFFF1A] 2xl:mx-2"></div>
                <p className="text-[#64594E] text-lg">Where data meets neural intelligence</p>
              </div>
            </div>

            {/* Social Links - Hidden on md and below, shown on lg and above */}
            <div className="hidden lg:block">
              <h4 className="text-[#FFFFFF7A] text-2xl xl:text-3xl mb-6">Stay Connected</h4>
              <div className="flex gap-4">
                {/* <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/instagram.svg" 
                    alt="Instagram" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link> */}
                <Link href="https://www.linkedin.com/company/neuralarcsai" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/linkedin.svg" 
                    alt="LinkedIn" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link>
                <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/twitter.svg" 
                    alt="Twitter" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link>
                {/* <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/medium.svg" 
                    alt="Medium" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link> */}
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-[1024px]">
            {/* Company Column */}
            <div>
              <h4 className="text-white text-lg xl:text-2xl mb-6">Company</h4>
              <ul className="space-y-4 lg:space-y-8">
                <li><Link href="/about" className="text-[#817F7D] hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-[#817F7D] hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/careers" className="text-[#817F7D] hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/responsible-ai" className="text-[#817F7D] hover:text-white transition-colors">Responsible AI</Link></li>
                <li><Link href="/about" className="text-[#817F7D] hover:text-white transition-colors">Philosophy</Link></li>
              </ul>
            </div>

            {/* NOD and ORB Section with Bottom Border */}
            <div className="col-span-2 mt-4 lg:mt-0">
              <div className="grid grid-cols-2 gap-8 mb-8">
                {/* NOD Column */}
                <div>
                  <div>
                    <h2 className="text-white text-lg xl:text-2xl">NOD</h2>
                    <p className="text-[#817F7D] text-base xl:text-lg">{"{Navigate. Optimize. Disrupt.}"}</p>
                  </div>
                  <p className="text-[#817F7D] mt-2 h-[136px] mb-4 lg:mb-0">
                    Unlock real-time, tailored AI insights with NOD — cutting through complexity to reveal what others miss.
                  </p>
                  <Link href="#" className="text-[#817F7D] hover:text-white transition-colors flex items-center gap-2 group">
                    Read Use Cases
                    <Image 
                      src="/icons/arrow.svg" 
                      alt="arrow" 
                      width={38} 
                      height={20}
                      className="transition-transform duration-300 group-hover:translate-x-1 hidden lg:block" 
                    />
                  </Link>
                </div>

                {/* ORB Column */}
                <div>
                  <div>
                    <h2 className="text-white text-lg xl:text-2xl">ORB</h2>
                    <p className="text-[#817F7D] text-base xl:text-lg max-w-[90%]">{"{Outlast. Reimagine. Build.}"}</p>
                  </div>
                  <p className="text-[#817F7D] mt-2 h-[136px] mb-4 lg:mb-0">
                    AI-driven competitor intelligence—unveiling strategic advantages instantly.
                  </p>
                  <Link href="#" className="text-[#817F7D] hover:text-white transition-colors flex items-center gap-2 group">
                    Read Use Cases
                    <Image 
                      src="/icons/arrow.svg" 
                      alt="arrow" 
                      width={38} 
                      height={20}
                      className="transition-transform duration-300 group-hover:translate-x-1 hidden lg:block" 
                    />
                  </Link>
                </div>
              </div>

              {/* Bottom Bordered Section */}
              <div className="border-[0.5px] border-[#FFFFFF80] rounded-2xl px-5 py-3 flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-white text-lg">NeuralPaths</h3>
                  <p className="text-[#817F7D] text-lg">Micro SaaS Suite</p>
                </div>
                <Link href="https://neuralpaths.ai" target="_blank" className="text-[#817F7D] hover:text-white transition-colors flex items-center gap-2 group">
                  Learn More
                  <Image 
                    src="/icons/arrow.svg" 
                    alt="arrow" 
                    width={38} 
                    height={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 hidden lg:block" 
                  />
                </Link>
              </div>
            </div>

            {/* Ampersand Column */}
            <div className="lg:h-fit mt-4 lg:mt-0 flex flex-col justify-between col-span-2 lg:col-span-1">
              <div>
                <h2 className="text-white text-2xl mb-2">Ampersand</h2>
                <p className="text-[#817F7D] mb-6">
                  At Ampersand, we turn bold visions into tangible outcomes. Through innovative solutions and strategic collaboration, we empower startups and businesses to grow with purpose and clarity.
                </p>
              </div>
              <Link href="https://ampvc.co" target="_blank" className="text-[#817F7D] hover:text-white transition-colors flex items-center gap-2 group">
                Visit Website
                <Image 
                  src="/icons/arrow.svg" 
                  alt="arrow" 
                  width={38} 
                  height={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 hidden lg:block" 
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links - Shown on md and below, hidden on lg and above */}
        <div className="lg:hidden mb-16">
          <h4 className="text-[#FFFFFF7A] text-2xl xl:text-3xl mb-6">Stay Connected</h4>
          <div className="flex gap-4">
            {/* <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
              <Image 
                src="/icons/instagram.svg" 
                alt="Instagram" 
                width={55} 
                height={55}
                className="transition-all duration-300 hover:brightness-125" 
              />
            </Link> */}
            <Link href="https://www.linkedin.com/company/neuralarcsai" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full">
              <Image 
                src="/icons/linkedin.svg" 
                alt="LinkedIn" 
                width={55} 
                height={55}
                className="transition-all duration-300 hover:brightness-125" 
              />
            </Link>
            <Link href="/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full">
              <Image 
                src="/icons/twitter.svg" 
                alt="Twitter" 
                width={55} 
                height={55}
                className="transition-all duration-300 hover:brightness-125" 
              />
            </Link>
            {/* <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
              <Image 
                src="/icons/medium.svg" 
                alt="Medium" 
                width={55} 
                height={55}
                className="transition-all duration-300 hover:brightness-125" 
              />
            </Link> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-[0.5px] border-[#FFFFFF]/15">
          
          <p className="text-[#B4B0AA] mb-4 md:mb-0 lg:order-1 order-2">Copyright 2025. All rights reserved.</p>
          
          <div className="flex items-center gap-4 mb-4 md:mb-0 lg:order-2 order-1">
            <Link href="/terms-of-use" className="text-[#8C8376] hover:text-white transition-colors underline">Terms of use</Link>
            <span className="text-[#8C8376]">•</span>
            <Link href="/privacy-policy" className="text-[#8C8376] hover:text-white transition-colors underline">Privacy Policy</Link>
            <span className="text-[#8C8376]">•</span>
            <Link href="/disclaimer" className="text-[#8C8376] hover:text-white transition-colors underline">Disclaimer</Link>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;