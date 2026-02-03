import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', shortLabel: 'Home', id: 'home' },
  { label: 'Projects', shortLabel: 'Projects', id: 'projects' },
  { label: 'Experience', shortLabel: 'Exp', id: 'experience' },
  { label: 'Technical Skills', shortLabel: 'Skills', id: 'technical-skills' },
  { label: 'Contact Me', shortLabel: 'Contact', id: 'contact-me' },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavClick = (id: string) => {
    if (id === 'home') {
      // Scroll to top for home section
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Offset for fixed nav bar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // If at the top, set home as active
      if (scrollPosition < 200) {
        setActiveSection('home')
        return
      }

      const sections = navItems
        .filter((item) => item.id !== 'home')
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const sectionTop = section.element.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id)
            return
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:gap-2 sm:px-4 md:gap-4 md:px-6 md:py-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`relative rounded-full px-2 py-1.5 text-xs font-medium transition-all duration-300 sm:px-3 sm:py-2 sm:text-sm md:px-5 md:text-base ${
              activeSection === item.id
                ? 'text-white'
                : 'text-white/60 hover:text-white/90'
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 hidden sm:inline">{item.label}</span>
            <span className="relative z-10 sm:hidden">{item.shortLabel}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
