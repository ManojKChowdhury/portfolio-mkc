"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Pixel Pathway",
    description: "A dynamic UX/UI design journey",
    image: "/project-pixel-pathway.png",
  },
  {
    id: 2,
    title: "Flowstate",
    description: "Seamless user experience design",
    image: "/project-flowstate.png",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-32 px-6">
      <div className="glow-orange" style={{ bottom: "10%", left: "5%" }} />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold text-accent mb-16"
        >
          Work Experience
        </motion.h2>

        {/* Single job entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                UX/UI DESIGNER
              </h3>
              <p className="text-accent text-lg">Creative Solutions Agency</p>
            </div>
            <span className="text-muted text-lg">2021 – Present</span>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-3xl">
            At Creative Solutions Agency, I lead design efforts on a range of
            high-profile projects, focusing on enhancing user experience across
            multiple platforms, from web to mobile applications. I collaborate
            closely with developers and stakeholders to ensure that design
            solutions meet both user needs and business objectives.
          </p>
        </motion.div>

        {/* Selected Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-accent text-xl md:text-2xl font-semibold mb-8">
            Selected Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-black/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  {/* Diagonal arrow icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
