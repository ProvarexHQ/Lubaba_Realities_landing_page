// src/components/ui/DecoBg.jsx
export default function DecoBg({ className = '', style: styleProp = {} }) {
  return (
    <div
      className={`absolute top-0 right-0 pointer-events-none overflow-hidden ${className}`.trim()}
      aria-hidden="true"
      style={{ width: '34%', maxWidth: '580px', minWidth: '270px', height: 'auto', zIndex: 0, ...styleProp }}
    >
      <img
        src="/images/deco-symbol.png"
        alt=""
        aria-hidden="true"
        className="w-full h-auto"
        style={{ pointerEvents: 'none', display: 'block' }}
      />
    </div>
  )
}