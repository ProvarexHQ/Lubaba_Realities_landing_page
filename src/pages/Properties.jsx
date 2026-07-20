import DecoBg from '../components/ui/DecoBg'
import PropertiesSection from '../sections/PropertiesSection'

export default function Properties() {
  return (
    <div className="bg-[#F5F5F0] relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[360px]" />
      
      <PropertiesSection limit={100} showViewAll={false} showFilters={true} />
    </div>
  )
}
