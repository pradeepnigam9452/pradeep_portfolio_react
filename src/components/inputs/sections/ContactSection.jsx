import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import {
  Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, XCircle, Code2, Copy, Sparkles,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { fadeUp, staggerContainer, viewportOnce } from "../../../data/animations";

const CONTACT_INFO = [
  { icon: Mail, value: "pradeepnigam9452@gmail.com", href: "mailto:pradeepnigam9452@gmail.com", copyable: true },
  { icon: Phone, value: "+91 8305729451", href: "tel:+918305729451" },
  { icon: MapPin, value: "Bhopal, Madhya Pradesh, India" },
];

const SOCIAL_LINKS = [
  { icon: Github, url: "https://github.com/pradeepnigam9452", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/pradeep-nigam-601a85269", label: "LinkedIn" },
  { icon: Code2, url: "https://leetcode.com/u/pradeep_nigam/", label: "LeetCode", isOrange: true },
];

export default function ContactSection() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email address";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("pradeepnigam9452@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.send(
        "service_ga4b2wb",
        "template_pfo59z3",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          time: new Date().toLocaleString(),
          to_name: "Pradeep Nigam",
        },
        "1lpiSwcZmp-fi2-c4"
      );

      if (result.text === "OK") {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon. 🎉" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send. Please email me directly." });
      }
    } catch {
      setStatus({ type: "error", message: "Failed to send. Please email me directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) => `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/40 ${
    errors[field] ? "border-red-500" : isDarkMode ? "border-gray-700" : "border-gray-300"
  } ${
    isDarkMode
      ? "bg-gray-800/60 text-white placeholder:text-gray-500 focus:border-blue-500"
      : "bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:bg-white"
  }`;

  return (
    <section
      id="contact"
      className={`relative py-20 md:py-28 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#080d1a]" : "bg-[#f8fafc]"
      }`}
      aria-label="Contact section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: isDarkMode ? "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" : "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: isDarkMode ? "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" : "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase border ${
              isDarkMode ? "border-blue-500/30 bg-blue-500/10 text-blue-400" : "border-blue-500/30 bg-blue-50 text-blue-700"
            }`}>
              <Send size={12} />
              Contact
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Open to full-time roles, internships, and freelance collaborations. Let's talk!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Contact info card */}
            <div className={`rounded-2xl border p-6 ${
              isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={16} className="text-blue-500" />
                <h3 className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Contact Info</h3>
              </div>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${isDarkMode ? "bg-blue-500/10" : "bg-blue-50"}`}>
                      <info.icon size={16} className="text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      {info.href ? (
                        <a
                          href={info.href}
                          className={`text-sm truncate block transition-colors duration-200 ${
                            isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{info.value}</span>
                      )}
                    </div>
                    {info.copyable && (
                      <button
                        onClick={handleCopyEmail}
                        aria-label="Copy email"
                        className={`p-1.5 rounded-lg transition-all duration-200 flex-shrink-0 ${
                          isDarkMode ? "text-gray-500 hover:text-white hover:bg-white/10" : "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        {copiedEmail ? <CheckCircle size={15} className="text-emerald-500" /> : <Copy size={15} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className={`rounded-2xl border p-6 ${
              isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200 shadow-sm"
            }`}>
              <h3 className={`font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Find Me Online</h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group ${
                        isDarkMode
                          ? "border-gray-700 hover:border-gray-500 hover:bg-white/5"
                          : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                      }`}
                    >
                      <Icon size={18} className={s.isOrange ? "text-orange-500" : "text-blue-500"} />
                      <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-700 group-hover:text-gray-900"}`}>
                        {s.label}
                      </span>
                      <span className={`ml-auto text-xs ${isDarkMode ? "text-gray-600 group-hover:text-gray-400" : "text-gray-400 group-hover:text-gray-600"}`}>
                        →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl border p-6 md:p-8 ${
                isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200 shadow-sm"
              }`}
              noValidate
            >
              <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Send Me a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass("name")}
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass("email")}
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass("subject")}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 ${
                  isSubmitting
                    ? "bg-blue-500/70 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3.5 rounded-xl flex items-center gap-2.5 text-sm font-medium ${
                    status.type === "success"
                      ? isDarkMode
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-emerald-50 border border-emerald-200 text-emerald-700"
                      : isDarkMode
                        ? "bg-red-500/10 border border-red-500/20 text-red-400"
                        : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle size={16} /> : <XCircle size={16} />}
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}