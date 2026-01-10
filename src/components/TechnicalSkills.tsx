import { motion } from "framer-motion";

const skills = [
  // Frontend
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "RxJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "CapacitorJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg",
  },
  // Testing
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    name: "Cypress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-plain.svg",
  },
  {
    name: "Jasmine",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg",
  },
  // Build Tools & Package Managers
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg",
  },
  {
    name: "Yarn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg",
  },
  {
    name: "Webpack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
  },
  {
    name: "npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
  // Backend & APIs
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  // DevOps & Tools
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TechnicalSkills() {
  return (
    <section className="relative z-20 min-h-screen bg-[#121212] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold text-white md:text-7xl"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-md md:p-12"
        >
          {/* Subtle background glow */}
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl filter" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl filter" />

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className="group relative flex flex-col items-center gap-3"
              >
                <div
                  className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-white/5 md:h-24 md:w-24 md:p-5"
                  title={skill.name}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  />
                </div>
                <span className="text-sm font-medium text-white/50 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
