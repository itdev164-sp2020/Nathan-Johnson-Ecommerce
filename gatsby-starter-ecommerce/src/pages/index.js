import React from 'react'
import {Link} from 'gatsby'
import {Header} from 'semantic-ui-react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

// images
import Highlands from '../images/background.jpg'
import scooter from '../images/whitescooter.jpg'
import Coffees from '../images/coffees.jpg'

import '../App.css'

const StoreIndex = ({location}) => {
  /*
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
*/
  return (
    <Layout location={location}>
      <SEO title="Vietnamese Coffee" description="Buy Vietnamese Coffee" />
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
            <h1>Vietnamese</h1>
            <h1>Coffee</h1>
          </span>
        </div>
      </Link>
      <Link to="/recipies">
        <div className="Coffees">
          <img
            className="coffeeImage"
            src={Coffees}
            alt="Amazing Vietnamese Coffee Recipies"
          />
          <div className="View"> View Coffee Recipies</div>
        </div>
      </Link>
    </Layout>
  )
}

export default StoreIndex
