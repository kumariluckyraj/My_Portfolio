'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import TopSocialBar from './TopSocialBar'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed navbar with green top bar always inside */}
      <div
        className={`fixed top-0 w-full z-50 transition duration-300 ${
          scrolled ? 'bg-green-400' : 'bg-white'
        }`}
      >
        {/* Always-visible green top bar */}
        <div className="h-6 bg-green-400" />

        <nav
          className="flex flex-wrap justify-center sm:justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 py-6
          text-xl sm:text-2xl md:text-3xl font-extrabold"
        >
          <Link
            href="/"
            className={`px-2 ${
              scrolled
                ? 'text-black hover:bg-yellow-300'
                : 'text-black hover:bg-green-400'
            } transition rounded-md`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-2 ${
              scrolled
                ? 'text-black hover:bg-yellow-300'
                : 'text-black hover:bg-green-400'
            } transition rounded-md`}
          >
            About
          </Link>
          <Link
            href="/#projects"
            className={`px-2 ${
              scrolled
                ? 'text-black hover:bg-yellow-300'
                : 'text-black hover:bg-green-400'
            } transition rounded-md`}
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className={`px-2 ${
              scrolled
                ? 'text-black hover:bg-yellow-300'
                : 'text-black hover:bg-green-400'
            } transition rounded-md`}
          >
            Experience
          </Link>
          <Link
            href="/Kumari_Lucky_Raj_Resume..pdf"
            className={`ml-4 px-4 py-1 border-2 border-black rounded-md hover:bg-green-400 transition text-base sm:text-lg ${
              scrolled
                ? 'text-black hover:bg-yellow-300'
                : 'text-black hover:bg-green-400'
            } transition rounded-md`}
          >
            Download Resume
          </Link>

          {/* Contact Me button shifted on larger screens */}
          <Link
            href="/contact"
            className="ml-0 sm:ml-6 px-4 py-1 border-2 border-black rounded-md hover:bg-black hover:text-white transition"
          >
            Contact Me
          </Link>
        </nav>
      </div>

      {/* Push page content down to avoid overlap */}
      <div className="h-[120px]" />
      <TopSocialBar/>
    </>
  )
}

export default Navbar
