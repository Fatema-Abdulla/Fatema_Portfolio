import { motion } from "motion/react"

import { useState } from "react"
import { TextField, Button, Box, Alert } from "@mui/material"

const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    description: "",
  }

  const [formData, setFormData] = useState(initialFormState)

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleReset = () => {
    setFormData(initialFormState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScpyIH48lQCA1G9oD_Wa2OQa7ulOvrLzbogN1USNmjnUQYLCA/formResponse"

    const formBody = new FormData()
    formBody.append("entry.1370365448", formData.name)
    formBody.append("entry.680401577", formData.email)
    formBody.append("entry.1302566134", formData.description)

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      })

      setSuccess(true)

      setFormData({
        name: "",
        email: "",
        description: "",
      })
    } catch (error) {
      console.error("Error submitting form", error)
    }
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(6px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="contact-me"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-des"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Please get in contact with me if you have any questions.
      </motion.p>

      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          border: "1px solid #e0e0e0",
        }}
      >
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Alert severity="success" sx={{ mt: 2, mb: 1 }}>
              Email Sent Successfully!
            </Alert>
          </motion.div>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <TextField
              fullWidth
              label="Your Message"
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ display: "flex", gap: "12px" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#10202d" }}
            >
              Send Message
            </Button>

            <Button
              type="reset"
              variant="outlined"
              onClick={handleReset}
              sx={{
                mt: 2,
                ml: 1.5,
                backgroundColor: "transparent",
                color: "#10202d",
                border: "solid 1px #10202d",
              }}
            >
              Reset
            </Button>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Contact
