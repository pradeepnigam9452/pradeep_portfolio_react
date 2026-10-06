import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp, Code } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "work" },
  { label: "AI Journey", id: "ai-journey" },
  { label: "Contact", id: "contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/pradeepnigam9452", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
  { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com", label: "Email" },
];

const Footer = () => {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative py-12 px-4 md:px-8 border-t ${
        isDarkMode ? "bg-[#060b18] border-gray-800" : "bg-white border-gray-200"
      }`}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code size={16} className="text-white" />
              </div>
              <span className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Pradeep Nigam</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
              Full Stack Developer specializing in MERN stack and expanding into AI engineering.
            </p>
            <div className="flex gap-2 mt-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`p-2 rounded-lg border transition-all duration-200 ${
                    isDarkMode
                      ? "border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 hover:bg-white/5"
                      : "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400"
                  }`}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-y-1.5">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm text-left cursor-pointer transition-colors duration-200 ${
                    isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
              Contact
            </p>
            <div className="space-y-1.5">
              <a href="mailto:pradeepnigam9452@gmail.com" className={`block text-sm transition-colors duration-200 ${isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                pradeepnigam9452@gmail.com
              </a>
              <a href="tel:+918305729451" className={`block text-sm transition-colors duration-200 ${isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                +91 8305729451
              </a>
              <p className={`text-sm ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>Bhopal, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
          <p className={`text-xs ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
            © {new Date().getFullYear()} Pradeep Nigam. Built with{" "}
            <Heart size={11} className="inline text-red-500" fill="currentColor" />{" "}
            using React & Tailwind CSS.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
              isDarkMode
                ? "border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 hover:bg-white/5"
                : "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400"
            }`}
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;