"use client"
import React from 'react'
import { Card, CardContainer, Container } from './styledComponents'
import { IoStar } from "react-icons/io5";

const obj = [{
    id : 1,
    title : "Best Fitness App!" , 
    description : "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    
},
{
    id : 2,
    title : "So Easy to Use!" , 
    description : "I love how user-friendly the app is. Logging workouts has never been easier!",
    
},
{
    id : 3,
    title : "Incredible Progress Tracker!" , 
    description :"I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    
},

]

const Feedbacks = () => {
  return (
    <Container>
        <h2>What Users <br/><span>Say</span></h2>
        <CardContainer>
        {obj.map((each) => (
            <Card key={each.id}>
                <h3>"{each.title}"</h3>
                <p>{each.description}</p>
                <div>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                </div>
            </Card>
        ))}
        </CardContainer>
        
    </Container>
  )
}

export default Feedbacks