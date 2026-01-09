"use client";

import { motion } from "framer-motion";

const skillsList = [
  "User Research",
  "Interaction Design",
  "Usability Testing",
  "Design Systems",
  "Wireframing/Prototyping",
  "Responsive Web Design",
  "Visual Design",
];

const tools = [
  { name: "Framer", emoji: "🎨" },
  { name: "Figma", emoji: "🎨" },
  { name: "Photoshop", emoji: "🖼️" },
  { name: "Illustrator", emoji: "✏️" },
  { name: "Sketch", emoji: "💎" },
  { name: "Midjourney", emoji: "🚀" },
  { name: "Spline", emoji: "🌀" },
  { name: "Blender", emoji: "🎬" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold text-accent mb-16"
        >
          Skills & Tools
        </motion.h2>

        {/* Skills List - 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {skillsList.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 text-white text-lg"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tool Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex flex-col items-center gap-3 group"
              >
                {/* Tool icon placeholder - using emoji for now */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-3xl md:text-4xl group-hover:border-accent/50 group-hover:scale-110 transition-all">
                  {tool.emoji}
                </div>
                <span className="text-xs md:text-sm text-muted text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
