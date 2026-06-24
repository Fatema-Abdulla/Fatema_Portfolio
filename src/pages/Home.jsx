import "../App.css"
import HeaderHome from "../components/HeaderHome"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import WorkExperiences from "../components/WorkExperiences"
import Contact from "../components/Contact"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Element } from "react-scroll"

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <AboutMe />
      <TechStack />
      <WorkExperiences />
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}

export default Home
