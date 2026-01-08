"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, FileText, Briefcase, Wrench, Link2 } from "lucide-react";

const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "summary", label: "Summary", icon: FileText },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Wrench },
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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
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
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-3 py-3 shadow-2xl">
                <ul className="flex items-center gap-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full transition-all ${isActive
                                            ? "bg-white text-black"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                >
                                    <Icon size={16} />
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.nav>
    );
}
