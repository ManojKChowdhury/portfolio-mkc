import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    title: 'Software Development Team Lead',
    company: 'Accenture',
    location: 'Bengaluru, India',
    period: 'July 2025 - Present',
    achievements: [],
  },
  {
    title: 'Developer',
    company: 'Camelot ITLab (Acquired by Accenture)',
    location: 'Mannheim, Germany / Bengaluru, India',
    period: 'Sep 2021 - June 2025',
    achievements: [
      'Migrated legacy SAP UI5 application, improving development speed and maintainability',
      'Built and maintained multiple Angular components, reducing UI implementation time',
      'Improved load times by 10% via lazy loading, dynamic imports, and code splitting',
      'Built Rx-Angular-based state management, enhancing application performance and structure',
      'Achieved 90%+ unit test coverage with Jest and Testing Library, decreasing regression bugs by 35%',
      'Integrated REST and GraphQL APIs to deliver seamless full-stack features',
      'Mentored juniors by briefing them about their tasks and helping them code through pair-programming sessions',
    ],
  },
  {
    title: 'Frontend Development Intern',
    company: 'Dynamaze',
    location: 'Cologne, Germany',
    period: 'Nov 2020 - Jan 2021',
    achievements: [
      'Developed modular Vue.js components for a Nuxt application, optimizing SCSS and asynchronous rendering for performance and UX',
      'Built Cypress-based E2E test suites',
      'Deployed cross-platform mobile apps using Capacitor JS, enhancing accessibility',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Magazino',
    location: 'Munich, Germany',
    period: 'Mar 2020 - Sep 2020',
    achievements: [
      'Developed a Vue-based dashboard',
      'Integrated WebSockets for real-time fleet monitoring',
      'Refactored UI logic, reducing DOM rendering time by 40%',
    ],
  },
  {
    title: 'Senior Developer',
    company: 'Barclays Global Service Center',
    location: 'Pune, India',
    period: 'Mar 2015 - Feb 2019',
    achievements: [
      'Developed scalable UI modules for Barclays iPortal',
      'Created a reusable Angular component library',
      'Enhanced platform accessibility and mobile responsiveness in accordance with WCAG standards',
      'Collaborated in Agile sprints to integrate REST APIs with Spring and migrated code to Docker-based environments',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

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
    <section id="experience" className="relative z-20 min-h-screen bg-[#121212] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-bold text-white sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl lg:text-7xl"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          {experiences.map((experience, index) => {
            const isExpanded = expandedCards.has(index)
            const hasAchievements = experience.achievements.length > 0

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 sm:rounded-2xl"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="mb-3 flex flex-col gap-2 sm:mb-4 md:flex-row md:items-baseline md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl">
                        {experience.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-white/80 sm:mt-1 sm:text-base md:text-lg">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-3 sm:gap-4 md:flex-col md:items-end">
                      <div className="flex flex-col gap-0.5 sm:gap-1 md:text-right">
                        <span className="text-xs font-medium text-white/60 sm:text-sm md:text-base">
                          {experience.period}
                        </span>
                        <span className="text-xs text-white/50 sm:text-sm md:text-base">
                          {experience.location}
                        </span>
                      </div>
                      {hasAchievements && (
                        <button
                          onClick={() => toggleCard(index)}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:h-8 sm:w-8 md:ml-0"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white sm:h-5 sm:w-5"
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
                        className="mt-4 space-y-2 overflow-hidden sm:mt-5 sm:space-y-3 md:mt-6"
                      >
                        {experience.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-2 text-sm leading-relaxed text-white/70 sm:gap-3 sm:text-base md:text-lg"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40 sm:mt-2 sm:h-1.5 sm:w-1.5" />
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
