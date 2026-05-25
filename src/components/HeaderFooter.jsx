import "../App.css"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"
import { Link } from "react-scroll"

import Stars from "./Stars"

const HeaderFooter = () => {
  return (
    <Box className="header-container" sx={{ flexGrow: 1, position: "relative", overflow: "hidden" }}>
      <Stars />
        <div size={{ xs: 12, md: 7 }} className="header-text">
          <h2 className="my-name">Hi, I'm Fatema Abdulla</h2>
          <h2 className="header-subtitle">Full Stack & WordPress Developer</h2>
          <h3 className="header-sentence">
            Crafting modern, responsive web applications with clean architecture and UX-driven design.
          </h3>
        </div>
    </Box>
  )
}

export default HeaderFooter
