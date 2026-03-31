import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload } from 'react-icons/fi'
import { HiAcademicCap, HiCode, HiBriefcase } from 'react-icons/hi'

const education = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'University in Maharashtra',
    year: '2026 – Present (3rd Year)',
    description: 'Currently pursuing Computer Engineering with focus on web technologies and software development.',
  },
  {
    degree: 'HSC (12th)',
    institution: 'Maharashtra State Board',
    year: '2023',
    description: 'Completed higher secondary education with focus on Science stream.',
  },
  {
    degree: 'SSC (10th)',
    institution: 'Maharashtra State Board',
    year: '2021',
    description: 'Completed secondary education with a strong foundation in core subjects.',
  },
]

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Others',
    skills: [
      'Git & GitHub',
      'VS Code',
      'Responsive Design',
      'REST APIs',
      'Problem Solving',
      'Canva',
      'Docker',
      'Vercel',
      'Render',
      'MongoDB Atlas',
    ],
  },
]

function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="resume" className="py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-8">
            A summary of my education, skills, and experience
          </p>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
          >
            <FiDownload size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HiAcademicCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 sm:before:w-3 sm:before:h-3 before:bg-primary before:rounded-full before:content-[''] after:absolute after:left-[4px] sm:after:left-[5px] after:top-5 after:w-0.5 after:h-full after:bg-primary/20 after:content-[''] last:after:hidden"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 dark:border-gray-800">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                    <h4 className="font-semibold mt-3 mb-1">{edu.degree}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HiCode className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Skills</h3>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 dark:border-gray-800"
                >
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <HiBriefcase className="text-primary" size={18} />
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-4 sm:p-6 border border-primary/20"
            >
              <h4 className="font-semibold mb-2">Currently Learning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React Native, AWS, and Java
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume
