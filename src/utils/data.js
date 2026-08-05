
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

// ===================== IMAGE IMPORTS =====================
import PROJECT_IMG_1 from "../assets/images/ct.png";
import PROJECT_IMG_2 from "../assets/images/task.png";
import PROJECT_IMG_4 from "../assets/images/wethere.png";
import PROJECT_IMG_6 from "../assets/images/book.png"
import PROJECT_IMG_7 from "../assets/images/pro.png";
import PROJECT_IMG_8 from "../assets/images/portfolio.png";
import PROJECT_IMG_9 from "../assets/images/demo1.png"
import PROJECT_IMG_10 from "../assets/images/food.png"
import PROJECT_IMG_11 from "../assets/images/gocart.png" 

// live project image 

import Live_img_1 from "../assets/live/live (3).png"
import Live_img_2 from "../assets/live/live (2).png"
import Live_img_3 from "../assets/live/live (1).png"
import Live_img_4 from "../assets/live/live (4).png"
import Live_img_5 from "../assets/live/live (5).png"



// ===================== TECH STACK =====================
export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "Next.js",
  "Vite",
  "React",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
 
];

// ===================== STATS =====================
export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "5+", label: "Technologies" },
];


// ===================== CERTIFICATES =====================
import CERT_1 from "../assets/Certificates/hakerrank.png";
import CERT_2 from "../assets/Certificates/full_stack.jpeg";
import CERT_3 from "../assets/Certificates/45days.png";
import CERT_4 from "../assets/Certificates/js.png";
import CERT_5 from "../assets/Certificates/FSD.png";


// // …add more as needed!

export const CERTIFICATES = [
  {
    title: "java programming certificate by Hackerrank",
    issuer: "Hackerrank",
    year: "july 21, 2025",
    image: CERT_1,
  },
  {
    title: "Full stack Web Development certification by udemy",
    issuer: "udemy",
    year: "July 26, 2024",
    image: CERT_2,
  },
    {
    title: "Certification in Full Stack Web Development and Data Structures & Algorithms (DSA)",
    issuer: "Coding Thinker, Bhopal",
    year: "July 26, 2024",
    image: CERT_5,
  },
  
    {
    title: "java-script programming certificate by Hackerrank",
    issuer: "Hackerrank",
    year: "july 21, 2025",
    image: CERT_4,
  },
 {
    title: "Coding thinker: Problem Solving and Programming",
    issuer: "Codeing Thinker | SimpliLearn",
    year: "26th July 2025",
    image: CERT_3,
  },
  
 
];

export const livePROJECTS = [
  {
    id: 1,
    title: "Binarylogix Technology LLP Portfolio",
    description:
      "A full-stack company portfolio and staff-management platform featuring project showcases, career opportunities, attendance tracking, and administrative tools.",
    image: Live_img_1,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://www.portfolio.binarylogix.in/careers",
    githubUrl: "",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 2,
    title: "WPIFD",
    description:
      "A property-discovery platform that allows users to browse, search, and explore property listings through an intuitive interface.",
    image: Live_img_2,
    tags: ["Node.js", "Express.js", "React.js", "MongoDB"],
    liveUrl: "https://www.wpifd.com/",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "SaloonWala",
    description:
      "A responsive salon-services platform that helps users explore salon services and connect with beauty professionals through a user-friendly interface.",
    image: Live_img_3,
    tags: ["React.js"],
    liveUrl: "https://www.saloonwala.in/",
    githubUrl: "",
    featured: true,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Vedvani",
    description:
      "A spiritual platform where users can explore pujas, understand their benefits, select puja types, and book religious services online.",
    image: Live_img_4,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://vedvani.org/",
    githubUrl: "",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 5,
    title: "Best Advocate Bhopal",
    description:
      "A professional legal-services website that presents advocate expertise, practice areas, consultation details, and contact information.",
    image: Live_img_5,
    tags: ["Node.js", "React.js","Tailwind CSS", "JavaScript"],
    liveUrl: "https://www.bestadvocatebhopal.com/",
    githubUrl: "",
    featured: true,
    category: "Business Website",
  },
 
 
 
];


