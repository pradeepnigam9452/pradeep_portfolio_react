// import { motion } from "framer-motion";
// import { useTheme } from "../../../context/ThemeContext";
// import { JOURNEY_STEPS, PASSIONS } from "../../../utils/data";

// export default function AboutSection() {
//   const { isDarkMode } = useTheme();

//   const SKILLS = [ "Reading", "Music", "Travel", "Sports", "Esports"];
//   const STATS = [
//     { label: "Projects", value: "15+" },
//     { label: "GitHub Stars", value: "120+" },
//     { label: "Experience", value: "3 Years" },
//   ];

//   return (
//     <section
//       id="about"
//       className={`relative py-20 px-4 md:px-8 transition-colors duration-500 ${
//         isDarkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">           
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className={isDarkMode ? "text-white" : "text-gray-900"}>About </span>
//             <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
//           </h2>
//         </motion.div>

//         {/* Two Column Layout */}
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
//           {/* Left Column - Content */}
//           <div className="lg:w-2/3">
//             {/* Bio */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="mb-12"
//             >
//               <p className={`text-lg leading-relaxed ${
//                 isDarkMode ? "text-gray-300" : "text-gray-600"
//               }`}>
//                 I'm Pradeep Nigam, a self-taught coder with a passion for building interactive web apps,
//                 exploring new technologies, and solving challenging problems. I enjoy crafting clean
//                 and responsive user interfaces while keeping performance and usability in mind.
//               </p>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-3 gap-4 mb-12"
//             >
              
//             </motion.div>

