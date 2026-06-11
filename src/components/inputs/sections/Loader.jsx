// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { Code2 } from "lucide-react";

// export default function PageLoader() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [displayText, setDisplayText] = useState("");
//   const fullText = "Pradeep Nigam";

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 3400);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index <= fullText.length) {
//         setDisplayText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 75);

//     return () => clearInterval(interval);
//   }, []);

//   const containerVariants = {
//     exit: {
//       y: "-100%",
//       opacity: 0,
//       transition: {
//         duration: 0.9,
//         ease: [0.43, 0.13, 0.23, 0.96],
//       },
//     },
//   };

//   const textContainerVariants = {
//     initial: { opacity: 0, y: 40 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const codeIconVariants = {
//     initial: { opacity: 0, scale: 0.3, rotateZ: -180, y: -40 },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       rotateZ: 0,
//       y: 0,
//       transition: {
//         delay: 0.1,
//         duration: 1.2,
//         ease: [0.34, 1.56, 0.64, 1],
//       },
//     },
//   };

//   const titleVariants = {
//     initial: { opacity: 0, letterSpacing: "0.5em" },
//     animate: {
//       opacity: 1,
//       letterSpacing: "0.08em",
//       transition: {
//         delay: 0.3,
//         duration: 1.4,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const cursorVariants = {
//     animate: {
//       opacity: [1, 0.3],
//       transition: {
//         duration: 0.7,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const subtitleVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 1.8,
//         duration: 0.9,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const dotVariants = {
//     animate: (i) => ({
//       y: [0, -8, 0],
//       opacity: [0.5, 1, 0.5],
//       transition: {
//         delay: i * 0.15,
//         duration: 1.2,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   const lineVariants = {
//     initial: { scaleX: 0, opacity: 0 },
//     animate: {
//       scaleX: 1,
//       opacity: 1,
//       transition: {
//         delay: 1.1,
//         duration: 1.2,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const expandingCircleVariants = {
//     initial: { scale: 0, opacity: 0.9 },
//     animate: {
//       scale: 90,
//       opacity: 0,
//       transition: {
//         delay: 2.6,
//         duration: 1.2,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   const glowVariants = {
//     animate: {
//       opacity: [0.3, 0.8, 0.3],
//       scale: [0.8, 1.1, 0.8],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const floatingVariants = (delay) => ({
//     initial: { y: 0, opacity: 0 },
//     animate: {
//       y: [-20, 20, -20],
//       opacity: [0, 1, 0],
//       transition: {
//         delay,
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   });

//   return (
//     <AnimatePresence mode="wait">
//       {isLoading && (
//         <motion.div
//           key="loader"
//           variants={containerVariants}
//           initial={{ opacity: 1 }}
//           exit="exit"
//           className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden"
//         >
//           {/* Animated gradient background orbs */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               animate={{
//                 x: [0, 50, 0],
//                 y: [0, 30, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-transparent rounded-full blur-3xl"
//             />
//             <motion.div
//               animate={{
//                 x: [0, -50, 0],
//                 y: [0, -30, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.5,
//               }}
//               className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/15 via-transparent to-transparent rounded-full blur-3xl"
//             />
//           </div>

//           {/* Animated grid */}
//           <motion.svg
//             animate={{ opacity: [0.1, 0.2, 0.1] }}
//             transition={{ duration: 4, repeat: Infinity }}
//             className="absolute inset-0 w-full h-full pointer-events-none"
//           >
//             <defs>
//               <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </motion.svg>

//           {/* Main content */}
//           <motion.div
//             variants={textContainerVariants}
//             initial="initial"
//             animate="animate"
//             className="text-center relative z-10 px-8"
//           >
//             {/* Glow effect behind icon */}
//             <motion.div
//               variants={glowVariants}
//               animate="animate"
//               className="absolute left-1/2 -translate-x-1/2 -top-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"
//             />

