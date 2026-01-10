import ScrollyCanvas from './components/ScrollyCanvas'
import Overlay from './components/Overlay'
import Projects from './components/Projects'

function App() {
  return (
    <div className="relative">
      {/* Canvas with scroll-driven image sequence */}
      <ScrollyCanvas />
      
      {/* Text overlay with parallax */}
      <Overlay />
      
      {/* Projects grid below the scroll animation */}
      <Projects />
    </div>
  )
}

export default App
