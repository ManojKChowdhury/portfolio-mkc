import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { navItems } from '../data/portfolioData'

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
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 md:gap-4">
        <motion.img
          src="/logo.svg"
          alt="MKC Logo"
          className="h-8 w-8 cursor-pointer"
          whileHover={{ rotate: 15 }}
          onClick={() => handleNavClick('home')}
        />
        <div className="h-6 w-px bg-white/10" />
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            aria-label={`Go to ${item.label} section`}
            aria-current={activeSection === item.id ? 'page' : undefined}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 md:px-5 md:text-base ${
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
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
