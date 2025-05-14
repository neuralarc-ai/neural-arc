import React, { useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { Confetti } from '@/components/magicui/confetti';
import { z } from 'zod';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JoinWaitlistDialogProps {
  open: boolean;
  onClose: () => void;
}

const schema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
});

const JoinWaitlistDialog: React.FC<JoinWaitlistDialogProps> = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState<{ [k: string]: string | null }>({ name: null, email: null });
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: null });
    setApiError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    const result = schema.safeParse(form);
    if (!result.success) {
      const newErrors: { [k: string]: string | null } = { name: null, email: null };
      result.error.errors.forEach(err => {
        if (err.path[0]) newErrors[err.path[0]] = err.message;
      });
      setError(newErrors);
      if (newErrors.name && nameRef.current) nameRef.current.focus();
      else if (newErrors.email && emailRef.current) emailRef.current.focus();
      return;
    }
    setError({ name: null, email: null });
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email })
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
  };

  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="rounded-3xl border-[#E0E4DC] bg-[#F7F6F3] p-4 shadow-2xl min-w-4xl overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {!success && (
            <motion.div
              key="waitlist-form"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center justify-center mb-6"
            >
              <Image
                src="/images/waitlist/waitlist-banner.png"
                alt="Join Waitlist Banner"
                width={420}
                height={120}
                className="object-contain w-full h-auto rounded-2xl shadow-sm"
                priority
              />
              <DialogClose asChild>
                <button
                  className="absolute top-6 right-6 z-10 text-[#8B857C] hover:text-[#2F2C28] transition-colors rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#C6AEA3] bg-white/80 shadow"
                  aria-label="Close dialog"
                  type="button"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12"/></svg>
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
              className="relative flex flex-col items-center justify-center text-center py-8 min-h-[220px]"
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
              <h3 className="text-3xl font-bold text-[#2F2C28] mb-2">You&apos;re on the waitlist!</h3>
              <p className="text-[#76716E] text-lg max-w-md">Thank you for joining. We&apos;ll let you know as soon as early access is available. Stay tuned for updates!</p>
            </motion.div>
          )}
        </AnimatePresence>
        {!success && (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 p-8 pt-0">
            <div className="flex flex-col gap-2">
              <label htmlFor="waitlist-name" className="text-base font-medium text-[#373737] mb-1">Full Name</label>
              <input
                id="waitlist-name"
                name="name"
                ref={nameRef}
                type="text"
                value={form.name}
                onChange={handleInput}
                placeholder="Your full name"
                className={`w-full px-5 py-4 rounded-xl border-2 text-base bg-white/80 text-[#2F2C28] border-[#E0E4DC] focus:border-[#8DA571] focus:outline-none transition-all shadow-sm ${error.name ? 'border-red-400' : ''}`}
                required
                disabled={loading}
              />
              {error.name && <div className="text-red-500 text-sm -mt-1">{error.name}</div>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="waitlist-email" className="text-base font-medium text-[#373737] mb-1">Work Email</label>
              <input
                id="waitlist-email"
                name="email"
                ref={emailRef}
                type="email"
                value={form.email}
                onChange={handleInput}
                placeholder="Your work email"
                className={`w-full px-5 py-4 rounded-xl border-2 text-base bg-white/80 text-[#2F2C28] border-[#E0E4DC] focus:border-[#8DA571] focus:outline-none transition-all shadow-sm ${error.email ? 'border-red-400' : ''}`}
                required
                disabled={loading}
              />
              {error.email && <div className="text-red-500 text-sm -mt-1">{error.email}</div>}
            </div>
            {apiError && <div className="text-red-500 text-sm -mt-1 text-center font-medium">{apiError}</div>}
            <button
              type="submit"
              className="w-fit self-center cursor-pointer flex items-center justify-center gap-2 bg-[#2F2C28] text-white rounded-full py-4 px-8 font-semibold text-base shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Joining...' : (<><span>Join Waitlist</span> <ArrowRight className="ml-2 w-5 h-5" /></>)}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JoinWaitlistDialog; 