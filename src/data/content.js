import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaCogs,
  FaBug,
  FaLayerGroup,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaServer,
  FaGlobe,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiRender,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

// Graphoria Assets
import graphoria1 from '../assets/Graphoria/graphoria-1.png';
import graphoria2 from '../assets/Graphoria/graphoria-2.png';
import graphoria3 from '../assets/Graphoria/graphoria-3.png';
import graphoria4 from '../assets/Graphoria/graphoria-4.png';
import graphoria5 from '../assets/Graphoria/graphoria-5.png';

// Tryone's Assets
import tryone1 from '../assets/Tryone\'s/tryone-1.png';
import tryone2 from '../assets/Tryone\'s/tryone-2.png';
import tryone3 from '../assets/Tryone\'s/tryone-3.png';
import tryone4 from '../assets/Tryone\'s/tryone-4.png';
import tryone5 from '../assets/Tryone\'s/tryone-5.png';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61dafb' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'JavaScript (ES6+)', icon: FaJs, color: '#f7df1e' },
      { name: 'HTML5 & CSS3', icon: FaHtml5, color: '#e34f26' },
      { name: 'Responsive Design', icon: FaGlobe, color: '#22c55e' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
      { name: 'REST APIs', icon: FaCode, color: '#22c55e' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git & GitHub', icon: FaGithub, color: '#f05032' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'VS Code', icon: VscCode, color: '#007acc' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Render', icon: SiRender, color: '#46e3b7' },
    ],
  },
];

export const services = [
  {
    title: 'Website Development',
    description: 'I build modern, responsive websites for businesses and startups.',
    icon: FaGlobe,
  },
  {
    title: 'Full Stack Web Applications',
    description: 'Complete web apps with frontend + backend integration.',
    icon: FaLayerGroup,
  },
  {
    title: 'API Development',
    description: 'Secure and scalable REST APIs using Spring Boot.',
    icon: FaCode,
  },
  {
    title: 'Deployment & Hosting',
    description: 'I deploy applications using Vercel, Render, and cloud platforms.',
    icon: FaServer,
  },
];

export const projects = [
  {
    id: 1,
    title: "Tryone's E-Commerce Website",
    shortDesc:
      "Developed a responsive e-commerce website for Tryone's with real-time features like cart, wishlist, and checkout.",
    description:
      "Developed a responsive e-commerce website for Tryone's featuring real-time features like cart, wishlist, and seamless checkout. Built with React and Tailwind CSS, integrated with backend APIs for live product data, and deployed for the client with clean architecture and Redux Toolkit for state management.",
    features: [
      'Product listing with filtering & search',
      'Shopping cart & wishlist management',
      'Checkout flow with order summary',
      'Redux Toolkit state management',
      'Backend API integration',
      'Responsive design for all devices',
    ],
    techStack: ['React', 'Tailwind CSS', 'Redux Toolkit', 'REST APIs', 'JavaScript'],
    image: tryone1,
    images: [tryone1, tryone2, tryone3, tryone4, tryone5],
    liveLink: 'https://dry-fruits-frontend-topaz.vercel.app',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Student Management System',
    shortDesc:
      'A full-stack student management app with secure authentication and admin dashboard.',
    description:
      'A full-stack student management system featuring JWT authentication, Spring Security, role-based access for Admin and Student users, and a clean REST API backend. Includes pagination, validation, and robust error handling for production-grade reliability.',
    features: [
      'JWT Authentication & Spring Security',
      'Role-based access (Admin/Student)',
      'CRUD operations for students & courses',
      'Pagination & sorting',
      'Input validation & error handling',
      'RESTful API design',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Maven'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=800&fit=crop'
    ],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Graphoria Startup Website',
    shortDesc:
      'A complete full-stack startup website with contact forms, PDF generation, and database integration.',
    description:
      'A complete full-stack startup website for Graphoria with React frontend, Spring Boot backend, and PostgreSQL database. Features include contact form with email notifications, PDF report generation, and clean architecture with DTO, Service, and Repository layers.',
    features: [
      'React + Spring Boot full stack',
      'PostgreSQL database integration',
      'Contact form with email notifications',
      'PDF generation for reports',
      'Clean architecture (DTO, Service, Repository)',
      'Responsive modern UI',
    ],
    techStack: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'Java'],
    image: graphoria1,
    images: [graphoria1, graphoria2, graphoria3, graphoria4, graphoria5],
    liveLink: 'https://graphoria.onrender.com',
    githubLink: '#',
  },
];

export const stats = [
  { value: '1+', label: 'Freelance Project Delivered' },
  { value: '3+', label: 'Real-world Projects Built' },
  { value: 'Full Stack', label: 'Frontend + Backend' },
];
