import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { ArrowUpRight } from 'lucide-react'
import PageDeco from '../components/ui/PageDeco'

export default function Hero() {
  return (
    <section className="bg-[#EEF4EC] relative overflow-hidden">
      <PageDeco />

      {/* ── Text content ─────────────────────────── */}
      <div className="relative z-10 pt-12 pb-8 container-luba sm:pt-16 sm:pb-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">

          {/* Left — headline */}
          <div className="max-w-[700px]">
            {/* Trust badge */}
            <div className="inline-flex items-center rounded-full border border-[#162B30]/15
                            bg-[#EEF4EC] px-[14px] py-[7px] text-[12px] font-normal
                            text-[#162B30]/65 mb-5">
              Trusted by over 500+ Clients in Nigeria
            </div>

            {/* Big headline — font: Sora 800, ~84px, lh 110%, ls -1.6px */}
            <h1 className="font-extrabold text-[#162B30] tracking-[-0.03em] leading-[1.08]"
                style={{ fontSize: 'clamp(42px,6.5vw,84px)' }}>
              Find Your Dream{' '}
              <br className="hidden sm:block" />
              <span className="inline-flex flex-wrap items-center gap-3">
                Home
                {/* Inline thumbnail — circular, matches Figma exactly */}
                <span
                  className="inline-block align-middle rounded-full overflow-hidden
                             border-[5px] border-[#EEF4EC] shadow-md"
                  style={{
                    width:  'clamp(56px,6.5vw,96px)',
                    height: 'clamp(56px,6.5vw,96px)',
                  }}
                >
                  <img
                    src="/images/prop-lazy-house.png"
                    alt="Property"
                    className="object-cover w-full h-full "
                  />
                </span>
                Today
              </span>
            </h1>
          </div>

          {/* Right — tagline + CTA */}
          <div className="flex flex-col items-start gap-4 lg:max-w-[260px] lg:pb-1">
            <p className="text-[#162B30]/65 text-[15px] leading-[1.6]">
              From Search to Keys — We Handle Your Dream Home
            </p>
            <Button to="/properties">View Properties <ArrowUpRight size={14} strokeWidth={2} /></Button>
          </div>
        </div>
      </div>

      {/* ── Full-width hero image ─────────────────── */}
      <div className="relative w-full" style={{ height: 'clamp(280px,46vw,600px)' }}>
        <img
          src="/images/hero-bg.png"
          alt="Luxury interior"
          className="object-cover w-full h-full"
          fetchpriority="high"
          loading="eager"
        />
        {/* Fade from page bg at top */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#EEF4EC] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
