"use client"
import React from 'react'
import { CardContainer, Container , Card } from './styledComponent'

const obj = [{
  id : 1,
  title : "Effortless Workout Logging",
  description: "Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision.",
  image : "/images-1.jpg"

}, 
{
  id : 2,
  title : "Accurate Rep Counting",
  description: "Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.",
  image : "/image-2.jpg"

}, 
{
  id : 3,
  title : "Calorie Calculation Made Easy",
  description: "Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.",
  image : "/image-3.jpg"

}, 
{
  id : 4,
  title : "personalized workout plan",
  description: "An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster.",
  image : "/image-4.jpg"

}, 
{
  id : 5,
  title : "personalized Diet plan",
  description: "An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.",
  image : "/image-5.jpg"

}, 
]



const Features = () => {
  return (
    <Container id="Features">
        <h2>Discover Our App's <br/><span>Key Features</span></h2>
        <p>GymFluencer is your ultimate fitness companion, designed to help you track your workouts with ease. Our application allows you to log exercises, count reps, and calculate calories burned, all through a user-friendly interface. Whether you’re a beginner or a seasoned athlete, our app will keep you motivated and on track.</p>
        <CardContainer>
          {obj.map((each) => (
            <Card key={each.id}>
              <img src={each.image} alt={each.title} />
              <h2>{each.title}</h2>
              <p>{each.description}</p>
            </Card>
          ))}
        </CardContainer>
    </Container>
  )
}

export default Features