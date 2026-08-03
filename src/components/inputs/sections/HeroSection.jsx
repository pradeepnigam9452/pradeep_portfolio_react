// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import {
//   Mail,
//   Github,
//   Linkedin,
//   Download,
//   Sparkles,
//   Zap,
//   Shield,
//   Award,
// } from "lucide-react";
// import { useTheme } from "../../../context/ThemeContext";
// import PROFILE_PIC from "../../../assets/images/mee.jpeg";
// import Resume from "../../../../public/Pradeep_Nigam.pdf";
// import { useState, useEffect } from "react";

// const SOCIALS = [
//   { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
//   {
//     icon: Linkedin,
//     href: "https://linkedin.com/in/pradeep-nigam-601a85269",
//     label: "LinkedIn",
//   },
//   { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
// ];

// const STATS = [
//   { value: "15+", label: "Projects", icon: Award },
//   { value: "1+", label: "Years Exp", icon: Shield },
// ];

// const HeroSection = () => {
//   const { isDarkMode } = useTheme();
//   const { scrollY } = useScroll();
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Smooth parallax effects
//   const heroY = useTransform(scrollY, [0, 500], [0, -150]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

//   // Spring animations for smoothness
//   const springHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });
//   const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

//   // Mouse follow effect for 3D tilt (only on desktop image)
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 10;
//       const y = (e.clientY / window.innerHeight - 0.5) * 10;
//       setMousePosition({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.offsetTop - offset;
//       window.scrollTo({ top: elementPosition, behavior: "smooth" });
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
//     },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
//     },
//   };

//   return (
//     <div
//       className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
//         isDarkMode
//           ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
//           : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
//       }`}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, 50, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, -50, 0],
//             scale: [1, 1.3, 1],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
//       </div>

//       <motion.section
//         id="home"
//         style={{ y: springHeroY, opacity, scale: springScale }}
//         className="min-h-screen flex items-center justify-center relative px-6 pt-12 md:pt-16 lg:pt-20"
//       >
//         <div className="max-w-7xl mx-auto w-full z-10">
//           {/* Mobile Layout */}
//           <div className="block lg:hidden">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={containerVariants}
//               className="text-center"
//             >
//               {/* Profile Image */}
//               <motion.div variants={imageVariants} className="mb-8">
//                 <div className="relative w-36 h-36 mx-auto">
//                   {/* Glow Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30" />

//                   {/* Image Container */}
//                   <div
//                     className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-xl ${
//                       isDarkMode ? "border-gray-700" : "border-white"
//                     }`}
//                   >
//                     <img
//                       src={PROFILE_PIC}
//                       alt="Pradeep Nigam"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants} className="mb-4">
//                 <span
//                   className={`text-lg font-medium ${
//                     isDarkMode ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 >
//                   Hi, I&apos;m
//                 </span>
//                 <h2
//                   className={`text-3xl font-bold ${
//                     isDarkMode ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   Pradeep <span className="text-blue-500">Nigam</span>
//                 </h2>
//               </motion.div>

//               <motion.div variants={itemVariants} className="mb-6">
//                 <h1
//                   className={`text-4xl md:text-5xl font-bold leading-tight ${
//                     isDarkMode ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                     MERN Stack
//                   </span>
//                   <br />
//                   Developer
//                 </h1>
//               </motion.div>

//               <motion.p
//                 variants={itemVariants}
//                 className={`text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed ${
//                   isDarkMode ? "text-gray-400" : "text-gray-700"
//                 }`}
//               >
//                 I create stunning, high-performance web applications with modern
//                 technologies that deliver exceptional user experiences.
//               </motion.p>

//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection("work")}
//                   className="relative group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
//                 >
//                   <span className="relative z-10">View My Work</span>
//                 </motion.button>

//                 <motion.a
//                   href={Resume}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`group flex items-center gap-2 border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
//                     isDarkMode
//                       ? "border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white"
//                       : "border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600"
//                   }`}
//                 >
//                   <Download className="w-4 h-4" />
//                   Resume
//                 </motion.a>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="flex justify-center gap-4"
//               >
//                 {SOCIALS.map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.label}
//                     whileHover={{ y: -5, scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`p-3 rounded-full transition-all duration-300 ${
//                       isDarkMode
//                         ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
//                         : "bg-white text-gray-600 hover:text-blue-600 hover:shadow-lg"
//                     }`}
//                   >
//                     <social.icon size={20} />
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Desktop Layout */}
//           <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
//             {/* Left Content */}
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={containerVariants}
//               className="text-left"
//             >
//               <motion.div
//                 variants={itemVariants}
//                 className="inline-flex items-center gap-2 mb-6 mt-2 md:mt-4"
//               >
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <Sparkles className="w-4 h-4 text-yellow-500" />
//                 </motion.div>
//                 <span
//                   className={`text-sm font-mono ${
//                     isDarkMode ? "text-blue-400" : "text-blue-600"
//                   }`}
//                 >
//                   WELCOME TO MY PORTFOLIO
//                 </span>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className={`text-lg mb-3 ${
//                   isDarkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Hi there! I&apos;m
//               </motion.div>

