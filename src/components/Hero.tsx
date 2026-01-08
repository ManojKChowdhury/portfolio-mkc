"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Atmospheric glows */}
            <div className="glow-blue" style={{ top: "10%", left: "20%" }} />
            <div className="glow-orange" style={{ top: "40%", right: "15%" }} />

            {/* Open to work badge - top left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-8 left-8 z-20"
            >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Open to work
                </span>
            </motion.div>

            {/* Download CV button - top right */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-8 right-8 z-20"
            >
                <button className="group relative px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105">
                    <span className="flex items-center gap-2">
                        <Download size={18} />
                        Download CV
                    </span>
                </button>
            </motion.div>

            {/* Main content - left aligned */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-2xl">
                    {/* Role label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-4"
                    >
                        <span className="text-accent text-sm md:text-base font-semibold tracking-wider uppercase">
                            UX/UI DESIGNER
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none"
                    >
                        Tyrone Brooks
                    </motion.h1>

                    {/* Contact info - horizontal grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted"
                    >
                        <a
                            href="mailto:tyrone.brooks@gmail.com"
                            className="flex items-center gap-3 hover:text-accent transition-colors"
                        >
                            <Mail size={18} className="text-accent flex-shrink-0" />
                            <span className="text-sm md:text-base">tyrone.brooks@gmail.com</span>
                        </a>

                        <a
                            href="tel:+14045559876"
                            className="flex items-center gap-3 hover:text-accent transition-colors"
                        >
                            <Phone size={18} className="text-accent flex-shrink-0" />
                            <span className="text-sm md:text-base">+1 404-555-9876</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/tyrone-brooks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-accent transition-colors"
                        >
                            <svg className="w-[18px] h-[18px] text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="text-sm md:text-base">linkedin.com/in/tyrone-brooks</span>
                        </a>

                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-accent flex-shrink-0" />
                            <span className="text-sm md:text-base">Atlanta, US</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
