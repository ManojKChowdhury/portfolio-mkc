import { motion } from 'framer-motion'

const projects = [
  {
    title: 'X-Chain',
    description: 'End-to-end supply chain management for Advanced therapy medicinal products (ATMPs) in one single solution.',
    tags: ['Angular', 'RxJS', 'Nx', 'PrimeNG'],
  },
  {
    title: 'Avatar',
    description: 'SCM platform that combines Advanced Planning & Scheduling with an AI-powered cognitive engine.',
    tags: ['Angular', 'RxJS', 'Nx', 'PrimeNG'],
  },
  {
    title: 'Magazino Robot Fleet Management',
    description: 'Interactive platform combining robot live status and fleet management.',
    tags: ['Vue', 'Python', 'Django'],
  },
  {
    title: 'iPortal',
    description: 'Single point of access to Barclays Corporate Banking products and services, including cash management, loans, foreign exchange and open banking.',
    tags: ['Angular', 'Bootstrap', 'Java', 'Spring'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 min-h-screen bg-[#121212] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-3xl font-bold text-white sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl lg:text-7xl"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 sm:p-6 sm:rounded-2xl md:p-8"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-semibold text-white sm:mb-3 sm:text-2xl md:mb-4 md:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/70 sm:mb-5 sm:text-base md:mb-6 md:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-sm md:px-4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
