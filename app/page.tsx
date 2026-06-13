import { ArrowRight, Briefcase, FileText, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
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
import TrustCounters from '@/components/TrustCounters';

const services = [
  {
    title: 'Income Tax Filing',
    icon: 'FileCheck',
    description: 'Expert return preparation and filing for individuals, professionals, and business owners.'
  },
  {
    title: 'GST Compliance',
    icon: 'Zap',
    description: 'Accurate GST registration, return filing and reconciliation for businesses in Meghalaya.'
  },
  {
    title: 'Audit & Assurance',
    icon: 'ShieldCheck',
    description: 'Statutory audits, internal reviews and assurance services with a focus on compliance.'
  },
  {
    title: 'Company Registration',
    icon: 'Briefcase',
    description: 'Streamlined company formation, LLP registration and startup compliance support.'
  },
  {
    title: 'Accounting & Bookkeeping',
    icon: 'Wallet',
    description: 'Clean books, monthly reports and financial visibility for growing enterprises.'
  },
  {
    title: 'Payroll Services',
    icon: 'Gift',
    description: 'Payroll management, statutory filings and employee compliance for small businesses.'
  },
  {
    title: 'Business Advisory',
    icon: 'TrendingUp',
    description: 'Strategic advisory to improve cash flow, planning and corporate governance.'
  },
  {
    title: 'Financial Planning',
    icon: 'Sparkles',
    description: 'Tax-efficient planning and wealth guidance designed for long-term goals.'
  }
] as const;

const highlights = [
  { label: 'Experienced Professionals', detail: 'Senior CAs with 15+ years of advisory and compliance expertise across Shillong.' },
  { label: 'Personalized Service', detail: 'Solutions designed for local businesses, startups and high-growth clients.' },
  { label: 'Transparent Pricing', detail: 'Clear fees without hidden charges for every tax and compliance engagement.' },
  { label: 'Timely Compliance', detail: 'On-time filing, reporting and statutory deadlines managed proactively.' },
  { label: 'Trusted Advisory', detail: 'Quality guidance shaped by local and national regulations.' },
  { label: 'Client Satisfaction', detail: 'Service delivery built on trust, professionalism and measurable results.' }
];

const faqItems = [
  {
    question: 'Why choose Amit O P Sharma & Co?',
    answer:
      'Our firm combines deep local knowledge, timely GST and tax expertise, and a client-first advisory approach to deliver reliable financial outcomes.'
  },
  {
    question: 'What GST services do you offer?',
    answer:
      'We provide GST registration, return filing, reconciliation, audit support, and compliance guidance for retail, services and trading businesses.'
  },
  {
    question: 'How can I register my company?',
    answer:
      'We assist with company incorporation, LLP registration, DSC, DIN and all mandatory filings to launch your business in Meghalaya efficiently.'
  },
  {
    question: 'Do you assist with audits?',
    answer:
      'Yes. We handle statutory audits, internal audits, tax audits and audit compliance support for private companies and firms.'
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'You can call, WhatsApp, email or use the contact form. We respond quickly and schedule a consultation based on your business needs.'
  }
];

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Retail Business Owner',
    quote: 'The GST guidance from Amit O P Sharma & Co has kept our shop compliant and confident before every audit.',
    rating: 5
  },
  {
    name: 'Meera Das',
    role: 'Startup Founder',
    quote: 'They handled our company registration and tax planning with professionalism and fast follow-up.',
    rating: 5
  },
  {
    name: 'Anil Sharma',
    role: 'Corporate Accountant',
    quote: 'Their audit and bookkeeping work is accurate, clear and tailored to our growth plans.',
    rating: 5
  }
];

const caseStudies = [
  {
    icon: Briefcase,
    title: 'GST Compliance Improvement',
    description: 'Helped a retail business reduce GST filing errors and improve compliance through monthly reconciliations.'
  },
  {
    icon: TrendingUp,
    title: 'Startup Registration',
    description: 'Assisted startups with seamless company incorporation and regulatory setup for early-stage growth.'
  },
  {
    icon: ShieldCheck,
    title: 'Tax Planning',
    description: 'Helped clients optimize tax savings through strategic planning and smart expense structuring.'
  }
];

