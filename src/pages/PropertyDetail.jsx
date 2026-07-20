import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Bed, DoorOpen, Bath, Maximize } from 'lucide-react'
import { properties } from '../data'
import DecoBg from '../components/ui/DecoBg'

export default function PropertyDetail() {
  const { id }    = useParams()
  const property  = properties.find(p => p.id === Number(id)) || properties[0]
  const [imgIdx, setImgIdx] = useState(0)

  const imgs  = property.images || [property.image]
  const prev  = () => setImgIdx(i => (i - 1 + imgs.length) % imgs.length)
  const next  = () => setImgIdx(i => (i + 1) % imgs.length)

  return (
    <div className="bg-[#F5F5F0] min-h-screen relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[340px]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-20">

        {/* Title + price */}
        <h1 className="font-bold text-[#162B30] text-[40px] sm:text-[52px] tracking-tight leading-tight mb-2">
          {property.name}
        </h1>
        <p className="text-[#162B30] text-xl font-semibold mb-8 whitespace-pre-line">{property.price}</p>

        {/* Image carousel */}
        <div className="relative overflow-hidden rounded-[20px] bg-[#E8EDE8] mb-0"
             style={{ aspectRatio:'16/9', maxHeight:'580px' }}>
          <img
            key={imgIdx}
            src={imgs[imgIdx]}
            alt={property.name}
            className="w-full h-full object-cover animate-fade-in"
          />

          {/* Arrows */}
          <button onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                       bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center
                       shadow-md hover:bg-white transition-all active:scale-95"
            aria-label="Previous image">
            <ChevronLeft size={16} strokeWidth={2} className="text-[#162B30]" />
          </button>
          <button onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                       bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center
                       shadow-md hover:bg-white transition-all active:scale-95"
            aria-label="Next image">
            <ChevronRight size={16} strokeWidth={2} className="text-[#162B30]" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-[6px]">
            {imgs.map((_,i) => (
              <button key={i} onClick={() => setImgIdx(i)}
                className={`rounded-full transition-all duration-300
                  ${i===imgIdx ? 'w-6 h-[7px] bg-white' : 'w-[7px] h-[7px] bg-white/50'}`}
                aria-label={`Image ${i+1}`} />
            ))}
          </div>
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-3 border-t border-[#162B30]/12 py-6 mb-10">
          {[
            { label:'DEVELOPER', val: property.developer },
            { label:'LOCATION',  val: property.district  },
            { label:'DATE',      val: property.date       },
          ].map(m => (
            <div key={m.label} className="px-2 first:pl-0">
              <p className="text-[#162B30] text-xs font-semibold tracking-wider mb-1">{m.label}</p>
              <p className="text-[#777] text-xs">{m.val}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <h2 className="font-bold text-[#162B30] text-[28px] sm:text-[34px] mb-5">Description</h2>

        {/* Stats row */}
        <div className="flex items-center gap-5 flex-wrap mb-6">
          {[
            { icon: <Bed   size={16}/>, val:`${property.beds} Beds`   },
            { icon: <DoorOpen size={16}/>, val:`${property.rooms} Rooms` },
            { icon: <Bath  size={16}/>, val:`${property.baths} Baths`  },
            { icon: <Maximize size={16}/>, val:`${property.sqft}sqft`   },
          ].map(s => (
            <div key={s.val} className="flex items-center gap-1.5 text-[#162B30] text-sm">
              <span className="text-[#162B30]/50">{s.icon}</span>
              {s.val}
            </div>
          ))}
        </div>

        {/* Paragraphs */}
        <div className="space-y-4 mb-12 max-w-[860px]">
          {property.description.split('\n\n').map((p,i) => (
            <p key={i} className="text-[#162B30]/70 text-sm leading-[1.8]">{p}</p>
          ))}
        </div>

        {/* Key features */}
        {property.keyFeatures?.length > 0 && (
          <>
            <h2 className="font-bold text-[#162B30] text-[28px] sm:text-[34px] mb-5">Key features</h2>
            <ul className="space-y-2 max-w-[700px]">
              {property.keyFeatures.map((f,i) => (
                <li key={i} className="text-[#162B30]/70 text-sm flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1">*</span>{f}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
