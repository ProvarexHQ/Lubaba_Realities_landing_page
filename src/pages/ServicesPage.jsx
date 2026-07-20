import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { services } from '../data'
import DecoBg from '../components/ui/DecoBg'

export default function ServicesPage() {
  const [cur, setCur]   = useState(0)
  const [anim, setAnim] = useState(false)
  const timerRef        = useRef(null)
  const total           = services.length

  const go = (idx) => {
    if (anim) return
    const n = ((idx%total)+total)%total
    setAnim(true)
    setCur(n)
    setTimeout(() => setAnim(false), 400)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCur(c=>(c+1)%total), 5000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setCur(c=>(c+1)%total), 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  const svc = services[cur]

  return (
    <div className="bg-[#F5F5F0] relative overflow-hidden min-h-screen">
      <DecoBg className="w-[280px] sm:w-[360px]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-4">
        <h1 className="font-extrabold text-[#162B30] tracking-tight leading-tight"
            style={{ fontSize:'clamp(32px,5vw,60px)' }}>
          OUR SERVICES
        </h1>
      </div>

      {/* Slider */}
      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row" style={{ minHeight:'clamp(380px,54vw,694px)' }}>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-between p-8 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#162B30]/8">
            <div>
              <p className="text-[#162B30]/35 text-sm font-medium mb-3">
                <span className="text-[#162B30] font-semibold">{String(cur+1).padStart(2,'0')}</span>
                /{String(total).padStart(2,'0')}
              </p>
              <h2 key={`t${cur}`}
                className="font-extrabold text-[#162B30] leading-[1.03] tracking-tight whitespace-pre-line animate-fade-up"
                style={{ fontSize:'clamp(36px,5vw,66px)' }}>
                {svc.title}
              </h2>
            </div>
            <div className="flex flex-col justify-between gap-5 mt-10 sm:flex-row sm:items-end">
              <p className="text-[#162B30]/55 text-sm max-w-[280px] leading-relaxed">{svc.tagline}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden bg-[#E8EDE8]"
               style={{ flex:'0 0 auto', width:'clamp(280px,50%,660px)' }}>
            <img key={`img${cur}`} src={svc.image} alt={svc.titleFlat}
              className={`w-full h-full object-cover transition-opacity duration-400 ${anim?'opacity-0':'opacity-100'}`}
              style={{ minHeight:'360px' }} />
            <div className="absolute flex gap-2 bottom-5 right-5">
              <button onClick={()=>go(cur-1)} aria-label="Prev"
                className="flex items-center justify-center w-10 h-10 transition-all border rounded-full shadow-md bg-white/80 backdrop-blur-sm border-white/40 hover:bg-white active:scale-95">
                <ChevronLeft size={16} strokeWidth={2} className="text-[#162B30]"/>
              </button>
              <button onClick={()=>go(cur+1)} aria-label="Next"
                className="flex items-center justify-center w-10 h-10 transition-all border rounded-full shadow-md bg-white/80 backdrop-blur-sm border-white/40 hover:bg-white active:scale-95">
                <ChevronRight size={16} strokeWidth={2} className="text-[#162B30]"/>
              </button>
            </div>
            <div className="absolute right-5 bottom-24">
              <Button to={`/services/${svc.id}`} className="flex-shrink-0">View More <ArrowUpRight size={14} strokeWidth={2}/></Button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-[6px] py-[18px] border-t border-[#162B30]/8">
          {services.map((_,i) => (
            <button key={i} onClick={()=>go(i)}
              className={`rounded-full transition-all duration-300
                ${i===cur?'w-6 h-[7px] bg-[#162B30]':'w-[7px] h-[7px] bg-[#162B30]/20 hover:bg-[#162B30]/40'}`}
              aria-label={`Slide ${i+1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
