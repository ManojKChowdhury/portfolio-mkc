"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        role: "Senior UX/UI Designer",
        company: "TechCorp Inc.",
        period: "2022 - Present",
        description: "Leading design initiatives for enterprise SaaS products, managing a team of 3 designers.",
    },
    {
        id: 2,
        role: "UX/UI Designer",
        company: "StartupXYZ",
        period: "2020 - 2022",
        description: "Designed mobile-first experiences for a fintech startup, contributing to 200% user growth.",
    },
    {
        id: 3,
        role: "Junior Designer",
        company: "Creative Agency",
        period: "2018 - 2020",
        description: "Worked on diverse client projects ranging from e-commerce to healthcare applications.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative min-h-screen py-32 px-6">
            <div className="glow-orange" style={{ bottom: "10%", left: "5%" }} />

            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-7xl font-bold text-accent mb-16"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-white/10 hover:border-accent/50 transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <div className="flex items-center gap-4 text-muted">
                                    <span className="font-medium">{exp.company}</span>
                                    <span>•</span>
                                    <span>{exp.period}</span>
                                </div>
                                <p className="text-muted leading-relaxed">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
