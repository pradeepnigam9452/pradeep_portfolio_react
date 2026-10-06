import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Target, Rocket, ChevronDown, MapPin, GraduationCap, Code2, Sparkles } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const TABS = [
  { id: "about", label: "About Me", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "focus", label: "Current Focus", icon: Target },
  { id: "goal", label: "Career Goal", icon: Rocket },
];

const ABOUT_CONTENT = {
  about: {
    title: "Who I Am",
    body: `I'm Pradeep Nigam, a Full Stack Developer from Bhopal, India with hands-on experience building production-grade MERN stack applications. I completed my B.Tech in Computer Science & Engineering from IES Institute of Technology and Management, Bhopal.

I specialize in building complete web applications — from designing intuitive UIs with React.js to architecting scalable REST APIs with Node.js and Express, and managing data with MongoDB.`,
    highlights: [
      "2 Internships in Full Stack Development",
      "15+ Projects delivered",
      "B.Tech CSE Graduate (2026)",
      "Based in Bhopal, India",
    ],
    icon: User,
  },
  experience: {
    title: "What I've Built",
    body: `My experience spans the full web development stack. I've built production applications ranging from company portfolio platforms and property discovery sites to e-commerce stores and spiritual booking platforms.`,
    highlights: [
      "MERN stack web applications",
      "REST APIs & authentication systems",
      "Admin dashboards & management tools",
      "E-commerce & food ordering apps",
      "Responsive React interfaces",
      "Database-driven applications",
    ],
    icon: Briefcase,
  },
  focus: {
    title: "What I'm Learning",
    body: `While I continue building production-grade MERN applications professionally, I'm actively expanding into AI engineering — studying Python, FastAPI, and how LLMs work under the hood.`,
    highlights: [
      "Python for backend development",
      "FastAPI for high-performance APIs",
      "Large Language Models (LLMs)",
      "RAG systems & vector databases",
      "AI-powered application development",
      "Generative AI tools & APIs",
    ],
    icon: Target,
  },
  goal: {
    title: "Where I'm Going",
    body: `My goal is to grow into an AI-integrated Full Stack Engineer — someone who can build complete web applications and also incorporate intelligent AI features. I want to work at companies where I can contribute to cutting-edge products.`,
    highlights: [
      "AI-integrated full-stack applications",
      "Production LLM deployments",
      "Building AI-powered products",
      "Contributing to open source",
      "Growing into a Tech Lead role",
    ],
    icon: Rocket,
  },
};

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("about");
  const content = ABOUT_CONTENT[activeTab];

  return (
    <section
      id="about"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#080d1a]" : "bg-[#f8fafc]"
      }`}
      aria-label="About section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isDarkMode
              ? "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase border ${
              isDarkMode ? "border-purple-500/30 bg-purple-500/10 text-purple-400" : "border-purple-500/30 bg-purple-50 text-purple-700"
            }`}>
              <User size={12} />
              About Me
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            The developer{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              behind the code
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Full Stack Developer • MERN Specialist • AI Enthusiast
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl border p-2 ${
              isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 text-left cursor-pointer mb-1 last:mb-0 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-white/6"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-white" : ""} />
                  {tab.label}
                </button>
              );
            })}

            {/* Quick Info */}
            <div className={`mt-4 pt-4 border-t space-y-3 ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
              <div className={`flex items-center gap-2 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                <MapPin size={12} className="text-blue-500" />
                Bhopal, Madhya Pradesh
              </div>
              <div className={`flex items-center gap-2 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                <GraduationCap size={12} className="text-purple-500" />
                B.Tech CSE, IES University
              </div>
              <div className={`flex items-center gap-2 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                <Code2 size={12} className="text-green-500" />
                MERN Stack Expert
              </div>
              <div className={`flex items-center gap-2 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                <Sparkles size={12} className="text-yellow-500" />
                Exploring AI Engineering
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className={`rounded-2xl border p-6 md:p-8 ${
                isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200 shadow-sm"
              }`}>
                {/* Content Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${isDarkMode ? "bg-blue-500/10" : "bg-blue-50"}`}>
                    <content.icon size={20} className="text-blue-500" />
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {content.title}
                  </h3>
                </div>

                {/* Body text */}
                <p className={`text-base leading-relaxed mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {content.body}
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {content.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex items-center gap-2.5 p-3 rounded-xl text-sm ${
                        isDarkMode ? "bg-gray-800/60 text-gray-300" : "bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {h}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;