

// import React from "react";
// import { MapPin, Briefcase, Calendar, Sparkles } from "lucide-react";
// import { useTheme } from "../../../context/ThemeContext";

// const Experience = () => {
//   const { isDarkMode } = useTheme();

//   const experiences = [
//     {
//       company: "Binarylogix Technology LLP",
//       position: "Full Stack Developer",
//       duration: "2026 - Present",
//       location: "Bhopal",
//       highlights: ["React.js", "Node.js", "MongoDB", "Express.js" , "Responsive UI"],
//     },
//     {
//       company: "Upstair Research Bhopal",
//       position: "Frontend Developer",
//       duration: "2025 - 2026",
//       location: "Bhopal",
//       highlights: ["HTML", "Responsive UI", "Designing"],
//     },
//     {
//       company: "Coding Thinker Bhopal",
//       position: "MERN Trainee",
//       duration: "2024",
//       location: "Bhopal",
//       highlights: ["Full Stack", "Projects", "Certification"],
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className={`relative overflow-hidden py-24 transition-colors duration-300 ${
//         isDarkMode ? "bg-gray-950" : "bg-white"
//       }`}
//     >
//       {/* Background Glow */}
//       <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
//       <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

//       <div className="relative z-10 max-w-5xl mx-auto px-5">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-500 font-mono text-sm mb-4">
//             <Sparkles size={16} />
//             <span> EXPERIENCE</span>
//           </div>

//           <h2
//             className={`text-3xl md:text-5xl font-extrabold tracking-tight ${
//               isDarkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Where I've Worked
//           </h2>

//           <p
//             className={`mt-4 max-w-2xl mx-auto text-sm md:text-base ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             A quick look at my professional journey, roles, and technical
//             experience.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           <div
//             className={`absolute left-4 top-0 h-full w-px md:left-1/2 ${
//               isDarkMode ? "bg-gray-800" : "bg-gray-200"
//             }`}
//           />

//           <div className="space-y-10">
//             {experiences.map((exp, idx) => (
//               <div
//                 key={idx}
//                 className={`relative flex ${
//                   idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
//                 }`}
//               >
//                 {/* Dot */}
//                 <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500 ring-8 ring-blue-500/15 md:left-1/2" />

//                 {/* Card */}
//                 <div
//                   className={`ml-10 w-full md:ml-0 md:w-[46%] rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 ${
//                     isDarkMode
//                       ? "border-gray-800 bg-gray-900/80 shadow-black/20 hover:border-blue-500/50"
//                       : "border-gray-100 bg-white shadow-gray-200/70 hover:border-blue-200"
//                   }`}
//                 >
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <div className="flex items-center gap-2 text-blue-500 mb-2">
//                         <Briefcase size={18} />
//                         <p className="text-sm font-semibold">{exp.company}</p>
//                       </div>

//                       <h3
//                         className={`text-xl font-bold ${
//                           isDarkMode ? "text-white" : "text-gray-900"
//                         }`}
//                       >
//                         {exp.position}
//                       </h3>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-3 text-sm">
//                     <span
//                       className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${
//                         isDarkMode
//                           ? "bg-gray-800 text-gray-300"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       <Calendar size={14} />
//                       {exp.duration}
//                     </span>

//                     <span
//                       className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${
//                         isDarkMode
//                           ? "bg-gray-800 text-gray-300"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       <MapPin size={14} />
//                       {exp.location}
//                     </span>
//                   </div>

//                   <div className="mt-5 flex flex-wrap gap-2">
//                     {exp.highlights.map((highlight, i) => (
//                       <span
//                         key={i}
//                         className={`rounded-full px-3 py-1 text-xs font-medium ${
//                           isDarkMode
//                             ? "bg-blue-500/10 text-blue-300"
//                             : "bg-blue-50 text-blue-700"
//                         }`}
//                       >
//                         {highlight}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;




