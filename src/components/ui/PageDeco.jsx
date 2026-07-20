/* Decorative leaf/petal shapes — top-right corner of every page header
   Faithfully traced from Figma screenshots */
export default function PageDeco({ className = '' }) {
  return (
    <div
      className={`absolute top-0 right-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ width: 'clamp(200px,28vw,360px)', height: 'clamp(200px,28vw,360px)' }}
    >
      <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
        {/* Large cluster */}
        <g transform="translate(220,110)">
          <path d="M0-80 C24-80 58-58 58-24 C58 10 36 36 0 36 C-36 36-58 10-58-24 C-58-58-24-80 0-80Z" fill="#A8C5A0" opacity="0.55"/>
          <path d="M80 0 C80 24 58 58 24 58 C-10 58-36 36-36 0 C-36-36-10-58 24-58 C58-58 80-24 80 0Z" fill="#A8C5A0" opacity="0.55" transform="rotate(90)"/>
          <path d="M0 80 C-24 80-58 58-58 24 C-58-10-36-36 0-36 C36-36 58-10 58 24 C58 58 24 80 0 80Z" fill="#A8C5A0" opacity="0.55" transform="rotate(180)"/>
          <path d="M-80 0 C-80-24-58-58-24-58 C10-58 36-36 36 0 C36 36 10 58-24 58 C-58 58-80 24-80 0Z" fill="#A8C5A0" opacity="0.55" transform="rotate(270)"/>
        </g>
        {/* Medium cluster */}
        <g transform="translate(312,228)">
          <path d="M0-50 C15-50 36-36 36-15 C36 6 21 21 0 21 C-21 21-36 6-36-15 C-36-36-15-50 0-50Z" fill="#C5D9C0" opacity="0.7"/>
          <path d="M50 0 C50 15 36 36 15 36 C-6 36-21 21-21 0 C-21-21-6-36 15-36 C36-36 50-15 50 0Z" fill="#C5D9C0" opacity="0.7" transform="rotate(90)"/>
          <path d="M0 50 C-15 50-36 36-36 15 C-36-6-21-21 0-21 C21-21 36-6 36 15 C36 36 15 50 0 50Z" fill="#C5D9C0" opacity="0.7" transform="rotate(180)"/>
          <path d="M-50 0 C-50-15-36-36-15-36 C6-36 21-21 21 0 C21 21 6 36-15 36 C-36 36-50 15-50 0Z" fill="#C5D9C0" opacity="0.7" transform="rotate(270)"/>
        </g>
        {/* Small cluster */}
        <g transform="translate(348,68)">
          <path d="M0-32 C10-32 24-24 24-10 C24 4 14 14 0 14 C-14 14-24 4-24-10 C-24-24-10-32 0-32Z" fill="#DCE9D9" opacity="0.9"/>
          <path d="M32 0 C32 10 24 24 10 24 C-4 24-14 14-14 0 C-14-14-4-24 10-24 C24-24 32-10 32 0Z" fill="#DCE9D9" opacity="0.9" transform="rotate(90)"/>
          <path d="M0 32 C-10 32-24 24-24 10 C-24-4-14-14 0-14 C14-14 24-4 24 10 C24 24 10 32 0 32Z" fill="#DCE9D9" opacity="0.9" transform="rotate(180)"/>
          <path d="M-32 0 C-32-10-24-24-10-24 C4-24 14-14 14 0 C14 14 4 24-10 24 C-24 24-32 10-32 0Z" fill="#DCE9D9" opacity="0.9" transform="rotate(270)"/>
        </g>
      </svg>
    </div>
  )
}
