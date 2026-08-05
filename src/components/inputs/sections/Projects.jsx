// import { motion } from "framer-motion";
// import { useState } from "react";
// import { ExternalLink, Github, Rocket, Star, BriefcaseBusiness } from "lucide-react";
// import { useTheme } from "../../../context/ThemeContext";
// import { PROJECTS, livePROJECTS } from "../../../utils/data";

// function ProjectCard({ project, index, isDarkMode, liveWork = false }) {
//   const tags = Array.isArray(project.tags) ? project.tags : [];

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.08 }}
//       viewport={{ once: true }}
//       className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
//         isDarkMode
//           ? "border border-gray-700/80 bg-gray-800/60 backdrop-blur-sm hover:border-blue-500/50"
//           : "border border-white/50 bg-white/70 shadow-xl backdrop-blur-sm hover:border-blue-400/50"
//       }`}
//     >
//       {(liveWork || project.featured) && (
//         <div
//           className={`absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg ${
//             liveWork
//               ? "bg-gradient-to-r from-emerald-500 to-teal-600"
//               : "bg-gradient-to-r from-yellow-400 to-orange-500"
//           }`}
//         >
//           {liveWork ? <BriefcaseBusiness size={14} /> : <Star size={14} fill="currentColor" />}
//           {liveWork ? "Live Project" : "Featured"}
//         </div>
//       )}

