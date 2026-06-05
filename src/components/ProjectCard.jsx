import "../App.css"
import { Link } from "react-router-dom"


import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Chip from '@mui/material/Chip';


import projectsData from "../data/projects.json"

import { FiExternalLink, FiChevronRight } from "react-icons/fi"

const ProjectCard = () => {
  return (
    <Box
      className="container-project-body"
      sx={{ flexGrow: 1, position: "relative", overflow: "hidden" }}
    >
      {projectsData.map((project) => (
        <Card
          className="card-projects"
          sx={{ maxWidth: 345, marginBottom: "8px" }}
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {project.shortDescription}
            </Typography>
            <Chip label="Chip Filled" sx={{marginTop: "6px", marginBottom: "-8px"}}/>
          </CardContent>
          <CardActions>
            <Button size="small" target="_blank" href={project.githubLink}>
              GitHub <FiExternalLink />
            </Button>
            <Link to={`/projects/${project.name}`}>
              <Button size="small">
                More Details <FiChevronRight />
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export default ProjectCard
