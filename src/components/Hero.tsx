"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Atmospheric glows */}
            <div className="glow-blue" style={{ top: "10%", left: "20%" }} />
            <div className="glow-orange" style={{ top: "40%", right: "15%" }} />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
                        ● Open to work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
                >
                    Tyrone Brooks
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-muted mb-8"
                >
                    UX/UI Designer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-12 text-muted"
                >
                    <a href="mailto:tyrone@example.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <Mail size={18} />
                        <span>tyrone@example.com</span>
                    </a>
                    <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <Phone size={18} />
                        <span>+1 (234) 567-890</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button className="group relative px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105">
                        <span className="flex items-center gap-2">
                            <Download size={20} />
                            Download CV
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
