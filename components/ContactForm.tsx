'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  service: z.string().min(2, 'Select a service'),
  company: z.string().optional(),
  message: z.string().min(10, 'Tell us more about your request')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          company: data.company,
          message: data.message,
          _subject: 'Amit O P Sharma & Co Inquiry'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/90">Schedule Your Consultation</p>
        <h2 className="text-3xl font-semibold text-white">Start your financial clarity journey</h2>
        <p className="text-slate-400">Complete the form and our CA team will contact you with a personalised action plan.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-200">
            Full Name
            <input
              {...register('name')}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/60"
              placeholder="Your full name"
            />
            {errors.name ? <span className="text-xs text-rose-400">{errors.name.message}</span> : null}
          </label>
          <label className="space-y-2 text-sm text-slate-200">
            Email
            <input
              {...register('email')}
              type="email"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/60"
              placeholder="name@example.com"
            />
            {errors.email ? <span className="text-xs text-rose-400">{errors.email.message}</span> : null}
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-200">
            Phone Number
            <input
              {...register('phone')}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/60"
              placeholder="+91 94361 03734"
            />
            {errors.phone ? <span className="text-xs text-rose-400">{errors.phone.message}</span> : null}
          </label>
          <label className="space-y-2 text-sm text-slate-200">
            Service Required
            <select
              {...register('service')}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/60"
            >
              <option value="">Select a service</option>
              <option value="Income Tax Return Filing">Income Tax Return Filing</option>
              <option value="GST Registration & Filing">GST Registration & Filing</option>
              <option value="Tax Planning & Advisory">Tax Planning & Advisory</option>
              <option value="Company Registration">Company Registration</option>
              <option value="Audit & Assurance">Audit & Assurance</option>
              <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
              <option value="Business Consulting">Business Consulting</option>
              <option value="Financial Advisory">Financial Advisory</option>
              <option value="Compliance Services">Compliance Services</option>
              <option value="Payroll Management">Payroll Management</option>
            </select>
            {errors.service ? <span className="text-xs text-rose-400">{errors.service.message}</span> : null}
          </label>
        </div>

        <label className="space-y-2 text-sm text-slate-200">
          Company Name
          <input
            {...register('company')}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/60"
            placeholder="Your company name"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-200">
          Message
          <textarea
            {...register('message')}
            rows={5}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/60"
            placeholder="Tell us about your enquiry"
          />
          {errors.message ? <span className="text-xs text-rose-400">{errors.message.message}</span> : null}
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending...' : 'Submit Request'}
        </button>

        {status === 'success' ? (
          <p className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200">
            Thank you! Your request has been received. We will contact you shortly.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="rounded-3xl border border-rose-500/20 bg-rose-500/10 px-5 py-4 text-sm text-rose-200">
            Something went wrong while sending your message. Please try again later.
          </p>
        ) : null}
      </form>
    </div>
  );
}