import React, { useState } from "react";
import { MapPin, Briefcase, Calendar, Sparkles, Code, Server, Database, Layout, Award, Star, TrendingUp, Users, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Binarylogix Technology LLP",
      position: "Full Stack Developer",
      duration: "2026 - Present",
      location: "Bhopal",
      type: "Full-time",
      highlights: ["React.js", "Node.js", "MongoDB", "Express.js", "Responsive UI"],
      achievements: [
        "Developed 10+ production-ready web applications",
        "Improved application performance by 40%",
        "Led a team of 3 developers for major projects",
        "Implemented CI/CD pipelines for automated deployment"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Redux"],
      impact: "40% Performance Boost • 10+ Projects Delivered",
      icon: Code,
    },
    {
      id: 2,
      company: "Upstair Research Bhopal",
      position: "Frontend Developer",
      duration: "2025 - 2026",
      location: "Bhopal",
      type: "Full-time",
      highlights: ["HTML", "Responsive UI", "Designing"],
      achievements: [
        "Created 15+ responsive web interfaces",
        "Reduced load time by 35% through optimization",
        "Collaborated with design team for UI/UX improvements",
        "Implemented cross-browser compatibility"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma", "Tailwind"],
      impact: "35% Load Time Reduction • 15+ Interfaces",
      icon: Layout,
    },
    {
      id: 3,
      company: "Coding Thinker Bhopal",
      position: "MERN Trainee",
      duration: "2024",
      location: "Bhopal",
      type: "Internship",
      highlights: ["Full Stack", "Projects", "Certification"],
      achievements: [
        "Completed 8+ full-stack projects",
        "Achieved top performer certification",
        "Mastered MERN stack development",
        "Contributed to open-source projects"
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js", "Git", "REST APIs"],
      impact: "Top Performer • 8+ Projects Completed",
      icon: Award,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="experience"
      className={`relative overflow-hidden py-20 md:py-24 lg:py-28 transition-all duration-500 ${
        isDarkMode 
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" 
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
      {/* Animated Background Glows - Matching Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Enhanced Heading - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-500 font-mono text-sm mb-4 backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            <span className="tracking-wider">EXPERIENCE</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto text-base md:text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A glimpse into my professional growth, key achievements, and technical expertise
          </p>
        </motion.div>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:left-1/2 ${
              isDarkMode ? "opacity-30" : "opacity-40"
            }`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                whileHover="hover"
                className={`relative flex ${
                  idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Animated Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-4 top-8 z-20 h-4 w-4 -translate-x-1/2 md:left-1/2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
                    <div className="relative h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-blue-500/20" />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`ml-10 w-full md:ml-0 md:w-[46%] rounded-2xl border p-6 transition-all duration-300 ${
                    expandedId === exp.id ? "shadow-2xl scale-105" : "shadow-lg"
                  } ${
                    isDarkMode
                      ? "border-gray-800 bg-gray-900/80 shadow-black/20 hover:border-blue-500/50"
                      : "border-gray-100 bg-white shadow-gray-200/70 hover:border-blue-200"
                  }`}
                  onMouseEnter={() => setExpandedId(exp.id)}
                  onMouseLeave={() => setExpandedId(null)}
                >
                  {/* Card Header with Icon */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10`}>
                        <exp.icon className={`w-5 h-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-blue-500" />
                          <p className={`text-sm font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                            {exp.company}
                          </p>
                        </div>
                        <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          {exp.position}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Impact Badge */}
                    <div className={`hidden md:block px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode 
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300" 
                        : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700"
                    }`}>
                      {exp.impact}
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${
                        isDarkMode
                          ? "bg-gray-800/50 text-gray-300 border border-gray-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Calendar size={14} className="text-blue-500" />
                      {exp.duration}
                    </span>

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${
                        isDarkMode
                          ? "bg-gray-800/50 text-gray-300 border border-gray-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <MapPin size={14} className="text-purple-500" />
                      {exp.location}
                    </span>

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${
                        isDarkMode
                          ? "bg-gray-800/50 text-gray-300 border border-gray-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Users size={14} className="text-green-500" />
                      {exp.type}
                    </span>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 ${
                          isDarkMode
                            ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Achievements */}
                  <AnimatePresence>
                    {(expandedId === exp.id || !isDarkMode) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className={`pt-4 border-t ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp size={14} className="text-green-500" />
                            <span className={`text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                              Key Achievements
                            </span>
                          </div>
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <Star size={12} className="text-yellow-500 mt-1 flex-shrink-0" />
                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                  {achievement}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section - Matching Hero Colors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { label: "Projects Completed", value: "15+", icon: Code, color: "blue" },
            { label: "Technologies", value: "7+", icon: Server, color: "purple" },
            // { label: "Happy Clients", value: "15+", icon: Users, color: "green" },
            { label: "Certifications", value: "5+", icon: Award, color: "orange" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-4 md:p-6 rounded-2xl text-center transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50"
                  : "bg-white/50 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl"
              }`}
            >
              <div className={`inline-flex p-2 rounded-lg bg-${stat.color}-500/10 mb-3`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {stat.value}
              </div>
              <div className={`text-xs md:text-sm mt-1 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action - Matching Hero Button Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;