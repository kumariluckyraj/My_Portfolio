"use client"
import React from "react"
import { useRouter } from "next/navigation"
export default function AboutPage() {
    const router = useRouter()
  return (
    <>
    <section className="min-h-screen   flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-green-400">About Me</h1>

        <p className="text-lg leading-relaxed ">
          Hi, I&apos;m <span className=" font-semibold">Kumari Lucky Raj</span> — a full-stack web developer and computer science undergrad based in New Town, Kolkata. I&apos;m currently working as a <strong>Frontend Intern</strong> at <em>Tending To Infinity</em>, where I contribute to building a dynamic EdTech platform using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>.
        </p>

        <p className="text-lg leading-relaxed ">
          I love bringing ideas to life through code. Some of the projects I&apos;m proud of include <a href="https://tendingtoinfinityacademy.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold hover:underline">Tending To Infinity</a> — A full-fledged EdTech platform built for seamless learning experiences between educators and students, and <a href="https://equicraft.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold hover:underline">EquiCraft</a> — a platform supporting sustainable artisan trade.
        </p>

        <p className="text-lg leading-relaxed ">
          I&apos;m passionate about clean UI, accessible design, and building meaningful tools that empower users. I&apos;m currently open to internships, freelance opportunities, or collaboration on impactful tech projects.
        </p>

        <p className="text-lg leading-relaxed ">
          When I&apos;m not coding, I enjoy sketching and diving into creative digital projects.
        </p>
        <button
          onClick={() => router.push('/')}
          className="py-2 px-4  bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
        >
          Go Back to Home
        </button>
      </div>

     
    </section>
     
        </>
  )
}
