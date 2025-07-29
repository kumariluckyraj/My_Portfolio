'use client'

import { useRouter } from 'next/navigation'

export default function ThankYouPage() {
  const router = useRouter()

  return (
    <section className="min-h-screen  flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Thanks!</h1>
        <p className="text-lg">The form was submitted successfully.</p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
        >
          Go Back to Home
        </button>
      </div>
    </section>
  )
}
