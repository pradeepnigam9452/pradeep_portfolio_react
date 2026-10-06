import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { Download, FileText, Eye } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const ResumeSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="resume"
      className={`relative py-16 md:py-20 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#080d1a]" : "bg-[#f8fafc]"
      }`}
      aria-label="Resume section"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={`rounded-3xl border p-8 md:p-12 text-center ${
            isDarkMode
              ? "bg-gray-900/60 border-gray-800"
              : "bg-white border-gray-200 shadow-xl"
          }`}
        >
          {/* Icon */}
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <div className={`p-4 rounded-2xl ${isDarkMode ? "bg-blue-500/10" : "bg-blue-50"}`}>
              <FileText size={32} className="text-blue-500" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Want to know more about my experience?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={`text-base mb-8 max-w-lg mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            My resume contains my full work history, technical skills, education, and certifications. Let's connect!
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="/Pradeep_Nigam.pdf"
              download="Pradeep_Nigam_Resume.pdf"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </motion.a>

            <motion.a
              href="/Pradeep_Nigam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl border transition-all duration-200 ${
                isDarkMode
                  ? "border-gray-700 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10"
                  : "border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50"
              }`}
            >
              <Eye size={16} />
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
