import "../App.css"
import { Link } from "react-router-dom"
import { motion } from "motion/react"


import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"

import projectsData from "../data/projects.json"
import { FiExternalLink, FiChevronRight } from "react-icons/fi"


const ProjectCard = () => {
  return (
    <Box
      className="container-project-body"
      sx={{
        flexGrow: 1,
        position: "relative",
        backgroundColor: "#F7F7F7",
      }}
    >
      {projectsData.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
          }}
        >
          <Card
            className="card-projects"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(16,32,45,0.08)",
              boxShadow: "0 10px 30px rgba(16,32,45,0.08)",
              transition: "all 0.3s ease",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 18px 40px rgba(16,32,45,0.12)",
              },
            }}
          >
            <CardMedia
              component="img"
              alt={project.name}
              image={`/images/${project.image}`}
              sx={{
                height: 260,
                objectFit: "cover",
              }}
            />

            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#10202D",
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                }}
              >
                {project.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {project.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: "#F5F5F5",
                      color: "#10202D",
                      border: "1px solid #E5E7EB",
                      fontWeight: 500,

                      "& .MuiChip-label": {
                        px: 1,
                      },
                    }}
                  />
                ))}
              </Box>
            </CardContent>

            <CardActions
              sx={{
                mt: "auto",
                px: 2,
                pb: 2,
                gap: 1.5,
              }}
            >
              <Button
                size="small"
                target="_blank"
                href={project.githubLink}
                sx={{
                  flex: 1,
                  color: "#10202D",
                  fontWeight: 600,
                  border: "1px solid #10202D",
                  backgroundColor: "#FFFFFF",
                  textTransform: "none",
                  borderRadius: "10px",

                  "&:hover": {
                    backgroundColor: "#F7F7F7",
                    borderColor: "#10202D",
                  },
                }}
              >
                GitHub

                <FiExternalLink
                  style={{
                    marginLeft: 5,
                    marginBottom: 2.7,
                  }}
                />
              </Button>

              <Button
                component={Link}
                to={`/projects/${project.name}`}
                onClick={() => window.scrollTo(0, 0)}
                size="small"
                sx={{
                  flex: 1,
                  backgroundColor: "#10202D",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  border: "1px solid #10202D",
                  textTransform: "none",
                  borderRadius: "10px",

                  "&:hover": {
                    backgroundColor: "#1B3448",
                    borderColor: "#1B3448",
                  },
                }}
              >
                Details

                <FiChevronRight
                  style={{
                    marginLeft: 4,
                    marginBottom: 0.5,
                  }}
                />
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      ))}
    </Box>
  )
}

export default ProjectCard
