// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowDown, Mail } from "lucide-react";
// import { FiGithub, FiLinkedin } from "react-icons/fi";
// import { useTheme } from "../../../context/ThemeContext";
// import PROFILE_PIC from "../../../assets/images/mee.jpeg"; // your profile picture

// import Resume from "../../../../public/Pradeep_Nigam.pdf";

// const HeroSection = () => {
//   const { isDarkMode } = useTheme();
//   const { scrollY } = useScroll();
//   const heroY = useTransform(scrollY, [0, 500], [0, -100]);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const textVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const imageVariants = {
//     hidden: { x: 50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 1, ease: "easeOut", delay: 0.5 },
//     },
//   };

//   return (
//     <div
//       className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
//         isDarkMode
//           ? "bg-gray-900 text-white"
//           : "bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Floating gradient glows (light mode) */}
//       {!isDarkMode && (
//         <>
//           <motion.div
//             className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-300 via-indigo-200 to-pink-200 blur-[100px] opacity-40"
//             animate={{ scale: [1, 1.03, 1], opacity: [0.35, 0.45, 0.35] }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-yellow-200 via-pink-200 to-blue-200 blur-[100px] opacity-35"
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </>
//       )}

//       <motion.section
//         id="home"
//         style={{ y: heroY }}
//         className="min-h-screen flex items-center justify-center relative px-6 pt-10"
//       >
//         {/* Background bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
//               isDarkMode ? "bg-blue-500" : "bg-blue-400"
//             }`}
//           />
//           <motion.div
//             animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
//             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
//               isDarkMode ? "bg-purple-500" : "bg-pink-400"
//             }`}
//           />
//         </div>

//         <div className="max-w-7xl mx-auto w-full z-10 mt-20">
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
//                 <div className="w-32 h-32 mx-auto relative">
//                   <motion.div
//                     whileHover={{ scale: 1.07 }}
//                     className={`w-full h-32 rounded-2xl overflow-hidden border-4 shadow-2xl transition-all duration-300 ${
//                       isDarkMode
//                         ? "border-gray-800"
//                         : "border-blue-200 shadow-blue-100"
//                     }`}
//                   >
//                     <img
//                       src={PROFILE_PIC}
//                       alt="profile"
//                       className="w-full h-full object-cover"
//                     />
//                   </motion.div>
//                 </div>
//               </motion.div>

//               {/* Name */}
//               <motion.div
//                 variants={textVariants}
//                 className={`text-2xl font-bold mb-4 ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 I’m <span className="text-blue-500">Pradeep Nigam</span>
//               </motion.div>

//               {/* Heading */}
//               <motion.h1
//                 variants={itemVariants}
//                 className={`text-3xl md:text-5xl mb-6 leading-tight font-bold ${
//                   isDarkMode
//                     ? "text-white"
//                     : "text-gray-900 drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)]"
//                 }`}
//               >
//                 Building Digital <br />
//                 <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
//                   Experiences
//                 </span>{" "}
//                 that Inspire
//               </motion.h1>

//               {/* Description */}
//               <motion.p
//                 variants={itemVariants}
//                 className={`text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed ${
//                   isDarkMode ? "text-gray-400" : "text-gray-700 font-medium"
//                 }`}
//               >
//                 I build clean, modern, and high-performance web experiences that
//                 inspire and engage users.
//               </motion.p>

//               {/* Buttons */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
//               >
//                 <motion.button
//                   whileHover={{
//                     y: -2,
//                     boxShadow: "0 6px 15px rgba(59,130,246,0.4)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => scrollToSection("work")}
//                   className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300"
//                 >
//                   View Work
//                 </motion.button>

//                 <motion.a
//                   href={Resume}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{
//                     y: -2,
//                     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold flex items-center gap-2 transition-all duration-300 ${
//                     isDarkMode
//                       ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800"
//                       : "border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100"
//                   }`}
//                 >
//                   Resume
//                 </motion.a>
//               </motion.div>

