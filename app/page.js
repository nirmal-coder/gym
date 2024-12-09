"use client"
import Features from '@/components/Features'
import Header from '@/components/Header'
import { Box, Container } from '@mui/material'
import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import GetStart from '@/components/GetStart'
import Feedbacks from '@/components/Feedback'
import Faq from '@/components/Faq'
import "./globals.css";


const App = () => {
  return (
    <Box>
      <Header />
      <HeroBanner />
      <Features />
      <GetStart />
      <Feedbacks />
      <Faq />
    </Box>
    
  )
}

export default App
