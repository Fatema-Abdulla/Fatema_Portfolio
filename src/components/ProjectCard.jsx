import "../App.css"
import { Link } from "react-router-dom"

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
      sx={{ flexGrow: 1, position: "relative" }}
    >
      {projectsData.map((project) => (
        <Card
          className="card-projects"
          sx={{
            maxWidth: 345,
            marginBottom: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
          }}
          key={project.id}
        >
          <CardMedia
            component="img"
            alt={project.name}
            image={`/images/${project.image}`}
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#10202d", fontWeight: 700 }}
            >
              {project.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {project.shortDescription}
            </Typography>
            {project.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  mt: 1.5,
                  mr: 0.7,
                  bgcolor: "#f3ebda",
                  color: "#4a3b18",
                  border: "1px solid #c7a667",
                  fontWeight: 500,
                }}
              />
            ))}
          </CardContent>
          <CardActions sx={{ mt: "auto", gap: 0.5 }}>
            <Button
              size="small"
              target="_blank"
              href={project.githubLink}
              sx={{
                color: "#10202d",
                fontWeight: 600,
                border: "1px solid #10202d",
                textTransform: "none",

                "&:hover": {
                  backgroundColor: "#10202D10",
                },
              }}
            >
              GitHub{" "}
              <FiExternalLink
                style={{ marginLeft: "4px", marginTop: "-4px" }}
              />
            </Button>
            <Button
              component={Link}
              to={`/projects/${project.name}`}
              size="small"
              sx={{
                backgroundColor: "#10202D",
                color: "#fff",
                fontWeight: 600,
                border: "1px solid #10202D",
                textTransform: "none",

                "&:hover": {
                  backgroundColor: "#284660",
                },
              }}
            >
              More Details{" "}
              <FiChevronRight
                style={{ marginLeft: "3px", marginTop: "-2px" }}
              />
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export default ProjectCard
