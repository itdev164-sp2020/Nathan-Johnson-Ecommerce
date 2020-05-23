import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Contact = ({location}) => (
  <Layout location={location}>
    <SEO title="Contact Vietnamese Coffee Supplier" />
    <h1>Contact:</h1>
    <p>Nathan Johnson</p>
    <a href="mailto:nathanisaacjohnson@gmail.com">Send Email</a>
    <p />
    <p>&nbsp;</p>
  </Layout>
)

export default Contact
