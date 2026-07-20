import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { services, properties } from '../data'
import DecoBg from '../components/ui/DecoBg'

export default function ServiceDetail() {
  const { id }  = useParams()
  const service = services.find(s => s.id === id) || services[0]

  if (service.id === 'construction-renovation') {
    return <ConstructionDetail service={service} />
  }

  if (service.id === 'facility-management') {
    return <FacilityDetail service={service} />
  }

  return <DefaultDetail service={service} />
}

/* ─────────────────────────────────────────────
   CONSTRUCTION / RENOVATION & REMODELLING
───────────────────────────────────────────── */
function ConstructionDetail({ service }) {
  return (
    <div className="bg-[#F5F5F0] min-h-screen relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[340px]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-24">

        <h1
          className="font-extrabold text-[#162B30] tracking-tight leading-tight mb-12 uppercase"
          style={{ fontSize: 'clamp(28px,4.5vw,52px)' }}
        >
          {service.titleFlat}
        </h1>

        {/* Before / After side-by-side */}
        <div className="grid grid-cols-1 gap-5 mb-10 sm:grid-cols-2">
          <BeforeAfterCard
            image={service.beforeImage || service.fullImage}
            label="Before"
            location={service.beforeLocation || 'Abuja'}
          />
          <BeforeAfterCard
            image={service.afterImage || service.fullImage}
            label="After"
            location={service.afterLocation || 'Abuja'}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-5 max-w-[860px]">
          {service.description.split('\n\n').map((para, i) => (
            <p key={i} className="text-[#162B30]/65 text-2xl leading-[1.39] font-light">
              {para}
            </p>
          ))}
        </div>

      </div>
    </div>
  )
}

