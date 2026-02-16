import Image from 'next/image'


export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center space-y-6 mt-16">
     <div className="relative w-[25rem] h-[25rem] rounded-full overflow-hidden border-8 border-black shadow-lg hover:border-green-400">
  <Image
    src="/luxky.jpg"
    alt="Kumari Lucky Raj"
 fill
    className="object-cover"
    priority
  />
</div>




      <h1 className="text-3xl sm:text-4xl font-bold ">Hi, I&apos;m <span className='text-green-400'> Kumari Lucky Raj</span></h1>
      <p className="max-w-xl text-2xl font-semibold ">
        Full-stack web developer skilled in React,Next.js & core web tech. Currently building an EdTech platform at Tending To Infinity.
      </p>
    </section>

   <section id="projects" className="mt-20 w-full bg-[#020617] py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 pb-2 text-white">
      My Projects
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Project 1 */}
      <div className="bg-white p-6 rounded-xl border border-black hover:border-green-400 hover:-translate-y-1 transform transition">
  <a
    href="https://tendingtoinfinityacademy.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl font-bold text-green-400 hover:underline"
  >
    Tending To Infinity Academy
  </a>
  <p className="mt-2 font-semibold">
    A full-fledged EdTech platform built for seamless learning experiences between educators and students.
  </p>
  <p className="mt-2">
    Tech Stack: Next.js, React, Tailwind CSS, TypeScript, PostgreSQL, REST APIs
  </p>
</div>

     
     

      {/* Project 2 */}
      <div className="bg-white p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:-translate-y-2
">
        <a href="https://equicraft.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-400 hover:underline">
          EquiCraft
        </a>
        <p className=" mt-2 font-semibold">
          Connects traditional artisans to global markets to support sustainable livelihoods.
        </p>
        <p className=" mt-2 ">
          Tech Stack: Next.js, JavaScript, HTML, CSS
        </p>
      </div>

       

       <div className="bg-white p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:-translate-y-2
">
        <a href="https://demo1-six-ruby.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-400 hover:underline">
          AgniMundal_React
        </a>
        <p className=" mt-2 font-semibold">
          Full-stack website for a Model UN event, supporting registration and authentication.
        </p>
        <p className=" mt-2 ">
          Tech Stack: HTML, CSS, JavaScript, MongoDB, React
        </p>
      </div>

      {/* Project 3 */}
      <div className="bg-white p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:-translate-y-2
">
        <a href="https://github.com/kumariluckyraj/Career_Craft_AI.git" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-400 hover:underline">
         CareerCraft AI
        </a>
        <p className=" mt-2 font-semibold">
          An AI-powered platform to generate GitHub READMEs, create repositories, optimize LinkedIn profiles, and analyze resumes using fine-tuned NLP models.
        </p>
        <p className=" mt-2 ">
          Tech Stack: Next.js, SQL, Tailwind CSS, TypeScript, OpenAI APIs
        </p>
      </div>



<div className="bg-white p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:-translate-y-2
">
        <a href="https://resume-ats-tracking.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-400 hover:underline">
         AI ATS Resume LLM App
        </a>
        <p className=" mt-2 font-semibold">
         Developed an application optimizing resumes for ATS using Google Gemeni APIs, enhancing match rates for job applications.
        </p>
        <p className=" mt-2 ">
          Tech Stack: Google Gemeni APIs, Python, AWS, Google Gemini Pro.
        </p>
      </div>



      {/* Project 4 */}
      <div className="bg-white p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:-translate-y-2
">
        <a href="https://github.com/kumariluckyraj/PassOP" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-400 hover:underline">
          PassOP
        </a>
        <p className=" mt-2 font-semibold">
          A web platform promoting cultural and economic awareness.
        </p>
        <p className=" mt-2 ">
          Tech Stack: Next.js, JavaScript, HTML, CSS
        </p>
      </div>

        {/* Project 3 */}
      <div className="bg-white p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:-translate-y-2
">
        <a href="https://bitlinks-green.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-400 hover:underline">
          BitLinks
        </a>
        <p className=" mt-2 font-semibold">
          Raises awareness about cultural preservation and eco-conscious practices.
        </p>
        <p className=" mt-2 ">
          Tech Stack: Next.js, JavaScript, HTML, CSS
        </p>
      </div>
    </div>
  </div>
</section>
  
  <section id="experience" className="w-screen  py-16">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 ">
      Experience
    </h2>

    <div className="space-y-6">
      {/* Experience 1 */}
      <div className="bg-[#020617] p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:scale-105
">
        <h3 className="text-2xl font-bold text-green-400 ">
          Full Stack Developer Intern — Tending To Infinity Academy
        </h3>
        <a
    href="https://tendingtoinfinityacademy.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl font-bold mt-4 text-green-400 hover:underline"
  >
    Tending To Infinity Academy
  </a>
        <p className="text-sm text-white font-semibold mt-1">October 2025 - Present</p>
        <p className="mt-2 font-medium text-white">
          Built student-educator learning platform with Next.js, Tailwind, and APIs.
        </p>
      </div>

      {/* Experience 2 */}
      <div className="bg-[#020617] p-6 rounded-xl border border-black hover:border-green-400 transform transition-transform duration-300 hover:scale-105
">
        <h3 className="text-2xl font-bold text-green-400">
          Web Developer (Academic)
        </h3>
        
        <a href="https://equicraft.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-400 hover:underline">
          EquiCraft
        </a>
        <p className="text-sm text-white font-semibold mt-1">April 2025</p>
        <p className="mt-2 font-medium text-white">
          Built EquiCraft for cultural and sustainable economic engagement.
        </p>
      </div>
    </div>
  </div>
</section>



</>
  )
}
