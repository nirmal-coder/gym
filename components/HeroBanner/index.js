"use client"
import React, { useEffect } from 'react'
import { HeadingContainer, MainContainer } from './styledComponent'


const HeroBanner = () => {
  return (
    <MainContainer>
      
      <HeadingContainer>
        <div>
        <h4>Track Your</h4>
        <h1>Fitness</h1>
        <h1 className='h1-2'>Journey</h1>
        </div>
        
        <p>Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.</p>
      </HeadingContainer>
      <img src="/hero-image.png" alt="Heroine" />
      
    </MainContainer>
  )
}

export default HeroBanner