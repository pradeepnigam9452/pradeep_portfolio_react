// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sun, Moon, X, Menu, Download, Code2 } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

// const NAV_ITEMS = [
//   { label: "Home", id: "home" },
//   { label: "About", id: "about" },
//   { label: "Skills", id: "skills" },
//   { label: "Experience", id: "experience" },
//   { label: "Projects", id: "work" },
//   { label: "AI Journey", id: "ai-journey" },
//   { label: "Contact", id: "contact" },
// ];

// const Navbar = () => {
//   const { isDarkMode, toggleDarkMode } = useTheme();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);

//       // Active section detection
//       const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
//       let current = "home";
//       sections.forEach((section) => {
//         if (window.scrollY >= section.offsetTop - 120) {
//           current = section.id;
//         }
//       });
//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = useCallback((id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       const offset = 80;
//       const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
//       window.scrollTo({ top, behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   }, []);

//   const navBg = scrolled
//     ? isDarkMode
//       ? "rgba(10, 15, 30, 0.85)"
//       : "rgba(255, 255, 255, 0.85)"
//     : "transparent";

//   const navBorder = scrolled
//     ? isDarkMode
//       ? "rgba(255, 255, 255, 0.06)"
//       : "rgba(0, 0, 0, 0.06)"
//     : "transparent";

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
//         style={{
//           background: navBg,
//           borderBottom: `1px solid ${navBorder}`,
//           backdropFilter: scrolled ? "blur(20px)" : "none",
//           WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
//           transition: "all 0.3s ease",
//         }}
//         className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-18">
//           {/* Logo */}
//           <motion.button
//             onClick={() => scrollToSection("home")}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center gap-2.5 cursor-pointer"
//             aria-label="Go to home"
//           >
//             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
//               <Code2 size={16} className="text-white" />
//             </div>
//             <div className="hidden sm:flex flex-col leading-none">
//               <span className={`text-sm font-bold tracking-wide ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                 Pradeep Nigam
//               </span>
//               <span className={`text-[10px] font-mono ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
//                 Full Stack Developer
//               </span>
//             </div>
//           </motion.button>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-1">
//             {NAV_ITEMS.map((item) => {
//               const isActive = activeSection === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
//                     isActive
//                       ? isDarkMode
//                         ? "text-white"
//                         : "text-gray-900"
//                       : isDarkMode
//                         ? "text-gray-400 hover:text-white"
//                         : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeSection"
//                       className={`absolute inset-0 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-gray-900/8"}`}
//                       transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                     />
//                   )}
//                   <span className="relative z-10">{item.label}</span>
//                   {isActive && (
//                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Right Actions */}
//           <div className="flex items-center gap-2">
//             {/* Theme Toggle */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleDarkMode}
//               aria-label="Toggle theme"
//               className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
//                 isDarkMode
//                   ? "text-gray-400 hover:text-white hover:bg-white/10"
//                   : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//               }`}
//             >
//               {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </motion.button>

//             {/* Resume Button – Desktop */}
//             <motion.a
//               href="/Pradeep_Nigam.pdf"
//               download="Pradeep_Nigam_Resume.pdf"
//               whileHover={{ scale: 1.03, y: -1 }}
//               whileTap={{ scale: 0.97 }}
//               className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 cursor-pointer"
//             >
//               <Download size={14} />
//               Resume
//             </motion.a>

//             {/* Mobile Hamburger */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle mobile menu"
//               aria-expanded={isMenuOpen}
//               className={`md:hidden p-2 rounded-lg transition-all duration-200 cursor-pointer ${
//                 isDarkMode
//                   ? "text-gray-400 hover:text-white hover:bg-white/10"
//                   : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//               }`}
//             >
//               <AnimatePresence mode="wait">
//                 {isMenuOpen ? (
//                   <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
//                     <X size={20} />
//                   </motion.div>
//                 ) : (
//                   <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
//                     <Menu size={20} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMenuOpen(false)}
//               className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
//             />
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className={`fixed right-0 top-0 bottom-0 z-50 w-72 md:hidden flex flex-col ${
//                 isDarkMode ? "bg-gray-950 border-l border-gray-800" : "bg-white border-l border-gray-100 shadow-2xl"
//               }`}
//             >
//               {/* Mobile header */}
//               <div className={`flex items-center justify-between px-6 py-4 border-b ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
//                 <span className={`font-bold text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>Navigation</span>
//                 <button onClick={() => setIsMenuOpen(false)} className={`p-1.5 rounded-lg ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`}>
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Nav Items */}
//               <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
//                 {NAV_ITEMS.map((item, i) => {
//                   const isActive = activeSection === item.id;
//                   return (
//                     <motion.button
//                       key={item.id}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.05 }}
//                       onClick={() => scrollToSection(item.id)}
//                       className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
//                         isActive
//                           ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
//                           : isDarkMode
//                             ? "text-gray-400 hover:text-white hover:bg-white/8"
//                             : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                       }`}
//                     >
//                       {item.label}
//                     </motion.button>
//                   );
//                 })}
//               </nav>

