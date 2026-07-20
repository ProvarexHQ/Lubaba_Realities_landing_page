import { useState, useEffect, useRef } from 'react'
import Button from '../components/ui/Button'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data'

export default function ServicesSlider() {
  const [cur, setCur]   = useState(0)
  const [anim, setAnim] = useState(false)
  const timerRef        = useRef(null)
  const total           = services.length

  const go = (idx) => {
    if (anim) return
    const next = ((idx % total) + total) % total
    if (next === cur) return
    setAnim(true)
    setCur(next)
    setTimeout(() => setAnim(false), 450)
    resetTimer()
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCur(c => (c + 1) % total), 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const svc = services[cur]

  return (
    <section className="bg-white">
      <div className="max-w-[1240px] mx-auto">

        {/* ══════════════════════════════════════════
            MOBILE  — vertical stacked service cards
        ══════════════════════════════════════════ */}
        <div className="block px-5 pt-10 pb-6 lg:hidden">
          <h2 className="font-bold text-[#162B30] text-2xl mb-2 max-w-[363px]">Our Services</h2>
          <p className="text-[#162B30]/55 text-sm mb-8 leading-relaxed">
            Good homes go fast — let's find yours before someone else does.
          </p>

          <div className="flex flex-col items-center gap-4">
            {services.map(s => (
              <div
                key={s.id}
                className="relative overflow-hidden  bg-[#E8EDE8]"
                style={{ width: 'clamp(280px,100%,660px)', height: 'clamp(380px,46vw,560px)' }}
              >
                <img
                  src={s.image}
                  alt={s.titleFlat}
                  className="absolute inset-0 object-cover w-full h-full"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Title bottom-left */}
                <div className="absolute flex flex-col items-start gap-4 bottom-4 left-4 right-4 max-w-[363px]">
                  <h3 className="font-bold text-white leading-tight tracking-tight whitespace-pre-line text-[50px]">
                    {s.title}
                  </h3>
                  <div className="flex-shrink-0">
                    <Button to={`/services/${s.id}`} className="!py-[8px] !px-4 !text-[12px]">
                      View More
                      <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight size={12} strokeWidth={2} />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP — horizontal slider
        ══════════════════════════════════════════ */}
        <div
          className="flex-row hidden lg:flex"
          style={{ height: 'clamp(380px,46vw,560px)' }}
        >
          {/* Left text panel */}
          <div className="flex-1 flex flex-col justify-between p-16 border-r border-[#162B30]/8 overflow-hidden">
            <div>
              <h2 className="font-bold text-[#162B30] text-3xl mb-8 max-w-[363px]">Our Services</h2>
              <p className="text-[#162B30]/35 text-sm font-medium mb-3 tracking-wide">
                <span className="text-[#162B30] font-semibold">
                  {String(cur + 1).padStart(2, '0')}
                </span>/{String(total).padStart(2, '0')}
              </p>
              <h3
                key={`t${cur}`}
                className="font-extrabold text-[#162B30] leading-[1.02] tracking-tight whitespace-pre-line max-w-[363px]"
                style={{ fontSize: 'clamp(34px,4.8vw,60px)' }}
              >
                {svc.title}
              </h3>
            </div>
            <p className="text-[#162B30]/55 text-sm max-w-[280px] leading-relaxed mt-8">
              {svc.tagline}
            </p>
          </div>

          {/* Right image panel */}
          <div
            className="relative overflow-hidden bg-[#E8EDE8] h-full"
            style={{ flex: '0 0 auto', width: 'clamp(280px,50%,660px)' }}
          >
            <img
              key={`img${cur}`}
              src={svc.image}
              alt={svc.titleFlat}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400
                ${anim ? 'opacity-0' : 'opacity-100'}`}
            />
            <div className="absolute bottom-5 right-5">
              <Button to={`/services/${svc.id}`}>
                View More
                <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Dot indicators — desktop only */}
        <div className="hidden lg:flex items-center justify-center gap-[6px] py-[18px] border-t border-[#162B30]/8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300
                ${i === cur
                  ? 'w-6 h-[7px] bg-[#162B30]'
                  : 'w-[7px] h-[7px] bg-[#162B30]/20 hover:bg-[#162B30]/40'
                }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}