//               {/* Social Links */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex justify-center space-x-6 mb-8"
//               >
//                 {[
//                    { icon: FiGithub, href: "" },
//                   {
//                     icon: FiLinkedin,
//                     href: "https://linkedin.com/in/pradeep-nigam-601a85269",
//                   },
//                   { icon: Mail, href: "mailto:pradeep.nigam@example.com" },
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     whileHover={{ y: -3, scale: 1.15 }}
//                     className={`p-3 rounded-full transition-colors ${
//                       isDarkMode
//                         ? "text-gray-400 hover:text-white hover:bg-gray-800"
//                         : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
//                     }`}
//                   >
//                     <social.icon size={20} />
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Desktop Layout */}
//           <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
//             {/* Left */}
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={containerVariants}
//               className="text-left"
//             >
//               <motion.div
//                 variants={textVariants}
//                 className={`tracking-[0.1em] mb-4 text-xl font-[Poppins] ${
//                   isDarkMode ? "text-blue-400" : "text-blue-600 font-semibold"
//                 }`}
//               >
//                 I’m <span className="font-bold">Pradeep Nigam</span>
//               </motion.div>

//               <motion.h1
//                 variants={itemVariants}
//                 className={`text-5xl xl:text-7xl mb-8 leading-tight font-bold ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Building Digital <br />
//                 <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
//                   Experiences
//                 </span>{" "}
//                 that Inspire
//               </motion.h1>

//               <motion.p
//                 variants={itemVariants}
//                 className={`text-xl mb-12 leading-relaxed max-w-lg ${
//                   isDarkMode ? "text-gray-400" : "text-gray-700 font-medium"
//                 }`}
//               >
//                 I create interactive, visually engaging, and high-performance
//                 websites that leave lasting impressions.
//               </motion.p>

//               {/* Buttons */}
//               <motion.div className="flex space-x-4">
//                 <motion.button
//                   whileHover={{
//                     y: -3,
//                     boxShadow: "0 6px 15px rgba(59,130,246,0.4)",
//                   }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() => scrollToSection("work")}
//                   className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300"
//                 >
//                   View Work
//                 </motion.button>

//                 <motion.a
//                   href={Resume}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{
//                     y: -2,
//                     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold flex items-center gap-2 transition-all duration-300 ${
//                     isDarkMode
//                       ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800"
//                       : "border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100"
//                   }`}
//                 >
//                   Resume
//                 </motion.a>
//               </motion.div>

//               {/* Socials */}
//               <motion.div
//                 variants={itemVariants}
//                 className="flex space-x-6 mt-12"
//               >
//                 {[
//                   { icon: FiGithub, href: "https://github.com/pradeepnigam9452" },
//                   {
//                     icon: FiLinkedin,
//                     href: "https://linkedin.com/in/pradeep-nigam-601a85269",
//                   },
//                   { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com" },
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     whileHover={{ y: -3, scale: 1.15 }}
//                     className={`p-3 rounded-full transition-colors ${
//                       isDarkMode
//                         ? "text-gray-400 hover:text-white hover:bg-gray-800"
//                         : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
//                     }`}
//                   >
//                     <social.icon size={20} />
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Right (Image) */}
//             <motion.div
//               variants={imageVariants}
//               className="flex justify-center items-center relative"
//             >
//               <div className="relative w-92 h-92">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className={`w-full h-full rounded-2xl overflow-hidden border-4 shadow-2xl ${
//                     isDarkMode
//                       ? "border-gray-800"
//                       : "border-blue-200 shadow-blue-200/50"
//                   }`}
//                 >
//                   <img
//                     src={PROFILE_PIC}
//                     alt="Pradeep Nigam"
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           >
//             <ArrowDown
//               size={20}
//               className={isDarkMode ? "text-gray-400" : "text-blue-500"}
//             />
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default HeroSection;


// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ArrowDown, Mail, Github, Linkedin, Download, Sparkles, Zap, Shield, Award } from "lucide-react";
// import { useTheme } from "../../../context/ThemeContext";
// import PROFILE_PIC from "../../../assets/images/mee.jpeg";
// import Resume from "../../../../public/Pradeep_Nigam.pdf";
// import { useState, useEffect } from "react";

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
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
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
//       transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
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
//         className="min-h-screen flex items-center justify-center relative px-6 pt-10"
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
//               {/* Simple Mobile Profile Image */}
//               <motion.div variants={imageVariants} className="mb-8">
//                 <div className="relative w-36 h-36 mx-auto">
//                   {/* Simple Glow Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30" />
                  
//                   {/* Image Container */}
//                   <div className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-xl ${
//                     isDarkMode
//                       ? "border-gray-700"
//                       : "border-white"
//                   }`}>
//                     <img
//                       src={PROFILE_PIC}
//                       alt="Pradeep Nigam"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants} className="mb-4">
//                 <span className={`text-lg font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//                   Hi, I'm
//                 </span>
//                 <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                   Pradeep <span className="text-blue-500">Nigam</span>
//                 </h2>
//               </motion.div>

//               <motion.div variants={itemVariants} className="mb-6">
//                 <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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
//                 {[
//                   { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
//                   { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
//                   { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
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
//                 className="inline-flex items-center gap-2 mb-6"
//               >
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <Sparkles className="w-4 h-4 text-yellow-500" />
//                 </motion.div>
//                 <span className={`text-sm font-mono ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
//                   WELCOME TO MY PORTFOLIO
//                 </span>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className={`text-lg mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
//               >
//                 Hi there! I'm
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

//               <motion.div
//                 variants={itemVariants}
//                 className="mb-6"
//               >
//                 <div className="flex items-center gap-2">
//                   <Zap className="w-5 h-5 text-blue-500" />
//                   <h2 className={`text-2xl font-semibold ${
//                     isDarkMode ? "text-gray-300" : "text-gray-700"
//                   }`}>
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
//                 I craft beautiful, responsive, and high-performance web applications
//                 that deliver exceptional user experiences and drive business growth.
//               </motion.p>

//               <motion.div
//                 variants={itemVariants}
//                 className="grid grid-cols-3 gap-6 mb-8"
//               >
//                 {[
//                   { value: "25+", label: "Projects", icon: Award },
//                   { value: "2+", label: "Years Exp", icon: Shield },
//                   { value: "15+", label: "Clients", icon: Users },
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -5 }}
//                     className={`p-4 rounded-xl ${
//                       isDarkMode ? "bg-gray-800/50" : "bg-white/50"
//                     } backdrop-blur-sm`}
//                   >
//                     <stat.icon className={`w-5 h-5 mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-500"}`} />
//                     <div className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                       {stat.value}
//                     </div>
//                     <div className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
//                       {stat.label}
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="flex gap-4 mb-8"
//               >
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

//               <motion.div
//                 variants={itemVariants}
//                 className="flex gap-3"
//               >
//                 {[
//                   { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
//                   { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
//                   { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
//                 ].map((social, i) => (
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

//             {/* Clean Desktop Image Section - No Extra Animations */}
//             <motion.div
//               variants={imageVariants}
//               className="relative flex justify-center items-center"
//             >
//               {/* Simple Image Container with Minimal 3D Tilt */}
//               <motion.div
//                 className="relative"
//                 style={{
//                   transform: `perspective(1000px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`,
//                 }}
//               >
//                 {/* Simple Glow Behind Image */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
                
//                 {/* Image Card */}
//                 <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
//                   isDarkMode ? "shadow-blue-500/20" : "shadow-blue-500/30"
//                 }`}>
//                   {/* Simple Border */}
//                   <div className={`absolute inset-0 rounded-2xl border-2 ${
//                     isDarkMode ? "border-gray-700" : "border-white"
//                   } z-10 pointer-events-none`} />
                  
//                   {/* Image */}
//                   <img
//                     src={PROFILE_PIC}
//                     alt="Pradeep Nigam"
//                     className="w-96 h-96 object-cover"
//                   />
                  
