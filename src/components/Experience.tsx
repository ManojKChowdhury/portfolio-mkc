import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { experiences } from '../data/portfolioData'
import { containerVariants, itemVariants } from '../constants/animations'

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section id="experience" className="relative z-20 min-h-screen bg-[#121212] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-5xl font-bold text-white md:text-7xl"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => {
            const isExpanded = expandedCards.has(index)
            const hasAchievements = experience.achievements.length > 0

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

                <div className="relative z-10 p-8 md:p-10">
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">
                        {experience.title}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-white/80">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex items-start justify-between gap-4 md:flex-col md:items-end">
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-sm font-medium text-white/60 md:text-base">
                          {experience.period}
                        </span>
                        <span className="text-sm text-white/50 md:text-base">
                          {experience.location}
                        </span>
                      </div>
                      {hasAchievements && (
                        <button
                          onClick={() => toggleCard(index)}
                          className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white/10 md:ml-0"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </button>
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {hasAchievements && isExpanded && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="mt-6 space-y-3 overflow-hidden"
                      >
                        {experience.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 text-base leading-relaxed text-white/70 md:text-lg"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
