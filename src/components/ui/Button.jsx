import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ children, to, onClick, className = '', style: styleProp = {}, type = 'button', ...rest }) {
  const base =
    'group relative inline-flex items-center gap-2 border border-[#162B30]/20 rounded-full overflow-hidden ' +
    'bg-white/75 px-5 py-[10px] text-[13px] font-medium text-[#162B30] ' +
    'transition-colors duration-300 ease-out active:scale-[0.97]'

  const finalStyle = { boxShadow: '0px 0px 19.1px 0px #0000002E', ...styleProp }
  const classes = `${base} ${className}`.trim()

  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#162B30] transform origin-bottom-left scale-0 group-hover:scale-100 transition-transform duration-700 ease-out z-0 rounded-full"
      />
      <span className="relative z-10 inline-flex items-center gap-2 group-hover:text-white">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} style={finalStyle} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={finalStyle} {...rest}>
      {content}
    </button>
  )
}