import { motion } from "framer-motion";
import { Brain, ArrowDown, Sparkles, Code2, Zap, Database, Bot, Network, Cpu } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const AI_ROADMAP = [
  {
    step: 1,
    title: "Python",
    desc: "Core language for AI/ML development",
    icon: Code2,
    status: "learning",
    color: "#3b82f6",
  },
  {
    step: 2,
    title: "FastAPI",
    desc: "High-performance Python API framework",
    icon: Zap,
    status: "learning",
    color: "#8b5cf6",
  },
  {
    step: 3,
    title: "Machine Learning",
    desc: "Fundamentals, algorithms & model training",
    icon: Cpu,
    status: "next",
    color: "#ec4899",
  },
  {
    step: 4,
    title: "Large Language Models",
    desc: "Understanding transformer architectures & LLMs",
    icon: Brain,
    status: "next",
    color: "#f97316",
  },
  {
    step: 5,
    title: "RAG Systems",
    desc: "Retrieval-Augmented Generation & vector databases",
    icon: Database,
    status: "planned",
    color: "#10b981",
  },
  {
    step: 6,
    title: "AI Agents",
    desc: "Building autonomous agents with LangChain/CrewAI",
    icon: Bot,
    status: "planned",
    color: "#06b6d4",
  },
  {
    step: 7,
    title: "Production AI Apps",
    desc: "Shipping AI-powered full-stack applications",
    icon: Network,
    status: "goal",
    color: "#a855f7",
  },
];

const STATUS_STYLE = {
  learning: { label: "In Progress", dot: "bg-blue-500 animate-pulse", text: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  next: { label: "Up Next", dot: "bg-yellow-400", text: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  planned: { label: "Planned", dot: "bg-gray-500", text: "text-gray-400", bg: "bg-gray-500/10 border-gray-500/20" },
  goal: { label: "End Goal", dot: "bg-purple-500 animate-pulse", text: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
};

const AIJourneySection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="ai-journey"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#060b18]" : "bg-[#f0f4ff]"
      }`}
      aria-label="AI Journey section"
    >
      {/* Special background for AI section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hexagon grid (simulated with radial gradient) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDarkMode
              ? "radial-gradient(rgba(99,102,241,0.1) 1px, transparent 1px)"
              : "radial-gradient(rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Large glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl"
          style={{
            background: isDarkMode
              ? "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
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
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase border ${
                isDarkMode
                  ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-400"
                  : "border-indigo-500/30 bg-indigo-100 text-indigo-700"
              }`}
            >
              <Brain size={12} />
              AI Journey
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-5 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Currently Exploring{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            I'm expanding my full-stack background into AI engineering — focusing on{" "}
            <span className={isDarkMode ? "text-blue-400 font-semibold" : "text-blue-600 font-semibold"}>Python</span>,{" "}
            <span className={isDarkMode ? "text-purple-400 font-semibold" : "text-purple-600 font-semibold"}>FastAPI</span>,{" "}
            <span className={isDarkMode ? "text-pink-400 font-semibold" : "text-pink-600 font-semibold"}>LLM applications</span>,{" "}
            RAG systems, and AI-powered products.
          </motion.p>
        </motion.div>

        {/* Roadmap */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5"
            style={{
              background: isDarkMode
                ? "linear-gradient(to bottom, rgba(99,102,241,0.6), rgba(168,85,247,0.6), rgba(236,72,153,0.3))"
                : "linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(168,85,247,0.4), rgba(236,72,153,0.2))",
            }}
          />

          <div className="space-y-6">
            {AI_ROADMAP.map((item, idx) => {
              const Icon = item.icon;
              const status = STATUS_STYLE[item.status];
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-0`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-14 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      transition={{ duration: 0.2 }}
                      className={`inline-block w-full max-w-xs rounded-2xl border p-4 transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-900/70 border-gray-700/60 hover:border-gray-500"
                          : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                      }`}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:flex-row-reverse md:justify-end" : ""}`}>
                        <div className="p-2 rounded-lg" style={{ background: `${item.color}18` }}>
                          <Icon size={16} style={{ color: item.color }} />
                        </div>
                        <h3 className={`font-bold text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          {item.title}
                        </h3>
                      </div>
                      <p className={`text-xs leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {item.desc}
                      </p>
                      <span className={`inline-flex items-center gap-1.5 mt-3 px-2 py-0.5 rounded-full text-xs font-semibold border ${status.bg} ${status.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                        {status.label}
                      </span>
                    </motion.div>
                  </div>

                  {/* Center dot – hidden on mobile, absolute on desktop */}
                  <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: item.color, boxShadow: `0 0 16px ${item.color}60` }}
                    >
                      {item.step}
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div
            className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl border ${
              isDarkMode ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-300" : "bg-indigo-50 border-indigo-200 text-indigo-700"
            }`}
          >
            <Sparkles size={18} />
            <p className="text-sm font-medium">
              My full-stack foundation + AI expertise = Building the next generation of intelligent applications
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIJourneySection;
