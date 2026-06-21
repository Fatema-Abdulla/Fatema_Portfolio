import "../App.css"

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Chip,
  Link,
} from "@mui/material"

import {
  FiGlobe,
  FiUser,
  FiClock,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi"

import { useParams } from "react-router-dom"
import projects from "../data/projects.json"

const DetailRow = ({ icon, label, value }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      py: 3,
      gap: 3,
      borderBottom: "1px solid #ECECEC",
    }}
  >
    <Box
      sx={{
        color: "#C7A667",
        display: "flex",
        fontSize: 24,
      }}
    >
      {icon}
    </Box>

    <Typography
      sx={{
        width: 180,
        color: "#10202D",
        fontWeight: 700,
      }}
    >
      {label}
    </Typography>

    <Box
      sx={{
        flex: 1,
        textAlign: "right",
        color: "#4B5563",
      }}
    >
      {value}
    </Box>
  </Box>
)

const ProjectDetails = () => {
  const { projectname } = useParams()

  const project = projects.find((project) => project.name === projectname)

  if (!project) return null

  return (
    <Box
      sx={{
        background: "#F7F7F7",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: {
            xs: "45vh",
            md: "60vh",
          },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={`/images/${project.details.cover}`}
          alt={project.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(16,32,45,.35), rgba(16,32,45,.85))",
            display: "flex",
            alignItems: "center",
          }}
        ></Box>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: "#C7A667",
                fontWeight: 800,
                mb: 4,
              }}
            >
              About {project.name}
            </Typography>

            <Typography
              sx={{
                color: "#4B5563",
                lineHeight: 2.1,
                mb: 5,
              }}
            >
              {project.details.description}
            </Typography>

            <Stack>
              <DetailRow
                icon={<FiGlobe />}
                label="Tech Stack"
                value={project.tags.join(", ")}
              />

              <DetailRow
                icon={<FiUser />}
                label="Project Type"
                value={project.details.projectType}
              />

              <DetailRow
                icon={<FiClock />}
                label="Timeline"
                value={project.details.timeline}
              />

              <DetailRow
                icon={<FiExternalLink />}
                label="Project Repository"
                value={
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    underline="none"
                    sx={{
                      color: "#C7A667",
                      fontWeight: 700,

                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    View Repository →
                  </Link>
                }
              />
              {project.githubLink_Backend ? <DetailRow
                icon={<FiExternalLink />}
                label="Backend Repository"
                value={
                  <Link
                    href={project.githubLink_Backend}
                    target="_blank"
                    underline="none"
                    sx={{
                      color: "#C7A667",
                      fontWeight: 700,

                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    View Repository →
                  </Link>
                }
              /> : null}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: "#C7A667",
                fontWeight: 800,
                mb: 5,
              }}
            >
              Highlights
            </Typography>

            <Stack spacing={3} mb={8}>
              {project.details.highlights.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <FiCheckCircle
                    size={22}
                    color="#10202D"
                    style={{
                      marginTop: 4,
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#4B5563",
                      lineHeight: 1.9,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Box
              sx={{
                borderTop: "1px solid #ECECEC",
                pt: 5,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#C7A667",
                  fontWeight: 800,
                  mb: 4,
                }}
              >
                Tools
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {project.details.tools.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={{
                      background: "transparent",
                      border: "1px solid #10202D",
                      color: "#4B5563",
                      borderRadius: "10px",
                      px: 1,
                      height: 44,
                      fontSize: ".95rem",
                      "&:hover": {
                        background: "#10202D",
                        color: "#F7F7F7",
                        transform: "translateY(-2px)",
                        borderColor: "#10202D",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProjectDetails
