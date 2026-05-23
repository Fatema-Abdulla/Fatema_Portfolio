import "../App.css"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

import skillsData from "../data/skills.json"

const BigBox = styled(Box)(() => ({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  padding: "10px 0",
}))

const MarqueeTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})(({ reverse }) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  width: "max-content",

  animation: `${reverse ? "marqueeReverse" : "marquee"} 25s linear infinite`,

  "@keyframes marquee": {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-50%)" },
  },

  "@keyframes marqueeReverse": {
    from: { transform: "translateX(-50%)" },
    to: { transform: "translateX(0)" },
  },
}))

const CustomizeBox = styled(Box)(() => ({
  minWidth: "120px",
  maxWidth: "180px",

  height: 52,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,

  padding: "0 14px",

  borderRadius: "999px",

  background: "rgba(255,255,255,0.04)",

  border: "1px solid rgba(0,0,0,0.12)",

  transition: "0.3s ease",

  flexShrink: 0,

  overflow: "hidden",

  opacity: 0,
  animation: "fadeSlide .7s ease forwards",

  "@keyframes fadeSlide": {
    from: {
      opacity: 0,
      transform: "translateX(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },

  "@media (max-width: 600px)": {
    minWidth: "100px",
    maxWidth: "140px",

    height: 46,

    padding: "0 12px",

    gap: 6,
  },
}))

const Skills = () => {
  return (
    <Box className="tech-stack-container">
      <h2 className="skill-title">Tech Stack</h2>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          {skillsData.sections.map((sec, rowIndex) => (
            <div key={sec.key}>
              <Typography
                variant="h6"
                sx={{
                  marginTop: sec.key === "programs" ? 0 : "26px",
                  fontSize: "1.09rem",
                  marginBottom: "12px",
                  textAlign: "center",
                  color: "#000",

                  opacity: 0,
                  animation: "fadeTitle .8s ease forwards",

                  "@keyframes fadeTitle": {
                    from: {
                      opacity: 0,
                      transform: "translateY(15px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },

                  "@media (max-width: 600px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                {sec.title}
              </Typography>

              <BigBox>
                <MarqueeTrack reverse={rowIndex % 2 === 1}>
                  {[
                    ...skillsData.allSkills[sec.key],
                    ...skillsData.allSkills[sec.key],
                  ].map((skill, index) => {
                    const uniqueKey = `${skill.name}-${index}`

                    return (
                      <CustomizeBox key={uniqueKey}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            border: "1px solid rgba(0,0,0,0.12)",
                            borderRadius: "50%",

                            background: "#fff",

                            flexShrink: 0,

                            "@media (max-width: 600px)": {
                              width: 28,
                              height: 28,
                            },
                          }}
                        >
                          <img
                            src={`/images/${skill.icon}`}
                            width="16"
                            height="16"
                            alt={skill.name}
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </Box>

                        <Typography
                          sx={{
                            color: "#000",
                            fontSize: ".9rem",
                            fontWeight: 500,

                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",

                            "@media (max-width: 600px)": {
                              fontSize: ".78rem",
                            },
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </CustomizeBox>
                    )
                  })}
                </MarqueeTrack>
              </BigBox>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills
