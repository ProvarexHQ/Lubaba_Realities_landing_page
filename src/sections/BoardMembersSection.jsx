import { useRef } from 'react'
import Button from '../components/ui/Button'
import { ArrowUpRight } from 'lucide-react'
import { boardMembers } from '../data'
import DecoBg from '../components/ui/DecoBg'

export default function BoardMembersSection() {
  const scrollRef = useRef(null)

  return (
    <section className="bg-[#F5F5F0] relative overflow-hidden py-14 sm:py-20">
      <DecoBg className="w-[280px] sm:w-[340px] lg:w-[400px] opacity-40" />
      <LeftDeco className="absolute left-[-130px] pointer-events-none bottom-[-2px] w-[280px] sm:w-[340px] lg:w-[400px] opacity-40" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-8 lg:text-center">
          <h2 className="font-bold text-[#162B30] text-[32px] sm:text-[42px] tracking-tight mb-3 leading-tight">
            Who We Are
          </h2>

          <p className="text-[#162B30]/55 text-sm leading-relaxed mb-6 max-w-[360px] lg:mx-auto">
            we give no stress, no long talk — just good homes and a smooth experience.
          </p>

          <div className="hidden mb-10 lg:block">
            <Button to="/who-we-are" className="bg-[#EEF4EC]">
              View All Staff
              <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </Button>
          </div>
        </div>

        {/* ── Member cards ── */}

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 lg:hidden scroll-smooth snap-x snap-mandatory
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {boardMembers.map(m => (
            <div key={m.id} className="snap-start flex-shrink-0 flex flex-col items-center gap-4 w-[90vw] max-w-[380px]">
              <div
                className="overflow-hidden rounded-[24px] bg-[#E8EDE8] w-full"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={m.image}
                  alt={m.nameShort}
                  className="object-cover object-top w-full h-full"
                  onError={e => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.nameShort)}&size=400&background=C5D9C0&color=162B30`
                  }}
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-[#162B30] text-[11px] tracking-[0.12em] uppercase">
                  {m.nameShort}
                </p>
                <p className="text-[#162B30]/50 text-[11px] mt-0.5">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: centered flex row */}
        <div className="items-center justify-center hidden gap-20 lg:flex">
          {boardMembers.map(m => (
            <div key={m.id} className="flex flex-col items-center gap-4">
              <div
                className="overflow-hidden rounded-[28px] bg-[#E8EDE8]"
                style={{ width: 'clamp(240px,26vw,320px)', height: 'clamp(290px,32vw,390px)' }}
              >
                <img
                  src={m.image}
                  alt={m.nameShort}
                  className="object-cover object-top w-full h-full"
                  onError={e => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.nameShort)}&size=400&background=C5D9C0&color=162B30`
                  }}
                />
              </div>
              <p className="font-semibold text-[#162B30] text-xs tracking-[0.12em] uppercase">
                {m.nameShort}
              </p>
              <p className="text-[#162B30]/50 text-[11px] -mt-3">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LeftDeco({ className }) {
  return (
    <img
      src="/images/Luba%20logo.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  )
}