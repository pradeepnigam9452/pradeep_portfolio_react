import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";
import PROFILE_PIC from "../../../assets/images/mee.jpeg"; // your profile picture
import Resume from "../../../../public/Pradeepnigam_Resume.pdf"; // your resume file

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Floating gradient glows (light mode) */}
      {!isDarkMode && (
        <>
          <motion.div
            className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-300 via-indigo-200 to-pink-200 blur-[100px] opacity-40"
            animate={{ scale: [1, 1.03, 1], opacity: [0.35, 0.45, 0.35] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-yellow-200 via-pink-200 to-blue-200 blur-[100px] opacity-35"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* Background bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-pink-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile Image */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.07 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 shadow-2xl transition-all duration-300 ${
                      isDarkMode
                        ? "border-gray-800"
                        : "border-blue-200 shadow-blue-100"
                    }`}
                  >
                    <img
                      src={PROFILE_PIC}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.div
                variants={textVariants}
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                I’m <span className="text-blue-500">Pradeep Nigam</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className={`text-3xl md:text-5xl mb-6 leading-tight font-bold ${
                  isDarkMode
                    ? "text-white"
                    : "text-gray-900 drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)]"
                }`}
              >
                Building Digital <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
                  Experiences
                </span>{" "}
                that Inspire
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-700 font-medium"
                }`}
              >
                I build clean, modern, and high-performance web experiences that
                inspire and engage users.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{
                    y: -2,
                    boxShadow: "0 6px 15px rgba(59,130,246,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  View Work
                </motion.button>

                <motion.a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold flex items-center gap-2 transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800"
                      : "border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/pradeep-nigam" },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/pradeep-nigam-601a85269",
                  },
                  { icon: Mail, href: "mailto:pradeep.nigam@example.com" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.15 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className={`tracking-[0.1em] mb-4 text-xl font-[Poppins] ${
                  isDarkMode ? "text-blue-400" : "text-blue-600 font-semibold"
                }`}
              >
                I’m <span className="font-bold">Pradeep Nigam</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={`text-5xl xl:text-7xl mb-8 leading-tight font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Building Digital <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
                  Experiences
                </span>{" "}
                that Inspire
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl mb-12 leading-relaxed max-w-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-700 font-medium"
                }`}
              >
                I create interactive, visually engaging, and high-performance
                websites that leave lasting impressions.
              </motion.p>

              {/* Buttons */}
              <motion.div className="flex space-x-4">
                <motion.button
                  whileHover={{
                    y: -3,
                    boxShadow: "0 6px 15px rgba(59,130,246,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  View Work
                </motion.button>

                <motion.a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-semibold flex items-center gap-2 transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800"
                      : "border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  Resume
                </motion.a>
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mt-12"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/pradeep-nigam" },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/pradeep-nigam-601a85269",
                  },
                  { icon: Mail, href: "mailto:pradeepnigam9452@gmail.com" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.15 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right (Image) */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center items-center relative"
            >
              <div className="relative w-92 h-92">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-full h-full rounded-2xl overflow-hidden border-4 shadow-2xl ${
                    isDarkMode
                      ? "border-gray-800"
                      : "border-blue-200 shadow-blue-200/50"
                  }`}
                >
                  <img
                    src={PROFILE_PIC}
                    alt="Pradeep Nigam"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown
              size={20}
              className={isDarkMode ? "text-gray-400" : "text-blue-500"}
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
