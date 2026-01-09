// ===================== ICON IMPORTS =====================
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
import PROJECT_IMG_4 from "../assets/images/weather-app.png";
import PROJECT_IMG_6 from "../assets/images/book.png"
import PROJECT_IMG_7 from "../assets/images/pro.png";
import PROJECT_IMG_8 from "../assets/images/portfolio.png";

// ===================== TECH STACK =====================
export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "Vite",,
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
  { number: "0+", label: "Years Experience" },
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



// ===================== PROJECTS =====================
export const PROJECTS = [
  {
    id: 1,
    title: "Property Finder ",
    description:
      "A Property finder web app where we can easily find new Property .",
    image: PROJECT_IMG_7,
    tags: ["Node.js  express.js , ejs , mongoDB"],
    liveUrl: "https://property-finder-rose.vercel.app/listings",
    githubUrl: "https://property-finder-rose.vercel.app/listings",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Persnal Portfolio",
    description:
      "A personal portfolio built with React and Tailwind CSS.",
    image: PROJECT_IMG_8,
    tags: ["react js"],
     liveUrl: "#",
    githubUrl: "https://github.com/pradeepnigam9452",
    featured: true,
    category: "Full Stack",
  },
   {
    id: 4,
    title: "Weather App",
    description:
      "Developed a responsive weather app with city/postcode search, autocomplete functionality, and dynamic UI that adapts to weather conditions.",
    image: PROJECT_IMG_4,
    tags: ["HTML 5", "CSS","JavaScript","WeatherAPI"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "Book store",
    description:
      "Developed a responsive Book-store app with  search, autocomplete functionality, and dynamic UI that adapts to weather conditions.",
    image: PROJECT_IMG_6,
    tags: ["react", "Node js","express js","mongodb"],
    liveUrl: " https://bo-ok-store-iaku.vercel.app/",
    githubUrl: "https://github.com/pradeepnigam9452",
    featured: true,
    category: "Web App",
  },
   {id: 6,
    title: "Coaching-center-management",
    description:
     "A project designed to manage coaching center operations such as students, courses, batches, and staff in an efficient way.",
    image: PROJECT_IMG_1,
    tags: ["HTML 5", "CSS", "JavaScript","WebScoket","ExpressJs"],
    liveUrl: "https://ct-coaching.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  
   {
    
    id: 8,
     title: "task management",
    description:
      "Build a custom web-based.Secure login with session handling ,Full CRUD operations, for task management.",
    image: PROJECT_IMG_2,
    tags: ["Node.js , express.js ,mongoDb , react.js"],
     liveUrl: "https://task-app-frontend-woad.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "Full Stack",
  }
 
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
