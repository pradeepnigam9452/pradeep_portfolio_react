

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect, useCallback, useMemo } from "react";
// import { Code2, Sparkles, Rocket, Zap, Coffee, Heart, Star, Crown } from "lucide-react";

// export default function PageLoader() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [displayText, setDisplayText] = useState("");
//   const [displayRole, setDisplayRole] = useState("");
//   const [progress, setProgress] = useState(0);
//   const [currentFact, setCurrentFact] = useState(0);
  
//   const fullText = "Pradeep Nigam";
//   const roles = useMemo(() => [
//     "MERN Stack Developer",
//     "Full Stack Engineer", 
//     "UI/UX Enthusiast",
//     "Problem Solver"
//   ], []);
  
//   const facts = useMemo(() => [
//     "🚀 Loading amazing experience",
//     "💻 Compiling components", 
//     "⚡ Optimizing performance",
//     "🎯 Almost there..."
//   ], []);

//   // Smooth loading progress
//   useEffect(() => {
//     const duration = 3500;
//     const startTime = Date.now();
    
//     const updateProgress = () => {
//       const elapsed = Date.now() - startTime;
//       const newProgress = Math.min((elapsed / duration) * 100, 100);
//       setProgress(Math.floor(newProgress));
      
//       if (newProgress < 100) {
//         requestAnimationFrame(updateProgress);
//       } else {
//         setTimeout(() => setIsLoading(false), 500);
//       }
//     };
    
//     requestAnimationFrame(updateProgress);
//   }, []);

//   // Smooth name typing
//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index <= fullText.length) {
//         setDisplayText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 80);
//     return () => clearInterval(interval);
//   }, []);

//   // Smooth role cycling
//   useEffect(() => {
//     let roleIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     let timeout;
    
//     const animateRole = () => {
//       const currentRole = roles[roleIndex];
      
//       if (!isDeleting && charIndex <= currentRole.length) {
//         setDisplayRole(currentRole.slice(0, charIndex));
//         charIndex++;
//         timeout = setTimeout(animateRole, 100);
//       } else if (!isDeleting && charIndex > currentRole.length) {
//         isDeleting = true;
//         timeout = setTimeout(animateRole, 2000);
//       } else if (isDeleting && charIndex >= 0) {
//         setDisplayRole(currentRole.slice(0, charIndex));
//         charIndex--;
//         timeout = setTimeout(animateRole, 50);
//       } else if (isDeleting && charIndex < 0) {
//         isDeleting = false;
//         roleIndex = (roleIndex + 1) % roles.length;
//         charIndex = 0;
//         timeout = setTimeout(animateRole, 100);
//       }
//     };
    
//     timeout = setTimeout(animateRole, 500);
//     return () => clearTimeout(timeout);
//   }, [roles]);

//   // Smooth fact rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentFact(prev => (prev + 1) % facts.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [facts.length]);

//   // Optimized variants with will-change
//   const containerVariants = {
//     exit: {
//       y: "-100%",
//       transition: {
//         duration: 0.8,
//         ease: [0.43, 0.13, 0.23, 0.96],
//       },
//     },
//   };

//   const iconVariants = {
//     initial: { opacity: 0, scale: 0.5, rotateZ: -180 },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       rotateZ: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.34, 1.56, 0.64, 1],
//       },
//     },
//   };

//   const titleVariants = {
//     initial: { opacity: 0, y: 30 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.2,
//         duration: 0.6,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const roleVariants = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: {
//         delay: 0.8,
//         duration: 0.5,
//       },
//     },
//   };

//   const progressVariants = {
//     initial: { width: "0%" },
//     animate: {
//       width: `${progress}%`,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   const factVariants = {
//     initial: { opacity: 0, y: 10 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const pulseVariants = {
//     animate: {
//       scale: [1, 1.05, 1],
//       opacity: [0.5, 0.8, 0.5],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const floatVariants = {
//     animate: (i) => ({
//       y: [0, -8, 0],
//       transition: {
//         delay: i * 0.2,
//         duration: 2.5,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   const cursorVariants = {
//     animate: {
//       opacity: [1, 0.3, 1],
//       transition: {
//         duration: 0.8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const dotVariants = {
//     animate: (i) => ({
//       y: [0, -6, 0],
//       scale: [1, 1.2, 1],
//       transition: {
//         delay: i * 0.1,
//         duration: 0.8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {isLoading && (
//         <motion.div
//           key="loader"
//           variants={containerVariants}
//           initial={{ opacity: 1 }}
//           exit="exit"
//           className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden"
//           style={{ willChange: "transform" }}
//         >
//           {/* Simplified background orbs */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <motion.div
//               animate={{
//                 x: [0, 30, 0],
//                 y: [0, 20, 0],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl"
//             />
//             <motion.div
//               animate={{
//                 x: [0, -30, 0],
//                 y: [0, -20, 0],
//               }}
//               transition={{
//                 duration: 7,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.5,
//               }}
//               className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-600/10 via-blue-600/10 to-transparent rounded-full blur-3xl"
//             />
//           </div>

