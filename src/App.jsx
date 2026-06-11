import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/inputs/sections/HeroSection'
import SkillsSection from './components/inputs/sections/SkillSection'
import Certificates from './components/inputs/sections/Certificates'
import ProjectsSection from './components/inputs/sections/Projects'
import AboutSection from './components/inputs/sections/AboutSection'
import ContactSection from './components/inputs/sections/ContactSection'
import Footer from './components/inputs/sections/Footer'
import PageLoader from './components/inputs/sections/Loader'
import Experience from './components/inputs/sections/Experience'
const App = () => {
  return (
    <ThemeProvider>
    <div>
      <PageLoader/>
      <Navbar />
      <HeroSection />
      <Experience />
      <SkillsSection/>
      <Certificates/>
      <ProjectsSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
    </ThemeProvider>
  )
}

export default App


// import { ThemeProvider } from './context/ThemeContext'
// import Navbar from './components/Navbar'
// import HeroSection from './components/inputs/sections/HeroSection'
// import SkillsSection from './components/inputs/sections/SkillSection'
// import Certificates from './components/inputs/sections/Certificates'
// import ProjectsSection from './components/inputs/sections/Projects'
// import AboutSection from './components/inputs/sections/AboutSection'
// import ContactSection from './components/inputs/sections/ContactSection'
// import Footer from './components/inputs/sections/Footer'
// import PageLoader from './components/inputs/sections/Loader'
// import Experience from './components/inputs/sections/Experience'

// const App = () => {
//   return (
//     <ThemeProvider>
//       <div className="relative">
//         <PageLoader />
//         <Navbar />
        
//         {/* Main content with proper spacing */}
//         <main>
//           {/* Hero Section - No top padding needed as navbar handles spacing */}
//           <section id="home" className="scroll-mt-20">
//             <HeroSection />
//           </section>

//           {/* Experience Section */}
//           <section id="experience" className="scroll-mt-20">
//             <Experience />
//           </section>

//           {/* Skills Section */}
//           <section id="skills" className="scroll-mt-20">
//             <SkillsSection />
//           </section>

//           {/* Certificates Section */}
//           <section id="certificates" className="scroll-mt-20">
//             <Certificates />
//           </section>

//           {/* Projects Section */}
//           <section id="projects" className="scroll-mt-20">
//             <ProjectsSection />
//           </section>

//           {/* About Section */}
//           <section id="about" className="scroll-mt-20">
//             <AboutSection />
//           </section>

//           {/* Contact Section */}
//           <section id="contact" className="scroll-mt-20">
//             <ContactSection />
//           </section>

//           {/* Footer */}
//           <Footer />
//         </main>
//       </div>
//     </ThemeProvider>
//   )
// }

// export default App