import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-14 text-slate-300">
      <div className="container grid gap-12 lg:grid-cols-3">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/90">Amit O P Sharma & Co</p>
          <p className="max-w-sm text-lg leading-8 text-slate-200">
            Trusted Chartered Accountant services for Shillong and Meghalaya, delivering audit, GST, tax and business compliance with precision.
          </p>
          <a
            href="#contact"
            className="inline-flex rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:text-white"
          >
            Request a Consultation
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#about" className="transition hover:text-white">About Us</a></li>
              <li><a href="#services" className="transition hover:text-white">Services</a></li>
              <li><a href="#reviews" className="transition hover:text-white">Reviews</a></li>
              <li><a href="#blog" className="transition hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</h3>
            <div className="space-y-3 text-slate-300">
              <p className="inline-flex items-center gap-2 text-slate-100">
                <MapPin className="h-4 w-4 text-amber-300" />
                Police Bazar, Shillong, Meghalaya 793001
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-300" />
                +91 94361 03734
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-300" />
                info@amitopsharma.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Amit O P Sharma & Co. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="#" aria-label="Facebook" className="transition hover:text-white"><Facebook className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="transition hover:text-white"><Instagram className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