//           {/* Simplified grid */}
//           <motion.svg
//             animate={{ opacity: [0.03, 0.06, 0.03] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="absolute inset-0 w-full h-full pointer-events-none"
//             style={{ willChange: "opacity" }}
//           >
//             <defs>
//               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </motion.svg>

//           {/* Main content */}
//           <div className="text-center relative z-10 px-8 max-w-4xl">
//             {/* Icon with glow */}
//             <motion.div
//               variants={iconVariants}
//               initial="initial"
//               animate="animate"
//               className="flex justify-center mb-8"
//             >
//               <motion.div
//                 animate={pulseVariants.animate}
//                 className="relative"
//               >
//                 <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
//                 <div className="relative p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
//                   <Code2 className="w-14 h-14 md:w-16 md:h-16 text-blue-400" strokeWidth={1.5} />
                  
//                   {/* Floating badges */}
//                   <motion.div
//                     custom={0}
//                     variants={floatVariants}
//                     animate="animate"
//                     className="absolute -top-3 -right-3"
//                   >
//                     <div className="p-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500">
//                       <Crown className="w-3 h-3 text-white" />
//                     </div>
//                   </motion.div>
//                   <motion.div
//                     custom={1}
//                     variants={floatVariants}
//                     animate="animate"
//                     className="absolute -bottom-2 -left-2"
//                   >
//                     <div className="p-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500">
//                       <Heart className="w-2.5 h-2.5 text-white fill-white" />
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Title */}
//             <motion.div
//               variants={titleVariants}
//               initial="initial"
//               animate="animate"
//               className="relative mb-3"
//             >
//               <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-wider">
//                 <span className="bg-gradient-to-r from-blue-200 via-white to-purple-300 bg-clip-text text-transparent">
//                   {displayText}
//                 </span>
//                 <motion.span
//                   variants={cursorVariants}
//                   animate="animate"
//                   className="text-blue-400 inline-block ml-1"
//                 >
//                   |
//                 </motion.span>
//               </h1>
//             </motion.div>

//             {/* Role */}
//             <motion.div
//               variants={roleVariants}
//               initial="initial"
//               animate="animate"
//               className="mt-4"
//             >
//               <p className="text-xl sm:text-2xl md:text-3xl font-light">
//                 <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
//                   {displayRole}
//                 </span>
//                 <motion.span
//                   animate={{ opacity: [1, 0] }}
//                   transition={{ duration: 0.6, repeat: Infinity }}
//                   className="text-blue-400 ml-0.5"
//                 >
//                   _
//                 </motion.span>
//               </p>
//             </motion.div>

//             {/* Progress Bar */}
//             <div className="mt-10 max-w-md mx-auto">
//               <div className="h-0.5 rounded-full bg-white/10 overflow-hidden">
//                 <motion.div
//                   variants={progressVariants}
//                   initial="initial"
//                   animate="animate"
//                   className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
//                   style={{ willChange: "width" }}
//                 />
//               </div>
              
//               <div className="flex justify-between items-center mt-2">
//                 <span className="text-xs text-blue-300/60 font-mono">
//                   {Math.floor(progress)}%
//                 </span>
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentFact}
//                     variants={factVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     className="text-xs text-blue-300/60 font-mono"
//                   >
//                     {facts[currentFact]}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Loading indicators */}
//             <div className="mt-10">
//               <div className="flex items-center justify-center gap-3">
//                 <span className="text-xs text-blue-300/80 tracking-wider uppercase flex items-center gap-1.5">
//                   <Sparkles className="w-3 h-3" />
//                   Loading
//                   <Zap className="w-3 h-3" />
//                 </span>
//                 <div className="flex gap-1.5">
//                   {[0, 1, 2].map((i) => (
//                     <motion.div
//                       key={i}
//                       custom={i}
//                       variants={dotVariants}
//                       animate="animate"
//                       className="w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
//                     />
//                   ))}
//                 </div>
//               </div>
              
