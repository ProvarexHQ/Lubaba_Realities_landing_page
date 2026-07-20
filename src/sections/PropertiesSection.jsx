import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, ArrowUpRight } from 'lucide-react'
import { properties } from '../data'

const TABS = ['Exclusive Properties', 'Affordable Housing']

export default function PropertiesSection({ showViewAll = true, limit = 4, showFilters = false }) {
  const [tab,     setTab]     = useState(0)
  const [search,  setSearch]  = useState('')
  const [sortBy,  setSortBy]  = useState('Latest')
  const [sortOpen,setSortOpen]= useState(false)

  const cat = tab === 0 ? 'exclusive' : 'affordable'

  const filtered = properties.filter(p =>
    p.category === cat &&
    (!search || p.name.toLowerCase().includes(search.toLowerCase()))
  ).slice(0, limit)

  return (
    <section className="bg-[#F5F5F0] py-14 sm:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">

        {/* Headline */}
        <h2 className="font-extrabold text-[#162B30] tracking-tight leading-tight mb-8"
            style={{ fontSize:'clamp(28px,4.5vw,52px)' }}>
          LUBABA REALTY'S COLLECTION OF<br className="hidden sm:block" /> BEAUTIFUL PROPERTIES
        </h2>

        {/* Filter row (only on Properties page) */}
        {showFilters && (
          <div className="flex flex-col justify-between gap-4 mb-10 sm:flex-row sm:items-center">
            {/* Category tabs */}
            <div>
              <p className="text-[#162B30]/45 text-[10px] font-semibold uppercase tracking-widest mb-2">
                Categories
              </p>
              <div className="inline-flex items-center bg-white rounded-full p-1 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
                {TABS.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => setTab(i)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200
                      ${tab===i ? 'bg-[#162B30] text-white shadow-sm' : 'text-[#162B30]/55 hover:text-[#162B30]'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            {/* Sort + Search */}
            <div className="flex items-center gap-3">
              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(v=>!v)}
                  className="flex items-center gap-2 bg-white border border-[#162B30]/10 rounded-full
                             px-5 py-[10px] text-sm font-medium text-[#162B30]
                             hover:border-[#162B30]/25 transition-all"
                >
                  Sort By {sortBy}
                  <ChevronDown size={13} strokeWidth={2} className={`transition-transform ${sortOpen?'rotate-180':''}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-card
                                  border border-[#162B30]/8 py-2 min-w-[150px] z-20">
                    {['Latest','Price: Low','Price: High'].map(o => (
                      <button
                        key={o}
                        onClick={() => { setSortBy(o); setSortOpen(false) }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                          ${sortBy===o ? 'text-[#162B30] font-medium' : 'text-[#162B30]/55 hover:text-[#162B30]'}`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Search */}
              <div className="relative">
                <Search size={14} strokeWidth={2}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#162B30]/35 pointer-events-none" />
                <input
                  type="text" placeholder="Search"
                  value={search} onChange={e => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-[10px] bg-white border border-[#162B30]/10 rounded-full
                             text-sm text-[#162B30] placeholder:text-[#162B30]/35
                             focus:outline-none focus:border-[#162B30]/30 transition-all w-44 sm:w-52"
                />
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="py-20 text-center text-[#162B30]/40 text-sm">
            No properties found.
          </div>
        )}

        {/* View All */}
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 border border-[#162B30]/20 rounded-full
                         px-6 py-3 text-sm font-medium text-[#162B30] bg-white
                         hover:border-[#162B30]/40 hover:bg-[#F5F5F0] transition-all active:scale-[0.97]"
            >
              View All Properties
              <ArrowUpRight size={14} strokeWidth={2} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

function PropertyCard({ property }) {
  const { id, name, location, status, image } = property
  return (
    <Link to={`/properties/${id}`} className="block group">
      <div className="relative overflow-hidden rounded-[20px] bg-[#E8EDE8]" style={{ aspectRatio:'4/3' }}>
        <img src={image} alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
        <div className="absolute top-4 right-4">
          <span className="bg-white/95 backdrop-blur-sm text-[#162B30] text-xs font-medium rounded-full px-4 py-2 shadow-sm">
            {status}
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-2 mt-4">
        <h3 className="text-[#162B30] font-semibold text-base leading-snug">{name}</h3>
        <span className="text-[#777] text-sm flex-shrink-0">({location})</span>
      </div>
    </Link>
  )
}
