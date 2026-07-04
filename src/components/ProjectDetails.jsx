import "../App.css"

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Chip,
  Link,
  Breadcrumbs,
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
import { motion } from "motion/react"

const DetailRow = ({ icon, label, value }) => (
  <Box
    component={motion.div}
    initial={{
      opacity: 0,
      y: 18,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.4,
    }}
    transition={{
      duration: 0.35,
    }}
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
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      sx={{
        background: "#F7F7F7",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.div}
        initial={{
          opacity: 0,
          scale: 1.03,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
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
          sx={{
            width: "100%",
            height: { xs: 220, sm: 320, md: 362 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={`/images/${project.details.cover}`}
            alt={project.name}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(16,32,45,.35), rgba(16,32,45,.85))",
            display: "flex",
            alignItems: "center",
          }}
        />
      </Box>

      <Container
        component={motion.div}
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
          amount: 0.15,
        }}
        transition={{
          duration: 0.55,
          delay: 0.15,
        }}
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        <Breadcrumbs
          separator="›"
          sx={{
            marginTop: "-30px",
            marginBottom: "22px",
          }}
        >
          <Link underline="hover" color="inherit" href="/projects">
            Projects
          </Link>

          <Typography
            sx={{
              color: "text.primary",
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href={`/projects/${project.name}`}
            >
              {project.name}
            </Link>
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={10}>
          <Grid
            component={motion.div}
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              delay: 0.2,
            }}
            size={{ xs: 12, md: 6 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#C7A667",
                fontWeight: 800,
                mb: 4,
                fontFamily: '"Sora", sans-serif',
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

            <Stack
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
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

              {project.githubLink_Backend ? (
                <>
                  <DetailRow
                    icon={<FiExternalLink />}
                    label="Frontend Repository"
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
                  <DetailRow
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
                  />
                </>
              ) : (
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
              )}
            </Stack>
          </Grid>

          <Grid
            component={motion.div}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              delay: 0.3,
            }}
            size={{ xs: 12, md: 6 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#C7A667",
                fontWeight: 800,
                mb: 5,
                fontFamily: '"Sora", sans-serif',
              }}
            >
              Highlights
            </Typography>

            <Stack spacing={3} mb={8}>
              {project.details.highlights.map((item, index) => (
                <Box
                  component={motion.div}
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 12,
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
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
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
              component={motion.div}
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.55,
              }}
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
                  fontFamily: '"Sora", sans-serif',
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
                {project.details.tools.map((tool, index) => (
                  <Chip
                    component={motion.div}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.35,
                    }}
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
                        transform: "translateY(-3px)",
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
