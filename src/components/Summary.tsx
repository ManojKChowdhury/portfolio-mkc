"use client";

import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section
      id="summary"
      className="relative min-h-screen py-32 px-6 flex items-center"
    >
      <div className="glow-blue" style={{ top: "20%", right: "10%" }} />

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-bold text-accent mb-12"
        >
          Summary
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-lg md:text-xl text-muted leading-relaxed"
        >
          <p>
            I am an experienced and detail-oriented UX/UI product designer
            dedicated to creating intuitive and impactful digital experiences.
            Over the years, I have honed my skills in user research,
            wireframing, prototyping, and visual design, always striving to
            balance user needs with business objectives. My passion lies in
            understanding how people interact with technology and crafting
            solutions that are both functional and aesthetically pleasing.
          </p>
          <p>
            I have collaborated with diverse teams, including developers,
            marketers, and product managers, to bring concepts to life,
            ensuring seamless integration of design and functionality. My
            design philosophy centers on empathy and innovation—placing the
            user at the heart of every decision while leveraging the latest
            tools and trends to stay ahead in the field.
          </p>

          {/* Large quote callout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative pl-6 py-6 border-l-4 border-accent mt-12"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Driven by a curiosity to learn and improve, I continuously
              explore new tools and methodologies to enhance my work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
