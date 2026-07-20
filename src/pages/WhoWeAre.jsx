import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { boardMembers, teamMembers, consultants } from '../data'
import DecoBg from '../components/ui/DecoBg'

function MemberSlider({ members }) {
  const [idx, setIdx] = useState(0)
  const m = members[idx]
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start py-10 border-b border-[#162B30]/10">
      {/* Photo */}
      <div className="flex-shrink-0 overflow-hidden rounded-[24px] bg-[#E8EDE8]"
           style={{ width:'clamp(200px,28vw,400px)', height:'clamp(240px,34vw,470px)' }}>
        <img src={m.image} alt={m.nameShort || m.name}
          className="object-cover object-top w-full h-full"
          onError={e=>{ e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&size=400&background=C5D9C0&color=162B30` }} />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between flex-1 min-h-[240px]">
        {/* Qualifications */}
        <div className="flex flex-col gap-1.5 mb-auto">
          {(m.qualifications||[]).map((q,i) => (
            <p key={i} className="text-[#777] text-sm leading-relaxed">{q}</p>
          ))}
        </div>

        {/* Name + arrows */}
        <div className="flex items-end justify-between mt-8">
          <div>
            <p className="font-bold text-[#162B30] text-lg">{m.name}</p>
            <p className="text-[#777] text-sm mt-0.5">{m.role}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={()=>setIdx(i=>(i-1+members.length)%members.length)}
              className="w-9 h-9 rounded-full border border-[#162B30]/20 flex items-center justify-center
                         text-[#162B30]/50 hover:text-[#162B30] hover:border-[#162B30]/40 transition-all">
              <ChevronLeft size={15} strokeWidth={2} />
            </button>
            <button onClick={()=>setIdx(i=>(i+1)%members.length)}
              className="w-9 h-9 rounded-full border border-[#162B30]/20 flex items-center justify-center
                         text-[#162B30]/50 hover:text-[#162B30] hover:border-[#162B30]/40 transition-all">
              <ChevronRight size={15} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WhoWeAre() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[360px]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-20">

        {/* ── Board ── */}
        <h1 className="font-extrabold text-[#162B30] tracking-tight mb-10"
            style={{ fontSize:'clamp(28px,4vw,48px)' }}>
        </h1>
        <MemberSlider members={boardMembers} />

        {/* ── Team Members ── */}
        <h2 className="font-extrabold text-[#162B30] tracking-tight mt-16 mb-10"
            style={{ fontSize:'clamp(28px,4vw,48px)' }}>
          TEAM MEMBERS
        </h2>
        <MemberSlider members={teamMembers} />

        {/* ── Consultants grid ── */}
        <h2 className="font-extrabold text-[#162B30] tracking-tight mt-16 mb-2"
            style={{ fontSize:'clamp(22px,3.5vw,38px)' }}>
        
        </h2>
        <p className="text-[#162B30]/50 text-sm mb-10">
          we give no stress, no long talk — just good homes and a smooth experience.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {consultants.map(c => (
            <div key={c.id} className="flex flex-col items-center gap-3">
              <div className="overflow-hidden rounded-[18px] bg-[#E8EDE8] w-full"
                   style={{ aspectRatio:'3/4' }}>
                <img src={c.image} alt={c.name}
                  className="object-cover object-top w-full h-full"
                  onError={e=>{ e.target.src=`Luba logo.png` }} />
              </div>
              <div className="text-center">
                <p className="font-semibold text-[#162B30] text-xs tracking-wider uppercase">{c.name}</p>
                <p className="text-[#777] text-[11px] mt-0.5">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