//               {/* Mobile Resume */}
//               <div className={`px-4 py-6 border-t ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
//                 <a
//                   href="/Pradeep_Nigam.pdf"
//                   download="Pradeep_Nigam_Resume.pdf"
//                   className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <Download size={16} />
//                   Download Resume
//                 </a>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, X, Menu, Download, Code2, ExternalLink, FileText } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "work" },
  { label: "AI Journey", id: "ai-journey" },
  { label: "Contact", id: "contact" },
];

const RESUME_URL = "/Pradeep_Nigam.pdf";
const RESUME_FILENAME = "Pradeep_Nigam_Resume.pdf";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  /* ------------------------------ Scroll ------------------------------ */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      ).filter(Boolean);
      let current = "home";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------- Lock body scroll when modal open ------------- */
  useEffect(() => {
    document.body.style.overflow = isResumeOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isResumeOpen]);

  /* --------------------- Close modal on Escape key ------------------- */
  useEffect(() => {
    if (!isResumeOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsResumeOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isResumeOpen]);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  const openResume = useCallback(() => {
    setIsResumeOpen(true);
    setIsMenuOpen(false);
  }, []);

  const navBg = scrolled
    ? isDarkMode
      ? "rgba(10, 15, 30, 0.85)"
      : "rgba(255, 255, 255, 0.85)"
    : "transparent";

  const navBorder = scrolled
    ? isDarkMode
      ? "rgba(255, 255, 255, 0.06)"
      : "rgba(0, 0, 0, 0.06)"
    : "transparent";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: navBg,
          borderBottom: `1px solid ${navBorder}`,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.3s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Code2 size={16} className="text-white" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className={`text-sm font-bold tracking-wide ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Pradeep Nigam
              </span>
              <span className={`text-[10px] font-mono ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                Full Stack Developer
              </span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isDarkMode
                        ? "text-white"
                        : "text-gray-900"
                      : isDarkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-gray-900/8"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Resume Button – Desktop (now opens modal) */}
            <motion.button
              onClick={openResume}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 cursor-pointer"
            >
              <FileText size={14} />
              Resume
            </motion.button>

            {/* Mobile Hamburger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed right-0 top-0 bottom-0 z-50 w-72 md:hidden flex flex-col ${
                isDarkMode ? "bg-gray-950 border-l border-gray-800" : "bg-white border-l border-gray-100 shadow-2xl"
              }`}
            >
              <div className={`flex items-center justify-between px-6 py-4 border-b ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
                <span className={`font-bold text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>Navigation</span>
                <button onClick={() => setIsMenuOpen(false)} className={`p-1.5 rounded-lg ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`}>
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                          : isDarkMode
                            ? "text-gray-400 hover:text-white hover:bg-white/8"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>

              <div className={`px-4 py-6 border-t ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
                <button
                  onClick={openResume}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200"
                >
                  <FileText size={16} />
                  View Resume
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ============================ Resume Modal ========================= */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative z-10 flex flex-col w-full max-w-5xl h-[92vh] sm:h-[90vh] rounded-2xl overflow-hidden shadow-2xl ${
                isDarkMode
                  ? "bg-gray-950 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              {/* Modal header */}
              <div
                className={`flex items-center justify-between px-4 sm:px-5 py-3 border-b ${
                  isDarkMode ? "border-gray-800" : "border-gray-100"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                    <FileText size={15} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold truncate ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Pradeep Nigam — Resume
                    </p>
                    <p className={`text-[10px] font-mono truncate ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                      PDF · Updated 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Open in new tab */}
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                      isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <ExternalLink size={13} />
                    Open
                  </a>

                  {/* Download */}
                  <a
                    href={RESUME_URL}
                    download={RESUME_FILENAME}
                    className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition"
                  >
                    <Download size={13} />
                    <span className="hidden sm:inline">Download</span>
                    <span className="sm:hidden">PDF</span>
                  </a>

                  {/* Close */}
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    aria-label="Close resume preview"
                    className={`p-2 rounded-lg transition cursor-pointer ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* PDF preview (native browser viewer) */}
              <div className={`flex-1 relative ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
                <iframe
                  src={`${RESUME_URL}#toolbar=1&navpanes=0&view=FitH`}
                  title="Resume preview"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Footer hint (mobile) */}
              <div
                className={`flex sm:hidden items-center justify-center px-4 py-2 border-t text-[11px] font-mono ${
                  isDarkMode
                    ? "border-gray-800 text-gray-500"
                    : "border-gray-100 text-gray-500"
                }`}
              >
                Tap Download to save the PDF
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;