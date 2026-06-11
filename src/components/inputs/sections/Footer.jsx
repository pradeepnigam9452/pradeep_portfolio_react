// import { motion } from "framer-motion";
// import { useTheme } from "../../../context/ThemeContext";
// import { Github, Linkedin, Instagram, Mail, ArrowUp,Code } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function FooterSection() {
//   const { isDarkMode } = useTheme();
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const socialLinks = [
//     { icon: Github, url: "https://github.com/pradeepnigam9452", label: "GitHub" },
//     { icon: Linkedin, url: "https://www.linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
//     { icon: Instagram, url: "", label: "Instagram" },
//     { icon: Mail, url: "pradeepnigam9452@gmail.com", label: "Email" },
//   ];

//   return (
//     <footer
//       className={`relative py-14 px-6 transition-colors duration-500 ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       {/* Glowing Line Above Footer */}
//       <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-80" />
//       </div>

//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between relative z-10">
//         {/* Name & Tagline */}
//         <div className="text-left mb-6 md:mb-0 flex items-center gap-2">
//           <Code size={28} className="text-blue-500" /><br/>
//           <div>
//             <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
//              Pradeep Nigam
//             </h3>
//             <p className={`text-sm md:text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
//               Crafting digital experiences with passion & precision.
//             </p>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 items-center w-full md:w-auto">
//           {socialLinks.map((social, idx) => {
//             const Icon = social.icon;
//             return (
//               <a
//                 key={idx}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={social.label}
//                 className={`flex items-center gap-2 transition-colors duration-300 px-2 py-1 rounded ${
//                   isDarkMode
//                     ? "text-gray-200 hover:text-blue-400"
//                     : "text-gray-900 hover:text-blue-600"
//                 }`}
//               >
//                 <Icon size={24} />
//                 <span className="text-sm md:text-base font-medium">{social.label}</span>
//               </a>
//             );
//           })}
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="flex items-center justify-center mt-6 mb-4">
//         <span className="text-blue-500 font-semibold  mx-2">- - - - - / - - - - -</span>
//       </div>

//       {/* Copyright */}
//       <p className={`text-center md:text-lg font-semibold text-center  ${isDarkMode ? "text-gray-400" : "text-gray-800"}`}>
//          Pradeep Nigam. Built with React & Framer Motion
//       </p>
//     </footer>
//   );
// }



import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code, Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const { isDarkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: Github, url: "https://github.com/pradeepnigam9452", label: "GitHub", color: "hover:text-gray-900" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, url: "https://www.instagram.com/un_told_journey?igsh=MTI5em9jdGhubzUxZQ==", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Mail, url: "mailto:pradeepnigam9452@gmail.com", label: "Email", color: "hover:text-red-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer
      className={`relative overflow-hidden transition-all duration-500 ${
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
          className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
        />
      </div>

      {/* Glowing Line Above Footer - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"
        />
      </div>

      <div className="relative z-10 py-12 md:py-16 px-6 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50" />
                <Code size={32} className="relative text-blue-500" strokeWidth={1.5} />
              </motion.div>
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                  Pradeep Nigam
                </h3>
              </div>
            </div>
            <p className={`text-sm md:text-base max-w-md ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Crafting digital experiences with passion, precision, and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Home", "Skills", "Work", "Experience", "About", "Contact"].map((link, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -2, color: "#3b82f6" }}
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm transition-all duration-300 cursor-pointer ${
                    isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                        : "bg-white/50 text-gray-600 hover:bg-white hover:shadow-md"
                    } ${social.color}`}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-blue-500/50"
                : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-blue-500/50"
            }`}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}

        {/* Divider - Enhanced */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full h-px ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />
          </div>
          <div className="relative flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`px-4 py-1 rounded-full text-xs font-mono ${
                isDarkMode
                  ? "bg-gray-800 text-blue-400 border border-gray-700"
                  : "bg-white text-blue-600 border border-gray-200 shadow-sm"
              }`}
            >
              <span className="flex items-center gap-2">
                <Sparkles size={12} className="text-yellow-500" />
                ❯❯❯ CODE WITH PASSION ❮❮❮
                <Sparkles size={12} className="text-yellow-500" />
              </span>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
            © {new Date().getFullYear()} Pradeep Nigam. All rights reserved.
          </p>
          <p className={`text-xs mt-2 flex items-center justify-center gap-1 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
            Built with 
            <Heart size={12} className="text-red-500 animate-pulse" /> 
            using React, TailwindCSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}