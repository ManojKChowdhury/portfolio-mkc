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
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10 md:bottom-8 md:right-8"
      aria-label="Download CV"
    >
      <div className="relative h-5 w-5 overflow-hidden">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-5 w-5 text-white"
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
      <span className="text-sm font-semibold text-white md:text-base">
        Download CV
      </span>
    </motion.button>
  )
}
