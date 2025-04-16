'use client'

import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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
      field: "name",
      placeholder: "Your Name",
      type: "text"
    },
    {
      field: "email",
      placeholder: "Your Email",
      type: "email"
    },
    {
      field: "company",
      placeholder: "Company Name",
      type: "text"
    },
    {
      field: "role",
      placeholder: "Your Role",
      type: "text"
    },
    {
      field: "interests",
      placeholder: "Your Interests",
      type: "text"
    },
    {
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
      <div className="relative bg-[url('/images/contact/contact-form-bg.png')] bg-cover bg-center rounded-4xl px-4 md:px-8 xl:px-20 py-16 overflow-hidden min-h-[1100px] flex items-center">
        {/* Form Content */}
        <div className="relative z-10 max-w-[1527px] mx-auto h-[843px]">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-white mb-4 tracking-tighter">
                  Tell Us About You
                </h2>
                <p className="text-5xl text-[#868686] font-semibold">
                  We would love to hear from you—whether you are ready to apply or just want to introduce yourself.
                </p>
              </div>
            <div className="flex flex-col items-center">
              {/* Header */}

              {/* Input Field */}
              <div className="relative w-full mt-32">
                {steps[currentStep].type === 'textarea' ? (
                  <textarea
                    value={formData[steps[currentStep].field as keyof FormData]}
                    onChange={handleInputChange}
                    placeholder={steps[currentStep].placeholder}
                    className="w-full bg-transparent border-b-2 border-white/20 px-4 py-4 text-2xl text-white placeholder-white/50 placeholder:text-5xl focus:outline-none focus:border-white/40 transition-colors resize-none min-h-[120px]"
                  />
                ) : (
                  <input
                    type={steps[currentStep].type}
                    value={formData[steps[currentStep].field as keyof FormData]}
                    onChange={handleInputChange}
                    placeholder={steps[currentStep].placeholder}
                    className="w-full bg-transparent border-b-2 border-white/20 px-4 py-4 text-2xl text-white placeholder-white/50 placeholder:text-5xl focus:outline-none focus:border-white/40 transition-colors text-center"
                  />
                )}
                {/* Progress Indicators */}
                <div className="flex justify-end gap-2 mt-4">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-7 h-7 rounded-full transition-all duration-300 ${
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
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-8">
              {/* Navigation */}
              <div className="flex justify-center items-center">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-[#292929] text-[#CAC9C9] px-12 py-4 text-3xl font-semibold rounded-full cursor-pointer hover:shadow-[0_5px_0_0_#ADADAD] transition-all duration-300 flex items-center justify-between gap-10"
                  >
                    <ArrowLeft className="w-6 h-6" />
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className={`bg-white text-[#2F2C28] px-12 py-4 text-3xl font-semibold rounded-full cursor-pointer hover:shadow-[0_5px_0_0_#6B5B4D] transition-all duration-300 flex items-center justify-between gap-10 ${
                    currentStep > 0 ? 'ml-8' : ''
                  }`}
                >
                  {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;