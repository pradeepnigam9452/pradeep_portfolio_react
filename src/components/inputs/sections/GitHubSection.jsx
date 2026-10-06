import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { useTheme as useThemeInternal } from "../../../context/ThemeContext";
import { Github, Linkedin, Mail, Code2, Download, ExternalLink, BarChart2, GitCommit, Star, GitFork } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const GITHUB_STATS = [
  { label: "Projects Built", value: "15+", icon: GitFork, color: "text-blue-500" },
  { label: "Internships", value: "2", icon: Star, color: "text-yellow-500" },
  { label: "Technologies", value: "10+", icon: Code2, color: "text-purple-500" },
  { label: "LeetCode Problems", value: "100+", icon: BarChart2, color: "text-orange-500" },
];

const PROFILES = [
  {
    label: "GitHub",
    handle: "pradeepnigam9452",
    url: "https://github.com/pradeepnigam9452",
    icon: Github,
    color: "text-white",
    bg: isDark => isDark ? "bg-gray-800 border-gray-700" : "bg-gray-900 border-gray-800",
    btnBg: "bg-gray-900 hover:bg-gray-800",
    desc: "Open source projects & code",
  },
  {
    label: "LeetCode",
    handle: "pradeep_nigam",
    url: "https://leetcode.com/u/pradeep_nigam/",
    icon: Code2,
    color: "text-orange-500",
    bg: isDark => isDark ? "bg-orange-500/10 border-orange-500/20" : "bg-orange-50 border-orange-200",
    btnBg: "bg-orange-500 hover:bg-orange-600",
    desc: "Data structures & algorithms",
  },
  {
    label: "LinkedIn",
    handle: "pradeep-nigam-601a85269",
    url: "https://linkedin.com/in/pradeep-nigam-601a85269",
    icon: Linkedin,
    color: "text-blue-500",
    bg: isDark => isDark ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    desc: "Professional network & work history",
  },
];

// Simple GitHub contributions grid (static visual)
function ContributionGrid({ isDarkMode }) {
  const weeks = 26;
  const days = 7;
  // Randomly generate a visually pleasing contribution pattern
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const base = Math.random();
      const seed = (w * 7 + d) % 10;
      return base < 0.35 ? 0 : base < 0.55 ? 1 : base < 0.72 ? 2 : base < 0.88 ? 3 : 4;
    })
  );

  const colors = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  const palette = isDarkMode ? colors.dark : colors.light;

  return (
    <div className="flex gap-1">
      {grid.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-1">
          {week.map((val, di) => (
            <div
              key={di}
              title={`${val} contributions`}
              style={{ background: palette[val] }}
              className="w-2.5 h-2.5 rounded-sm"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

const GitHubSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="github"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#07111e]" : "bg-white"
      }`}
      aria-label="Developer activity section"
    >
      <div className="max-w-6xl mx-auto relative z-10">
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
              isDarkMode ? "border-gray-600 bg-gray-800/60 text-gray-400" : "border-gray-300 bg-gray-100 text-gray-600"
            }`}>
              <Github size={12} />
              Developer Activity
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Code &{" "}
            <span className="bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent">
              Contributions
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Building consistently, learning daily.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {GITHUB_STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl border text-center transition-all duration-300 ${
                  isDarkMode ? "bg-gray-900/60 border-gray-800 hover:border-gray-600" : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                <Icon size={20} className={`${s.color} mx-auto mb-2`} />
                <div className={`text-2xl font-extrabold mb-0.5 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {s.value}
                </div>
                <div className={`text-xs font-medium ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contribution grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className={`rounded-2xl border p-6 mb-14 overflow-x-auto ${
            isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <GitCommit size={16} className={isDarkMode ? "text-gray-400" : "text-gray-600"} />
            <span className={`text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Contribution Activity
            </span>
            <a
              href="https://github.com/pradeepnigam9452"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-auto text-xs ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
            >
              View on GitHub →
            </a>
          </div>
          <ContributionGrid isDarkMode={isDarkMode} />
          <div className={`flex items-center gap-1.5 mt-3 text-xs ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
            <span>Less</span>
            {(isDarkMode
              ? ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
              : ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
            ).map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Profile links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PROFILES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 ${
                  isDarkMode ? "bg-gray-900/60 border-gray-800 hover:border-gray-600 hover:shadow-xl" : "bg-white border-gray-200 shadow-sm hover:shadow-xl"
                }`}
              >
                <Icon size={28} className={`${p.color} mb-3`} />
                <span className={`text-base font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {p.label}
                </span>
                <span className={`text-xs mb-3 font-mono ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                  @{p.handle}
                </span>
                <span className={`text-xs mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {p.desc}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  <ExternalLink size={11} />
                  Visit Profile
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
