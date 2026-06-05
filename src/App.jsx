import "./App.css"
import projects from "./data/projects.json"
import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"
import ProjectDetails from "./components/ProjectDetails"

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container-content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectname" element={<ProjectDetails />} />
      </Routes>
      </div>

      <div className="footer-section">
      <Footer />
      </div>
    </div>
  )
}

export default App
