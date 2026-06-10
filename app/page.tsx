import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import HeroSection from '@/components/HeroSection';
import HighlightsGrid from '@/components/HighlightsGrid';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import BackToTop from '@/components/BackToTop';

const services = [
  {
    title: 'Income Tax Return Filing',
    icon: 'FileCheck',
    description: 'Expert return preparation and filing for individuals, businesses, and professionals.'
  },
  {
    title: 'GST Registration & Filing',
    icon: 'Zap',
    description: 'Complete GST compliance services for registration, returns, and reconciliation.'
  },
  {
    title: 'Tax Planning & Advisory',
    icon: 'ShieldCheck',
    description: 'Strategic tax planning to reduce liability and improve cash flow efficiency.'
  },
  {
    title: 'Company Registration',
    icon: 'Briefcase',
    description: 'Seamless business registration services for startups, LLPs and private companies.'
  },
  {
    title: 'Audit & Assurance',
    icon: 'Users',
    description: 'Reliable audit services for statutory compliance, financial accuracy and governance.'
  },
  {
    title: 'Accounting & Bookkeeping',
    icon: 'Wallet',
    description: 'Accurate accounting support with clean books, monthly reports and insights.'
  },
  {
    title: 'Business Consulting',
    icon: 'Gift',
    description: 'Practical advisory for growth, operational improvements and financial strategy.'
  },
  {
    title: 'Financial Advisory',
    icon: 'Sparkles',
    description: 'Investment and financial guidance to preserve capital and maximize returns.'
  },
  {
    title: 'Compliance Services',
    icon: 'FileCheck',
    description: 'End-to-end regulatory support for company law, tax and GST compliance.'
  },
  {
    title: 'Payroll Management',
    icon: 'Gift',
    description: 'Reliable payroll processing, statutory filings and employee benefit tracking.'
  }
];

const highlights = [
  { label: 'Experienced Professionals', detail: 'Senior CAs with 15+ years of advisory and compliance expertise.' },
  { label: 'Personalized Service', detail: 'Tailored solutions designed for your business and growth goals.' },
  { label: 'Transparent Pricing', detail: 'Clear fee structure with no hidden charges for every service.' },
  { label: 'Timely Compliance', detail: 'On-time filing, reporting and statutory deadlines managed proactively.' },
  { label: 'Trusted Advisory', detail: 'High-quality guidance based on deep local and national regulations.' },
  { label: 'Client Satisfaction', detail: 'Focused service delivery built on trust, professionalism and results.' }
];

const faqItems = [
  {
    question: 'What documents do I need for income tax filing?',
    answer:
      'We help you compile salary slips, bank statements, Form 16, investment proofs, and expense receipts to ensure accurate return filing.'
  },
  {
    question: 'How quickly can I register for GST?',
    answer:
      'GST registration is typically completed within 7-10 business days after document submission and application approval.'
  },
  {
    question: 'Do you handle statutory audits for private companies?',
    answer:
      'Yes, we conduct statutory audits, internal audits and compliance audits with timely reporting and risk mitigation.'
  },
  {
    question: 'Can you support company incorporation in Meghalaya?',
    answer:
      'Absolutely. We assist with company registration, LLP formation, DSC, DIN and all startup compliance requirements.'
  },
  {
    question: 'How do you structure tax advisory for small businesses?',
    answer:
      'Our advisory focuses on cash flow planning, expense optimization, GST structuring and income tax savings tailored to your operations.'
  }
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <section id="about" className="container py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <SectionHeading eyebrow="About Us" title="Trusted accounting and advisory you can rely on." />
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Amit O P Sharma & Co delivers premium Chartered Accountant services in Shillong with a strong focus on accuracy, timeliness and client trust. Our team blends local experience with national compliance insight to help businesses and individuals achieve financial confidence.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <StatCard label="Years of Expertise" value="15+" />
              <StatCard label="Happy Clients" value="250+" />
              <StatCard label="Compliance Speed" value="24h Response" />
              <StatCard label="Trusted Advisory" value="100%" />
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-glow backdrop-blur-xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Our Mission & Vision</h3>
              <p className="text-slate-300 leading-7">
                To deliver modern financial services with integrity, precision and proactive guidance. We strive to be the first choice for businesses and professionals in Meghalaya who value trust, clarity and measurable results.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-950/80 p-6">
              <h4 className="text-xl font-semibold text-white">Why clients trust us</h4>
              <ul className="space-y-3 text-slate-300">
                <li>• Rigorous compliance backed by professional expertise.</li>
                <li>• Personalized solutions with transparent communication.</li>
                <li>• Timely execution and holistic business advisory.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container py-20 sm:py-28">
        <SectionHeading eyebrow="Our Services" title="Comprehensive services designed for modern businesses." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </section>

      <section className="container py-20 sm:py-28">
        <SectionHeading eyebrow="Why Choose Us" title="A confident finance partner for every stage of your business." />
        <HighlightsGrid items={highlights} />
      </section>

      <section id="testimonials" className="container py-20 sm:py-28">
        <SectionHeading eyebrow="Client Testimonials" title="Trusted by clients for transparency and reliability." />
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl">
          <TestimonialCarousel />
        </div>
      </section>

      <section id="contact" className="container py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <SectionHeading eyebrow="Contact" title="Reach out for expert financial guidance." />
            <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-soft">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300/90">Address</p>
                <p className="mt-3 text-lg font-semibold text-white">2nd Floor, Salonsar Mansion, Jail Road, Police Bazar, Shillong, Meghalaya 793001, India</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Phone</p>
                  <a href="tel:+919436103734" className="mt-2 block text-lg font-semibold text-white">+91 94361 03734</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Business Hours</p>
                  <p className="mt-2 text-lg font-semibold text-white">Open until 8 PM</p>
                </div>
              </div>
              <div className="h-72 overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="Amit O P Sharma & Co location"
                  className="h-full w-full"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2777269949995!2d91.8776934751817!3d25.5786157837157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d8557c1a0577b%3A0x60f92278e74983f8!2sPolice%20Bazar%2C%20Shillong%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1717327857000"
                />
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-soft">
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="faq" className="container py-20 sm:py-28">
        <SectionHeading eyebrow="FAQ" title="Common questions answered clearly." />
        <div className="grid gap-4">{faqItems.map((item) => <FAQAccordion key={item.question} question={item.question} answer={item.answer} />)}</div>
      </section>

      <section className="container py-20 sm:py-28">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-12 text-center shadow-glow backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/90">Ready to elevate your finances</p>
          <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">Need Professional Financial Guidance?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Partner with a firm that brings clarity, control and strong compliance to your accounting, tax and business decisions.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 px-10 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-1">
            Schedule a Consultation
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
