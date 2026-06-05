import "../App.css"

import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const HeaderFooter = () => {
  return (
    <Box className="header-project" sx={{ flexGrow: 1, position: "relative", overflow: "hidden" }}>
        <div size={{ xs: 12, md: 7 }} className="header-project-text">
          <h2 className="header-title-project">My <span id="spin"></span></h2>
        </div>
    </Box>
  )
}

export default HeaderFooter
