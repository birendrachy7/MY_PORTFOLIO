import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
//import ParticlesBackground from "./components/ParticlesBackground"
import About from "./sections/About"
import Certificates from "./sections/Certificates"
import Contact from "./sections/Contact"
import Education from "./sections/Education"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor/> 
    {/*<ParticlesBackground/>*/}
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Certificates/>
    <Contact/>
    <Footer/>
    </div>

  )
}