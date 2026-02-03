import { motion } from 'framer-motion'
import { useState } from 'react'

export default function DownloadCV() {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Update this path to your actual CV file
    link.download = 'Manoj_Kumar_Chowdhury_CV.pdf' // Update with your preferred filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleDownload}
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-1.5 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10 sm:bottom-6 sm:right-6 sm:gap-2 sm:px-5 sm:py-2.5 md:bottom-8 md:right-8 md:px-6 md:py-3"
      aria-label="Download CV"
    >
      <div className="relative h-4 w-4 overflow-hidden sm:h-5 sm:w-5">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-4 w-4 text-white sm:h-5 sm:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={isHovered ? { y: ['-100%', '100%'] } : { y: 0 }}
          transition={
            isHovered
              ? { duration: 1.5, repeat: Infinity, ease: 'linear' }
              : { duration: 0 }
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </div>
      <span className="text-xs font-semibold text-white sm:text-sm md:text-base">
        Download CV
      </span>
    </motion.button>
  )
}
