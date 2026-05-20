import "../App.css"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import { Link } from "react-scroll"

import Stars from "./Stars"

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#d6b77a",
  color: "#000",
  fontWeight: 800,
  letterSpacing: "1px",
  marginBottom: "24px",

  "&:hover": {
    backgroundColor: "#c4a46a",
    color: "#000",
  },
}))

const HeaderHome = () => {
  return (
    <Box className="header-container" sx={{ flexGrow: 1, position: "relative", overflow: "hidden" }}>
      <Stars />
        <div size={{ xs: 12, md: 7 }} className="header-text">
          <h2 className="my-name">Hi, I'm Fatema Abdulla</h2>
          <h2 className="header-subtitle">Full Stack & WordPress Developer</h2>
          <h3 className="header-sentence">
            Crafting modern, responsive web applications with clean architecture
            <br />
            and UX-driven design.
          </h3>
          <ColorButton variant="contained" className="animate-button">
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </ColorButton>
        </div>
    </Box>
  )
}

export default HeaderHome
