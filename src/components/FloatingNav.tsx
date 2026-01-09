"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText, Link2, Search, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Search },
  { id: "summary", label: "Summary", icon: Briefcase },
  { id: "experience", label: "Experience", icon: FileText },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "links", label: "Links", icon: Link2 },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl px-1.5 py-1.5 shadow-2xl">
        <ul className="flex items-center gap-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className="relative flex flex-col items-center justify-center gap-1 px-2.5 py-2 min-w-[56px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    initial={false}
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(255, 255, 255, 1)"
                        : "transparent",
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  />
                  <motion.div
                    className="relative flex flex-col items-center justify-center gap-1 z-10"
                    animate={{
                      color: isActive ? "#000000" : "#666666",
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Icon size={18} strokeWidth={2.5} />
                    <span className="text-[10px] font-medium leading-tight whitespace-nowrap">
                      {item.label}
                    </span>
                  </motion.div>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
