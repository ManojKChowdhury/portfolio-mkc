import { motion } from 'framer-motion'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import emailIcon from '../assets/icons/email.svg'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:manojc009@gmail.com',
    icon: emailIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manoj-kumar-chowdhury',
    icon: linkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ManojKChowdhury',
    icon: githubIcon,
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

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="relative z-20 min-h-screen bg-[#121212] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl lg:text-7xl"
        >
          Contact Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 sm:gap-3 sm:rounded-2xl sm:p-6 md:gap-4 md:p-8 lg:p-10"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 sm:rounded-2xl" />

              <div className="relative z-10">
                <img
                  src={link.icon}
                  alt={link.label}
                  className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                />
              </div>
              <span className="relative z-10 text-base font-semibold text-white sm:text-lg md:text-xl lg:text-2xl">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
