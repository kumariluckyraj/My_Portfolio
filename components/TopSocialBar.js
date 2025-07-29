import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const TopSocialBar = () => {
  return (
    <>
      {/* Desktop Top Bar (visible on md and above) */}
      <div className="hidden md:flex px-4 py-2 justify-center gap-10">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kumari-lucky-raj-2a52b0323"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-green-400 transition"
        >
          <FaLinkedin size={32} />
          <span className="font-semibold mt-1 text-green-400">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kumariluckyraj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-green-400 transition"
        >
          <FaGithub size={32} />
          <span className="font-semibold mt-1 text-green-400">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:dezikumari92@gmail.com"
          className="flex flex-col items-center hover:text-green-400 transition"
        >
          <FaEnvelope size={32} />
          <span className="font-semibold mt-1 text-green-400">Email</span>
        </a>
      </div>

      {/* Mobile Side Bar (visible on small screens only) */}
      <div className="fixed top-1/3 left-2 z-50 flex-col gap-6 md:hidden flex">
        <div className="flex flex-col items-center bg-black p-3 rounded-lg shadow-md text-white space-y-4">
          <a
            href="https://www.linkedin.com/in/kumari-lucky-raj-2a52b0323"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-green-400 transition"
          >
            <FaLinkedin size={20} />
            <span className="text-xs text-green-400 mt-1">LinkedIn</span>
          </a>

          <a
            href="https://github.com/kumariluckyraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-green-400 transition"
          >
            <FaGithub size={20} />
            <span className="text-xs text-green-400 mt-1">GitHub</span>
          </a>

          <a
            href="mailto:dezikumari92@gmail.com"
            className="flex flex-col items-center hover:text-green-400 transition"
          >
            <FaEnvelope size={20} />
            <span className="text-xs text-green-400 mt-1">Email</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default TopSocialBar