const blogPosts = [
  {
    title: 'Latest Income Tax Updates',
    summary: 'Stay informed with the newest tax changes affecting salaried individuals and small businesses in Meghalaya.',
    href: '#blog'
  },
  {
    title: 'GST Filing Guide',
    summary: 'A practical checklist for GST return filing, registration, and compliance for local traders.',
    href: '#blog'
  },
  {
    title: 'Tax Saving Tips',
    summary: 'Actionable strategies to maximize savings while staying fully compliant with Indian tax law.',
    href: '#blog'
  }
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Amit O P Sharma & Co',
  url: 'https://amitopsharma-co.example.com',
  logo: 'https://amitopsharma-co.example.com/logo.png',
  image: 'https://amitopsharma-co.example.com/og-image.jpg',
  description:
    'Trusted Chartered Accountant firm in Shillong offering tax, GST, audit, accounting, and business advisory services for Meghalaya businesses and startups.',
  telephone: '+919436103734',
  email: 'info@amitopsharma.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Floor, Salonsar Mansion, Jail Road, Police Bazar',
    addressLocality: 'Shillong',
    addressRegion: 'Meghalaya',
    postalCode: '793001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.578616,
    longitude: 91.877693
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '20:00'
    }
  ],
  priceRange: '₹₹',
  areaServed: ['Shillong', 'Meghalaya'],
  serviceType: ['Tax Consultant', 'GST Consultant', 'Audit Services', 'Company Registration']
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <main id="top" className="min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />

        <section id="about" className="container py-20 sm:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <SectionHeading eyebrow="About Us" title="Premium Chartered Accountant services for Shillong and Meghalaya." />
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Amit O P Sharma & Co delivers premium Chartered Accountant services in Shillong with a strong focus on accuracy, timeliness, and trust. We help businesses, startups and individuals navigate tax, GST, audit, accounting and compliance with confidence.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <StatCard label="Years of Expertise" value="15+" />
                <StatCard label="Happy Clients" value="250+" />
                <StatCard label="Compliance Speed" value="24h Response" />
                <StatCard label="Trusted Advisory" value="100%" />
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-glow backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="rounded-[2rem] bg-gradient-to-br from-slate-950/95 to-slate-900/80 p-6 shadow-soft">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-300/15 text-amber-300">
                    <Briefcase className="h-7 w-7" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Firm overview</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Confidence for your financial journey.</h3>
                  <p className="mt-4 text-slate-300 leading-7">
                    We combine trusted local expertise with responsive service to support accountants, executives, startups and service firms across Meghalaya.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950/90 p-6 shadow-soft">
                    <div className="aspect-[4/3] rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(15,23,42,0.85))]" />
                    <p className="mt-4 text-sm text-slate-400">Professional photo of CA Amit O P Sharma coming soon.</p>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-slate-950/90 p-6 shadow-soft">
                    <div className="aspect-[4/3] rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,215,95,0.18),_rgba(15,23,42,0.9))]" />
                    <p className="mt-4 text-sm text-slate-400">Office gallery and team support imagery for a premium experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeading eyebrow="Trust & Credibility" title="Built on experience, compliance and personalised financial guidance." />
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Our Chartered Accountant firm supports Shillong businesses with strong controls, clear reporting and advisory that inspires confidence before every decision.
              </p>
            </div>
            <TrustCounters />
          </div>
        </section>

        <section id="reviews" className="container py-20 sm:py-28">
          <SectionHeading eyebrow="Client Reviews" title="Real feedback from businesses that trust our services." />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Google Rating</p>
              <p className="mt-4 text-5xl font-semibold text-white">4.9/5</p>
              <p className="mt-2 text-slate-400">Highly rated Chartered Accountant firm in Shillong for tax, GST, audit and business compliance.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200">Google Review badge</span>
                <a href="#contact" className="rounded-full bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                  View All Reviews
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow">
                  <div className="mb-4 inline-flex items-center gap-2 text-amber-300">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <span key={index} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-lg leading-8 text-slate-100">“{review.quote}”</p>
                  <p className="mt-6 text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-slate-400">{review.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="success" className="container py-20 sm:py-28">
          <SectionHeading eyebrow="Success Stories" title="Delivering results for businesses, startups and professionals." />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300 to-gold-400 text-slate-950 shadow-lg">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
              </div>
            ))}
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

        <section id="blog" className="container py-20 sm:py-28">
          <SectionHeading eyebrow="Blog" title="Insights to help you stay compliant and grow confidently." />
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
              <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Featured Article</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Latest Income Tax Updates for Meghalaya Businesses</h3>
              <p className="mt-4 text-slate-300 leading-8">
                Stay ahead with the newest tax changes, compliance deadlines and practical planning advice for individuals and enterprises.
              </p>
              <a href="#blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-gold-200">
                Read More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <article key={post.title} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-soft">
                  <h4 className="text-xl font-semibold text-white">{post.title}</h4>
                  <p className="mt-3 text-slate-300 leading-7">{post.summary}</p>
                  <a href={post.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-gold-200">
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
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
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Email</p>
                    <a href="mailto:info@amitopsharma.com" className="mt-2 block text-lg font-semibold text-white">info@amitopsharma.com</a>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Business Hours</p>
                    <p className="mt-2 text-lg font-semibold text-white">Mon - Sat: 9:30 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Consultation</p>
                    <p className="mt-2 text-lg font-semibold text-white">Free first review available</p>
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
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <FAQAccordion key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
