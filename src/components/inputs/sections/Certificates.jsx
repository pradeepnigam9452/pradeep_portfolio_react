import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Calendar, Building } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { CERTIFICATES } from "../../../utils/data";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const EDUCATION = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "IES Institute of Technology and Management",
  location: "Bhopal, Madhya Pradesh",
  year: "2022 – 2026",
  courses: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Web Development",
    "Object-Oriented Programming",
    "Discrete Mathematics",
  ],
};

const Certificates = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="education"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#080d1a]" : "bg-[#f8fafc]"
      }`}
      aria-label="Education and Certifications section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: isDarkMode ? "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)" : "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── EDUCATION ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase border mb-4 ${
              isDarkMode ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-emerald-500/30 bg-emerald-50 text-emerald-700"
            }`}>
              <GraduationCap size={12} />
              Education
            </span>
            <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Academic{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Background
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`max-w-4xl mx-auto rounded-2xl border overflow-hidden ${
              isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl flex-shrink-0 ${isDarkMode ? "bg-emerald-500/10" : "bg-emerald-50"}`}>
                  <GraduationCap size={24} className="text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {EDUCATION.degree}
                  </h3>
                  <div className={`flex items-center gap-2 text-sm font-semibold mb-2 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                    <Building size={14} />
                    {EDUCATION.institution}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className={`flex items-center gap-1.5 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                      <Calendar size={12} />
                      {EDUCATION.year}
                    </span>
                    <span className={`flex items-center gap-1.5 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                      📍 {EDUCATION.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`border-t pt-5 ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                  Core Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.courses.map((c) => (
                    <span
                      key={c}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                        isDarkMode ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-600"
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CERTIFICATIONS ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase border mb-4 ${
              isDarkMode ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-400" : "border-yellow-500/30 bg-yellow-50 text-yellow-700"
            }`}>
              <Award size={12} />
              Certifications
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Credentials &{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATES.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border overflow-hidden group transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900/60 border-gray-800 hover:border-gray-600 hover:shadow-xl hover:shadow-yellow-500/5"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10"
                }`}
              >
                {/* Cert image */}
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4">
                  <div className={`flex items-start gap-2 mb-3`}>
                    <Award size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                    <h3 className={`text-sm font-bold leading-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {cert.title}
                    </h3>
                  </div>

                  <div className={`flex items-center justify-between text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                    <span className="font-medium">{cert.issuer}</span>
                    <span className={`px-2 py-0.5 rounded-full font-medium ${isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
                      {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;