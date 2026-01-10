import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web experience with 3D interactions and real-time data visualization.',
    tags: ['WebGL', 'Three.js', 'React'],
  },
  {
    title: 'Project Beta',
    description: 'Award-winning e-commerce platform featuring AI-powered personalization.',
    tags: ['Next.js', 'AI/ML', 'Stripe'],
  },
  {
    title: 'Project Gamma',
    description: 'Interactive storytelling platform combining video, animation, and scroll-driven narratives.',
    tags: ['Framer Motion', 'Canvas', 'GSAP'],
  },
  {
    title: 'Project Delta',
    description: 'High-performance mobile app with seamless cross-platform capabilities.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
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
    <section className="relative z-20 min-h-screen bg-[#121212] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-5xl font-bold text-white md:text-7xl"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-white/70">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm"
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
