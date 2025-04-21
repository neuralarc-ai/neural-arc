import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-[#2E2A25] text-white py-12 z-10 grain-hero shadow-[0_-8px_0_0_#7E7367] rounded-t-2xl">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Left Section */}
          <div className="flex flex-col justify-between">
            {/* Logo Section */}
            <div className="mb-12">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/neural-paths-footer.svg"
                  alt="NeuralArc"
                  width={66}
                  height={66}
                  className="w-auto h-8"
                />
                <span className="text-white text-[30px] font-semibold">NeuralArc</span>
                <div className="h-8 w-[1px] bg-[#FFFFFF1A] mx-2"></div>
                <p className="text-[#64594E] text-lg">Where data meets neural intelligence</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[#FFFFFF7A] text-3xl mb-6">Stay Connected</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/instagram.svg" 
                    alt="Instagram" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link>
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/linkedin.svg" 
                    alt="LinkedIn" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link>
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/twitter.svg" 
                    alt="Twitter" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link>
                <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Image 
                    src="/icons/medium.svg" 
                    alt="Medium" 
                    width={35} 
                    height={35}
                    className="transition-all duration-300 hover:brightness-125" 
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-[1024px]">
            {/* Company Column */}
            <div>
              <h4 className="text-white text-lg mb-4">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[#817F7D] hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-[#817F7D] hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/careers" className="text-[#817F7D] hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/responsible-ai" className="text-[#817F7D] hover:text-white transition-colors">Responsible AI</Link></li>
                <li><Link href="/about" className="text-[#817F7D] hover:text-white transition-colors">Philosophy</Link></li>
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-white text-lg mb-4">Product</h4>
              <ul className="space-y-4">
                <li><Link href="https://rovyk.com" target="_blank" className="text-[#817F7D] hover:text-white transition-colors">Rovyk</Link></li>
                <li><Link href="https://lawbit.ai" target="_blank" className="text-[#817F7D] hover:text-white transition-colors">Lawbit</Link></li>
                <li><Link href="#" className="text-[#817F7D] hover:text-white transition-colors">Spider</Link></li>
                <li><Link href="#" className="text-[#817F7D] hover:text-white transition-colors">Kashew</Link></li>
              </ul>
            </div>

            {/* Neural Nexus Column */}
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#C0B3A6] font-semibold text-2xl">NeuralNod</h2>
                <p className="text-[#868686] text-sm">
                  Unlock real-time, tailored AI insights with NeuralNod
                </p>
              </div>
              <Link href="#" className="text-[#817F7D] hover:text-white transition-colors flex items-center gap-2 group">
                Read Use Cases
                <Image 
                  src="/icons/arrow.svg" 
                  alt="arrow" 
                  width={38} 
                  height={20}
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>

            {/* Ampersand Column */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="text-white text-lg mb-4">Ampersand</h4>
                <p className="text-[#817F7D] mb-6 max-w-[280px]">At Ampersand, we turn bold visions into tangible outcomes. Through innovative solutions and strategic collaboration, we empower startups and businesses to grow with purpose and clarity.</p>
              </div>
              <Link href="https://ampvc.com" target="_blank" className="text-[#817F7D] hover:text-white transition-colors flex items-center gap-2 group">
                Visit Website
                <Image 
                  src="/icons/arrow.svg" 
                  alt="arrow" 
                  width={38} 
                  height={20}
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          {/* Left - Terms and Privacy */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link href="/terms" className="text-[#8C8376] hover:text-white transition-colors underline">Terms of use</Link>
            <span className="text-[#8C8376]">•</span>
            <Link href="/privacy" className="text-[#8C8376] hover:text-white transition-colors underline">Privacy Policy</Link>
          </div>

          {/* Center - Copyright */}
          <p className="text-[#B4B0AA] mb-4 md:mb-0">Copyright 2025. All rights reserved.</p>

          {/* Right - Brand */}
          <p className="text-[#988C7D]">A thing by <span className="font-semibold text-[22px] text-[#F1EEE9]">NeuralArc</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;