//                   {/* Simple Gradient Overlay on Hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//             onClick={() => scrollToSection("skills")}
//           >
//             <div className="relative">
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute inset-0 bg-blue-500 rounded-full blur-md"
//               />
//               <div className={`relative p-2 rounded-full ${
//                 isDarkMode ? "bg-gray-800" : "bg-white"
//               } shadow-lg`}>
//                 <ArrowDown
//                   size={20}
//                   className={isDarkMode ? "text-blue-400" : "text-blue-500"}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// // Users Icon Component
// const Users = ({ className }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//   </svg>
// );

// export default HeroSection;

// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { Mail, Github, Linkedin, Download, Sparkles, Zap, Shield, Award, Users } from "lucide-react";
// import { useTheme } from "../../../context/ThemeContext";
// import PROFILE_PIC from "../../../assets/images/mee.jpeg";
// import Resume from "../../../../public/Pradeep_Nigam.pdf";
// import { useState, useEffect } from "react";

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
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
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
//       transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
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
//         className="min-h-screen flex items-center justify-center relative px-6"
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
//               {/* Simple Mobile Profile Image */}
//               <motion.div variants={imageVariants} className="mb-8">
//                 <div className="relative w-36 h-36 mx-auto">
//                   {/* Simple Glow Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30" />
                  
//                   {/* Image Container */}
//                   <div className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-xl ${
//                     isDarkMode
//                       ? "border-gray-700"
//                       : "border-white"
//                   }`}>
//                     <img
//                       src={PROFILE_PIC}
//                       alt="Pradeep Nigam"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants} className="mb-4">
//                 <span className={`text-lg font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//                   Hi, I'm
//                 </span>
//                 <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                   Pradeep <span className="text-blue-500">Nigam</span>
//                 </h2>
//               </motion.div>

//               <motion.div variants={itemVariants} className="mb-6">
//                 <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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
//                 {[
//                   { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
//                   { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
//                   { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
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
//                 className="inline-flex items-center gap-"
//               >
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <Sparkles className="w-4 h-4 text-yellow-500" />
//                 </motion.div>
//                 <span className={`text-sm font-mono ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
//                   WELCOME TO MY PORTFOLIO
//                 </span>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className={`text-lg mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
//               >
//                 Hi there! I'm
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

//               <motion.div
//                 variants={itemVariants}
//                 className="mb-6"
//               >
//                 <div className="flex items-center gap-2">
//                   <Zap className="w-5 h-5 text-blue-500" />
//                   <h2 className={`text-2xl font-semibold ${
//                     isDarkMode ? "text-gray-300" : "text-gray-700"
//                   }`}>
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
//                 I craft beautiful, responsive, and high-performance web applications
//                 that deliver exceptional user experiences and drive business growth.
//               </motion.p>

//               <motion.div
//                 variants={itemVariants}
//                 className="grid grid-cols-3 gap-6 mb-8"
//               >
//                 {[
//                   { value: "25+", label: "Projects", icon: Award },
//                   { value: "2+", label: "Years Exp", icon: Shield },
//                   { value: "15+", label: "Clients", icon: Users },
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -5 }}
//                     className={`p-4 rounded-xl ${
//                       isDarkMode ? "bg-gray-800/50" : "bg-white/50"
//                     } backdrop-blur-sm`}
//                   >
//                     <stat.icon className={`w-5 h-5 mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-500"}`} />
//                     <div className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                       {stat.value}
//                     </div>
//                     <div className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
//                       {stat.label}
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="flex gap-4 mb-8"
//               >
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

//               <motion.div
//                 variants={itemVariants}
//                 className="flex gap-3"
//               >
//                 {[
//                   { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
//                   { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
//                   { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
//                 ].map((social, i) => (
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

//             {/* Clean Desktop Image Section - No Extra Animations */}
//             <motion.div
//               variants={imageVariants}
//               className="relative flex justify-center items-center"
//             >
//               {/* Simple Image Container with Minimal 3D Tilt */}
//               <motion.div
//                 className="relative"
//                 style={{
//                   transform: `perspective(1000px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`,
//                 }}
//               >
//                 {/* Simple Glow Behind Image */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
                
