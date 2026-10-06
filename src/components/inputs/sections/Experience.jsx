import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Check, Sparkles } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { EXPERIENCES } from "../../../data/experience";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const COLOR_MAP = {
  blue: {
    border: "border-blue-500",
    dot: "bg-blue-500",
    ring: "ring-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    badgeLight: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "text-blue-500",
    glow: "rgba(59,130,246,0.1)",
  },
  purple: {
    border: "border-purple-500",
    dot: "bg-purple-500",
    ring: "ring-purple-500/20",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    badgeLight: "bg-purple-50 text-purple-700 border-purple-200",
    icon: "text-purple-500",
    glow: "rgba(139,92,246,0.1)",
  },
  green: {
    border: "border-emerald-500",
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    badgeLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "text-emerald-500",
    glow: "rgba(16,185,129,0.1)",
  },
};

const Experience = () => {
  const { isDarkMode } = useTheme();
  const [expandedId, setExpandedId] = useState(1); // first open by default

  return (
    <section
      id="experience"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#080d1a]" : "bg-[#f8fafc]"
      }`}
      aria-label="Experience section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-3xl"
          style={{
            background: isDarkMode
              ? "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase border ${
              isDarkMode ? "border-blue-500/30 bg-blue-500/10 text-blue-400" : "border-blue-500/30 bg-blue-50 text-blue-700"
            }`}>
              <Briefcase size={12} />
              Experience
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            My hands-on experience building real-world applications and growing as a developer.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-7 top-4 bottom-4 w-px"
            style={{
              background: isDarkMode
                ? "linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(139,92,246,0.3), rgba(16,185,129,0.2))"
                : "linear-gradient(to bottom, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(16,185,129,0.15))",
            }}
          />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => {
              const colors = COLOR_MAP[exp.color] || COLOR_MAP.blue;
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-3 md:left-5 top-6 w-5 h-5 rounded-full ${colors.dot} ring-4 ${colors.ring} flex items-center justify-center z-10`}>
                    {exp.current && (
                      <span className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-40`} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-900/60 border-gray-800 hover:border-gray-600"
                        : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Card Header – always visible */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="w-full text-left p-5 md:p-6 cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          {/* Type badge + current badge */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${
                              isDarkMode ? colors.badge : colors.badgeLight
                            }`}>
                              {exp.type}
                            </span>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                ● Current
                              </span>
                            )}
                          </div>

                          <h3 className={`text-lg md:text-xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                            {exp.position}
                          </h3>

                          <p className={`text-sm font-semibold mb-3 ${colors.icon}`}>
                            {exp.company}
                          </p>

                          {/* Meta */}
                          <div className="flex flex-wrap gap-3">
                            <span className={`flex items-center gap-1.5 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                              <Calendar size={12} className="text-blue-500" />
                              {exp.duration}
                            </span>
                            <span className={`flex items-center gap-1.5 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                              <MapPin size={12} className="text-purple-500" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <div className={`flex-shrink-0 p-1.5 rounded-lg transition-colors duration-200 ${
                          isDarkMode ? "text-gray-500 hover:text-white hover:bg-white/10" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                        }`}>
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className={`px-5 md:px-6 pb-6 border-t ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
                            <p className={`text-sm mt-5 mb-5 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                              {exp.description}
                            </p>

                            {/* Responsibilities */}
                            <h4 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                              Key Responsibilities
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2 mb-5">
                              {exp.responsibilities.map((r, i) => (
                                <div key={i} className={`flex items-start gap-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                  <Check size={13} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                  {r}
                                </div>
                              ))}
                            </div>

                            {/* Tech stack */}
                            <h4 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t) => (
                                <span
                                  key={t}
                                  className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                                    isDarkMode
                                      ? "bg-gray-800 border-gray-700 text-gray-300"
                                      : "bg-gray-50 border-gray-200 text-gray-700"
                                  }`}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-14"
        >
          {[
            { label: "Projects Built", value: "15+" },
            { label: "Internships", value: "2" },
            { label: "Technologies", value: "10+" },
          ].map((s) => (
            <div
              key={s.label}
              className={`text-center p-4 md:p-6 rounded-2xl border ${
                isDarkMode ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <div className={`text-2xl md:text-3xl font-extrabold mb-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}>
                {s.value}
              </div>
              <div className={`text-xs font-medium ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;