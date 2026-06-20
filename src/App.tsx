import ScrollyCanvas from './components/ScrollyCanvas'
import Overlay from './components/Overlay'
import FloatingNav from './components/FloatingNav'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechnicalSkills from './components/TechnicalSkills'
import ContactMe from './components/ContactMe'
import DownloadCV from './components/DownloadCV'

function App() {
  return (
    <div className="relative">
      {/* Floating navigation bar */}
      <FloatingNav />
      
      <main>
        {/* Canvas with scroll-driven image sequence */}
        <ScrollyCanvas />
        
        {/* Text overlay with parallax */}
        <Overlay />
        
        {/* Projects grid below the scroll animation */}
        <Projects />
        
        {/* Experience section */}
        <Experience />
        
        {/* Technical Skills section */}
        <TechnicalSkills />
        
        {/* Contact Me section */}
        <ContactMe />
      </main>
      
      {/* Download CV button */}
      <DownloadCV />
    </div>
  )
}

export default App