//             {/* Passions */}
//             <div className="mb-12">
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
//               >
//                 What I Love
//               </motion.h3>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {PASSIONS.map((passion, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: idx * 0.1 }}
//                     viewport={{ once: true }}
//                     className={`p-5 rounded-lg text-center border transition-all duration-300 hover:shadow-lg ${
//                       isDarkMode
//                         ? "border-gray-800 bg-gray-800/50 hover:border-gray-700"
//                         : "border-gray-200 bg-white hover:border-gray-300"
//                     }`}
//                   >
//                     <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600`}>
//                       <passion.icon size={20} className="text-white" />
//                     </div>
//                     <h4 className={`text-base font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                       {passion.title}
//                     </h4>
//                     <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//                       {passion.description}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Skills */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                 Hobbies / Passion
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {SKILLS.map((skill, idx) => (
//                   <motion.span
//                     key={idx}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: idx * 0.05 }}
//                     viewport={{ once: true }}
//                     className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer border transition-all duration-300 hover:scale-105 ${
//                       isDarkMode
//                         ? "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
//                         : "border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-400"
//                     }`}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Timeline */}
//           <div className="lg:w-1/3">
//             <motion.h3
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`text-2xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}
//             >
//               My Journey
//             </motion.h3>

//             <div className="relative">
//               {/* Vertical line */}
//               <div className={`absolute left-4 top-0 w-0.5 h-full ${
//                 isDarkMode ? "bg-gray-800" : "bg-gray-200"
//               }`} />

//               {JOURNEY_STEPS.map((step, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   viewport={{ once: true }}
//                   className="relative pl-12 pb-10 last:pb-0"
//                 >
//                   {/* Icon */}
//                   <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${step.color} shadow-md`}>
//                     <step.icon size={14} className="text-white" />
//                   </div>

//                   {/* Content */}
//                   <div
//                     className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
//                       isDarkMode
//                         ? "border-gray-800 bg-gray-800/50 hover:border-gray-700"
//                         : "border-gray-200 bg-white hover:border-gray-300"
//                     }`}
//                   >
//                     <span className={`text-xs font-semibold ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
//                       {}
//                     </span>
//                     <h4 className={`text-base font-semibold mt-1 mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                       {step.title}
//                     </h4>
//                     <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//                       {step.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../../utils/data";
import { Sparkles, Code, Heart, Star, Calendar, Briefcase, Award, Users, Coffee, Music, BookOpen, Plane, Gamepad } from "lucide-react";

export default function AboutSection() {
  const { isDarkMode } = useTheme();

  // Skills/Hobbies data
  const SKILLS = [
    { name: "Reading", icon: BookOpen, color: "blue" },
    { name: "Music", icon: Music, color: "purple" },
    { name: "Travel", icon: Plane, color: "green" },
    { name: "Gaming", icon: Gamepad, color: "orange" },
    { name: "Coffee", icon: Coffee, color: "brown" }
  ];

  // Stats data
  const STATS = [
    { label: "Projects Completed", value: "25+", icon: Code, color: "blue" },
    { label: "Years Experience", value: "1+", icon: Calendar, color: "purple" },
    
    { label: "Certifications", value: "6+", icon: Award, color: "orange" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
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
      id="about"
      className={`relative py-20 md:py-24 lg:py-28 px-4 md:px-8 transition-all duration-500 overflow-hidden ${
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
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-500 font-mono text-sm mb-4 backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            <span className="tracking-wider">ABOUT ME</span>
          </div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className={`mt-4 max-w-2xl mx-auto text-base md:text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Get to know me better - my journey, passions, and what drives me
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="lg:w-2/3">
            {/* Bio */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? "bg-gray-900/50 border border-gray-800" 
                  : "bg-white/50 border border-gray-100 shadow-lg"
              } backdrop-blur-sm`}>
                <p className={`text-base md:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  I'm <span className="font-semibold text-blue-500">Pradeep Nigam</span>, a passionate Full Stack Developer 
                  with a love for building interactive web applications. I thrive on solving challenging problems 
                  and creating clean, responsive user interfaces that deliver exceptional user experiences. 
                  Always eager to learn and explore new technologies, I believe in writing clean, maintainable code 
                  that makes a difference.
                </p>
              </div>
            </motion.div>

            {/* Stats Section - Matching Hero */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50"
                      : "bg-white/50 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div className={`inline-flex p-2 rounded-lg bg-${stat.color}-500/10 mb-2`}>
                    <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
                  </div>
                  <div className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Passions */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Heart className="w-6 h-6 text-red-500" />
                What I Love
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {PASSIONS && PASSIONS.map((passion, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`p-5 rounded-xl text-center border transition-all duration-300 hover:shadow-xl ${
                      isDarkMode
                        ? "border-gray-800 bg-gray-900/50 hover:border-blue-500/50"
                        : "border-gray-100 bg-white/50 hover:border-blue-200 backdrop-blur-sm"
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg`}>
                      <passion.icon size={20} className="text-white" />
                    </div>
                    <h4 className={`text-base font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {passion.title}
                    </h4>
                    <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {passion.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Hobbies/Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                <Star className="w-6 h-6 text-yellow-500" />
                Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer border transition-all duration-300 ${
                      isDarkMode
                        ? "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-blue-500 hover:text-white"
                        : "border-gray-200 bg-white/50 text-gray-700 hover:border-blue-300 hover:bg-white"
                    }`}
                  >
                    <skill.icon size={14} className={`text-${skill.color}-500`} />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:w-1/3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-2xl font-bold mb-8 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <Calendar className="w-6 h-6 text-blue-500" />
              My Journey
            </motion.h3>

            <div className="relative">
              {/* Vertical line */}
              <div className={`absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 ${
                isDarkMode ? "opacity-30" : "opacity-50"
              }`} />

              {JOURNEY_STEPS && JOURNEY_STEPS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Icon with pulse effect */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                    className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${step.color} shadow-lg z-10`}
                  >
                    <step.icon size={14} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                      isDarkMode
                        ? "border-gray-800 bg-gray-900/50 hover:border-blue-500/50"
                        : "border-gray-100 bg-white/50 hover:border-blue-200 backdrop-blur-sm"
                    }`}
                  >
                    {step.year && (
                      <span className={`text-xs font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                        {step.year}
                      </span>
                    )}
                    <h4 className={`text-base font-semibold mt-1 mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {step.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all duration-300"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}