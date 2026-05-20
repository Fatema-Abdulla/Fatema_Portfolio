import "../App.css"
import HeaderHome from "../components/HeaderHome"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import WorkExperinces from "../components/WorkExperinces"
import Contact from "../components/Contact"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Element } from "react-scroll"

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <Box sx={{ flexGrow: 1 }} className="about-skill">
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 7 }}>
            <AboutMe />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <TechStack />
          </Grid>
        </Grid>
      </Box>
      <WorkExperinces />
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}

export default Home