//             {/* Code icon */}
//             <motion.div
//               variants={codeIconVariants}
//               initial="initial"
//               animate="animate"
//               className="flex justify-center mb-6 relative"
//             >
//               <motion.div
//                 animate={{
//                   boxShadow: [
//                     "0 0 20px rgba(59, 130, 246, 0.3)",
//                     "0 0 40px rgba(59, 130, 246, 0.6)",
//                     "0 0 20px rgba(59, 130, 246, 0.3)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
//               >
//                 <Code2 className="w-10 h-10 md:w-14 md:h-14 text-blue-400" strokeWidth={1.5} />
//               </motion.div>
//             </motion.div>

//             {/* Main title with typing effect */}
//             <motion.div
//               variants={titleVariants}
//               initial="initial"
//               animate="animate"
//               className="relative mb-2"
//             >
//               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
//                 {displayText}
//                 <motion.span
//                   variants={cursorVariants}
//                   animate="animate"
//                   className="text-blue-400"
//                 >
//                   |
//                 </motion.span>
//               </h1>

//               {/* Top decorative line */}
//               <motion.div
//                 variants={lineVariants}
//                 initial="initial"
//                 animate="animate"
//                 className="absolute left-1/2 -translate-x-1/2 -top-6 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
//               />

//               {/* Bottom decorative line */}
//               <motion.div
//                 variants={lineVariants}
//                 initial="initial"
//                 animate="animate"
//                 className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
//               />
//             </motion.div>

//             {/* Subtitle with animated loading dots */}
//             <motion.div
//               variants={subtitleVariants}
//               initial="initial"
//               animate="animate"
//               className="mt-14 md:mt-16"
//             >
//               <div className="flex items-center justify-center gap-4 mb-6">
//                 <span className="text-xs md:text-sm font-light text-blue-300/80 tracking-widest uppercase">
//                   Loading. .
//                 </span>
//                 <div className="flex gap-2.5">
//                   {[0, 1, 2].map((i) => (
//                     <motion.div
//                       key={i}
//                       custom={i}
//                       variants={dotVariants}
//                       animate="animate"
//                       className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50"
//                     />
//                   ))}
//                 </div>
//               </div>
//               <motion.p
//                 animate={{ opacity: [0.6, 1, 0.6] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 className="text-xs md:text-sm text-blue-200/60 font-light tracking-wide"
//               >
//                 Crafting extraordinary experiences
//               </motion.p>
//             </motion.div>

//             {/* Floating elements */}
//             {[0, 1, 2].map((i) => (
//               <motion.div
//                 key={`float-${i}`}
//                 variants={floatingVariants(i * 0.3)}
//                 initial="initial"
//                 animate="animate"
//                 className="absolute w-1 h-1 bg-blue-400/60 rounded-full pointer-events-none"
//                 style={{
//                   left: `calc(50% + ${(i - 1) * 80}px)`,
//                   top: "50%",
//                 }}
//               />
//             ))}
//           </motion.div>

