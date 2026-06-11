// import { motion } from "framer-motion";
// import { useTheme } from "../../../context/ThemeContext";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Send,
//   CheckCircle,
//   XCircle,
//   Code2,
//   Copy,
// } from "lucide-react";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function ContactSection() {
//   const { isDarkMode } = useTheme();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState({ type: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [copiedEmail, setCopiedEmail] = useState(false);

//   const contactInfo = [
//     {
//       icon: Mail,
//       value: "pradeepnigam9452@gmail.com",
//       href: "pradeepnigam9452@gmail.com",
//       copyable: true,
//     },
//     { icon: Phone, value: "+91 8305729451", href: "tel:+" },
//     {
//       icon: MapPin,
//       value: "Bhopal, Mp",
//       href: "",
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       url: "https://github.com/pradeepnigam9452",
//       color: "hover:text-gray-900 dark:hover:text-white",
//     },
//     {
//       icon: Linkedin,
//       url: "https://www.linkedin.com/in/pradeep-nigam-601a85269",
//       color: "hover:text-blue-600",
//     },
//     {
//       icon: Code2,
//       url: "https://leetcode.com/u/pradeep_nigam/",
//       color: "hover:text-orange-500",
//     },
//   ];

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleCopyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText("aniket.g.dev@gmail.com");
//       setCopiedEmail(true);
//       setTimeout(() => setCopiedEmail(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus({ type: "", message: "" });

