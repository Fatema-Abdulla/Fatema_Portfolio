import { Box, Stack, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { motion } from "motion/react"

const Nav = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#10202D",
        px: { xs: 2, sm: 4, md: 8 },
        py: 2,
        paddingTop: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/newlogo.png"
            alt="logo"
            sx={{
              width: {
                xs: 48,
                sm: 56,
                md: 64,
              },
            }}
          />

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: {
                xs: "1rem",
                sm: "1.15rem",
                md: "1.3rem",
              },
              whiteSpace: { xs: "normal", sm: "nowrap" },
              wordBreak: "break-word",
              maxWidth: { xs: "80px", sm: "none" },
              lineHeight: 1.1,
            }}
          >
            Fatema Abdulla
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={{
            xs: 1,
            sm: 2,
          }}
        >
          {[
            { to: "/", label: "Home", delay: 0.2 },
            { to: "/projects", label: "Projects", delay: 0.35 },
          ].map((item) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              style={{ display: "inline-block" }}
            >
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  color: isActive ? "#10202D" : "#FFF",
                  background: isActive ? "#C7A667" : "transparent",
                  transition: ".3s",
                })}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default Nav
