import "../App.css"

import Box from "@mui/material/Box"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"

const steps = [
  {
    id: 1,
    title: "IT Specialist",
    company: "STC Bahrain",
    date: "Jan 2026 - Present",
    description: [
      "Manage and resolve app incidents, providing clear and effective communication as first-line support for customer technical issues.",
      "Analyze application logs to quickly identify and resolve user-facing issues.",
      "Leverage CRM tools to access order details.",
      "Utilize SQL queries to manage and interact with the database, performing data updates and administrative tasks to support application operations.",
      "Monitor application performance metrics to ensure efficient and uninterrupted user operations.",
    ],
  },
  {
    id: 2,
    title: "Software Engineering Bootcamp",
    company: "General Assembly",
    date: "Aug 2025 - Nov 2025",
    description: [
      "Utilized Git and GitHub for managing code repositories and streamlining team collaboration.",
      "Developed full-stack web applications by deploying JavaScript, MERN/MEN stacks, and Python with Django framework.",
      "Tested and validated backend functionality using Postman and Insomnia to ensure seamless data integration.",
      "Designed and managed relational and non-relational databases using MongoDB and PostgreSQL for efficient data storage.",
      "Engaged in collaborative team projects with fellow students to build integrated software solutions.",
    ],
  },
  {
    id: 3,
    title: "WordPress Developer Internship",
    company: "Space Tap",
    date: "Jul 2024 - Aug 2024",
    description: [
      "Designed and customized multiple responsive website pages for clients to enhance user experience (UX).",
      "Added and managed product on a client’s website, ensuring accurate information.",
      "Developed a full CRUD website using PHP, including database management and successful deployment on a web hosting server."
    ],
  },
]

const WorkExperinces = () => {
  return (
    <div className="work">
      <h2 className="work-title">Work Experiences</h2>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginLeft: -6,
        }}
      >
        <Timeline position="right">
          {steps.map((step) => (
            <TimelineItem key={step.id}>
              <TimelineOppositeContent
                sx={{
                  color: "text.secondary",
                }}
              >
                <div className="step-dates">{step.date}</div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="step-titles">{step.title}</div>
                <div className="step-companies">{step.company}</div>

                <ul className="step-descriptions">
                  {step.description.map((item, index) => (
                    <li className="step-points" key={index}>{item}</li>
                  ))}
                </ul>
                <br />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </div>
  )
}

export default WorkExperinces
