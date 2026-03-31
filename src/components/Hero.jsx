import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import { FiArrowDown } from 'react-icons/fi'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center justify-center relative overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />

      <div className="absolute top-16 -left-10 sm:left-8 w-52 h-52 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-drift-x" />
      <div className="absolute bottom-10 -right-12 sm:right-8 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-[22%] left-[12%] h-2.5 w-2.5 rounded-full bg-secondary/70 animate-float-slow" />
        <div className="absolute top-[68%] left-[20%] h-3 w-3 rounded-full bg-primary/60 animate-float-slow [animation-delay:1.4s]" />
        <div className="absolute top-[36%] right-[14%] h-2 w-2 rounded-full bg-primary/70 animate-float-slow [animation-delay:2.1s]" />
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4 text-xs sm:text-sm tracking-[0.18em] uppercase"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-[2.2rem] leading-tight sm:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-shine-sweep bg-[length:200%_100%]">
              Ajit
            </span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 px-1">
            Computer Engineering Student | Web Developer
          </p>

          <div className="text-lg sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-6 h-14">
            <Typewriter
              options={{
                strings: [
                  'Problem Solver',
                  'Tech Enthusiast',
                  'Mern Stack Developer',
                  'System Design Learner',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-9 sm:mb-10 text-base sm:text-lg leading-relaxed"
          >
            Building innovative solutions using modern web technologies.
            Currently in my 3rd year of Computer Engineering from Maharashtra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer text-gray-400 hover:text-primary transition-colors"
            >
              <FiArrowDown size={24} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
