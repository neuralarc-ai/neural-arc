'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  interests: string;
}

const ContactForm = () => {
  // Form state management
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    interests: ''
  });

  // Form steps configuration
  const steps = [
    {
      title: "Tell Us About You",
      subtitle: "We would love to hear from you—whether you're ready to apply or just want to introduce yourself.",
      field: "name",
      placeholder: "Your Name",
      type: "text"
    },
    {
      title: "What's Your Email?",
      subtitle: "We will keep you updated on our latest developments and opportunities.",
      field: "email",
      placeholder: "Your Email",
      type: "email"
    },
    {
      title: "Where Do You Work?",
      subtitle: "Tell us about your current workplace.",
      field: "company",
      placeholder: "Company Name",
      type: "text"
    },
    {
      title: "What's Your Role?",
      subtitle: "Help us understand your expertise.",
      field: "role",
      placeholder: "Your Role",
      type: "text"
    },
    {
      title: "What Interests You?",
      subtitle: "Tell us what excites you about Neural Paths.",
      field: "interests",
      placeholder: "Your Interests",
      type: "text"
    },
    {
      title: "Any Additional Thoughts?",
      subtitle: "Feel free to share any other information.",
      field: "message",
      placeholder: "Your Message",
      type: "textarea"
    }
  ];

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [steps[currentStep].field]: e.target.value
    });
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      // Handle form submission here
      console.log('Form submitted:', formData);
    } else {
      handleNext();
    }
  };

  return (
    <section className="relative w-full max-w-[1726px] mx-auto px-4 py-16">
      <div className="relative bg-[url('/images/contact/contact-form-bg.png')] bg-cover bg-center rounded-4xl px-4 md:px-8 xl:px-20 py-16 overflow-hidden min-h-[1100px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/contact/form-pattern.svg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Form Content */}
        <div className="relative z-10 max-w-[1527px] mx-auto h-[843px]">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
              {/* Header */}
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-white mb-4 tracking-tighter">
                  {steps[currentStep].title}
                </h2>
                <p className="text-5xl text-[#868686] font-semibold">
                  {steps[currentStep].subtitle}
                </p>
              </div>

              {/* Input Field */}
              <div className="relative w-full max-w-3xl mt-32">
                {steps[currentStep].type === 'textarea' ? (
                  <textarea
                    value={formData[steps[currentStep].field as keyof FormData]}
                    onChange={handleInputChange}
                    placeholder={steps[currentStep].placeholder}
                    className="w-full bg-transparent border-b-2 border-white/20 px-4 py-4 text-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none min-h-[120px]"
                  />
                ) : (
                  <input
                    type={steps[currentStep].type}
                    value={formData[steps[currentStep].field as keyof FormData]}
                    onChange={handleInputChange}
                    placeholder={steps[currentStep].placeholder}
                    className="w-full bg-transparent border-b-2 border-white/20 px-4 py-4 text-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors text-center"
                  />
                )}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-8">
              {/* Navigation */}
              <div className="flex justify-center items-center gap-8">
                {/* Back Button */}
                <button
                  type="button"
                  onClick={handleBack}
                  className={`text-white px-8 py-3 rounded-full transition-all duration-300 ${
                    currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  Back
                </button>

                {/* Next Button */}
                <button
                  type="submit"
                  className="bg-white text-[#2F2C28] px-12 py-3 rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300"
                >
                  {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-end gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-white'
                        : index < currentStep
                        ? 'bg-white/60'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;