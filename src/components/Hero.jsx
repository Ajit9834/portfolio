import { useState } from 'react'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 40 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setCursorPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setCursorPosition({ x: 50, y: 40 })
  }

  const socials = [
    {
      icon: <FaGithub size={20} />,
      label: 'GitHub',
      href: 'https://github.com/Ajit9834/Ajit9834.git',
    },
    {
      icon: <FaLinkedinIn size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ajit-zori',
    },
    {
      icon: <MdEmail size={22} />,
      label: 'Gmail',
      href: 'mailto:ajitzori24@gmail.com',
    },
  ]

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-3 py-16 sm:px-6 sm:py-20"
      style={{
        background:
          'radial-gradient(circle at 18% 18%, rgba(237, 91, 255, 0.35), transparent 34%), radial-gradient(circle at 82% 84%, rgba(123, 172, 255, 0.35), transparent 32%), #070f26',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(71,122,255,0.18),transparent_60%)]" />

      <div className="absolute top-16 -left-12 sm:left-6 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-fuchsia-500/40 rounded-full blur-[120px] animate-drift-x" />
      <div className="absolute bottom-6 -right-16 sm:right-0 w-72 h-72 sm:w-[30rem] sm:h-[30rem] bg-blue-400/35 rounded-full blur-[130px] animate-float-slow" />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-72 h-44 bg-lime-400/30 blur-[100px] rounded-full animate-float-slow" />

      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-200"
        style={{
          background: `radial-gradient(circle 340px at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(113, 255, 196, 0.18), transparent 55%)`,
        }}
      />

      <div className="hero-shell relative z-10 text-center max-w-5xl mx-auto w-full">
        <div className="mx-auto max-w-xl w-full">
          <div className="hero-avatar relative mx-auto h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 mb-5 sm:mb-7 transition-transform duration-300 hover:scale-[1.06]">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 blur-md opacity-70" />
            <div className="relative h-full w-full rounded-full border-4 border-white/45 overflow-hidden bg-slate-900/70">
              <img
                src="/assets/Ajit.png"
                alt="Ajit profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="hero-card rounded-3xl border border-white/15 bg-white/[0.07] backdrop-blur-xl shadow-[0_18px_55px_rgba(17,26,68,0.55)] px-4 py-5 sm:px-8 sm:py-8">
            <p className="text-primary font-medium mb-2 text-[11px] sm:text-sm tracking-[0.16em] uppercase">
              Welcome to my portfolio
            </p>

            <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[0.95] text-white mb-3">
              Hi, I&apos;m Ajit
            </h1>

            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 min-h-10 sm:min-h-14">
              <div className="hero-type text-2xl sm:text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                <Typewriter
                  options={{
                    strings: ['a Coder', 'a Developer', 'an Innovator'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 34,
                    delay: 55,
                    cursor: '',
                  }}
                />
              </div>
            </div>

            <p className="hero-text text-sm sm:text-xl font-semibold text-blue-100/85 mb-5 sm:mb-6 px-1">
              Computer Engineering Student | Web Developer
            </p>

            <div className="hero-socials flex items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 hover:text-cyan-300 transition-all duration-200 hover:-translate-y-1 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <Link to="contact" smooth={true} duration={650} offset={-70}>
              <button className="hero-button px-7 sm:px-9 py-3 sm:py-3.5 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white rounded-full text-base sm:text-xl font-bold transition-transform duration-200 hover:scale-105 hover:-translate-y-1">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
