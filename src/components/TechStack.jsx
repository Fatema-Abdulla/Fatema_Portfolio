import "../App.css"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

import skillsData from "../data/skills.json"

const BigBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  marginTop: 2,
}))

const CustomizeBox = styled(Box)(() => ({
  width: 60,
  height: 60,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  transition: "0.3s",

  opacity: 0,
  animation: "slideRightFade 0.8s ease forwards",
  animationDelay: "0.8s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
  },

  "@keyframes slideRightFade": {
    from: {
      opacity: 0,
      transform: "translateX(35px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}))

const Skills = () => {
  return (
    <div>
      <h2 className="skill-title">Tech Stack</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          {skillsData.sections.map((sec) => (
            <div key={sec.key}>
              <Typography
                variant="h6"
                sx={{
                  marginTop: sec.key === "programs" ? 0 : "26px",
                  fontSize: "1.09rem",
                  marginBottom: "5px",

                  opacity: 0,
                  animation: "slideRightFade 0.9s ease forwards",
                  animationDelay: "0.5s",
                }}
              >
                ➤ {sec.title}
              </Typography>

              <BigBox>
                {skillsData.allSkills[sec.key].map((skill) => (
                  <CustomizeBox key={skill.name}>
                    <img
                      src={`/images/${skill.icon}`}
                      width="40"
                      alt={skill.name}
                    />
                  </CustomizeBox>
                ))}
              </BigBox>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default Skills
