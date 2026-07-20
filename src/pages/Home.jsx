import HeroSection         from '../sections/HeroSection'
import PropertiesSection   from '../sections/PropertiesSection'
import ServicesSlider      from '../sections/ServicesSlider'
import BoardMembersSection from '../sections/BoardMembersSection'
import ContactSection      from '../sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropertiesSection limit={4} showViewAll={true} showFilters={false} />
      <ServicesSlider />
      <BoardMembersSection />
      <ContactSection />
    </>
  )
}
