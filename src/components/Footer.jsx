import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#10202D",
        px: { xs: 2, sm: 4, md: 8 },
        py: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",

          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr auto",
          },

          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "#F7F7F7",
            fontSize: {
              xs: ".9rem",
              md: ".95rem",
            },
            fontWeight: 300,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Designed & Developed by Fatema Abdulla
        </Typography>

        <Stack
          direction="row"
          spacing={2.5}
          justifyContent={{
            xs: "center",
            md: "flex-end",
          }}
        >
          <Box
            component="a"
            href="https://github.com/Fatema-Abdulla"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#F7F7F7",
              display: "flex",
              fontSize: 24,
              transition: ".3s",

              "&:hover": {
                color: "#C7A667",
                transform: "translateY(-2px)",
              },
            }}
          >
            <FaGithub />
          </Box>

          <Box
            component="a"
            href="https://www.linkedin.com/in/fatema-abdulla-bh"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#F7F7F7",
              display: "flex",
              fontSize: 24,
              transition: ".3s",

              "&:hover": {
                color: "#C7A667",
                transform: "translateY(-2px)",
              },
            }}
          >
            <FaLinkedin />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
