"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Modern shopping experience with seamless checkout flow",
        image: "/projects/project1.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Finance Dashboard",
        description: "Real-time analytics and data visualization",
        image: "/projects/project2.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Social Media App",
        description: "Connecting people through shared interests",
        image: "/projects/project3.jpg",
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-7xl font-bold text-accent mb-16"
                >
                    Selected Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
                        >
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-accent/20 to-blue-500/20 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-muted">
                                    <span className="text-sm">Project Image</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
                                >
                                    <span>View Project</span>
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
