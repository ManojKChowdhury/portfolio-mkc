"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
    {
        name: "Email",
        icon: Mail,
        href: "mailto:tyrone@example.com",
        label: "tyrone@example.com",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com",
        label: "linkedin.com/in/tyrone-brooks",
    },
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com",
        label: "github.com/tyrone-brooks",
    },
    {
        name: "Twitter",
        icon: Twitter,
        href: "https://twitter.com",
        label: "@tyrone_brooks",
    },
];

export default function Contact() {
    return (
        <section id="links" className="relative min-h-screen py-32 px-6 flex items-center">
            <div className="glow-blue" style={{ top: "30%", left: "50%" }} />

            <div className="max-w-4xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-7xl font-bold text-accent mb-16"
                >
                    Links
                </motion.h2>

                <div className="space-y-6">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-accent/50 hover:bg-white/10 transition-all"
                            >
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                    <Icon className="w-6 h-6 text-accent" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">{link.name}</h3>
                                    <p className="text-muted group-hover:text-foreground transition-colors">
                                        {link.label}
                                    </p>
                                </div>
                                <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 text-center text-muted text-sm"
                >
                    <p>© 2026 Tyrone Brooks. All rights reserved.</p>
                </motion.footer>
            </div>
        </section>
    );
}
