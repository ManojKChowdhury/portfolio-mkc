import { motion } from 'framer-motion'
import { contactLinks } from '../data/portfolioData'
import { containerVariants, itemVariants } from '../constants/animations'

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="relative z-20 min-h-screen bg-[#121212] px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold text-white md:text-7xl"
        >
          Contact Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={`Visit my ${link.label}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 md:p-10"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

              <div className="relative z-10 text-5xl md:text-6xl">
                <img
                  src={link.icon}
                  alt={link.label}
                  className="h-16 w-16 object-contain md:h-20 md:w-20"
                />
              </div>
              <span className="relative z-10 text-xl font-semibold text-white md:text-2xl">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