//               <motion.p
//                 animate={{ opacity: [0.4, 0.8, 0.4] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="text-xs text-blue-200/50 mt-3 flex items-center justify-center gap-1.5"
//               >
//                 <Coffee className="w-3 h-3" />
//                 Crafting experience
//                 <Rocket className="w-3 h-3" />
//               </motion.p>
//             </div>

//             {/* Tech stack marquee */}
//             <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none">
//               <motion.div
//                 animate={{ x: ["0%", "-50%"] }}
//                 transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//                 className="inline-flex gap-6 text-xs font-mono text-blue-300/30 whitespace-nowrap"
//               >
//                 {["REACT", "NODE.JS", "MONGODB", "EXPRESS", "NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech, i) => (
//                   <span key={i}>{tech} •</span>
//                 ))}
//                 {["REACT", "NODE.JS", "MONGODB", "EXPRESS", "NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech, i) => (
//                   <span key={`dup-${i}`}>{tech} •</span>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* Smooth expanding circle */}
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: progress >= 100 ? 150 : 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           >
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useRef } from "react";
import { Code2, Heart, Crown, ArrowUpRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                              Animation Variants                            */
/* -------------------------------------------------------------------------- */

const EASE_SMOOTH = [0.43, 0.13, 0.23, 0.96];
const EASE_SPRING = [0.34, 1.56, 0.64, 1];
const EASE_OUT = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  exit: {
    y: "-100%",
    transition: { duration: 0.9, ease: EASE_SMOOTH },
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: EASE_OUT },
  },
});

const iconVariants = {
  initial: { opacity: 0, scale: 0.6, rotateZ: -120 },
  animate: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { duration: 0.9, ease: EASE_SPRING },
  },
};

