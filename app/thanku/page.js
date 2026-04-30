'use client'
//
import { useRouter } from 'next/navigation'

export default function ThankYouPage() {
  const router = useRouter()

  return (
    <section className="min-h-screen bg-[#020617] flex items-center justify-center px-6 py-20">
      <div
        className="
        w-full max-w-2xl
        rounded-3xl
        border border-cyan-400/20
        bg-slate-950/70
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(0,255,231,0.08)]
        px-8 py-14 md:px-14
        text-center
        "
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="
            w-20 h-20 rounded-full
            bg-cyan-400/10
            border border-cyan-300/30
            flex items-center justify-center
            text-4xl
            shadow-[0_0_30px_rgba(34,211,238,.25)]
            "
          >
            ✓
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-300 tracking-wide mb-4">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Your message has been sent successfully.  
          I appreciate your time and will get back to you soon.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/')}
            className="
            px-8 py-4 rounded-xl
            text-lg font-bold
            bg-gradient-to-r from-cyan-400 to-blue-500
            text-slate-950
            shadow-[0_0_25px_rgba(34,211,238,.35)]
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(34,211,238,.5)]
            transition-all duration-300
            "
          >
            Go Home ↗
          </button>

          <button
            onClick={() => router.push('/contact')}
            className="
            px-8 py-4 rounded-xl
            text-lg font-bold
            border border-cyan-400/30
            text-cyan-300
            hover:bg-cyan-400/10
            hover:scale-105
            transition-all duration-300
            "
          >
            Send Another
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-cyan-200/30 text-sm mt-10 tracking-widest">
          MESSAGE_RECEIVED.log
        </p>
      </div>
    </section>
  )
}