import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  const { id, name, location, status, image } = property

  return (
    <Link to={`/properties/${id}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden rounded-[20px] bg-sage-200"
           style={{ aspectRatio: '615/480' }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Status pill — top right, exact padding from Figma: t10 r16 b10 l16, radius 100px */}
        <div className="absolute top-[14px] right-[16px]">
          <span className="inline-flex items-center rounded-full bg-white text-[#162B30]
                           text-[13px] font-normal px-4 py-[9px] leading-none
                           shadow-[0_2px_12px_rgba(0,0,0,0.10)]">
            {status}
          </span>
        </div>
      </div>

      {/* Info row */}
      <div className="mt-4 flex items-baseline justify-between gap-2 px-[2px]">
        <h3 className="text-[#162B30] font-semibold text-[18px] leading-snug
                       group-hover:opacity-80 transition-opacity">
          {name}
        </h3>
        <span className="text-[#777777] text-[14px] flex-shrink-0">({location})</span>
      </div>
    </Link>
  )
}