//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus({ type: "error", message: "Please fill in all fields." });
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const result = await emailjs.send(
//         "service_ga4b2wb",
//         "template_pfo59z3",
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//           time: new Date().toLocaleString(),
//           to_name: "Aniket Gavali",
//         },
//         "1lpiSwcZmp-fi2-c4"
//       );

//       if (result.text === "OK") {
//         setStatus({
//           type: "success",
//           message: "Message sent! I'll get back to you soon.",
//         });
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus({
//           type: "error",
//           message: "Failed to send. Please email me directly.",
//         });
//       }
//     } catch (error) {
//       setStatus({
//         type: "error",
//         message: "Failed to send. Please email me directly.",
//       });
//       console.error("EmailJS Error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className={`relative py-28 px-6 md:px-12 font-['Poppins',sans-serif] transition-colors duration-500 overflow-hidden ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       {/* Background Shapes */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className={`absolute top-16 right-16 w-96 h-96 rounded-full blur-3xl opacity-5 ${
//             isDarkMode ? "bg-blue-500" : "bg-blue-400"
//           }`}
//         />
//         <div
//           className={`absolute bottom-16 left-16 w-80 h-80 rounded-full blur-3xl opacity-5 ${
//             isDarkMode ? "bg-purple-500" : "bg-pink-400"
//           }`}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-3 mb-4"
//           >
//             <Send
//               className={isDarkMode ? "text-blue-400" : "text-blue-600"}
//               size={24}
//             />
//             <span
//               className={`text-sm uppercase tracking-widest font-semibold ${
//                 isDarkMode ? "text-gray-400" : "text-blue-600"
//               }`}
//             >
//               Get In Touch
//             </span>
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Let's{" "}
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
//               Connect
//             </span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className={`text-lg md:text-xl max-w-3xl mx-auto ${
//               isDarkMode ? "text-gray-300" : "text-gray-700"
//             }`}
//           >
//             Open to work opportunities and internships. Let's build something
//             great together!
//           </motion.p>
//         </div>

//         <div className="grid lg:grid-cols-[1.5fr_1.2fr] gap-12 max-w-6xl mx-auto">
//           {/* Right Side - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className={`relative p-8 rounded-2xl border shadow-xl overflow-hidden backdrop-blur-xl transition-all ${
//                 isDarkMode
//                   ? "bg-[#0f1629]/80 border-gray-700"
//                   : "bg-white border-gray-200"
//               }`}
//             >
//               {/* Heading */}
//               <h3
//                 className={`text-2xl md:text-3xl font-bold mb-6 relative z-10 ${
//                   isDarkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Contact Me
//               </h3>

//               <div className="space-y-4 relative z-10">
//                 {/* Name Field */}
//                 <div>
//                   <label
//                     className={`block mb-1 text-sm font-medium ${
//                       isDarkMode ? "text-gray-400" : "text-gray-700"
//                     }`}
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your Name"
//                     className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
//                       isDarkMode
//                         ? "bg-[#1b2333]/80 border-gray-700 text-white focus:ring-purple-500"
//                         : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-500"
//                     }`}
//                   />
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <label
//                     className={`block mb-1 text-sm font-medium ${
//                       isDarkMode ? "text-gray-400" : "text-gray-700"
//                     }`}
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="youremail@example.com"
//                     className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
//                       isDarkMode
//                         ? "bg-[#1b2333]/80 border-gray-700 text-white focus:ring-purple-500"
//                         : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-purple-500"
//                     }`}
//                   />
//                 </div>

//                 {/* Message Field */}
//                 <div>
//                   <label
//                     className={`block mb-1 text-sm font-medium ${
//                       isDarkMode ? "text-gray-400" : "text-gray-700"
//                     }`}
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     placeholder="Write your message here..."
//                     className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 resize-none placeholder:transition-colors
//     ${
//       isDarkMode
//         ? "bg-[#1b2333]/80 border-gray-700 text-gray-200 placeholder:text-gray-400 focus:ring-purple-500"
//         : "bg-gray-50 border-gray-300 text-gray-700 placeholder:text-gray-500 focus:ring-purple-500"
//     }`}
//                   />
//                 </div>
//                 {/* Submit Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`relative w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide transition-all overflow-hidden ${
//                     isSubmitting
//                       ? "opacity-70 cursor-not-allowed"
//                       : "cursor-pointer"
//                   } ${
//                     isDarkMode
//                       ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.5)]"
//                       : "bg-gradient-to-r from-purple-500 via-pink-400 to-orange-300 hover:shadow-[0_0_20px_-5px_rgba(192,132,252,0.5)]"
//                   }`}
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </motion.button>

//                 {/* Status Message */}
//                 {status.message && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className={`p-3 mt-3 rounded-lg flex items-center gap-2 text-sm font-medium ${
//                       status.type === "success"
//                         ? isDarkMode
//                           ? "bg-green-500/10 text-green-400 border border-green-500/20"
//                           : "bg-green-50 text-green-700 border border-green-100"
//                         : isDarkMode
//                         ? "bg-red-500/10 text-red-400 border border-red-500/20"
//                         : "bg-red-50 text-red-700 border border-red-100"
//                     }`}
//                   >
//                     {status.type === "success" ? (
//                       <CheckCircle size={16} />
//                     ) : (
//                       <XCircle size={16} />
//                     )}
//                     {status.message}
//                   </motion.div>
//                 )}
//               </div>
//             </form>
//           </motion.div>

//           {/* Left Side - Contact Info & Social */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {/* Contact Cards */}
//             <div
//               className={`p-8 rounded-2xl ${
//                 isDarkMode
//                   ? "bg-gray-800/70 border border-gray-700"
//                   : "bg-white border border-gray-200 shadow-xl"
//               }`}
//             >
//               <div className="space-y-2">
//                 {contactInfo.map((info, idx) => (
//                   <div key={idx} className="flex items-center gap-4">
//                     <div
//                       className={`p-3 rounded-xl ${
//                         isDarkMode
//                           ? "bg-blue-500/10 text-blue-400"
//                           : "bg-blue-50 text-blue-600"
//                       }`}
//                     >
//                       <info.icon size={22} />
//                     </div>
//                     {info.href ? (
//                       <a
//                         href={info.href}
//                         className={`text-base md:text-lg font-medium flex-1 transition-colors ${
//                           isDarkMode
//                             ? "text-gray-300 hover:text-blue-400"
//                             : "text-gray-800 hover:text-blue-600"
//                         }`}
//                       >
//                         {info.value}
//                       </a>
//                     ) : (
//                       <span
//                         className={`text-base md:text-lg font-medium flex-1 ${
//                           isDarkMode ? "text-gray-300" : "text-gray-800"
//                         }`}
//                       >
//                         {info.value}
//                       </span>
//                     )}
//                     {info.copyable && (
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handleCopyEmail}
//                         className={`p-2 rounded-lg ${
//                           isDarkMode
//                             ? "hover:bg-gray-700 text-gray-400"
//                             : "hover:bg-gray-100 text-gray-600"
//                         }`}
//                       >
//                         {copiedEmail ? (
//                           <CheckCircle size={16} />
//                         ) : (
//                           <Copy size={16} />
//                         )}
//                       </motion.button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div
//               className={`p-8 rounded-2xl ${
//                 isDarkMode
//                   ? "bg-gray-800/70 border border-gray-700"
//                   : "bg-white border border-gray-200 shadow-xl"
//               }`}
//             >
//               <p
//                 className={`text-base md:text-lg font-medium mb-4 ${
//                   isDarkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Connect on Social
//               </p>
//               <div className="flex gap-4 flex-wrap">
//                 {socialLinks.map((social, idx) => (
//                   <motion.a
//                     key={idx}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1, y: -3 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`p-4 rounded-xl transition-all ${
//                       isDarkMode
//                         ? "bg-gray-700/50 text-gray-400 hover:bg-gray-700"
//                         : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                     } ${social.color}`}
//                   >
//                     <social.icon size={26} />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  XCircle,
  Code2,
  Copy,
  Sparkles,
  ArrowRight,
  Instagram
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      value: "pradeepnigam9452@gmail.com",
      href: "mailto:pradeepnigam9452@gmail.com",
      copyable: true,
    },
    { icon: Phone, value: "+91 8305729451", href: "tel:+918305729451" },
    { icon: MapPin, value: "Bhopal, Madhya Pradesh, India", href: "" },
  ];

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/pradeepnigam9452",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/pradeep-nigam-601a85269",
      color: "hover:text-blue-600",
    },
    {
      icon: Code2,
      url: "https://leetcode.com/u/pradeep_nigam/",
      color: "hover:text-orange-500",
    },
     {
      icon: Instagram,
      url: "https://www.instagram.com/un_told_journey?igsh=MTI5em9jdGhubzUxZQ==",
      color: "hover:text-gray-900",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("pradeepnigam9452@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_ga4b2wb",
        "template_pfo59z3",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_name: "Pradeep Nigam",
        },
        "1lpiSwcZmp-fi2-c4"
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send. Please email me directly.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send. Please email me directly.",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-20 md:py-24 lg:py-28 px-4 md:px-8 transition-all duration-500 overflow-hidden ${
        isDarkMode 
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" 
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
      {/* Animated Background Glows - Matching Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-500 font-mono text-sm mb-4 backdrop-blur-sm">
            <Send size={16} className="animate-pulse" />
            <span className="tracking-wider">GET IN TOUCH</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto text-base md:text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Open to work opportunities and collaborations. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <motion.div
              variants={itemVariants}
              className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
                  : "bg-white/50 border border-gray-100 shadow-lg backdrop-blur-sm"
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                <Sparkles className="w-5 h-5 text-blue-500" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                        isDarkMode
                          ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20"
                          : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                      }`}
                    >
                      <info.icon size={22} />
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-base flex-1 transition-all duration-300 group-hover:translate-x-1 ${
                          isDarkMode
                            ? "text-gray-300 hover:text-blue-400"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span
                        className={`text-base flex-1 ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {info.value}
                      </span>
                    )}
                    {info.copyable && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCopyEmail}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          isDarkMode
                            ? "hover:bg-gray-800 text-gray-400 hover:text-blue-400"
                            : "hover:bg-gray-100 text-gray-500 hover:text-blue-600"
                        }`}
                      >
                        {copiedEmail ? (
                          <CheckCircle size={18} className="text-green-500" />
                        ) : (
                          <Copy size={18} />
                        )}
                      </motion.button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>


            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
                  : "bg-white/50 border border-gray-100 shadow-lg backdrop-blur-sm"
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                <Sparkles className="w-5 h-5 text-purple-500" />
                Social Presence
              </h3>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                        : "bg-gray-100 text-gray-600 hover:bg-white hover:shadow-md"
                    } ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
                  : "bg-white/50 border border-gray-100 shadow-lg backdrop-blur-sm"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}>
                <Send className="w-5 h-5 text-blue-500" />
                Send a Message
              </h3>

              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 text-white focus:ring-blue-500 placeholder:text-gray-500"
                        : "bg-white border-gray-200 text-gray-900 focus:ring-blue-500 placeholder:text-gray-400"
                    }`}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 text-white focus:ring-blue-500 placeholder:text-gray-500"
                        : "bg-white border-gray-200 text-gray-900 focus:ring-blue-500 placeholder:text-gray-400"
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 text-white focus:ring-blue-500 placeholder:text-gray-500"
                        : "bg-white border-gray-200 text-gray-900 focus:ring-blue-500 placeholder:text-gray-400"
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide transition-all duration-300 overflow-hidden group ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "cursor-pointer"
                  } bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-xl flex items-center gap-2 text-sm font-medium ${
                      status.type === "success"
                        ? isDarkMode
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-green-50 text-green-700 border border-green-100"
                        : isDarkMode
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-red-50 text-red-700 border border-red-100"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle size={16} />
                    ) : (
                      <XCircle size={16} />
                    )}
                    {status.message}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}