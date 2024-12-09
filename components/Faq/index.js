"use client"
import { ArrowDropDownCircleOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button , AccordionActions, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Faq = () => {
  return (
    <Box sx={{display : "flex" , flexDirection : "column", justifyContent : "center" , alignItems : "center" , padding : "20px" , backgroundColor : "#1e1e1e" }} id="FAQs">
        <Typography variant='h4' sx={{color : "#D7FB00" , fontWeight : "800" , textAlign : "center" , marginBottom : "15px"}}>FAQs</Typography>
        <Typography variant='p' sx={{color : "#fff" , fontWeight : "400" , textAlign : "center" , marginBottom : "15px"}}>Find answers to your questions about the GymFluencer application, designed to enhance your fitness journey.</Typography>
        
      <Accordion sx={{backgroundColor : "#000" , color : "#fff" , width : "90%" , border : "2px solid #1e1e1e"}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleOutlined sx={{color : "#fff" , fontWeight : "700" }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How do I log my workouts?
        </AccordionSummary>
        <AccordionDetails>
        You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor : "#000" , color : "#fff" ,  width : "90%" , border : "2px solid #1e1e1e"}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleOutlined sx={{color : "#fff"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Can I track my calories burned?
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can track calories burned through the application integrated tracking features.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor : "#000" , color : "#fff" ,  width : "90%" , border : "2px solid #1e1e1e"}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleOutlined sx={{color : "#fff"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Is this application suitable for beginners?
        </AccordionSummary>
        <AccordionDetails>
        Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor : "#000" , color : "#fff" ,  width : "90%" , border : "2px solid #1e1e1e"}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleOutlined sx={{color : "#fff"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What features does the application offer?
        </AccordionSummary>
        <AccordionDetails>
        The app offers workout logging, rep counting, calorie tracking, and progress reviews.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor : "#000" , color : "#fff" ,  width : "90%" , border : "2px solid #1e1e1e"}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleOutlined sx={{color : "#fff"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How can I reset my password?
        </AccordionSummary>
        <AccordionDetails>
        You can reset your password by going to the login screen and selecting "Forgot Password."
        </AccordionDetails>
      </Accordion>
      
    </Box>
  )
}

export default Faq