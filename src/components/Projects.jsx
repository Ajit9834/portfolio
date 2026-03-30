import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Hackathon - Digital Services Platform',
    description:
      'We developed a platform designed to simplify access to multiple digital services in one place. The solution focuses on reducing the complexity users face when navigating different portals by providing a centralized and user-friendly interface for managing services efficiently. Built using React.js, Express.js, MongoDB, Node.js, Tailwind CSS, and the modern Next.js stack.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'Next.js'],
    github: 'https://github.com/Ajit9834/Ajit9834.git',
    featured: true,
  },
  {
    title: 'DineStay',
    description:
      'A full-stack web application for restaurant and hotel management. Users can browse restaurants, book tables, and manage hotel stays seamlessly with an intuitive interface.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Ajit9834/Ajit9834.git',
    featured: false,
  },
  {
    title: 'E-commerce Price Comparison Platform',
    description:
      'A web platform that compares product prices across multiple e-commerce websites in one place, helping users quickly find the best deals with an easy and user-friendly interface.',
    tech: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Ajit9834/Ajit9834.git',
    featured: false,
  },
  {
    title: 'AI Fashion Recommendation Platform',
    description:
      'A smart fashion recommendation platform that suggests personalized outfit ideas and style combinations based on user preferences, trends, and context using Generative AI.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Generative AI'],
    github: 'https://github.com/Ajit9834/Ajit9834.git',
    featured: false,
  },
]

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group w-full md:w-[calc(50%-0.75rem)] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
    >
      <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            {project.featured && (
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                Featured Project
              </span>
            )}
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-200"
          >
            <FiGithub size={16} />
            GitHub
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
