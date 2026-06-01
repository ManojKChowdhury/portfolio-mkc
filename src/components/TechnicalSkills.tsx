import { motion } from "framer-motion";

import angularIcon from '../assets/icons/angular.svg'
import vueIcon from '../assets/icons/vuejs.svg'
import reactIcon from '../assets/icons/react.svg'
import rxjsIcon from '../assets/icons/rxjs.svg'
import tailwindIcon from '../assets/icons/tailwindcss.svg'
import jsIcon from '../assets/icons/javascript.svg'
import tsIcon from '../assets/icons/typescript.svg'
import capacitorIcon from '../assets/icons/capacitor.svg'
import storybookIcon from '../assets/icons/storybook.svg'
import jestIcon from '../assets/icons/jest.svg'
import cypressIcon from '../assets/icons/cypress.svg'
import jasmineIcon from '../assets/icons/jasmine.svg'
import viteIcon from '../assets/icons/vite.svg'
import yarnIcon from '../assets/icons/yarn.svg'
import webpackIcon from '../assets/icons/webpack.svg'
import npmIcon from '../assets/icons/npm.svg'
import graphqlIcon from '../assets/icons/graphql.svg'
import nodeIcon from '../assets/icons/nodejs.svg'
import pythonIcon from '../assets/icons/python.svg'
import djangoIcon from '../assets/icons/django.svg'
import fastapiIcon from '../assets/icons/fastapi.svg'
import javaIcon from '../assets/icons/java.svg'
import springIcon from '../assets/icons/spring.svg'
import dockerIcon from '../assets/icons/docker.svg'
import gitIcon from '../assets/icons/git.svg'
import k8sIcon from '../assets/icons/kubernetes.svg'
import firebaseIcon from '../assets/icons/firebase.svg'
import postgresIcon from '../assets/icons/postgresql.svg'

type Skill = { name: string; icon: string }
type SkillCategory = { title: string; skills: Skill[] }

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', icon: angularIcon },
      { name: 'Vue.js', icon: vueIcon },
      { name: 'React', icon: reactIcon },
      { name: 'RxJS', icon: rxjsIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
      { name: 'Javascript', icon: jsIcon },
      { name: 'Typescript', icon: tsIcon },
      { name: 'CapacitorJS', icon: capacitorIcon },
      { name: 'Storybook', icon: storybookIcon },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Jest', icon: jestIcon },
      { name: 'Cypress', icon: cypressIcon },
      { name: 'Jasmine', icon: jasmineIcon },
    ],
  },
  {
    title: 'Build Tools & Package Managers',
    skills: [
      { name: 'Vite', icon: viteIcon },
      { name: 'Yarn', icon: yarnIcon },
      { name: 'Webpack', icon: webpackIcon },
      { name: 'npm', icon: npmIcon },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'GraphQL', icon: graphqlIcon },
      { name: 'Node.js', icon: nodeIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'Django', icon: djangoIcon },
      { name: 'FastAPI', icon: fastapiIcon },
      { name: 'Java', icon: javaIcon },
      { name: 'Spring', icon: springIcon },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: dockerIcon },
      { name: 'Git', icon: gitIcon },
      { name: 'Kubernetes', icon: k8sIcon },
      { name: 'Firebase', icon: firebaseIcon },
      { name: 'PostgreSQL', icon: postgresIcon },
    ],
  },
]

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
    <section id="technical-skills" className="relative z-20 min-h-screen bg-[#121212] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold text-white md:text-7xl"
        >
          Technologies I've Worked With
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto flex max-w-6xl flex-col gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-md md:p-12"
            >
              <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl filter" />
              <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl filter" />

              <h3 className="relative mb-8 text-xl font-semibold text-white/80 md:text-2xl">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                className="relative flex flex-wrap justify-center gap-8 md:gap-12"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
