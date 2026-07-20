import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',           to: '/' },
  { label: 'Our Properties', to: '/properties' },
  { label: 'Services',       to: '/services' },
  { label: 'Who we are',     to: '/who-we-are' },
  { label: 'Why Choose us',  to: '/#why' },
  { label: 'Contact us',     to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#162B30] relative overflow-hidden text-white select-none">

      {/* ── CTA Section ── */}
      <div className="relative overflow-hidden">
        {/* Decorative background logos fixed side by side */}
        <div className="absolute inset-x-0 top-8 bottom-0 pointer-events-none opacity-[0.18] flex items-start justify-between">
          <img
            src="/images/Luba%20logo.png"
            alt=""
            className="h-full max-h-[350px] w-auto object-contain"
          />
          <img
            src="/images/Luba%20logo.png"
            alt=""
            className="h-full max-h-[350px] w-auto object-contain"
          />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-20 pb-16 text-center">
          <h2 className="font-bold text-[36px] sm:text-[42px] leading-tight tracking-tight mb-4">
            Better Yet,<br />Meet Us In Person!
          </h2>
          <p className="max-w-xs mx-auto mb-8 text-sm leading-relaxed text-white/55">
            Helping people across Nigeria find, rent, and own homes with ease.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#234338] text-white/90 rounded-full
                       px-6 py-[12px] text-sm font-medium shadow-md
                       hover:bg-[#2c5346] transition-all duration-200"
          >
            Book a session with us
            <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* ── Large Wordmark ── */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center overflow-hidden">
          <div className="flex items-center justify-center gap-3">
            <span
              className="font-extrabold leading-none tracking-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(48px,8vw,100px)' }}
            >
              Lubaba
            </span>
            <WordmarkSymbol />
            <span
              className="font-extrabold leading-none tracking-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(48px,8vw,100px)' }}
            >
              Realties
            </span>
            <sup className="self-start mt-1 text-xs text-white/40">®</sup>
          </div>
        </div>
      </div>

      {/* ── Main Links and Content Section ── */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-8">
        
        {/* Email Block */}
        <div className="text-center sm:text-left mb-12 sm:mb-10">
          <a href="mailto:lubabagroupltd@gmail.com"
             className="text-base font-medium tracking-wide transition-colors text-white/80 hover:text-white">
            lubabagroupltd@gmail.com
          </a>
        </div>

        {/* Info Grid split side-by-side on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 items-start mb-16">

          {/* Left Block: Nav Links */}
          <div className="flex flex-col">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(l => (
                <Link key={l.to} to={l.to}
                  className="flex items-center gap-2 text-sm transition-colors text-white/65 hover:text-white group">
                  <span className="text-white/40 group-hover:text-white transition-colors">•</span>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Blocks: Combined Address & Contact */}
          <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Address */}
            <div>
              <p className="mb-3 text-sm font-medium text-white/40">• Address</p>
              <p className="text-sm leading-relaxed text-white/70">
                41 Jose Marti Crescent, Asokoro,<br />Abuja, F.C.T
              </p>
            </div>

            {/* Contact numbers */}
            <div>
              <p className="mb-3 text-sm font-medium text-white/40">• Contact</p>
              <div className="flex flex-col gap-1.5">
                <a href="tel:+2347087417987" className="text-sm transition-colors text-white/70 hover:text-white">+234 708 741 7987</a>
                <a href="tel:+2348102936278" className="text-sm transition-colors text-white/70 hover:text-white">+234 810 293 6278</a>
              </div>
            </div>
          </div>

        </div>

        {/* Social Sharing Section Container */}
        <div className="flex flex-col items-center border-t border-white/5 pt-10 pb-6 text-center">
          <p className="mb-4 text-xs font-medium tracking-wider text-white/40 uppercase">Follow us on social media</p>
          <div className="flex justify-center gap-4 mb-8">
            <SocialBtn href="https://instagram.com" label="Instagram"><Instagram size={16} strokeWidth={2} /></SocialBtn>
            <SocialBtn href="https://linkedin.com"  label="LinkedIn" ><Linkedin  size={16} strokeWidth={2} /></SocialBtn>
          </div>
          <Link to="/terms" className="text-sm tracking-wide transition-colors text-white/60 hover:text-white">
            Terms & Conditions
          </Link>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5 relative z-10 bg-[#122428]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-5 text-center">
          <p className="text-xs tracking-wider text-white/35">© 2026 Lubaba Realties All Rights Reserved</p>
        </div>
      </div>

      {/* ── Decorative Petal border strip ── */}
      <div className="flex overflow-hidden h-10 opacity-[0.08] rotate-180 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center flex-1 min-w-[40px]">
            <img
              src="/images/Luba%20logo.png"
              alt=""
              className="object-contain w-auto h-8"
            />
          </div>
        ))}
      </div>
    </footer>
  )
}

function SocialBtn({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="flex items-center justify-center transition-all duration-200 border rounded-full w-10 h-10 border-white/15 text-white/60 hover:text-white hover:border-white/40 bg-white/5">
      {children}
    </a>
  )
}

function WordmarkSymbol() {
  return (
    <img
      src="/images/Luba%20logo.png"
      alt="Lubaba Realties logo"
      width="44"
      height="44"
      className="block object-contain flex-shrink-0"
    />
  )
}