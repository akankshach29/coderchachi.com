import React from 'react'
import Layout from '../components/layout'

import WorkItem from '../components/workItem'

import { StaticQuery, graphql } from 'gatsby'

const WorkPage = () => (
  <StaticQuery
    query={graphql`
      {
        kidovatorsApp: file(relativePath: { eq: "app_kidovators.png" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kidovatorsMain: file(relativePath: { eq: "kidovators_main.png" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        miniConf: file(relativePath: { eq: "miniconf.png" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        appliedYoga: file(relativePath: { eq: "applied-yoga.png" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h1
          style={{
            textTransform: 'uppercase',
            fontWeight: '100',
            marginTop: '50px',
            fontSize: '25px',
            letterSpacing: '4px',
          }}
        />
        <WorkItem
          image={data.kidovatorsMain}
          title="Kidovators"
          date="2017 - 2019"
          tech="HTML, CSS, JavaScript, React."
          link="https://kidovators.netlify.com/"
        />
        <hr />
        <WorkItem
          image={data.miniConf}
          title="MiniConf"
          date="2019"
          tech="Gatsby."
          link="https://miniconf.dev/"
        />
        <hr />
        <WorkItem
          image={data.kidovatorsApp}
          title="Kidovators"
          date="2017 - 2019"
          tech="HTML, CSS, JavaScript, React, Redux, Webpack, Node.js, MongoDB, Hopscotch."
          link="https://app-kidovators.netlify.com/"
        />
        <hr />
        <WorkItem
          image={data.appliedYoga}
          title="Applied Yoga Studio"
          date="2017"
          tech="HTML, CSS, JavaScript, Angular.js."
          link="http://appliedyogastudio.com"
        />
        <hr />
      </Layout>
    )}
  />
)

export default WorkPage
