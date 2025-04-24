'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { z } from 'zod'

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string()
    .email("Invalid email address")
    .refine((email) => {
      const personalEmailDomains = [
        'gmail.com',
        'outlook.com',
        'hotmail.com',
        'yahoo.com',
        'icloud.com',
        'aol.com',
        'protonmail.com',
        'mail.com',
        'zoho.com',
        'yandex.com'
      ];
      const domain = email.split('@')[1]?.toLowerCase();
      return !personalEmailDomains.includes(domain);
    }, "Please use your work email address (personal email domains are not allowed)"),
  message: z.string().min(1, "Message is required")
});

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const steps = [
    {
      field: "name",
      placeholder: "Your Name",
      type: "text"
    },
    {
      field: "email",
      placeholder: "Your Work Mail",
      type: "email"
    },
    {
      field: "message",
      placeholder: "Tell us why you are reaching out",
      type: "textarea"
    }
  ];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const validateField = (field: keyof FormData, value: FormData[keyof FormData]) => {
    try {
      formSchema.shape[field].parse(value);
      setErrors(prev => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    const field = steps[currentStep].field as keyof FormData;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleNext = () => {
    const field = steps[currentStep].field as keyof FormData;
    const isValid = validateField(field, formData[field]);
    
    if (!isValid) {
      // If there's an error, show it in the placeholder
      const error = errors[field];
      if (error) {
        // Force a re-render to show the error
        setErrors(prev => ({ ...prev, [field]: error }));
      }
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const field = steps[currentStep].field as keyof FormData;
    if (validateField(field, formData[field])) {
      if (currentStep === steps.length - 1) {
        try {
          formSchema.parse(formData);
          console.log('Form submitted:', formData);
          setIsSubmitted(true);
        } catch (error) {
          if (error instanceof z.ZodError) {
            const newErrors: Partial<Record<keyof FormData, string>> = {};
            error.errors.forEach(err => {
              const path = err.path[0] as keyof FormData;
              newErrors[path] = err.message;
            });
            setErrors(newErrors);
          }
        }
      } else {
        handleNext();
      }
    }
  };

  return (
    <section className="relative w-full mx-auto py-16">
      <div className="relative bg-[url('/images/contact/contact-form-bg.png')] bg-cover bg-center rounded-4xl px-4 md:px-8 xl:px-20 py-16 overflow-hidden lg:min-h-[1100px] flex items-center">
        <div id="contact-form" className="relative z-10 max-w-[1527px] mx-auto h-[629px] lg:h-[843px]">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-white mb-4 tracking-tighter">
                Thank You!
              </h2>
              <p className="text-xl xl:text-5xl text-[#868686] font-semibold">
                We have received your message and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-white mb-4 tracking-tighter">
                  Tell Us About You
                </h2>
                <p className="text-base xl:text-5xl text-[#868686] font-semibold">
                  We would love to hear from you—whether you are ready to apply or just want to introduce yourself.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                {/* Header */}

                {/* Input Field */}
                <div className="relative w-full">
                  {steps[currentStep].type === 'textarea' ? (
                    <textarea
                      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                      value={formData[steps[currentStep].field as keyof FormData] as string}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={errors[steps[currentStep].field as keyof FormData] || steps[currentStep].placeholder}
                      className={`w-full bg-transparent border-b-2 px-4 py-4 -mb-2 text-white placeholder:text-[32px] lg:placeholder:text-5xl text-[32px] lg:text-5xl focus:outline-none transition-colors resize-none h-[72px] text-center ${
                        errors[steps[currentStep].field as keyof FormData] 
                          ? 'border-red-500 placeholder-red-500' 
                          : 'border-white/20 placeholder-white/50 focus:border-white/40'
                      }`}
                      rows={1}
                    />
                  ) : (
                    <input
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      type={steps[currentStep].type}
                      value={formData[steps[currentStep].field as keyof FormData] as string}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={errors[steps[currentStep].field as keyof FormData] || steps[currentStep].placeholder}
                      className={`w-full bg-transparent border-b-2 px-4 py-4 text-white placeholder:text-[32px] lg:placeholder:text-5xl text-[32px] lg:text-5xl focus:outline-none transition-colors text-center h-[72px] ${
                        errors[steps[currentStep].field as keyof FormData] 
                          ? 'border-red-500 placeholder-red-500' 
                          : 'border-white/20 placeholder-white/50 focus:border-white/40'
                      }`}
                    />
                  )}
                  {/* Progress Indicators */}
                  <div className="flex justify-end gap-2 mt-4">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`relative w-3 h-3 lg:w-7 lg:h-7 rounded-full transition-all duration-300 ${
                          index === currentStep
                            ? 'bg-white' // Current step - solid white
                            : index < currentStep
                            ? 'bg-white' // Completed step - white with inner circle
                            : 'border-2 border-white' // Future step - white border only
                        }`}
                      >
                        {index < currentStep && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-[#1C1C1C]" />
                          </div>
                        )}
                      </div>
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
                      className="bg-[#292929] text-[#CAC9C9] px-12 py-4 text-3xl font-semibold rounded-full cursor-pointer shadow-[0_5px_0_0_#ADADAD] hover:shadow-[0_3px_0_0_#ADADAD] transition-all duration-300 flex items-center justify-between gap-10"
                    >
                      <ArrowLeft className="w-6 h-6" />
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`bg-white text-[#2F2C28] px-12 py-4 text-3xl font-semibold rounded-full cursor-pointer shadow-[0_5px_0_0_#6B5B4D]  hover:shadow-[0_3px_0_0_#6B5B4D] transition-all duration-300 flex items-center justify-between gap-10 ${
                      currentStep > 0 ? 'ml-8' : ''
                    }`}
                  >
                    {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;