const floatVariants = {
  animate: (i) => ({
    y: [0, -6, 0],
    transition: {
      delay: i * 0.25,
      duration: 2.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const cursorVariants = {
  animate: {
    opacity: [1, 0.2, 1],
    transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
  },
};

const factVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
};

/* -------------------------------------------------------------------------- */
/*                              Static Constants                              */
/* -------------------------------------------------------------------------- */

const FULL_NAME = "Pradeep Nigam";
const LOADING_DURATION = 3600;
const EXIT_DELAY = 500;

const ROLES = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

const FACTS = [
  "Loading amazing experience",
  "Compiling components",
  "Optimizing performance",
  "Almost there…",
];

const TECH_STACK = [
  "REACT",
  "NODE.JS",
  "MONGODB",
  "EXPRESS",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND",
];

/* -------------------------------------------------------------------------- */
/*                                 Hooks                                      */
/* -------------------------------------------------------------------------- */

function useTypewriter(text, speed = 75, startDelay = 0) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    let intervalId;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (i <= text.length) {
          setOutput(text.slice(0, i));
          i++;
        } else clearInterval(intervalId);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return output;
}

function useRoleTyper(
  roles,
  { typeSpeed = 90, deleteSpeed = 45, holdTime = 1800 } = {}
) {
  const [output, setOutput] = useState("");
  const state = useRef({ roleIndex: 0, charIndex: 0, isDeleting: false });

  useEffect(() => {
    let t;
    const tick = () => {
      const { roleIndex, charIndex, isDeleting } = state.current;
      const role = roles[roleIndex];

      if (!isDeleting && charIndex <= role.length) {
        setOutput(role.slice(0, charIndex));
        state.current.charIndex++;
        t = setTimeout(tick, typeSpeed);
      } else if (!isDeleting && charIndex > role.length) {
        state.current.isDeleting = true;
        t = setTimeout(tick, holdTime);
      } else if (isDeleting && charIndex >= 0) {
        setOutput(role.slice(0, charIndex));
        state.current.charIndex--;
        t = setTimeout(tick, deleteSpeed);
      } else if (isDeleting && charIndex < 0) {
        state.current.isDeleting = false;
        state.current.roleIndex = (roleIndex + 1) % roles.length;
        state.current.charIndex = 0;
        t = setTimeout(tick, 120);
      }
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, [roles, typeSpeed, deleteSpeed, holdTime]);

  return output;
}

function useFactRotator(facts, interval = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % facts.length), interval);
    return () => clearInterval(id);
  }, [facts.length, interval]);
  return facts[i];
}

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const displayName = useTypewriter(FULL_NAME, 75);
  const displayRole = useRoleTyper(ROLES);
  const currentFact = useFactRotator(FACTS);

  useEffect(() => {
    const start = Date.now();
    let rafId;
    const tick = () => {
      const p = Math.min(((Date.now() - start) / LOADING_DURATION) * 100, 100);
      setProgress(Math.floor(p));
      if (p < 100) rafId = requestAnimationFrame(tick);
      else setTimeout(() => setIsLoading(false), EXIT_DELAY);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const stack = useMemo(() => [...TECH_STACK, ...TECH_STACK], []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          variants={containerVariants}
          initial={{ opacity: 1 }}
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#fafafa] text-slate-900"
          style={{ willChange: "transform" }}
        >
          {/* ======================= Ambient background ======================= */}
          <div className="pointer-events-none absolute inset-0">
            {/* soft radial glow top-left */}
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_65%)] blur-2xl" />
            {/* soft radial glow bottom-right */}
            <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.14),transparent_65%)] blur-2xl" />
            {/* subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(15,23,42,0.10) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            />
          </div>

          {/* ============================ Card ================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="relative z-10 w-[min(92vw,520px)] rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)] backdrop-blur-xl sm:p-10"
          >
            {/* top shine sweep */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />

            {/* ------------------------------ Icon ---------------------------- */}
            <div className="mb-8 flex justify-center">
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                className="relative"
              >
                {/* conic gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-[6px] rounded-3xl"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)",
                    maskImage:
                      "radial-gradient(circle, transparent 62%, black 63%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, transparent 62%, black 63%)",
                    opacity: 0.9,
                  }}
                />

                <div className="relative grid h-[72px] w-[72px] place-items-center rounded-3xl bg-white shadow-inner">
                  <Code2 className="h-8 w-8 text-slate-800" strokeWidth={1.75} />
                </div>

                {/* floating badges */}
                <motion.div
                  custom={0}
                  variants={floatVariants}
                  animate="animate"
                  className="absolute -right-3 -top-3"
                >
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-md ring-2 ring-white">
                    <Crown className="h-3 w-3 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>

                <motion.div
                  custom={1}
                  variants={floatVariants}
                  animate="animate"
                  className="absolute -bottom-2 -left-3"
                >
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500 shadow-md ring-2 ring-white">
                    <Heart
                      className="h-2.5 w-2.5 fill-white text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* ------------------------------ Name ---------------------------- */}
            <motion.div {...fadeUp(0.15)} className="text-center">
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  {displayName}
                </span>
                <motion.span
                  variants={cursorVariants}
                  animate="animate"
                  className="ml-1 inline-block font-light text-indigo-500"
                >
                  |
                </motion.span>
              </h1>
            </motion.div>

            {/* ------------------------------ Role ---------------------------- */}
            <motion.div {...fadeUp(0.35)} className="mt-3 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-base">
                {displayRole}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="ml-0.5 text-indigo-500"
                >
                  _
                </motion.span>
              </p>
            </motion.div>

            {/* ---------------------------- Divider --------------------------- */}
            <motion.div
              {...fadeUp(0.5)}
              className="my-7 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
            />

            {/* --------------------------- Progress --------------------------- */}
            <motion.div {...fadeUp(0.55)}>
              <div className="mb-3 flex items-end justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Loading
                </span>
                <span className="font-mono text-xs tabular-nums text-slate-500">
                  {String(Math.floor(progress)).padStart(3, "0")}%
                </span>
              </div>

              {/* track */}
              <div className="relative h-[6px] overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  style={{ willChange: "width" }}
                >
                  {/* moving highlight on the bar */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  />
                </motion.div>
              </div>

              {/* fact */}
              <div className="mt-4 flex h-5 items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentFact}
                      variants={factVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="font-mono text-[11px] text-slate-500"
                    >
                      {currentFact}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-300" />
              </div>
            </motion.div>
          </motion.div>

          {/* ====================== Tech marquee (bottom) ==================== */}
          <div className="pointer-events-none absolute bottom-6 left-0 right-0 overflow-hidden">
            <div
              className="mx-auto max-w-4xl px-8"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
              }}
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="inline-flex gap-8 whitespace-nowrap font-mono text-[11px] tracking-widest text-slate-400"
              >
                {stack.map((t, i) => (
                  <span key={i} className="flex items-center gap-8">
                    {t}
                    <span className="text-slate-300">•</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ======================= Exit expanding circle ==================== */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: progress >= 100 ? 40 : 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}