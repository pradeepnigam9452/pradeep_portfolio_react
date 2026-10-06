import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Code, Database, Wrench, Brain, Terminal } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { SKILLS_CATEGORIES } from "../../../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const CATEGORY_ICONS = {
  frontend: Code,
  backend: Terminal,
  database: Database,
  programming: Layers,
  tools: Wrench,
  ai: Brain,
};

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section
      id="skills"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#07111e]" : "bg-white"
      }`}
      aria-label="Skills section"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isDarkMode
              ? "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: isDarkMode
              ? "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              <Layers size={12} />
              Technical Skills
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            A diverse toolkit of modern technologies I use to build production-ready applications.
          </motion.p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS_CATEGORIES.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[cat.id] || Code;
            const isActive = activeCategory === cat.id;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`relative rounded-2xl border p-6 transition-all duration-300 cursor-default group ${
                  isDarkMode
                    ? `bg-gray-900/60 border-gray-800 hover:border-gray-600 ${isActive ? "shadow-xl shadow-blue-500/10" : ""}`
                    : `bg-white border-gray-200 hover:border-gray-300 shadow-sm ${isActive ? "shadow-xl shadow-blue-500/10" : ""}`
                }`}
                style={{
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: `${cat.color}18` }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {cat.title}
                    </h3>
                    <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                      {cat.skills.length} technologies
                    </p>
                  </div>

                  {/* Colored accent line */}
                  <div
                    className={`ml-auto w-12 h-0.5 rounded-full bg-gradient-to-r ${cat.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: catIdx * 0.06 + i * 0.04 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default ${
                        isDarkMode
                          ? "bg-gray-800/70 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom gradient strip */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            Always learning. Always building. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;