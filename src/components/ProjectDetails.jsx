import "../App.css"

import Box from "@mui/material/Box"
import { useParams } from "react-router-dom";

import projects from "../data/projects.json"


const ProjectCard = () => {

  const { projectname } = useParams();
  const projectDetails = projects.find(project => project.name === projectname);

  return (
    <Box
      sx={{overflow: "hidden" }}
    >
      <h2>{projectname}</h2>
      <p>{projectDetails.details.description}</p>
      <ul>
        {projectDetails.details.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </Box>
  )
}

export default ProjectCard
