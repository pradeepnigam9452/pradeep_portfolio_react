// import { motion } from "framer-motion";
// import { useTheme } from "../../../context/ThemeContext";
// import { Code, Palette, Database, Wrench, Sparkles } from "lucide-react";

// const SKILLS_CATEGORY = [
//   {
//     title: "Frontend Development",
//     icon: Code,
//     gradient: "from-blue-500 to-cyan-500",
//     skills: ["React", "HTML 5", "CSS", "Tailwind CSS", "JavaScript"]
//   },
//   {
//     title: "Design & UX",
//     icon: Palette,
//     gradient: "from-purple-500 to-pink-500",
//     skills: [ "UI/UX Design"]
//   },
//   {
//     title: "Backend & Database",
//     icon: Database,
//     gradient: "from-green-500 to-emerald-500",
//     skills: ["Node.js", "MongoDB", "Express", "Oracle", "MySQL"]
//   },
//   {
//     title: "Tools & DevOps",
//     icon: Wrench,
//     gradient: "from-orange-500 to-red-500",
//     skills: ["Git", "VS Code", "Github", "Webpack"]
//   }
// ];

// export default function SkillsSection() {
//   const { isDarkMode } = useTheme();

//   return (
//     <section 
//       id="skills" 
//       className={`relative py-24 px-4 md:px-8 transition-colors duration-500 overflow-hidden ${
//         isDarkMode 
//           ? "bg-gray-900 text-white" 
//           : "bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Simple Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-5 ${
//           isDarkMode ? "bg-blue-500" : "bg-blue-400"
//         }`} />
//         <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-5 ${
//           isDarkMode ? "bg-purple-500" : "bg-pink-400"
//         }`} />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 mb-4"
//           >
//             <Sparkles className={isDarkMode ? "text-blue-400" : "text-blue-600"} size={24} />
//             <span className={`text-sm uppercase tracking-widest font-semibold ${
//               isDarkMode ? "text-gray-400" : "text-blue-600"
//             }`}>
//               Technical Expertise
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-bold mb-6"
//           >
//             Skills &{" "}
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
//               Technologies
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
//           >
//             A diverse toolkit of modern technologies to create exceptional digital experiences
//           </motion.p>
//         </div>

//         {/* Skills Categories Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//           {SKILLS_CATEGORY.map((category, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
//                 isDarkMode 
//                   ? "bg-gray-800/50 border border-gray-700 hover:border-gray-600" 
//                   : "bg-white border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl"
//               }`}
//             >
//               {/* Icon Header */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
//                   <category.icon className="text-white" size={28} />
//                 </div>
//                 <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                   {category.title}
//                 </h3>
//               </div>

//               {/* Skills Pills */}
//               <div className="flex flex-wrap gap-3 ">
//                 {category.skills.map((skill, skillIdx) => (
//                   <motion.div
//                     key={skillIdx}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
//                     viewport={{ once: true }}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                       isDarkMode
//                         ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
//                         : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                     }`}
//                   >
//                     {skill}
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Gradient Bottom Border */}
//               <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
//             </motion.div>
//           ))}
//         </div>

//         {/* All Technologies Cloud */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className={`rounded-2xl p-8 md:p-12 mb-20 ${
//             isDarkMode 
//               ? "bg-gray-800/30 border border-gray-700" 
//               : "bg-white/50 border border-gray-200 shadow-xl backdrop-blur-sm"
//           }`}
//         >
//           <h3 className={`text-2xl font-bold text-center mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//             Complete Technology Stack I have
//           </h3>
//           <div className="flex flex-wrap justify-center gap-3">
//             {SKILLS_CATEGORY.flatMap(category => category.skills).map((skill, idx) => (
//               <motion.span
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3, delay: idx * 0.03 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.1, y: -3 }}
//                 className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-default ${
//                   isDarkMode 
//                     ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700 shadow-lg" 
//                     : "bg-gradient-to-r from-white to-gray-50 text-gray-800 hover:from-gray-50 hover:to-gray-100 shadow-md border border-gray-200"
//                 }`}
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center mt-20"
//         >
//           <p className={`text-lg mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//             Always learning and exploring new technologies
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block"
//           >
//             <button className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300">
//               Let's Build Something Amazing
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { Code, Palette, Database, Wrench, Sparkles, Zap, Award, TrendingUp } from "lucide-react";

const SKILLS_CATEGORY = [
  {
    title: "Frontend Development",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["React", "HTML 5", "CSS", "Tailwind CSS", "JavaScript", "Next.js"]
  },
  {
    title: "Design & UX",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    skills: ["UI/UX Design", "Responsive Design", "Figma", "Prototyping"]
  },
  {
    title: "Backend & Database",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    skills: ["Node.js", "MongoDB", "Express", "Oracle", "MySQL", "PostgreSQL"]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    gradient: "from-orange-500 to-red-500",
    skills: ["Git", "VS Code", "Github", "Docker", "AWS", "CI/CD"]
  }
];

export default function SkillsSection() {
  const { isDarkMode } = useTheme();

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
      id="skills" 
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
            <span className="tracking-wider">TECHNICAL EXPERTISE</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto text-base md:text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A diverse toolkit of modern technologies to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20"
        >
          {SKILLS_CATEGORY.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                isDarkMode 
                  ? "bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 shadow-lg shadow-black/20" 
                  : "bg-white border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-default ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Gradient Bottom Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* All Technologies Cloud - Matching Hero Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`rounded-2xl p-8 md:p-12 mb-20 ${
            isDarkMode 
              ? "bg-gray-900/50 border border-gray-800 backdrop-blur-sm" 
              : "bg-white/50 border border-gray-100 shadow-xl backdrop-blur-sm"
          }`}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-500" />
              <h3 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Complete Technology Stack
              </h3>
            </div>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Tools and technologies I work with daily
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS_CATEGORY.flatMap(category => category.skills).map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`px-4 md:px-5 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-default ${
                  isDarkMode 
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 shadow-lg border border-gray-700" 
                    : "bg-gradient-to-r from-white to-gray-50 text-gray-800 hover:from-gray-50 hover:to-gray-100 shadow-md border border-gray-200"
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Section - Matching Hero */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {[
            { label: "Technologies Mastered", value: "20+", icon: Code, color: "blue" },
            { label: "Projects Built", value: "25+", icon: Database, color: "purple" },
            { label: "Years Experience", value: "2+", icon: TrendingUp, color: "green" },
            { label: "Certifications", value: "10+", icon: Award, color: "orange" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-4 md:p-6 rounded-2xl text-center transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50"
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
        </motion.div> */}

        {/* Call to Action - Matching Hero Button Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`text-base md:text-lg mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Always learning and exploring new technologies to stay ahead
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all duration-300"
          >
            <span className="relative z-10">Let's Build Something Amazing</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}