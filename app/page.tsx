export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#b8b8b8]">
      <main className="relative w-full max-w-[1400px] min-h-screen bg-white">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-10 pt-8 pb-4">
          <span className="text-[11px] font-medium tracking-wide uppercase">
            Octavio Brehm &copy;
          </span>
          <div className="flex items-center gap-6">
            <button
              className="flex items-center justify-center w-6 h-6 bg-black rounded-sm"
              aria-label="Play"
            >
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5L0 10V0L8 5Z" fill="white" />
              </svg>
            </button>
            <div className="flex items-center gap-5 text-[12px] font-normal">
              <a href="#" className="hover:opacity-60 transition-opacity">
                About
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                Projects
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                Capabilities
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                Competencies
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col justify-between px-10 pt-16 pb-10 min-h-[calc(100vh-80px)]">
          {/* Hero Text */}
          <h1 className="max-w-[520px] text-[32px] leading-[1.35] font-normal tracking-[-0.01em] text-black">
            I create digital experiences that spark curiosity and leave a mark.
            Every interface I design is a space where creativity and
            functionality meet to tell unique stories.
          </h1>

          {/* Bottom Section */}
          <div className="flex items-end justify-between">
            {/* Bottom Left Text */}
            <p className="max-w-[280px] text-[13px] leading-[1.6] text-[#6b6b6b]">
              <span className="font-bold text-black">UX/UI Designer</span> and{" "}
              <span className="font-bold text-black">Developer</span>, crafting
              intuitive interfaces and digital experiences that connect with
              people.
            </p>

            {/* Portrait Image */}
            <div className="w-[200px] h-[240px] bg-[#e8e8e8] overflow-hidden border border-[#e0e0e0]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1621252179027-94459d278660?w=400&h=480&fit=crop&crop=top"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
