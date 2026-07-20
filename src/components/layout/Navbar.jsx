import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Home',           to: '/' },
  { label: 'Our Properties', to: '/properties' },
  { label: 'Services',       to: '/services' },
  { label: 'Who We Are',     to: '/who-we-are' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F5F5F0] transition-shadow duration-300
        ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.07)]' : ''}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">

        {/* ── Logo ── */}
        <Link to="/" className="flex-shrink-0">
          <img src="/images/logo.png" alt="Lubaba Realties" className="h-[46px] w-auto" />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center">
          {NAV.map((link, i) => (
            <div key={link.to} className="flex items-center">
              {i > 0 && (
                <span className="w-[5px] h-[5px] rounded-full bg-[#162B30]/40 mx-3 flex-shrink-0" />
              )}
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-150
                  ${isActive ? 'text-[#162B30]' : 'text-[#162B30]/55 hover:text-[#162B30]'}`
                }
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* ── Contact CTA ── */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-[9px] bg-[#162B30] text-white rounded-full
                       px-5 py-[10px] text-sm font-medium
                       shadow-[0_4px_20px_rgba(22,43,48,0.25)]
                       hover:bg-[#1c3840] transition-all duration-200 active:scale-[0.97]"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#4CAF50] flex-shrink-0" />
            Contact us
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </div>

        {/* ── Mobile burger ── */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open
            ? <X    size={20} className="text-[#162B30]" />
            : <Menu size={20} className="text-[#162B30]" />
          }
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-[#F5F5F0] border-t border-[#162B30]/10 px-6 py-4 flex flex-col gap-1">
          {NAV.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${isActive ? 'bg-[#162B30] text-white' : 'text-[#162B30]/70 hover:bg-[#162B30]/8 hover:text-[#162B30]'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 flex items-center justify-center gap-2 bg-[#162B30] text-white rounded-full py-3 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-[#4CAF50]" />
            Contact us <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  )
}
