import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Enhanced Knowledge Base',
    text: "Chat GPT-4 boasts an expanded knowledge base, ensuring access to the latest information across various domains, allowing you to stay up-to-date and informed."
  },
  {
    title: 'Improved Conversational Abilities',
    text: "With upgraded conversational abilities, Chat GPT-4 engages in more dynamic and context-aware interactions, providing more accurate and nuanced responses tailored to your specific needs."
  },
  {
    title: 'Advanced Problem Solving',
    text: "Chat GPT-4 offers advanced problem-solving capabilities, enabling it to tackle complex queries and provide comprehensive solutions, assisting you in overcoming challenges more effectively."
  },
  {
    title: 'Enhanced Learning Experience',
    text: "With its advanced educational features, Chat GPT-4 enhances the learning experience by providing personalized guidance, insightful explanations, and interactive lessons, helping you acquire knowledge and skills more efficiently."
  }

]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
      {featuresData.map((item,index)=>(
        <Feature title={item.title} text={item.text} key={item.title + index}/>
      ))}
      </div>
    </div>
  )
}

export default Features