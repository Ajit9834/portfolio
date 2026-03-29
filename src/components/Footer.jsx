import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            © {currentYear} Ajit. Made with{' '}
            <FiHeart className="text-red-500 inline" size={14} /> using React &
            Tailwind CSS
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ajit9834/Ajit9834.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-200"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajit-zori"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-200"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
