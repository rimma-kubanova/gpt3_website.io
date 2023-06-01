import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Chat GPT-3: A revolutionary chatbot with extensive knowledge, enabling intelligent and interactive discussions on a wide range of topics.'/>
        <Feature title='Knowledge' text='Chat GPT-3: An advanced language model with vast knowledge, providing accurate and human-like responses for natural language conversations.'/>
        <Feature title='Education' text='Chat GPT-3: An intelligent educational assistant with up-to-date information, offering personalized and immersive learning experiences.'/>
      </div>
    </div>
  )
}

export default WhatGPT3