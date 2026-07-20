import { ArrowUpRight } from 'lucide-react'
import Button from '../components/ui/Button'
import DecoBg from '../components/ui/DecoBg'

export default function HeroSection() {
  return (
    <section className="bg-[#F5F5F0] relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[340px] lg:w-[400px]" />

      {/* ── Text area ── */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-10">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">

          {/* Left — headline */}
          <div className="max-w-[650px] mx-auto lg:mx-0">
            <div className="inline-flex items-center border border-[#162B30]/20 rounded-full
                            px-4 py-[6px] text-xs font-normal text-[#162B30]/70 bg-transparent mb-5">
              Trusted by over 500+ Clients in Nigeria
            </div>

            <h1
              className="font-extrabold text-[#162B30] leading-[115%] tracking-[-2.0px]"
              style={{ fontSize: 'clamp(36px,7vw,56px)' }}
            >
              Find Your Dream{' '}
              <br className="hidden sm:block" />
              <span className="inline-flex flex-wrap items-center gap-3">
                Home
                <span
                  className="inline-block align-middle rounded-[25px] overflow-hidden"
                  style={{ width: 'clamp(50px,7vw,100px)', height: 'clamp(32px,3.5vw,68px)' }}
                >
                  <img src="/images/prop-lazy-house.png" alt="" className="object-cover w-full h-full" />
                </span>
                Today
              </span>
            </h1>
          </div>

          {/* Right — tagline + CTA */}
          <div className="flex flex-col gap-4 items-center lg:max-w-[300px] lg:items-start">
            <p className="text-[#162B30]/70 text-[15px] font-medium leading-relaxed">
              From Search to Keys — We Handle Your Dream Home
            </p>
            <Button
              to="/properties"
              className="self-center lg:self-start border border-[#162B30]/25 bg-transparent text-[#162B30] hover:bg-[#162B30] hover:text-white transition-all duration-300"
            >
              View Properties
              <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Full-width interior photo ── */}
      <div className="w-full overflow-hidden" style={{ height: 'clamp(220px,46vw,620px)' }}>
        <img
          src="/images/hero-bg.png"
          alt="Luxury interior"
          className="object-cover w-full h-full grayscale"
          loading="eager"
        />
      </div>
    </section>
  )
}