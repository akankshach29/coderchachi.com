import React from 'react'
import Layout from '../components/layout'

import homeGraphic from '../images/akanksha-header.png'

const IndexPage = () => (
  <Layout>
    <img
      style={{ marginTop: '30px' }}
      src={homeGraphic}
      alt="Woman at computer"
    />
    <h1 style={{ marginTop: '10px' }}>
      Hi, I’m Akanksha. I’m a Full Stack Web Developer.
    </h1>
    <p>
      I am a self taught web developer living in India. I love to explore latest tech for web development.
    </p>
    <p>Feel free to contact me on <a href="https://www.linkedin.com/in/akankshachoudhary/" target="blank">LinkedIn</a> or <a href="https://twitter.com/ch_akanksha" target="blank">Twitter</a>!</p>
  </Layout>
)

export default IndexPage
