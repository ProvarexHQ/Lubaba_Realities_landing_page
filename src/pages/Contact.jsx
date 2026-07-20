import ContactSection from '../sections/ContactSection'
import DecoBg from '../components/ui/DecoBg'

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      <DecoBg className="w-[280px] sm:w-[360px]" />
      <div className="relative z-10">
        <ContactSection />
      </div>
    </div>
  )
}
