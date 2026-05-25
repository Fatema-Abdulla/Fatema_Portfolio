import { motion } from "motion/react"
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
    company: "Microlink Solutions [STC Bahrain]",
    date: "Jan 2026 - Present",
    description: [
      "Leverage CRM tools to access order details.",
      "Resolve user tickets and communicate clearly as first-line support.",
      "Use SQL queries to update data and manage the application database.",
      "Monitor application performance to keep it running smoothly for users.",
      "Analyze application logs to quickly identify and resolve user-facing issues.",
    ],
  },
  {
    id: 2,
    title: "Software Engineering Bootcamp",
    company: "General Assembly",
    date: "Aug 2025 - Nov 2025",
    description: [
      "Utilized Git and GitHub for managing code repositories and streamlining team collaboration.",
      "Built full-stack web apps using JavaScript, MEN, MERN, and Python with Django.",
      "Tested backend functionality with Postman and Insomnia to ensure smooth data flow.",
      "Managed MongoDB and PostgreSQL databases for efficient data storage.",
      "Engaged in collaborative team projects with fellow students to build integrated software solutions.",
    ],
  },
  {
    id: 3,
    title: "WordPress Developer Internship",
    company: "Space Tap",
    date: "Jul 2024 - Aug 2024",
    description: [
      "Added and managed product on a client’s website, ensuring accurate information.",
      "Designed and customized multiple responsive website pages for clients to enhance user experience (UX).",
      "Developed a full CRUD website using PHP, including database management and successful deployment on a web hosting server.",
    ],
  },
]

const WorkExperinces = () => {
  return (
    <Box
      className="work"
      component={motion.div}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="work-title">Work Experiences</h2>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginLeft: { xs: 0, md: -5 },
        }}
      >
        <Timeline position="right">
          {steps.map((step) => (
            <TimelineItem key={step.id}>
              <TimelineOppositeContent
                sx={{
                  color: "text.secondary",
                  flex: { xs: 0.3, md: 1 },
                  minWidth: { xs: "70px", md: "auto" },
                  paddingRight: { xs: 1, md: 2 },
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
                    <li className="step-points" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>

                <br />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  )
}

export default WorkExperinces
