import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { Confetti } from '@/components/magicui/confetti';
import { z } from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JoinWaitlistDialogProps {
  open: boolean;
  onClose: () => void;
}

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
});

const JoinWaitlistDialog: React.FC<JoinWaitlistDialogProps> = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState<{ [k: string]: string | null }>({ name: null, email: null });
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const steps = [
    {
      field: "name",
      placeholder: "Your Name",
      type: "text"
    },
    {
      field: "email",
      placeholder: "Your Work Email",
      type: "email"
    }
  ];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  const validateField = (field: keyof typeof form, value: string) => {
    try {
      schema.shape[field].parse(value);
      setError(prev => ({ ...prev, [field]: null }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(prev => ({ ...prev, [field]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof typeof form, value);
    setApiError(null);
  };

  const handleNext = () => {
    const field = steps[currentStep].field as keyof typeof form;
    if (validateField(field, form[field])) {
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
    const field = steps[currentStep].field as keyof typeof form;
    if (validateField(field, form[field])) {
      if (currentStep === steps.length - 1) {
        try {
          schema.parse(form);
          setLoading(true);
          const res = await fetch('/api/waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
          });
          const data = await res.json();
          if (!res.ok || !data.success) {
            setApiError(data.error || 'Failed to join the waitlist. Please try again.');
            setLoading(false);
            return;
          }
          setSuccess(true);
          setLoading(false);
          setTimeout(() => {
            onClose();
          }, 4000);
        } catch {
          setApiError('Something went wrong. Please try again.');
          setLoading(false);
        }
      } else {
        handleNext();
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="rounded-4xl border-[#E0E4DC] bg-[#1C1C1C] p-0 shadow-2xl lg:min-w-4xl min-w-[90%] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {!success && (
            <motion.div
              key="waitlist-form"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col p-6 items-center justify-center"
            >
              <div 
                className="relative w-full h-[200px] lg:h-[300px] rounded-2xl bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-6"
                style={{ 
                  backgroundImage: 'url(/images/waitlist/waitlist-banner.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                
                {/* Text content */}
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-5xl xl:text-7xl font-semibold text-[#392E26] mb-4 tracking-tighter">
                    Join the Waitlist
                  </h2>
                  <p className="text-lg lg:text-xl text-[#392E26] max-w-2xl">
                    Be among the first to experience our AI-powered solutions.
                  </p>
                </div>
              </div>

              <DialogClose asChild>
                <button
                  className="absolute top-8 right-8 lg:right-9 cursor-pointer xl:top-9 z-10 text-white/50 hover:text-white transition-colors rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/20 bg-black/20 backdrop-blur-sm"
                  aria-label="Close dialog"
                  type="button"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </DialogClose>
            </motion.div>
          )}
          {success && (
            <motion.div
              key="waitlist-success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center text-center py-16 min-h-[400px] bg-[#1C1C1C]"
            >
              <Confetti
                options={{
                  particleCount: 260,
                  spread: 120,
                  startVelocity: 45,
                  gravity: 0.7,
                  ticks: 350,
                  origin: { y: 0.2 },
                  colors: [
                    '#8DA571', '#2F2C28', '#C6AEA3', '#E0E4DC', '#F7F6F3', '#FFD700', '#FF6F61', '#4F8A8B', '#F9A602', '#A259F7'
                  ],
                }}
                className='w-full absolute inset-0'
                globalOptions={{ resize: true, useWorker: true }}
              />
              <svg width="56" height="56" fill="none" viewBox="0 0 56 56" className="mb-4 text-[#8DA571]"><circle cx="28" cy="28" r="28" fill="#E0E4DC"/><path d="M18 28l8 8 12-12" stroke="#8DA571" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="text-4xl font-bold text-white mb-4">You&apos;re on the waitlist!</h3>
              <p className="text-[#868686] text-2xl max-w-md">Thank you for joining. We&apos;ll let you know as soon as early access is available. Stay tuned for updates!</p>
            </motion.div>
          )}
        </AnimatePresence>
        {!success && (
          <form onSubmit={handleSubmit} className="flex flex-col justify-between lg:min-h-[400px] min-h-[250px] p-8 bg-[#1C1C1C]">

            <div className="flex flex-col items-center lg:mt-10">
              <div className="relative w-full">
                <input
                  ref={inputRef}
                  type={steps[currentStep].type}
                  name={steps[currentStep].field}
                  value={form[steps[currentStep].field as keyof typeof form]}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder={error[steps[currentStep].field as keyof typeof form] || steps[currentStep].placeholder}
                  className={`w-full bg-transparent border-b-2 px-4 py-4 text-white placeholder:text-2xl xl:placeholder:text-4xl text-2xl xl:text-4xl focus:outline-none transition-colors text-center h-[72px] ${
                    error[steps[currentStep].field as keyof typeof form] 
                      ? 'border-red-500 placeholder-red-500' 
                      : 'border-white/20 placeholder-white/50 focus:border-white/40'
                  }`}
                  disabled={loading}
                />
                
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

            {apiError && <div className="text-red-500 text-sm text-center font-medium mt-4">{apiError}</div>}

            <div className="flex flex-col gap-8 mt-16">
              <div className="flex justify-center items-center">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-[#292929] text-[#CAC9C9] px-12 py-4 text-xl font-semibold rounded-full cursor-pointer shadow-[0_5px_0_0_#ADADAD] hover:shadow-[0_3px_0_0_#ADADAD] transition-all duration-300 flex items-center justify-between gap-10"
                    disabled={loading}
                  >
                    <ArrowLeft className="w-6 h-6" />
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className={`bg-white text-[#2F2C28] px-12 py-4 text-xl font-semibold rounded-full cursor-pointer shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] transition-all duration-300 flex items-center justify-between gap-10 ${
                    currentStep > 0 ? 'ml-8' : ''
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                  disabled={loading}
                >
                  {loading ? 'Joining...' : (currentStep === steps.length - 1 ? 'Join Waitlist' : 'Next')}
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JoinWaitlistDialog; 