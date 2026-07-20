import { useState, useRef } from 'react'
import Button from '../components/ui/Button'
import { Search, ChevronDown, ArrowUpRight } from 'lucide-react'
import PropertyCard from '../components/ui/PropertyCard'
import { properties } from '../data'

const CATS = ['Exclusive Properties', 'Affordable Housing']

export default function HomeProperties() {
  const [activeCat, setActiveCat] = useState(0)
  const [sortBy,    setSortBy]    = useState('Latest')
  const [search,    setSearch]    = useState('')
  const [sortOpen,  setSortOpen]  = useState(false)
  const scrollRef                 = useRef(null)

  const cat  = activeCat === 0 ? 'exclusive' : 'affordable'
  const list = properties
    .filter(p =>
      p.category === cat &&
      (!search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()))
    )
    .slice(0, 4)

  return (
    <section className="bg-[#EEF4EC] py-14 sm:py-20">
      <div className="container-luba">

        {/* ── Header ── */}
        <div className="flex flex-col gap-3 mb-8 lg:flex-row lg:items-start lg:justify-between">
          <h2
            className="font-extrabold text-[#162B30] tracking-tight leading-tight"
            style={{ fontSize: 'clamp(26px,4vw,48px)' }}
          >
            Our Properties
          </h2>
          <div className="lg:text-right">
            <p className="text-[#162B30]/55 text-[14px] leading-relaxed mb-3 lg:max-w-[240px]">
              Good homes go fast — let's find yours before someone else does.
            </p>
            <Button className="self-start">
              <span>View All Properties</span>
              <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </Button>
          </div>
        </div>

        {/* ── Filter + Sort row ── */}
        <div className="flex flex-col justify-between gap-4 mb-8 sm:flex-row sm:items-center">

          {/* Category tabs */}
          <div>
            <p className="text-[#162B30]/45 text-[10px] font-medium uppercase tracking-widest mb-2">
              Categories
            </p>
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
              {CATS.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActiveCat(i)}
                  className={`rounded-full px-4 py-[9px] text-[13px] font-normal transition-all duration-200 leading-none
                    ${activeCat === i
                      ? 'bg-[#162B30] text-white'
                      : 'text-[#777777] hover:text-[#162B30]'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort + Search */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 bg-white border border-[#162B30]/10 rounded-full
                           px-4 py-[9px] text-[13px] text-[#162B30] font-normal leading-none
                           hover:border-[#162B30]/25 transition-all duration-200"
              >
                Sort By {sortBy}
                <ChevronDown
                  size={13} strokeWidth={1.8}
                  className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-card
                                border border-[#162B30]/8 py-2 min-w-[150px] z-30">
                  {['Latest', 'Price: Low', 'Price: High'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors
                        ${sortBy === opt ? 'text-[#162B30] font-medium' : 'text-[#777] hover:text-[#162B30]'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <Search size={13} strokeWidth={2}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#162B30]/35 pointer-events-none" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9 pr-4 py-[9px] bg-white border border-[#162B30]/10 rounded-full
                           text-[13px] text-[#162B30] placeholder:text-[#162B30]/35
                           focus:outline-none focus:border-[#162B30]/35 transition-all duration-200
                           w-36 sm:w-48 leading-none"
              />
            </div>
          </div>
        </div>

        {/* ── Property grid: 2-col on sm+, horizontal scroll on mobile ── */}
        {list.length > 0 ? (
          <>
            {/* Mobile: horizontal scroll strip */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-2 sm:hidden scroll-smooth snap-x snap-mandatory
                         [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {list.map(p => (
                <div key={p.id} className="snap-start flex-shrink-0 w-[78vw] max-w-[300px]">
                  <PropertyCard property={p} />
                </div>
              ))}
            </div>

            {/* sm+: regular 2-col grid */}
            <div className="hidden grid-cols-2 sm:grid gap-x-6 gap-y-10">
              {list.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-[#162B30]/40 text-[14px]">
            No properties found.
          </div>
        )}
      </div>
    </section>
  )
}