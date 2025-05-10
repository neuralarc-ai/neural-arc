'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { z } from 'zod'

interface FormData {
  name: string;
  email: string;
  portfolio: string;
  role: string;
  message: string;
  resume: File | null;
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  role: z.string().min(1, "Please select a role"),
  message: z.string().min(1, "Please tell us about yourself"),
  resume: z.instanceof(File).nullable()
});

const CareersForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    portfolio: '',
    role: '',
    message: '',
    resume: null
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const roles = [
    "Product Designer",
    "Full Stack Engineer (AI-First)",
    "Machine Learning Research Intern",
    "Growth & Partnerships Associate",
    "MicroSaaS Product Manager"
  ];

  const steps = [
    {
      field: "name",
      placeholder: "Your Name",
      type: "text"
    },
    {
      field: "email",
      placeholder: "Email",
      type: "email"
    },
    {
      field: "portfolio",
      placeholder: "Link to LinkedIn/Portfolio/Github",
      type: "text"
    },
    {
      field: "role",
      placeholder: "The Role you Are Interested In",
      type: "select"
    },
    {
      field: "message",
      placeholder: "Tell us more about yourself",
      type: "textarea"
    },
    {
      field: "resume",
      placeholder: "Attach Your Resume",
      type: "file"
    }
  ];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

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
    validateField(field, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, resume: file }));
      validateField('resume', file);
    }
  };

  const handleNext = () => {
    const field = steps[currentStep].field as keyof FormData;
    if (validateField(field, formData[field])) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const field = steps[currentStep].field as keyof FormData;
    if (validateField(field, formData[field])) {
      if (currentStep === steps.length - 1) {
        try {
          formSchema.parse(formData);
          // Send as FormData (multipart/form-data)
          const data = new FormData();
          data.append('name', formData.name);
          data.append('email', formData.email);
          data.append('portfolio', formData.portfolio);
          data.append('role', formData.role);
          data.append('message', formData.message);
          if (formData.resume) {
            data.append('resume', formData.resume);
          }
          await fetch('/api/careers', {
            method: 'POST',
            body: data,
          });
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

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="relative w-full mx-auto py-16">
      <div className="relative bg-[url('/images/contact/contact-form-bg.png')] bg-cover bg-center rounded-4xl px-4 md:px-8 xl:px-20 py-16 overflow-hidden min-h-[1100px] flex items-center">
        <div className="relative z-10 mx-auto h-[843px]">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-white mb-4 tracking-tighter">
                Thank You!
              </h2>
              <p className="text-5xl text-[#868686] font-semibold">
                We have received your application and will get back to you soon.
              </p>
            </div>
          ) : (
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
                <div className="relative w-full mt-32">
                  {steps[currentStep].type === 'textarea' ? (
                    <textarea
                      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                      value={formData[steps[currentStep].field as keyof FormData] as string}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={errors[steps[currentStep].field as keyof FormData] || steps[currentStep].placeholder}
                      className={`w-full bg-transparent border-b-2 px-4 py-4 -mb-2 text-white placeholder:text-5xl text-5xl focus:outline-none transition-colors resize-none h-[72px] text-center ${
                        errors[steps[currentStep].field as keyof FormData] 
                          ? 'border-red-500 placeholder-red-500' 
                          : 'border-white/20 placeholder-white/50 focus:border-white/40'
                      }`}
                      rows={1}
                    />
                  ) : steps[currentStep].type === 'select' ? (
                    <div className="relative w-full">
                      <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-full bg-transparent border-b-2 px-4 py-4 text-white placeholder:text-5xl text-5xl focus:outline-none transition-colors text-center h-[72px] cursor-pointer flex items-center justify-center ${
                          errors[steps[currentStep].field as keyof FormData] 
                            ? 'border-red-500' 
                            : 'border-white/20 focus:border-white/40'
                        }`}
                      >
                        {formData.role || (
                          <span className={errors[steps[currentStep].field as keyof FormData] ? 'text-red-500' : 'text-white/50'}>
                            {errors[steps[currentStep].field as keyof FormData] || "Select a role"}
                          </span>
                        )}
                      </div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image
                          src="/images/careers/dropdown.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="w-8 h-8"
                        />
                      </div>
                      {isOpen && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-[#1C1C1C] border-2 border-white/20 rounded-lg shadow-lg z-50">
                          {roles.map((role) => (
                            <div
                              key={role}
                              onClick={() => {
                                setFormData({...formData, role});
                                setIsOpen(false);
                                validateField('role', role);
                              }}
                              className="px-4 py-4 text-2xl text-white hover:bg-white/10 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                            >
                              {role}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : steps[currentStep].type === 'file' ? (
                    <div className="flex flex-col items-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <button
                        type="button"
                        onClick={handleFileClick}
                        className={`w-full bg-transparent border-b-2 px-4 py-4 text-5xl focus:outline-none transition-colors text-center h-[72px] underline cursor-pointer ${
                          errors[steps[currentStep].field as keyof FormData] 
                            ? 'border-red-500 text-red-500' 
                            : 'border-white/20 text-white/50 focus:border-white/40'
                        }`}
                      >
                        {formData.resume ? formData.resume.name : "Attach Your Resume"}
                      </button>
                    </div>
                  ) : (
                    <input
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      type={steps[currentStep].type}
                      value={formData[steps[currentStep].field as keyof FormData] as string}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={errors[steps[currentStep].field as keyof FormData] || steps[currentStep].placeholder}
                      className={`w-full bg-transparent border-b-2 px-4 py-4 text-white placeholder:text-5xl text-5xl focus:outline-none transition-colors text-center h-[72px] ${
                        errors[steps[currentStep].field as keyof FormData] 
                          ? 'border-red-500 placeholder-red-500' 
                          : 'border-white/20 placeholder-white/50 focus:border-white/40'
                      }`}
                    />
                  )}
                  
                  <div className="flex justify-end gap-2 mt-4">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`relative w-7 h-7 rounded-full transition-all duration-300 ${
                          index === currentStep
                            ? 'bg-white'
                            : index < currentStep
                            ? 'bg-white'
                            : 'border-2 border-white'
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

              <div className="flex flex-col gap-8">
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
                    className={`bg-white text-[#2F2C28] px-12 py-4 text-3xl font-semibold rounded-full cursor-pointer shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] transition-all duration-300 flex items-center justify-between gap-10 ${
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

export default CareersForm;