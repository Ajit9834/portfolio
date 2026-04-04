import { useState } from 'react'
import { motion } from 'framer-motion'
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
      className="h-[100dvh] min-h-[100dvh] flex items-center justify-center relative overflow-hidden px-3 pt-16 pb-5 sm:px-6 sm:pt-22 sm:pb-8"
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

      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 85, scale: 0.92, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 110,
            damping: 16,
          }}
          className="mx-auto max-w-xl w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -18, 0, 8, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              opacity: { delay: 0.15, duration: 0.5 },
              scale: { delay: 0.15, duration: 0.6, type: 'spring', stiffness: 120 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.06, transition: { type: 'spring', stiffness: 260, damping: 16 } }}
            className="relative mx-auto h-32 w-32 sm:h-44 sm:w-44 md:h-48 md:w-48 mb-5 sm:mb-7"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 blur-md opacity-70" />
            <div className="relative h-full w-full rounded-full border-4 border-white/45 overflow-hidden bg-slate-900/70">
              <img
                src="/assets/profile.jpg"
                alt="Ajit profile"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.07] backdrop-blur-xl shadow-[0_18px_55px_rgba(17,26,68,0.55)] px-4 py-6 sm:px-8 sm:py-9">
            <p className="text-primary font-medium mb-2 text-[11px] sm:text-sm tracking-[0.16em] uppercase">
              Welcome to my portfolio
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-white mb-3">
              Hi, I&apos;m Ajit
            </h1>

            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 min-h-10 sm:min-h-14">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
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
              <span className="typing-cursor" aria-hidden="true" />
            </div>

            <p className="text-sm sm:text-xl font-semibold text-blue-100/85 mb-5 sm:mb-6 px-1">
              Computer Engineering Student | Web Developer
            </p>

            <div className="flex items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="text-blue-300 hover:text-cyan-300 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <Link to="contact" smooth={true} duration={650} offset={-70}>
              <motion.button
                whileHover={{
                  scale: 1.12,
                  y: -6,
                  boxShadow: '0 20px 45px rgba(164, 99, 255, 0.58)',
                }}
                whileTap={{ scale: 0.94, y: 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 15 }}
                className="px-7 sm:px-9 py-3 sm:py-3.5 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white rounded-full text-base sm:text-xl font-bold"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
