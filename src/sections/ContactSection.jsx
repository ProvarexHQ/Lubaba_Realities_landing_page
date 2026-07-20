import { useState } from 'react'
import { Paperclip } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handle = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); alert('Message sent!') }

  return (
    <section className="relative overflow-hidden">

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Headline */}
          <div>
            <h2
              className="font-extrabold text-[#162B30] leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(32px,5vw,62px)' }}
            >
              Serving clients<br />
              across Nigeria,<br />
              we've connected{' '}
              <span className="text-[#A8C5A0]">1000+</span>{' '}
              to homes<br />
              they love.
            </h2>
            <p className="text-[#777] text-sm leading-relaxed max-w-xs">
              Helping people across Nigeria find, rent, and own homes with ease.
            </p>
          </div>

          {/* Form column (background starts here) */}
          <div className="relative">
            <div className="absolute z-0" style={{ left: '-24px', right: '-24px', bottom: '-24px', top: '50%' }}>
              <img
                src="/images/property-3.png"
                alt=""
                className="object-cover w-full h-full"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[#F5F5F5]/88" />
            </div>

            {/* Form card */}
            <div className="relative z-10 bg-white rounded-[20px] p-7 sm:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.07)]">
            <h3 className="font-bold text-[#162B30] text-xl mb-7">Drop us a line!</h3>

            <form onSubmit={submit} className="flex flex-col gap-6">
              <Field label="Your Name"          name="name"    type="text"     value={form.name}    onChange={handle} />
              <Field label="Email"              name="email"   type="email"    value={form.email}   onChange={handle} />
              <Field label="Enter your message" name="message" type="textarea" value={form.message} onChange={handle} />

              <div className="flex items-center justify-between mt-1">
                <button
                  type="button"
                  className="flex items-center gap-2 text-[#162B30]/45 text-sm hover:text-[#162B30]/70 transition-colors"
                >
                  <Paperclip size={15} strokeWidth={1.5} /> Attach Files
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#162B30] text-white rounded-full
                             px-6 py-3 text-sm font-medium hover:bg-[#1E3D44]
                             transition-all duration-300 active:scale-[0.97]"
                >
                  Send Now
                </button>
              </div>
            </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, value, onChange }) {
  const base = `w-full bg-transparent border-b border-[#162B30]/15 pb-3 pt-1 text-sm text-[#162B30]
    placeholder:text-[#162B30]/35 focus:outline-none focus:border-[#162B30]/40 transition-colors`
  if (type === 'textarea') return (
    <textarea name={name} value={value} onChange={onChange} rows={3}
      placeholder={label} className={`${base} resize-none`} />
  )
  return (
    <input type={type} name={name} value={value} onChange={onChange}
      placeholder={label} className={base} />
  )
}