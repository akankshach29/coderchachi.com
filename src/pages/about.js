import React from 'react'
import Layout from '../components/layout'

import womanAtDesk from '../images/woman-at-desk.svg'
import date2015 from '../images/2015.svg'
import date2017 from '../images/2017.svg'
import date2018 from '../images/2018.svg'

const AboutPage = () => (
  <Layout>
    <img src={womanAtDesk} alt="Woman at desk" />
    <p>
    Currently, I am working on building technology to facilitate 21st Century skills learning and handle operations at Kidovators- by Gyanlab. I am a full stack web developer, currently working on MERN stack. I take utmost pride in exploring the best technology suitable for the job in hand and that's reflected in the Kidovators app framework and architectural choices.
    </p>
    
    <p>
      After graduating from college I started my career as a Programme Analyst at Cognizant Technology Solutions.
      I worked primarily on testing softwares. 
      <br /><br />
      In 2015, I got myself into learning web development and worked as a freelance web developer.
      I worked on building websites using HTML, CSS, JavaScript and Angular.js.   
      <br /><br />
      In 2016, I started working on React. In 2017, I started working with Kidovators- by Gyanlab,
      and built a full SaaS product using MERN stack (MongoDB, Express, React, Node). Since then I have 
      enjoyed full stack web development and look forward to doing good work and hope for great opportunities in life.
    </p>
    <p>I like to explore on the latest tech/framework that comes my way, be it Gatsby, GraphQL, Apollo or emotions, etc. </p>

  </Layout>
)

export default AboutPage
