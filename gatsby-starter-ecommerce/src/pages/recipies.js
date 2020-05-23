import React from 'react'
import {Header} from 'semantic-ui-react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import egg from '../images/egg.jpg'

import '../App.css'

const recipies = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Vietnamese Coffee Recipies" />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        ></Header.Content>
      </Header>
      <img className="egg" src={egg} alt="Egg Coffee" />
      <h1> Coming soon </h1>
    </Layout>
  )
}

export default recipies
