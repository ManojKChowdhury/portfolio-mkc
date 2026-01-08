"use client";

import { motion } from "framer-motion";
import { Code2, Figma, Palette, Smartphone, Database, GitBranch } from "lucide-react";

const skills = [
    { name: "Figma", icon: Figma },
    { name: "React", icon: Code2 },
    { name: "Design Systems", icon: Palette },
    { name: "Mobile Design", icon: Smartphone },
    { name: "Prototyping", icon: Database },
    { name: "Version Control", icon: GitBranch },
];

const languages = ["English (Native)", "Spanish (Fluent)", "French (Basic)"];
const education = [
    "B.A. in Graphic Design - University of Arts, 2018",
    "UX Design Certificate - Interaction Design Foundation, 2019",
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
                    Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all hover:scale-105"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <Icon className="w-8 h-8 text-accent" />
                                        <span className="text-sm font-medium text-center">{skill.name}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Languages & Education */}
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Languages</h3>
                        <ul className="space-y-3">
                            {languages.map((lang, index) => (
                                <li key={index} className="text-muted flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    {lang}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Education</h3>
                        <ul className="space-y-3">
                            {education.map((edu, index) => (
                                <li key={index} className="text-muted flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                                    <span>{edu}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
