import { motion } from 'framer-motion'

export default function DownloadCV() {
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
      onClick={handleDownload}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10 md:bottom-8 md:right-8"
      aria-label="Download CV"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span className="text-sm font-semibold text-white md:text-base">
        Download CV
      </span>
    </motion.button>
  )
}