//       <div className="relative h-52 overflow-hidden bg-gray-200">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//           loading="lazy"
//         />
//         <div
//           className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
//             isDarkMode ? "bg-black/70" : "bg-black/50"
//           }`}
//         >
//           {project.liveUrl && (
//             <motion.a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="rounded-full bg-white p-3 text-gray-900 shadow-lg transition-all hover:bg-blue-500 hover:text-white"
//               aria-label={`Open ${project.title}`}
//             >
//               <ExternalLink size={20} />
//             </motion.a>
//           )}
//           {project.githubUrl && (
//             <motion.a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="rounded-full bg-white p-3 text-gray-900 shadow-lg transition-all hover:bg-gray-800 hover:text-white"
//               aria-label={`View ${project.title} source code`}
//             >
//               <Github size={20} />
//             </motion.a>
//           )}
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className={`line-clamp-1 text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//           {project.title}
//         </h3>
//         <p className={`mt-2 line-clamp-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//           {project.description}
//         </p>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.slice(0, 3).map((tag) => (
//             <span
//               key={tag}
//               className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//                 isDarkMode ? "bg-gray-700/80 text-gray-300" : "bg-gray-100/80 text-gray-700"
//               }`}
//             >
//               {tag}
//             </span>
//           ))}
//           {tags.length > 3 && (
//             <span className="rounded-full px-2.5 py-1 text-xs font-medium text-gray-500">
//               +{tags.length - 3}
//             </span>
//           )}
//         </div>

//         <div
//           className="mt-4 flex gap-4 border-t pt-4"
//           style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}
//         >
//           {project.liveUrl && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
//                 isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
//               }`}
//             >
//               <ExternalLink size={16} />
//               View Live
//             </a>
//           )}
//           {project.githubUrl && (
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
//                 isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"
//               }`}
//             >
//               <Github size={16} />
//               Source Code
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default function ProjectsSection() {
//   const { isDarkMode } = useTheme();
//   const [filter, setFilter] = useState("All");
//   const personalProjects = Array.isArray(PROJECTS) ? PROJECTS : [];
//   const professionalProjects = Array.isArray(livePROJECTS) ? livePROJECTS : [];
//   const categories = [
//     "All",
//     ...new Set(personalProjects.map((project) => project.category)),
//   ];
//   const filteredProjects =
//     filter === "All"
//       ? personalProjects
//       : personalProjects.filter((project) => project.category === filter);

//   return (
//     <section
//       id="work"
//       className={`relative overflow-hidden px-4 py-24 transition-colors duration-500 md:px-8 ${
//         isDarkMode
//           ? "bg-gray-900 text-white"
//           : "bg-gradient-to-b from-slate-50 via-blue-50/30 to-white text-gray-900"
//       }`}
//     >
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className={`absolute -right-40 -top-40 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl ${isDarkMode ? "bg-white-00" : "bg-blue-400"}`} />
//         <div className={`absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full opacity-20 blur-3xl ${isDarkMode ? "bg-purple-600" : "bg-pink-400"}`} />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl">
   
//         {professionalProjects.length > 0 && (
//           <div className="mb-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-12 text-center"
//             >
//               <div className="mb-4 inline-flex items-center gap-2">
//                 <BriefcaseBusiness className="text-emerald-500" size={28} />
//                 <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
//                   Professional Work
//                 </span>
//               </div>
//               <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">
//                 Live Projects <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">I’ve Worked On</span>
//               </h2>
//               <p className={`mx-auto max-w-2xl text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 Real-world websites and applications I contributed to during my professional experience.
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {professionalProjects.map((project, index) => (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   index={index}
//                   isDarkMode={isDarkMode}
//                   liveWork
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-10 text-center"
//         >
//           <div className="mb-4 inline-flex items-center gap-2">
//             <Rocket
//               className={isDarkMode ? "text-blue-400" : "text-blue-600"}
//               size={26}
//             />
//             <span
//               className={`text-sm font-semibold uppercase tracking-[0.3em] ${
//                 isDarkMode ? "text-blue-400" : "text-blue-600"
//               }`}
//             >
//               Personal Work
//             </span>
//           </div>
//           <h2 className="mb-3 text-3xl font-extrabold md:text-5xl">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p
//             className={`mx-auto max-w-2xl text-base ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Projects I created to apply and strengthen my development skills.
//           </p>
//         </motion.div>

//         <div className="mb-12 flex flex-wrap justify-center gap-3">
//           {categories.map((category) => (
//             <button
//               key={category}
//               type="button"
//               onClick={() => setFilter(category)}
//               className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
//                 filter === category
//                   ? "scale-105 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
//                   : isDarkMode
//                     ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
//                     : "border border-gray-200/80 bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
//           ))}
//         </div>


//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <p className={`mb-6 text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//             Want to see more of my work?
//           </p>
//           <motion.a
//             href="https://github.com/pradeepnigam9452"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-xl"
//           >
//             <Github size={22} />
//             View All Projects on GitHub
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Rocket, Star, BriefcaseBusiness } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { PROJECTS, livePROJECTS } from "../../../utils/data";

// ---------- ProjectCard (unchanged, but relies on isDarkMode) ----------
function ProjectCard({ project, index, isDarkMode, liveWork = false }) {
  const tags = Array.isArray(project.tags) ? project.tags : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        isDarkMode
          ? "border border-gray-700/80 bg-gray-800/60 backdrop-blur-sm hover:border-blue-500/50"
          : "border border-white/50 bg-white/70 shadow-xl backdrop-blur-sm hover:border-blue-400/50"
      }`}
    >
      {(liveWork || project.featured) && (
        <div
          className={`absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg ${
            liveWork
              ? "bg-gradient-to-r from-emerald-500 to-teal-600"
              : "bg-gradient-to-r from-yellow-400 to-orange-500"
          }`}
        >
          {liveWork ? <BriefcaseBusiness size={14} /> : <Star size={14} fill="currentColor" />}
          {liveWork ? "Live Project" : "Featured"}
        </div>
      )}

      <div className="relative h-52 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            isDarkMode ? "bg-black/70" : "bg-black/50"
          }`}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-white p-3 text-gray-900 shadow-lg transition-all hover:bg-blue-500 hover:text-white"
              aria-label={`Open ${project.title}`}
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-white p-3 text-gray-900 shadow-lg transition-all hover:bg-gray-800 hover:text-white"
              aria-label={`View ${project.title} source code`}
            >
              <Github size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className={`line-clamp-1 text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {project.title}
        </h3>
        <p className={`mt-2 line-clamp-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                isDarkMode ? "bg-gray-700/80 text-gray-300" : "bg-gray-100/80 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="rounded-full px-2.5 py-1 text-xs font-medium text-gray-500">
              +{tags.length - 3}
            </span>
          )}
        </div>

        <div
          className="mt-4 flex gap-4 border-t pt-4"
          style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              }`}
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ---------- Main ProjectsSection ----------
export default function ProjectsSection() {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("All");
  const personalProjects = Array.isArray(PROJECTS) ? PROJECTS : [];
  const professionalProjects = Array.isArray(livePROJECTS) ? livePROJECTS : [];
  const categories = [
    "All",
    ...new Set(personalProjects.map((project) => project.category)),
  ];
  const filteredProjects =
    filter === "All"
      ? personalProjects
      : personalProjects.filter((project) => project.category === filter);

  return (
    <section
      id="work"
      className={`relative overflow-hidden px-4 py-24 transition-colors duration-500 md:px-8 ${
        isDarkMode
          ? "bg-white text-gray-900"   // 👈 White background in dark mode
          : "bg-gradient-to-b from-slate-50 via-blue-50/30 to-white text-gray-900"
      }`}
    >
      {/* Decorative blobs – adjusted colors for dark mode (lighter) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -right-40 -top-40 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-blue-300" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-pink-300" : "bg-pink-400"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Professional Projects */}
        {professionalProjects.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <BriefcaseBusiness className="text-emerald-500" size={28} />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                  Professional Work
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">
                Live Projects <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">I’ve Worked On</span>
              </h2>
              <p className={`mx-auto max-w-2xl text-lg ${isDarkMode ? "text-gray-600" : "text-gray-600"}`}>
                Real-world websites and applications I contributed to during my professional experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {professionalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isDarkMode={isDarkMode}
                  liveWork
                />
              ))}
            </div>
          </div>
        )}

        {/* Personal Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <Rocket
              className={isDarkMode ? "text-blue-500" : "text-blue-600"}
              size={26}
            />
            <span
              className={`text-sm font-semibold uppercase tracking-[0.3em] ${
                isDarkMode ? "text-blue-500" : "text-blue-600"
              }`}
            >
              Personal Work
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-extrabold md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-base ${
              isDarkMode ? "text-gray-600" : "text-gray-600"
            }`}
          >
            Projects I created to apply and strengthen my development skills.
          </p>
        </motion.div>

        {/* Filter Buttons – adjusted for white background in dark mode */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "scale-105 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : isDarkMode
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"   // light grey for white bg
                    : "border border-gray-200/80 bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Personal Project Cards */}
        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`mb-6 text-lg ${isDarkMode ? "text-gray-600" : "text-gray-600"}`}>
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/pradeepnigam9452"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Github size={22} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}