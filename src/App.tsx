import ScrollyCanvas from './components/ScrollyCanvas'
import Overlay from './components/Overlay'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechnicalSkills from './components/TechnicalSkills'

function App() {
  return (
    <div className="relative">
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
    </div>
  )
}

export default App