//                 {/* Image Card */}
//                 <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
//                   isDarkMode ? "shadow-blue-500/20" : "shadow-blue-500/30"
//                 }`}>
//                   {/* Simple Border */}
//                   <div className={`absolute inset-0 rounded-2xl border-2 ${
//                     isDarkMode ? "border-gray-700" : "border-white"
//                   } z-10 pointer-events-none`} />
                  
//                   {/* Image */}
//                   <img
//                     src={PROFILE_PIC}
//                     alt="Pradeep Nigam"
//                     className="w-96 h-96 object-cover"
//                   />
                  
//                   {/* Simple Gradient Overlay on Hover */}
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
import { Mail, Github, Linkedin, Download, Sparkles, Zap, Shield, Award, Users } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import PROFILE_PIC from "../../../assets/images/mee.jpeg";
import Resume from "../../../../public/Pradeep_Nigam.pdf";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Smooth parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
  // Spring animations for smoothness
  const springHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  // Mouse follow effect for 3D tilt (only on desktop image)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

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
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.section
        id="home"
        style={{ y: springHeroY, opacity, scale: springScale }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-12 md:pt-16 lg:pt-20"
      >
        <div className="max-w-7xl mx-auto w-full z-10">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Simple Mobile Profile Image */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="relative w-36 h-36 mx-auto">
                  {/* Simple Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30" />
                  
                  {/* Image Container */}
                  <div className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-xl ${
                    isDarkMode
                      ? "border-gray-700"
                      : "border-white"
                  }`}>
                    <img
                      src={PROFILE_PIC}
                      alt="Pradeep Nigam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <span className={`text-lg font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Hi, I'm
                </span>
                <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Pradeep <span className="text-blue-500">Nigam</span>
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    MERN Stack
                  </span>
                  <br />
                  Developer
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                I create stunning, high-performance web applications with modern
                technologies that deliver exceptional user experiences.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="relative group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  <span className="relative z-10">View My Work</span>
                </motion.button>

                <motion.a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-2 border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white"
                      : "border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  Resume
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4"
              >
                {[
                  { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                        : "bg-white text-gray-600 hover:text-blue-600 hover:shadow-lg"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 mb-6 mt-2 md:mt-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                </motion.div>
                <span className={`text-sm font-mono ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  WELCOME TO MY PORTFOLIO
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={`text-lg mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Hi there! I'm
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={`text-6xl xl:text-7xl mb-4 font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Pradeep{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Nigam
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <h2 className={`text-2xl font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    MERN Stack Developer
                  </h2>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`text-lg mb-8 leading-relaxed max-w-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I craft beautiful, responsive, and high-performance web applications
                that deliver exceptional user experiences and drive business growth.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 mb-8"
              >
                {[
                  { value: "15+", label: "Projects", icon: Award },
                  { value: "1+", label: "Years Exp", icon: Shield },
                  // { value: "15+", label: "Clients", icon: Users },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-800/50" : "bg-white/50"
                    } backdrop-blur-sm`}
                  >
                    <stat.icon className={`w-5 h-5 mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-500"}`} />
                    <div className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className="relative group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  <span className="relative z-10">Hire Me</span>
                </motion.button>

                <motion.a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-2 border-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white"
                      : "border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-3"
              >
                {[
                  { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                        : "bg-white/50 text-gray-600 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    <social.icon size={18} />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Clean Desktop Image Section - No Extra Animations */}
            <motion.div
              variants={imageVariants}
              className="relative flex justify-center items-center"
            >
              {/* Simple Image Container with Minimal 3D Tilt */}
              <motion.div
                className="relative"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`,
                }}
              >
                {/* Simple Glow Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
                
                {/* Image Card */}
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                  isDarkMode ? "shadow-blue-500/20" : "shadow-blue-500/30"
                }`}>
                  {/* Simple Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${
                    isDarkMode ? "border-gray-700" : "border-white"
                  } z-10 pointer-events-none`} />
                  
                  {/* Image */}
                  <img
                    src={PROFILE_PIC}
                    alt="Pradeep Nigam"
                    className="w-96 h-96 object-cover"
                  />
                  
                  {/* Simple Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;