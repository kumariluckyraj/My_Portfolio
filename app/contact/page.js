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
   <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#020617]">

<div className="
w-full max-w-3xl
rounded-3xl
border border-cyan-400/20
bg-slate-950/70
backdrop-blur-xl
shadow-[0_0_40px_rgba(0,255,231,0.08)]
p-10 md:p-14
">

<div className="text-center mb-10">
<h2 className="text-5xl md:text-6xl font-bold text-cyan-300 tracking-wide mb-4">
Contact Me
</h2>


</div>


<form onSubmit={handleSubmit} className="space-y-8">

{/* Name */}
<div className="space-y-3">
<label className="block text-cyan-200 font-semibold text-xl">
Your Name
</label>

<input
type="text"
name="name"
placeholder="Enter your name"
value={form.name}
onChange={handleChange}
required
className="
w-full
bg-slate-900
border border-cyan-400/20
rounded-xl
p-4
text-white
placeholder-slate-500
focus:outline-none
focus:ring-2
focus:ring-cyan-400
focus:border-cyan-300
transition
"
/>
</div>



{/* Email */}
<div className="space-y-3">
<label className="block text-cyan-200 font-semibold text-xl">
Your Email
</label>

<input
type="email"
name="email"
placeholder="Enter your email"
value={form.email}
onChange={handleChange}
required
className="
w-full
bg-slate-900
border border-cyan-400/20
rounded-xl
p-4
text-white
placeholder-slate-500
focus:outline-none
focus:ring-2
focus:ring-cyan-400
focus:border-cyan-300
transition
"
/>
</div>


{error && (
<p className="text-red-400 font-medium">
{error}
</p>
)}



{/* Message */}
<div className="space-y-3">
<label className="block text-cyan-200 font-semibold text-xl">
Your Message
</label>

<textarea
name="message"
rows="6"
placeholder="Write your message..."
value={form.message}
onChange={handleChange}
required
className="
w-full
bg-slate-900
border border-cyan-400/20
rounded-xl
p-4
text-white
placeholder-slate-500
focus:outline-none
focus:ring-2
focus:ring-cyan-400
focus:border-cyan-300
transition
resize-none
"
/>
</div>



<div className="pt-4 flex justify-center">
<button
type="submit"
disabled={loading}
className="
px-12 py-4
rounded-xl
text-xl font-bold
bg-gradient-to-r from-cyan-400 to-blue-500
text-slate-950
shadow-[0_0_25px_rgba(34,211,238,.35)]
hover:scale-105
hover:shadow-[0_0_40px_rgba(34,211,238,.5)]
transition-all duration-300
disabled:opacity-60
"
>
{loading ? 'Sending...' : 'Send Message ↗'}
</button>
</div>

</form>

</div>

</section>
  )
}
