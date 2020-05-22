import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import get from 'lodash/get'
import {Header} from 'semantic-ui-react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

// images
import Highlands from '../images/background.jpg'
import scooter from '../images/whitescooter.jpg'
import Coffees from '../images/coffees.jpg'

import '../App.css'

const StoreIndex = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
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
      <img className="Hero" src={Highlands} alt="Buy Vietnamese Coffee" />
      <Link to="/shop">
        <div className="coffeeButton">
          <div className="scooterContainer">
            <img className="scooter" src={scooter} alt="Vietnamese Coffee" />
          </div>
          <span className="shopContainer">
            <h1>Shop</h1>
            <h1>Vietnamse</h1>
            <h1>Coffee</h1>
          </span>
        </div>
      </Link>
      <div className="Coffees">
        <img
          className="coffeeImage"
          src={Coffees}
          alt="Amazing Vietnamese Coffee Recipies"
        />
        <div className="View"> View Coffee Recipies</div>
      </div>
    </Layout>
  )
}

export default StoreIndex