//               <motion.h1
//                 variants={itemVariants}
//                 className={`text-6xl xl:text-7xl mb-4 font-bold ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Pradeep{" "}
//                 <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                   Nigam
//                 </span>
//               </motion.h1>

//               <motion.div variants={itemVariants} className="mb-6">
//                 <div className="flex items-center gap-2">
//                   <Zap className="w-5 h-5 text-blue-500" />
//                   <h2
//                     className={`text-2xl font-semibold ${
//                       isDarkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     MERN Stack Developer
//                   </h2>
//                 </div>
//               </motion.div>

//               <motion.p
//                 variants={itemVariants}
//                 className={`text-lg mb-8 leading-relaxed max-w-lg ${
//                   isDarkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 I craft beautiful, responsive, and high-performance web
//                 applications that deliver exceptional user experiences and drive
//                 business growth.
//               </motion.p>

//               <motion.div
//                 variants={itemVariants}
//                 className="grid grid-cols-2 gap-6 mb-8 max-w-sm"
//               >
//                 {STATS.map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -5 }}
//                     className={`p-4 rounded-xl ${
//                       isDarkMode ? "bg-gray-800/50" : "bg-white/50"
//                     } backdrop-blur-sm`}
//                   >
//                     <stat.icon
//                       className={`w-5 h-5 mb-2 ${
//                         isDarkMode ? "text-blue-400" : "text-blue-500"
//                       }`}
//                     />
//                     <div
//                       className={`text-2xl font-bold ${
//                         isDarkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       {stat.value}
//                     </div>
//                     <div className="text-xs text-gray-500">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div variants={itemVariants} className="flex gap-4 mb-8">
//                 <motion.button
//                   whileHover={{ scale: 1.05, y: -3 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection("contact")}
//                   className="relative group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
//                 >
//                   <span className="relative z-10">Hire Me</span>
//                 </motion.button>

//                 <motion.a
//                   href={Resume}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05, y: -3 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`group flex items-center gap-2 border-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
//                     isDarkMode
//                       ? "border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white"
//                       : "border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600"
//                   }`}
//                 >
//                   <Download className="w-4 h-4" />
//                   Download CV
//                 </motion.a>
//               </motion.div>

//               <motion.div variants={itemVariants} className="flex gap-3">
//                 {SOCIALS.map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -3 }}
//                     className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
//                       isDarkMode
//                         ? "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
//                         : "bg-white/50 text-gray-600 hover:bg-white hover:shadow-md"
//                     }`}
//                   >
//                     <social.icon size={18} />
//                     <span className="text-sm font-medium">{social.label}</span>
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Right (Image) */}
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={imageVariants}
//               className="relative flex justify-center items-center"
//             >
//               {/* Image container with subtle 3D tilt */}
//               <motion.div
//                 className="relative"
//                 style={{
//                   transform: `perspective(1000px) rotateY(${
//                     mousePosition.x * 0.03
//                   }deg) rotateX(${-mousePosition.y * 0.03}deg)`,
//                 }}
//               >
//                 {/* Glow behind image */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />

//                 {/* Image Card */}
//                 <div
//                   className={`relative rounded-2xl overflow-hidden shadow-2xl ${
//                     isDarkMode ? "shadow-blue-500/20" : "shadow-blue-500/30"
//                   }`}
//                 >
//                   {/* Border */}
//                   <div
//                     className={`absolute inset-0 rounded-2xl border-2 ${
//                       isDarkMode ? "border-gray-700" : "border-white"
//                     } z-10 pointer-events-none`}
//                   />

//                   <img
//                     src={PROFILE_PIC}
//                     alt="Pradeep Nigam"
//                     className="w-96 h-96 object-cover"
//                   />

//                   {/* Gradient overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default HeroSection;


