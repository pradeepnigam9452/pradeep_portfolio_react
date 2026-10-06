import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, Briefcase, Filter } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { PROJECTS, livePROJECTS } from "../../../utils/data";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

function ProjectCard({ project, index, isDarkMode, isLive = false }) {
  const [hovered, setHovered] = useState(false);
  const tags = Array.isArray(project.tags) ? project.tags : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? "translateY(-6px)" : "translateY(0)", transition: "transform 0.3s ease" }}
      className={`relative rounded-2xl border overflow-hidden group ${
        isDarkMode
          ? "bg-gray-900/60 border-gray-800 hover:border-gray-600"
          : "bg-white border-gray-200 shadow-sm hover:shadow-xl"
      }`}
    >
      {/* Badge */}
      {(isLive || project.featured) && (
        <div className={`absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
          isLive ? "bg-emerald-600" : "bg-gradient-to-r from-yellow-500 to-orange-500"
        }`}>
          {isLive ? <Briefcase size={10} /> : <Rocket size={10} />}
          {isLive ? "Live Project" : "Featured"}
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gray-900/80 flex items-center justify-center gap-4"
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-200"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-white hover:bg-gray-100 text-gray-900"
              }`}
              aria-label={`View ${project.title} source code`}
            >
              <Github size={14} />
              Code
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className={`font-bold text-base mb-1.5 line-clamp-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                isDarkMode ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-600"
              }`}
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              +{tags.length - 4} more
            </span>
          )}
        </div>

        {/* Footer links */}
        <div className={`flex items-center gap-4 pt-4 border-t ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${
                isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              }`}
            >
              <ExternalLink size={12} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Github size={12} />
              Source
            </a>
          )}
          <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
            isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-500"
          }`}>
            {project.category}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const personalProjects = Array.isArray(PROJECTS) ? PROJECTS : [];
  const professionalProjects = Array.isArray(livePROJECTS) ? livePROJECTS : [];
  const categories = ["All", ...new Set(personalProjects.map((p) => p.category))];

  const filtered = filter === "All" ? personalProjects : personalProjects.filter((p) => p.category === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="work"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#07111e]" : "bg-white"
      }`}
      aria-label="Projects section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-96 rounded-full blur-3xl"
          style={{ background: isDarkMode ? "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" : "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)" }}
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
              <Rocket size={12} />
              Projects
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Things I've{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              built
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Real-world applications across the full stack — from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Live Projects */}
        {professionalProjects.length > 0 && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-emerald-500" />
                <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Professional Work
                </h3>
              </div>
              <div className={`flex-1 h-px ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />
              <span className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">Live</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} isDarkMode={isDarkMode} isLive />
              ))}
            </div>
          </div>
        )}

        {/* Personal Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2">
              <Rocket size={18} className="text-blue-500" />
              <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Personal Projects
              </h3>
            </div>
            <div className={`flex-1 h-px ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setShowAll(false); }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : isDarkMode
                      ? "bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                      : "bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400"
                }`}
              >
                {cat === "All" && <Filter size={10} />}
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} isDarkMode={isDarkMode} />
            ))}
          </div>

          {/* Show more / GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-center space-y-4"
          >
            {filtered.length > 6 && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                  isDarkMode
                    ? "border-gray-700 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10"
                    : "border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50"
                }`}
              >
                Show All Projects ({filtered.length})
              </button>
            )}
            <div>
              <a
                href="https://github.com/pradeepnigam9452"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-sm font-semibold rounded-xl border border-gray-700 transition-all duration-200"
              >
                <Github size={16} />
                View All on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}