//           {/* Expanding circle transition */}
//           <motion.div
//             variants={expandingCircleVariants}
//             initial="initial"
//             animate="animate"
//             className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           >
//             <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full" />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Code2, Sparkles, Rocket, Zap, Coffee, Heart, Star, Crown } from "lucide-react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [displayRole, setDisplayRole] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  
  const fullText = "Pradeep Nigam";
  const roles = useMemo(() => [
    "MERN Stack Developer",
    "Full Stack Engineer", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ], []);
  
  const facts = useMemo(() => [
    "🚀 Loading amazing experience",
    "💻 Compiling components", 
    "⚡ Optimizing performance",
    "🎯 Almost there..."
  ], []);

  // Smooth loading progress
  useEffect(() => {
    const duration = 3500;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(newProgress));
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, []);

  // Smooth name typing
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Smooth role cycling
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;
    
    const animateRole = () => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting && charIndex <= currentRole.length) {
        setDisplayRole(currentRole.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(animateRole, 100);
      } else if (!isDeleting && charIndex > currentRole.length) {
        isDeleting = true;
        timeout = setTimeout(animateRole, 2000);
      } else if (isDeleting && charIndex >= 0) {
        setDisplayRole(currentRole.slice(0, charIndex));
        charIndex--;
        timeout = setTimeout(animateRole, 50);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        timeout = setTimeout(animateRole, 100);
      }
    };
    
    timeout = setTimeout(animateRole, 500);
    return () => clearTimeout(timeout);
  }, [roles]);

  // Smooth fact rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % facts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [facts.length]);

  // Optimized variants with will-change
  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, rotateZ: -180 },
    animate: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const roleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const factVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatVariants = {
    animate: (i) => ({
      y: [0, -8, 0],
      transition: {
        delay: i * 0.2,
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const cursorVariants = {
    animate: {
      opacity: [1, 0.3, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const dotVariants = {
    animate: (i) => ({
      y: [0, -6, 0],
      scale: [1, 1.2, 1],
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          variants={containerVariants}
          initial={{ opacity: 1 }}
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden"
          style={{ willChange: "transform" }}
        >
          {/* Simplified background orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-600/10 via-blue-600/10 to-transparent rounded-full blur-3xl"
            />
          </div>

          {/* Simplified grid */}
          <motion.svg
            animate={{ opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ willChange: "opacity" }}
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </motion.svg>

          {/* Main content */}
          <div className="text-center relative z-10 px-8 max-w-4xl">
            {/* Icon with glow */}
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="flex justify-center mb-8"
            >
              <motion.div
                animate={pulseVariants.animate}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
                <div className="relative p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <Code2 className="w-14 h-14 md:w-16 md:h-16 text-blue-400" strokeWidth={1.5} />
                  
                  {/* Floating badges */}
                  <motion.div
                    custom={0}
                    variants={floatVariants}
                    animate="animate"
                    className="absolute -top-3 -right-3"
                  >
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  </motion.div>
                  <motion.div
                    custom={1}
                    variants={floatVariants}
                    animate="animate"
                    className="absolute -bottom-2 -left-2"
                  >
                    <div className="p-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500">
                      <Heart className="w-2.5 h-2.5 text-white fill-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.div
              variants={titleVariants}
              initial="initial"
              animate="animate"
              className="relative mb-3"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-blue-200 via-white to-purple-300 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  variants={cursorVariants}
                  animate="animate"
                  className="text-blue-400 inline-block ml-1"
                >
                  |
                </motion.span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              variants={roleVariants}
              initial="initial"
              animate="animate"
              className="mt-4"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light">
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  {displayRole}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="text-blue-400 ml-0.5"
                >
                  _
                </motion.span>
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-10 max-w-md mx-auto">
              <div className="h-0.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  style={{ willChange: "width" }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-blue-300/60 font-mono">
                  {Math.floor(progress)}%
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFact}
                    variants={factVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-xs text-blue-300/60 font-mono"
                  >
                    {facts[currentFact]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Loading indicators */}
            <div className="mt-10">
              <div className="flex items-center justify-center gap-3">
                <span className="text-xs text-blue-300/80 tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Loading
                  <Zap className="w-3 h-3" />
                </span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={dotVariants}
                      animate="animate"
                      className="w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
              
              <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs text-blue-200/50 mt-3 flex items-center justify-center gap-1.5"
              >
                <Coffee className="w-3 h-3" />
                Crafting experience
                <Rocket className="w-3 h-3" />
              </motion.p>
            </div>

            {/* Tech stack marquee */}
            <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="inline-flex gap-6 text-xs font-mono text-blue-300/30 whitespace-nowrap"
              >
                {["REACT", "NODE.JS", "MONGODB", "EXPRESS", "NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech, i) => (
                  <span key={i}>{tech} •</span>
                ))}
                {["REACT", "NODE.JS", "MONGODB", "EXPRESS", "NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech, i) => (
                  <span key={`dup-${i}`}>{tech} •</span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Smooth expanding circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: progress >= 100 ? 150 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}