export const PROJECTS = [
  {
    id: 1,
    title: "DemoTech Technology",
    description:
      "A full-stack web application that delivers a modern and responsive user experience with efficient backend and database integration.",
    image: PROJECT_IMG_9,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://demotech-one.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 2,
    title: "Property Finder",
    description:
      "A property discovery platform that allows users to browse, search, and explore property listings through an easy-to-use interface.",
    image: PROJECT_IMG_7,
    tags: ["Node.js", "Express.js", "EJS", "MongoDB"],
    liveUrl: "https://property-finder-rose.vercel.app/listings",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing my projects, technical skills, professional experience, and development work.",
    image: PROJECT_IMG_8,
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://pradeepnigam.vercel.app/",
    githubUrl: "https://github.com/pradeepnigam9452",
    featured: true,
    category: "Frontend",
  },
  {
    id: 4,
    title: "GoCard",
    description:
      "A responsive e-commerce application that allows users to explore products, manage their cart, and enjoy a smooth shopping experience.",
    image: PROJECT_IMG_11,
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://gocart-wine-pi.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "E-Commerce",
  },
  {
    id: 5,
    title: "Food Ordering App",
    description:
      "A responsive food-ordering application that allows users to explore food items and interact with a clean, user-friendly interface.",
    image: PROJECT_IMG_10,
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://food-ten-indol.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "Web App",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "A responsive weather application featuring city and postcode search, autocomplete suggestions, real-time weather data, and a dynamic interface.",
    image: PROJECT_IMG_4,
    tags: ["HTML5", "CSS3", "JavaScript", "WeatherAPI"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Web App",
  },
  {
    id: 7,
    title: "Book Store",
    description:
      "A full-stack bookstore application that allows users to browse and search for books through a responsive and user-friendly interface.",
    image: PROJECT_IMG_6,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://bo-ok-store-iaku.vercel.app/",
    githubUrl: "https://github.com/pradeepnigam9452",
    featured: true,
    category: "MERN Stack",
  },
  {
    id: 8,
    title: "Coaching Center Management",
    description:
      "A management system designed to handle coaching-center operations, including students, courses, batches, staff, and real-time communication.",
    image: PROJECT_IMG_1,
    tags: ["HTML5", "CSS3", "JavaScript", "WebSocket", "Express.js"],
    liveUrl: "https://ct-coaching.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 9,
    title: "Task Management",
    description:
      "A full-stack task management application featuring secure authentication, session handling, and complete CRUD operations.",
    image: PROJECT_IMG_2,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://task-app-frontend-woad.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "MERN Stack",
  },
];


// ===================== JOURNEY =====================
export const JOURNEY_STEPS = [
  {
    year: "2019",
    title: "Completed 10th",
    company: "Self-taught",
    description:
      "Completed 10th at satna MP 77 %.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "Completed 12th",
    company: "Self-taught",
    description:
      "Completed My 12th with 74 %.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Started coding Journey by taking admission to the course  ... B tech (CSE) in IES UNIVERSITY BHOPAL.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2026",
    title: "Completed Graduation",
    company: "IES University Bhopal",
    description: "Completed B.Tech in Computer Science Engineering from IES University Bhopal.",
    icon: GraduationCap,
    color: "bg-orange-500",
  },
  
//   
];

// ===================== PASSIONS =====================
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices.",
  },
];

// ===================== SOCIAL LINKS =====================
export const SOCIAL_LINKS = [
  { name: "GitHub", icon: FiGithub, url: "https://github.com/pradeepnigam9452", color: "hover:text-gray-400", bgColor: "hover:bg-gray-800" },
  { name: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/pradeep-nigam-601a85269", color: "hover:text-blue-400", bgColor: "hover:bg-blue-500/10" },
  { name: "LeetCode", icon: FiTwitter, url: "https://leetcode.com/u/pradeep_nigam/", color: "hover:text-sky-400", bgColor: "hover:bg-sky-500/10" },
  { name: "Email", icon: Mail, url: "pradeepnigam9452@gmail.com", color: "hover:text-red-400", bgColor: "hover:bg-red-100" },
];

// ===================== CONTACT INFO =====================
export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "Bhopal" },
  { icon: Mail, label: "Email", value: "pradeepnigam9452gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8305729451" },
];
