"use client"
import React from 'react'
import { Card, Container } from './styledComponent'

const obj = [{
    id : 1,
    title : "Step 1: Click on Get Started" , 
    description : "Start by opening the GymFluencer. The intuitive home screen gives you quick access to all features.",
    image : "/getStart.png",
},
{
    id : 2,
    title : "Step 2: Log Your Exercises" , 
    description : "Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.",
    image : "/log to exercise.png",
},
{
    id : 3,
    title : "Step 3: Count Your Reps" , 
    description :"Count your reps with precision, ensuring every detail is logged. Stay informed on your progress.",
    image : "https://insider.fitt.co/wp-content/uploads/2019/09/image-12.png",
},
{
    id : 4,
    title : "Step 4: Track Your Progress" , 
    description : "Review your workout stats and progress over time to stay motivated and reach your fitness goals.",
    image : "https://global-uploads.webflow.com/62fcfcf2e1a4c21ed18b80e6/6463b216223e8981aaf6ae33_8qpo0ipeqg.png",
},
{
    id : 5,
    title : "Step 5: Review Your Progress" , 
    description : "Check your workout summaries and progress over time to stay motivated and achieve your fitness goals.",
    image : "https://media.gq-magazine.co.uk/photos/5d13a7f6eef92142b7a0030b/master/w_1600,c_limit/keith-hype-01-gq-28feb19_b.jpg",
},
]


const GetStart = () => {
  return (
    <Container>
        {obj.map((each) => (
            <Card key={each.id}>
                <img src={each.image} alt={each.title} />
                <div>
                    <h2>{each.title}</h2>
                    <p>{each.description}</p>
                </div>
            </Card>
        ))}
    </Container>
  )
}

export default GetStart