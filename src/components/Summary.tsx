"use client";

import { motion } from "framer-motion";

export default function Summary() {
    return (
        <section id="summary" className="relative min-h-screen py-32 px-6 flex items-center">
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
                    className="space-y-6 text-lg md:text-xl text-muted leading-relaxed"
                >
                    <p>
                        I'm a UX/UI Designer with over 5 years of experience crafting digital experiences
                        that users love. My approach combines user research, modern design principles, and
                        a deep understanding of front-end technologies.
                    </p>
                    <p>
                        I specialize in creating intuitive interfaces for web and mobile applications,
                        with a focus on accessibility, performance, and visual excellence. My work has
                        helped companies increase user engagement by up to 40% and reduce support tickets
                        by streamlining complex workflows.
                    </p>
                    <p>
                        When I'm not designing, you'll find me exploring the latest design tools,
                        contributing to open-source projects, or mentoring aspiring designers.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
