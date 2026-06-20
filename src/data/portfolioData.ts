import { 
  SkillCategory, 
  Project, 
  Experience, 
  NavItem, 
  ContactLink 
} from '../types';

// Skill Icons
import angularIcon from '../assets/icons/angular.svg';
import vueIcon from '../assets/icons/vuejs.svg';
import reactIcon from '../assets/icons/react.svg';
import rxjsIcon from '../assets/icons/rxjs.svg';
import tailwindIcon from '../assets/icons/tailwindcss.svg';
import jsIcon from '../assets/icons/javascript.svg';
import tsIcon from '../assets/icons/typescript.svg';
import capacitorIcon from '../assets/icons/capacitor.svg';
import storybookIcon from '../assets/icons/storybook.svg';
import jestIcon from '../assets/icons/jest.svg';
import cypressIcon from '../assets/icons/cypress.svg';
import jasmineIcon from '../assets/icons/jasmine.svg';
import viteIcon from '../assets/icons/vite.svg';
import yarnIcon from '../assets/icons/yarn.svg';
import webpackIcon from '../assets/icons/webpack.svg';
import npmIcon from '../assets/icons/npm.svg';
import graphqlIcon from '../assets/icons/graphql.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import pythonIcon from '../assets/icons/python.svg';
import djangoIcon from '../assets/icons/django.svg';
import fastapiIcon from '../assets/icons/fastapi.svg';
import javaIcon from '../assets/icons/java.svg';
import springIcon from '../assets/icons/spring.svg';
import dockerIcon from '../assets/icons/docker.svg';
import gitIcon from '../assets/icons/git.svg';
import k8sIcon from '../assets/icons/kubernetes.svg';
import firebaseIcon from '../assets/icons/firebase.svg';
import postgresIcon from '../assets/icons/postgresql.svg';

// Contact Icons
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import emailIcon from '../assets/icons/email.svg';

export const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Technical Skills', id: 'technical-skills' },
  { label: 'Contact Me', id: 'contact-me' },
];

export const skillCategories: SkillCategory[] = [
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
];

export const projects: Project[] = [
  {
    title: 'X-Chain',
    description: 'End-to-end supply chain management for Advanced therapy medicinal products (ATMPs) in one single solution.',
    tags: ['Angular', 'RxJS', 'Nx', 'PrimeNG'],
  },
  {
    title: 'Avatar',
    description: 'SCM platform that combines Advanced Planning & Scheduling with an AI-powered cognitive engine.',
    tags: ['Angular', 'RxJS', 'Nx', 'PrimeNG'],
  },
  {
    title: 'Magazino Robot Fleet Management',
    description: 'Interactive platform combining robot live status and fleet management.',
    tags: ['Vue', 'Python', 'Django'],
  },
  {
    title: 'iPortal',
    description: 'Single point of access to Barclays Corporate Banking products and services, including cash management, loans, foreign exchange and open banking.',
    tags: ['Angular', 'Bootstrap', 'Java', 'Spring'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Software Development Team Lead',
    company: 'Accenture',
    location: 'Bengaluru, India',
    period: 'July 2025 - Present',
    achievements: [
      'Co-developed Python-based APIs powering AI Agent capabilities, enabling scalable integration with enterprise systems.',
      'Collaborated with other backend and product teams to refine API contracts and deliver high-impact features end-to-end.',
      'Contributed to the integration and onboarding of enterprise services, including REST APIs and Model Context Protocol (MCP) servers, accelerating platform extensibility and interoperability.',
      'Provided technical mentorship to junior developers through pair programming, code reviews, and debugging sessions, improving code quality and team productivity.',
      'Contributed to solution design discussions, driving best practices in API development, maintainability, and scalability.',
    ],
  },
  {
    title: 'Developer',
    company: 'Camelot ITLab (Acquired by Accenture)',
    location: 'Mannheim, Germany / Bengaluru, India',
    period: 'Sep 2021 - June 2025',
    achievements: [
      'Migrated legacy SAP UI5 application, improving development speed and maintainability',
      'Built and maintained multiple Angular components, reducing UI implementation time',
      'Improved load times by 10% via lazy loading, dynamic imports, and code splitting',
      'Built Rx-Angular-based state management, enhancing application performance and structure',
      'Achieved 90%+ unit test coverage with Jest and Testing Library, decreasing regression bugs by 35%',
      'Integrated REST and GraphQL APIs to deliver seamless full-stack features',
      'Mentored juniors by briefing them about their tasks and helping them code through pair-programming sessions',
    ],
  },
  {
    title: 'Frontend Development Intern',
    company: 'Dynamaze',
    location: 'Cologne, Germany',
    period: 'Nov 2020 - Jan 2021',
    achievements: [
      'Developed modular Vue.js components for a Nuxt application, optimizing SCSS and asynchronous rendering for performance and UX',
      'Built Cypress-based E2E test suites',
      'Deployed cross-platform mobile apps using Capacitor JS, enhancing accessibility',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Magazino',
    location: 'Munich, Germany',
    period: 'Mar 2020 - Sep 2020',
    achievements: [
      'Developed a Vue-based dashboard',
      'Integrated WebSockets for real-time fleet monitoring',
      'Refactored UI logic, reducing DOM rendering time by 40%',
    ],
  },
  {
    title: 'Senior Developer',
    company: 'Barclays Global Service Center',
    location: 'Pune, India',
    period: 'Mar 2015 - Feb 2019',
    achievements: [
      'Developed scalable UI modules for Barclays iPortal',
      'Created a reusable Angular component library',
      'Enhanced platform accessibility and mobile responsiveness in accordance with WCAG standards',
      'Collaborated in Agile sprints to integrate REST APIs with Spring and migrated code to Docker-based environments',
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:manojc009@gmail.com',
    icon: emailIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manoj-kumar-chowdhury',
    icon: linkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ManojKChowdhury',
    icon: githubIcon,
  },
];
