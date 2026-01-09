"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Vibrant blue-purple-orange gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,20,60,1) 0%, rgba(50,30,80,0.95) 25%, rgba(80,40,60,0.9) 50%, rgba(120,60,40,0.85) 75%, rgba(180,90,30,0.8) 100%)",
        }}
      />

      {/* Blue-purple glow on left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center left, rgba(100,60,200,0.3) 0%, rgba(80,50,150,0.2) 40%, transparent 70%)",
        }}
      />

      {/* Orange glow on right around silhouette */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center right, rgba(255,140,0,0.5) 0%, rgba(255,120,0,0.3) 30%, rgba(255,100,0,0.15) 50%, transparent 70%)",
        }}
      />

      {/* Silhouette image on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pointer-events-none z-0 pr-4 md:pr-8 lg:pr-16">
        <div className="relative h-full flex items-center justify-end">
          {/* Orange glow behind silhouette */}
          <div
            className="absolute right-0 w-[400px] h-[500px] md:w-[500px] md:h-[600px] rounded-full blur-[150px]"
            style={{
              background:
                "radial-gradient(circle, rgba(255,140,0,0.4) 0%, rgba(255,120,0,0.25) 30%, transparent 70%)",
            }}
          />
          {/* Actual silhouette image */}
          <img
            src="/silhouette.png"
            alt="Profile silhouette"
            className="relative w-auto h-[70vh] md:h-[80vh] max-h-[650px] object-contain opacity-90"
            style={{ filter: "drop-shadow(0 0 40px rgba(255,140,0,0.4))" }}
          />
        </div>
      </div>

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
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20"
      >
        <button className="group relative px-5 py-2.5 md:px-6 md:py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <Download size={16} className="md:w-[18px] md:h-[18px]" />
            Download CV
          </span>
        </button>
      </motion.div>



      {/* Main content - left aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none text-white"
          >
            Tyrone Brooks
          </motion.h1>

          {/* Contact info - 2-column grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white max-w-2xl"
          >
            {/* Left column */}
            <div className="space-y-4">
              <a
                href="mailto:tyrone.brooks@gmail.com"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">tyrone.brooks@gmail.com</span>
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
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <a
                href="tel:+14045559876"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">+1 404-555-9876</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">Atlanta, US</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
