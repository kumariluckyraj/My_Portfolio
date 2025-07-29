'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email.')
      return
    }

    setLoading(true)

    emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
)

      .then(
        () => {
          setLoading(false)
          router.push('/thanku')
        },
        (err) => {
          console.error(err)
          setLoading(false)
          setError('Something went wrong. Please try again later.')
        }
      )
  }

  return (
    <section className="h-3/2 flex items-center justify-center px-4 py-4">
      <div className=" text-black bg-[#020617] p-8 rounded-xl shadow-2xl w-3/4">
        <h2 className="text-5xl text-white font-bold mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <p className='text-white font-bold text-3xl'> Your Name</p>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border border-gray-300"
          />
           <p className='text-white font-bold text-3xl'> Your Email</p>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border border-gray-300"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
<p className='text-white font-bold text-3xl'>Your Message</p>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border border-gray-300"
          />

          <button
            type="submit"
            className="w-30 flex justify-center content-center text-3xl border-4 border-white bg-[#020617] text-white font-bold py-2 rounded hover:bg-white hover:text-[#020617] transition md:w-80 sm:w-40 "
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          
        </form>
      </div>
    </section>
  )
}