function BeforeAfterCard({ image, label, location }) {
  return (
    <div>
      <div
        className="relative overflow-hidden rounded-[16px] bg-[#E8EDE8] mb-4"
        style={{ aspectRatio: '4/3' }}
      >
        <img
          src={image}
          alt={label}
          className="object-cover w-full h-full"
        />
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full shadow-lg w-14 h-14 bg-white/85 backdrop-blur-sm">
            <Play size={20} strokeWidth={0} fill="#162B30" className="ml-0.5" />
          </div>
        </div>
      </div>

      {/* Label row */}
      <div className="flex items-baseline justify-between px-1">
        <span className="font-semibold text-[#162B30] text-base">{label}</span>
        <span className="text-[#162B30]/45 text-sm">({location})</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   FACILITY MANAGEMENT
───────────────────────────────────────────── */
function FacilityDetail({ service }) {
  return (
    <div className="bg-[#F5F5F0] min-h-screen relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[340px]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-24">

        <h1
          className="font-extrabold text-[#162B30] tracking-tight leading-tight mb-12 uppercase"
          style={{ fontSize: 'clamp(28px,4.5vw,52px)' }}
        >
          {service.titleFlat}
        </h1>

        <div className="flex flex-col gap-16">
          {(service.managedProperties || []).map(prop => (
            <PropertyServiceCard key={prop.id} prop={prop} />
          ))}
        </div>

      </div>
    </div>
  )
}

function PropertyServiceCard({ prop }) {
  const [idx, setIdx] = useState(0)
  const imgs  = prop.images || []
  const total = imgs.length

  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  return (
    <div>
      {/* Image slider */}
      <div
        className="relative overflow-hidden rounded-[20px] bg-[#E8EDE8] mb-6 w-full"
        style={{ aspectRatio: '16/9' }}
      >
        <img
          key={idx}
          src={imgs[idx]}
          alt={prop.name}
          className="absolute inset-0 object-cover w-full h-full"
        />

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute flex items-center justify-center transition-all duration-200 -translate-y-1/2 rounded-full shadow-md left-3 top-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm hover:bg-white active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} strokeWidth={2} className="text-[#162B30]" />
            </button>

            <button
              onClick={next}
              className="absolute flex items-center justify-center transition-all duration-200 -translate-y-1/2 rounded-full shadow-md right-3 top-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm hover:bg-white active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={16} strokeWidth={2} className="text-[#162B30]" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {imgs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`rounded-full transition-all duration-300
                    ${i === idx
                      ? 'w-5 h-[6px] bg-white'
                      : 'w-[6px] h-[6px] bg-white/50 hover:bg-white/75'
                    }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Property name */}
      <h2 className="font-bold text-[#162B30] text-xl sm:text-2xl mb-4">
        {prop.name}
      </h2>

      {/* Property description */}
      <p className="text-[#162B30]/65 text-2xl leading-[1.39] font-light mb-6">
        {prop.description}
      </p>

      {/* Service intro line */}
      <p className="text-[#162B30]/65 text-sm leading-relaxed mb-5">
        <span className="text-[#162B30] font-medium">Lubaba&apos;s Service</span>: Lubaba provides{' '}
        <strong className="text-[#162B30] font-semibold">{prop.serviceLabel}</strong>{' '}
        in the form of;
      </p>

      {/* Numbered service list */}
      <ol className="flex flex-col gap-5">
        {prop.services.map((svc, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[#162B30]/50 text-sm font-medium flex-shrink-0 pt-0.5">
              {i + 1}.
            </span>
            <div>
              <span className="font-semibold text-[#162B30] text-sm underline underline-offset-2 decoration-[#162B30]/30">
                {svc.title}
              </span>
              {svc.detail.split('\n').map((line, j) => (
                <p key={j} className="text-[#162B30]/65 text-sm leading-[1.8] mt-1">
                  {line}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ─────────────────────────────────────────────
   DEFAULT — all other services (Interior Planning, Brokerage, Estate Valuation, etc.)
───────────────────────────────────────────── */
function DefaultDetail({ service }) {
  const imgs = [service.fullImage, ...properties.slice(0, 3).map(p => p.image)]
  const [imgIdx, setImgIdx] = useState(0)

  // Side-by-side layout applies to Brokerage (property-sale) and Estate Valuation pages
  const isSideBySide = service.id === 'property-sale' || service.id === 'estate-valuation'

  return (
    <div className="bg-[#F5F5F0] min-h-screen relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[340px]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 pb-20">

        <h1
          className="font-extrabold text-[#162B30] tracking-tight leading-tight mb-10 uppercase"
          style={{ fontSize: 'clamp(32px,5vw,58px)' }}
        >
          {service.titleFlat}
        </h1>

        <div className={
          isSideBySide 
            ? "grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16" 
            : "flex flex-col items-center w-full mb-16"
        }>
          
          {/* Image slider container */}
          <div
            className={`relative overflow-hidden rounded-[20px] bg-[#E8EDE8] w-full mb-10 lg:mb-0 ${
              isSideBySide ? "" : "max-w-[1024px]"
            }`}
            style={{ aspectRatio: isSideBySide ? '4/5' : '16/9' }}
          >
            <img
              key={imgIdx}
              src={imgs[imgIdx]}
              alt={service.titleFlat}
              className="absolute inset-0 object-cover w-full h-full"
            />
            {imgs.length > 1 && (
              <>
                <button
                  onClick={() => setImgIdx(i => (i - 1 + imgs.length) % imgs.length)}
                  className="absolute flex items-center justify-center transition-all -translate-y-1/2 rounded-full shadow-md left-3 top-1/2 w-9 h-9 bg-white/80 hover:bg-white active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft size={15} strokeWidth={2} className="text-[#162B30]" />
                </button>
                <button
                  onClick={() => setImgIdx(i => (i + 1) % imgs.length)}
                  className="absolute flex items-center justify-center transition-all -translate-y-1/2 rounded-full shadow-md right-3 top-1/2 w-9 h-9 bg-white/80 hover:bg-white active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight size={15} strokeWidth={2} className="text-[#162B30]" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`rounded-full transition-all
                        ${i === imgIdx ? 'w-5 h-[6px] bg-white' : 'w-[6px] h-[6px] bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Description container */}
          <div className={`flex flex-col gap-5 w-full text-left ${
            isSideBySide ? "" : "max-w-[1024px]"
          }`}>
            {service.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-[#162B30]/65 text-sm leading-[1.85]">
                {para}
              </p>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}