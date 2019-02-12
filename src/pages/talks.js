import React from 'react'
import Layout from '../components/layout'
import '../components/blogSquare'

const TalkPage = () => (
  <Layout>
    <h2
      style={{
        paddingTop: '10px',
        paddingBottom: '10px',
        color: 'black',
        marginTop: '30px',
      }}
    >
      Upcoming Talks
    </h2>
    <section
      style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 className="blogSquare__title">Building Blazing Fast Websites with Gatsby</h2>
      <p style={{ margin: '5px 0px 0px', fontSize: '0.8em', fontWeight: 'bold'}}>March 9, 2019</p>
      <p style={{ margin: '5px 0px 10px', fontSize: '0.9em', fontWeight: 'bold'}}>Speaking at: <a style={{ color: '#77bfd6', textDecoration: 'none' }} href="https://www.meetup.com/ReactJS-Bangalore/events/257950984/">ReactJS Bangalore</a></p>
      <p>
         Gatsby is a blazing fast modern site generator for React. 
         Its offers great advantages like code splitting, server-side rendering,
         intelligent image loading,  data prefetching, etc.
         And hosting the site with Netlify is an added bonus. My talk covers a
         basic website building with Gatsby and hosting it with Netlify and some
         insights on Netlify-CMS.
      </p>
      
    </section>
  </Layout>
)

export default TalkPage