import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Sparkles,
  Zap,
  Shield,
  Award,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import PROFILE_PIC from "../../../assets/images/mee.jpeg";
import Resume from "../../../../public/Pradeep_Nigam.pdf";
import { useState, useEffect, useCallback, useRef } from "react";

const SOCIALS = [
  { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/pradeep-nigam-601a85269",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
];

const STATS = [
  { value: "15+", label: "Projects", icon: Award },
  { value: "1+", label: "Years Exp", icon: Shield },
];

const ROLES = ["MERN Stack Developer", "Full Stack Engineer", "UI/UX Enthusiast"];

// ---------- Throttled mouse position ----------
const useThrottledMousePosition = (throttleDelay = 16) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const lastFrame = useRef(0);

  const handleMove = useCallback(
    (e) => {
      const now = performance.now();
      if (now - lastFrame.current < throttleDelay) return;
      lastFrame.current = now;
      setPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    },
    [throttleDelay]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return position;
};

// ---------- Typewriter ----------
const useTypewriter = (words, speed = 100, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, words, speed, pause]);

  return words[index].substring(0, subIndex);
};

// ---------- Sub-components ----------
const ProfileImage = ({ isDarkMode }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    className="relative flex justify-center items-center"
  >
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
      <div
        className={`relative rounded-2xl overflow-hidden shadow-2xl ${
          isDarkMode ? "shadow-blue-500/20" : "shadow-blue-500/30"
        } border-2 ${isDarkMode ? "border-gray-700" : "border-white"}`}
      >
        <img
          src={PROFILE_PIC}
          alt="Pradeep Nigam – MERN Stack Developer"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ aspectRatio: "1/1" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  </motion.div>
);

const SocialLinks = ({ isDarkMode }) => (
  <div className="flex gap-3 flex-wrap">
    {SOCIALS.map((social) => (
      <motion.a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        whileHover={{ y: -3 }}
        className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 ${
          isDarkMode
            ? "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
            : "bg-white/50 text-gray-600 hover:bg-white hover:shadow-md hover:text-blue-600"
        }`}
      >
        <social.icon size={18} aria-hidden="true" />
        <span className="text-sm font-medium">{social.label}</span>
      </motion.a>
    ))}
  </div>
);

// ---------- Main Component ----------
const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const mousePos = useThrottledMousePosition(16);
  const typewriterText = useTypewriter(ROLES, 80, 2000);

  // Parallax & opacity – removed y movement, keep opacity and scale if desired
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const tiltTransform = prefersReducedMotion
    ? {}
    : {
        transform: `perspective(1000px) rotateY(${
          mousePos.x * 0.03
        }deg) rotateX(${-mousePos.y * 0.03}deg)`,
      };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.3, 1],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Removed y: springHeroY – no more upward movement on scroll */}
      <motion.section
        id="home"
        style={{ opacity, scale: springScale }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-12 md:pt-16 lg:pt-20"
      >
        <div className="max-w-7xl mx-auto w-full z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left side */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
                <motion.div
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                </motion.div>
                <span
                  className={`text-sm font-mono ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  WELCOME TO MY PORTFOLIO
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={`text-lg mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Hi there! I&apos;m
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={`text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-4 font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Pradeep{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Nigam
                </span>
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <h2
                    className={`text-2xl font-semibold min-h-[2.5rem] ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
                      {typewriterText}
                    </span>
                    <span className="sr-only">{ROLES.join(", ")}</span>
                  </h2>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I craft beautiful, responsive, and high-performance web
                applications that deliver exceptional user experiences and drive
                business growth.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 mb-8"
              >
                {STATS.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={prefersReducedMotion ? {} : { y: -5 }}
                    className={`p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-800/50" : "bg-white/50"
                    } backdrop-blur-sm`}
                  >
                    <stat.icon
                      className={`w-5 h-5 mb-2 ${
                        isDarkMode ? "text-blue-400" : "text-blue-500"
                      }`}
                      aria-hidden="true"
                    />
                    <div
                      className={`text-2xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.button
                  type="button"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className="relative group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="relative z-10">Hire Me</span>
                </motion.button>

                <motion.a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-2 border-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white"
                      : "border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download CV
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SocialLinks isDarkMode={isDarkMode} />
              </motion.div>
            </div>

            {/* Right side: image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div style={tiltTransform}>
                <ProfileImage isDarkMode={isDarkMode} />
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <ChevronDown
              className={`w-6 h-6 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              aria-hidden="true"
            />
            <span className="sr-only">Scroll down</span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;