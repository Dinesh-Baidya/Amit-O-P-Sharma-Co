export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919436103734?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20CA%20services."
      target="_blank"
      rel="noreferrer"
      className="group relative fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(16,185,129,0.25)] transition hover:-translate-y-1 hover:bg-emerald-400"
      aria-label="WhatsApp us"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-emerald-300 shadow-lg">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5a10 10 0 1 0-17.7 7.1l-1.5 5.4 5.6-1.5A10 10 0 0 0 20.5 3.5Zm-3.6 13.3-.8 1.1-1.2.6a8.9 8.9 0 0 1-3.4.7A8.6 8.6 0 0 1 5 12.6 8.6 8.6 0 0 1 12.5 4 8.6 8.6 0 0 1 20 12.6a8.5 8.5 0 0 1-3.1 4.2ZM12.3 7.8c-1.9 0-3.4 1.5-3.4 3.4 0 .6.2 1.2.5 1.8l.3.4a.7.7 0 0 1 .2.5l-.2 1.4c0 .2.2.4.4.4.2 0 .4 0 .6-.1l1.2-.6c.6.3 1.2.5 1.9.5 1.9 0 3.4-1.5 3.4-3.4 0-1.8-1.4-3.4-3.3-3.4Zm-1.2 4.1c-.2-.2-.3-.5-.3-.8 0-.7.6-1.3 1.3-1.3.2 0 .4 0 .6.1.2 0 .4.2.4.4l.1.2c0 .2 0 .4-.1.6 0 .2-.1.3-.2.4l-.2.2c-.1.1-.2.1-.4.1-.2 0-.5-.1-.7-.2Zm1.6 1.7c-.1 0-.2 0-.4-.1a2.5 2.5 0 0 0-1-.2c-.5 0-1 .1-1.5.5-.2.2-.3.5-.2.8l.1.5c.1.4.6.8 1 .8.2 0 .4 0 .6-.1.2-.1.4-.2.5-.4l.1-.2c.1-.2 0-.4-.1-.5Zm-.3-.3c-.1 0-.2 0-.4 0-.2 0-.4.1-.6.1a1 1 0 0 0-.5.2l-.1.1c-.1.1-.1.2 0 .4l.1.3c.1.1.2.1.4.1.1 0 .3 0 .4-.1.1-.1.3-.2.3-.3l.1-.2c.1-.1.1-.2 0-.4Z" />
        </svg>
      </span>
      WhatsApp Us
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl opacity-0 transition duration-300 group-hover:opacity-100" />
    </a>
  );
}
