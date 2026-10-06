import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  Github, Linkedin, Mail, Download, ArrowRight, Sparkles, ExternalLink, ChevronDown
} from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import PROFILE_PIC from "../../../assets/images/mee.jpeg";

const ROLES = ["Full Stack Developer", "MERN Stack Developer", "React.js Expert", "Backend Engineer"];

const CORE_TECH = [
  { label: "JavaScript", color: "#f7df1e", bg: "rgba(247,223,30,0.12)" },
  { label: "React", color: "#61dafb", bg: "rgba(97,218,251,0.12)" },
  { label: "Node.js", color: "#68a063", bg: "rgba(104,160,99,0.12)" },
  { label: "Express.js", color: "#888", bg: "rgba(136,136,136,0.12)" },
  { label: "MongoDB", color: "#47a248", bg: "rgba(71,162,72,0.12)" },
  { label: "Next.js", color: "#ccc", bg: "rgba(204,204,204,0.12)" },
  { label: "Tailwind", color: "#38bdf8", bg: "rgba(56,189,248,0.12)" },
  { label: "Python", color: "#3776ab", bg: "rgba(55,118,171,0.12)" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
  { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
];

// Typewriter hook
function useTypewriter(words, speed = 90, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    if (!deleting && sub === word.length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setSub((s) => s + (deleting ? -1 : 1));
      setDisplay(word.substring(0, sub + (deleting ? -1 : 1)));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [sub, deleting, idx, words, speed, pause]);

  return display;
}

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const roleText = useTypewriter(ROLES, 90, 2200);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12 px-4 md:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-[#080d1a]" : "bg-[#f8fafc]"
      }`}
      aria-label="Hero section"
    >
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${isDarkMode ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.1)"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: isDarkMode
              ? "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: isDarkMode
              ? "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* ── LEFT: Content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Available badge */}
            <motion.div variants={item} className="mb-6">
              <span
                className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border ${
                  isDarkMode
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-emerald-500/30 bg-emerald-50 text-emerald-700"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Label */}
            <motion.div variants={item} className="mb-3">
              <span
                className={`text-xs font-mono font-semibold tracking-[0.2em] uppercase ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                — Full Stack Developer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Pradeep{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                Nigam
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={item} className="mb-5 h-8">
              <span
                className={`text-lg md:text-xl font-mono font-medium ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {"</"}&nbsp;{roleText}
                <span className="animate-pulse ml-0.5 border-r-2 border-blue-500 h-5 inline-block" />
                &nbsp;{">"}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className={`text-base md:text-lg leading-relaxed mb-6 max-w-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Building scalable web applications, intuitive user experiences, and modern backend
              systems with <span className={isDarkMode ? "text-blue-400 font-medium" : "text-blue-600 font-medium"}>MERN</span>,{" "}
              <span className={isDarkMode ? "text-purple-400 font-medium" : "text-purple-600 font-medium"}>Next.js</span>,{" "}
              <span className={isDarkMode ? "text-emerald-400 font-medium" : "text-emerald-600 font-medium"}>Python</span>, and AI technologies.
            </motion.p>

            {/* Core Tech */}
            <motion.div variants={item} className="mb-8">
              <p className={`text-xs font-mono font-semibold mb-3 tracking-widest uppercase ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {CORE_TECH.map((t) => (
                  <motion.span
                    key={t.label}
                    whileHover={prefersReduced ? {} : { scale: 1.05, y: -2 }}
                    style={{ color: t.color, background: t.bg, borderColor: `${t.color}30` }}
                    className="px-3 py-1 rounded-full text-xs font-semibold border cursor-default transition-all duration-200"
                  >
                    {t.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <motion.button
                whileHover={prefersReduced ? {} : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("work")}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                href="/Pradeep_Nigam.pdf"
                download="Pradeep_Nigam_Resume.pdf"
                whileHover={prefersReduced ? {} : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border transition-all duration-200 cursor-pointer ${
                  isDarkMode
                    ? "border-gray-700 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10"
                    : "border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50"
                }`}
              >
                <Download size={16} />
                Download Resume
              </motion.a>

              <motion.button
                whileHover={prefersReduced ? {} : { scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("contact")}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border transition-all duration-200 cursor-pointer ${
                  isDarkMode
                    ? "border-gray-700 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10"
                    : "border-gray-300 text-gray-700 hover:text-purple-600 hover:border-purple-400 hover:bg-purple-50"
                }`}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={prefersReduced ? {} : { scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${
                    isDarkMode
                      ? "border-gray-700/80 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10"
                      : "border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
              <a
                href="https://leetcode.com/u/pradeep_nigam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all duration-200 ${
                  isDarkMode
                    ? "border-gray-700/80 text-orange-400 hover:text-orange-300 hover:border-orange-500/50 hover:bg-orange-500/10"
                    : "border-gray-200 text-orange-500 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50"
                }`}
              >
                LC
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow behind card */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))",
                  transform: "scale(0.9)",
                }}
              />

              {/* Main Profile Card */}
              <motion.div
                whileHover={prefersReduced ? {} : { y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl overflow-hidden border shadow-2xl ${
                  isDarkMode
                    ? "border-gray-700/60 bg-gray-900/80"
                    : "border-gray-200 bg-white shadow-gray-200/80"
                }`}
                style={{ backdropFilter: "blur(20px)" }}
              >
                {/* Profile Image */}
                <div className="relative">
                  <div className="h-72 sm:h-80 overflow-hidden">
                    <motion.img
                      src={PROFILE_PIC}
                      alt="Pradeep Nigam – Full Stack Developer"
                      loading="eager"
                      className="w-full h-full object-cover object-top"
                      whileHover={prefersReduced ? {} : { scale: 1.04 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* Available badge on image */}
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-white shadow-lg backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Available
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className={`text-xs font-mono font-semibold uppercase tracking-widest mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                        Full Stack Developer
                      </p>
                      <h2 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Pradeep Nigam
                      </h2>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className={`grid grid-cols-3 gap-3 pt-3 border-t ${isDarkMode ? "border-gray-700/60" : "border-gray-100"}`}>
                    {[
                      { label: "Projects", value: "15+" },
                      { label: "Experience", value: "1+ yr" },
                      { label: "Internships", value: "2" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{s.value}</div>
                        <div className={`text-[10px] font-medium ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating tech badges */}
              <motion.div
                animate={prefersReduced ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -left-10 top-16 px-3 py-2 rounded-xl text-xs font-semibold border shadow-lg ${
                  isDarkMode ? "bg-gray-900/90 border-gray-700 text-blue-400" : "bg-white border-gray-200 text-blue-600 shadow-lg"
                }`}
                style={{ backdropFilter: "blur(12px)" }}
              >
                ⚛️ React.js
              </motion.div>
              <motion.div
                animate={prefersReduced ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute -right-8 top-24 px-3 py-2 rounded-xl text-xs font-semibold border shadow-lg ${
                  isDarkMode ? "bg-gray-900/90 border-gray-700 text-green-400" : "bg-white border-gray-200 text-green-600 shadow-lg"
                }`}
                style={{ backdropFilter: "blur(12px)" }}
              >
                🟢 Node.js
              </motion.div>
              <motion.div
                animate={prefersReduced ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute -left-6 bottom-32 px-3 py-2 rounded-xl text-xs font-semibold border shadow-lg ${
                  isDarkMode ? "bg-gray-900/90 border-gray-700 text-emerald-400" : "bg-white border-gray-200 text-emerald-600 shadow-lg"
                }`}
                style={{ backdropFilter: "blur(12px)" }}
              >
                🍃 MongoDB
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={prefersReduced ? {} : { opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`text-xs font-mono ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>scroll</span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} className={isDarkMode ? "text-gray-600" : "text-gray-400"} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;