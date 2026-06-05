import { motion } from "motion/react"
import Box from "@mui/material/Box"

import "../App.css"

const paragraphs = [
  {
    id: 1,
    description:
      "I am an Information Systems graduate from University of Bahrain passionate about building modern, user-friendly web applications. Blending full-stack development skills with a background in UX design, I focus on creating intuitive, responsive, and client-focused digital experiences.",
  },
  {
    id: 2,
    description:
      "After completing an intensive Software Engineer Bootcamp at General Assembly, I gained hands-on experience developing dynamic web applications and working across both frontend and backend technologies. I also completed a university internship in WordPress e-commerce development.",
  },
  {
    id: 3,
    description:
      "Currently, as an IT Specialist (L1 Support), I actively monitor application, troubleshoot and resolve technical issues, and collaborate with cross-functional teams to ensure seamless operations.",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const AboutMe = () => {
  return (
    <Box className="about-me">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="about-title" variants={item}>
          About Me
        </motion.h2>
        {paragraphs.map((paragraph) => (
          <motion.p
            className="about-paragraph"
            variants={item}
            key={paragraph.id}
          >
            {paragraph.description}
          </motion.p>
        ))}
      </motion.div>
    </Box>
  )
}

export default AboutMe
