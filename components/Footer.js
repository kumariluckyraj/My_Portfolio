import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-blue-50 border-t border-neutral-700 py-8">
  <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm ">
    
    <div>
      © {new Date().getFullYear()} Kumari Lucky Raj. All rights reserved.
    </div>

    <div className="flex space-x-6">
      <Link href="https://github.com/kumariluckyraj" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
        GitHub
      </Link>
      <Link href="https://www.linkedin.com/in/kumari-lucky-raj-2a52b0323/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
        LinkedIn
      </Link>
      <Link href="mailto:dezikumari92@gmail.com" className="hover:text-green-400 transition-colors duration-300">
        Email
      </Link>
    </div>
    
  </div>
</footer>

    </div>
  )
}

export default Footer
