import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiC, SiCplusplus, SiExpress, SiMongodb } from 'react-icons/si'
import { HiCode, HiLightBulb, HiCube } from 'react-icons/hi'

const skills = [
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Express.js', icon: SiExpress, color: '#111827' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
]

const interests = [
  { name: 'Web Development', icon: HiCode, description: 'Building modern, responsive web applications' },
  { name: 'Problem Solving', icon: HiLightBulb, description: 'Tackling complex challenges with elegant solutions' },
  { name: 'System Design', icon: HiCube, description: 'Designing scalable and efficient architectures' },
]

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Ajit" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I&apos;m Ajit, a passionate Computer Engineering student currently in my 3rd year,
                based in Maharashtra, India. I love building web applications that solve real-world
                problems and provide great user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With a strong foundation in modern web technologies, I focus on creating clean,
                efficient, and scalable solutions. I&apos;m always eager to learn new technologies
                and take on challenging projects.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6">Interests</h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors duration-300"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <interest.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">{interest.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {interest.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  <skill.icon
                    size={40}
                    className="mx-auto mb-3"
                    style={{ color: skill.color }}
                  />
                  <p className="text-sm font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8 border border-primary/20"
            >
              <h4 className="font-semibold mb-3 text-lg">Quick Facts</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  3rd Year Computer Engineering Student
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Based in Maharashtra, India
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Passionate about Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Open to Internship Opportunities
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
