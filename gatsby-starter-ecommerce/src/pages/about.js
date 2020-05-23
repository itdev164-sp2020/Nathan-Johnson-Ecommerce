import React from 'react'
import {Link} from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Privacy = ({location}) => (
  <Layout location={location}>
    <SEO
      title="Coffee From Vietnam"
      description="Hello I am Nathan Johnson, the founder of VietnameseCoffee.Coffee. After
      watching the Top Gear Vietnam Special, I decided to take journey to
      Hanoi, Vietnam and venture out by motorbike. During my travels I discoved
      this incredibly strong and delicous coffee. I was hooked and still drink
      it on an almost daily basis. Now that coffee is available to everyone
      right here on this website.
    "
    />
    <h1>About VietnameseCoffee.Coffee</h1>
    <p>
      Hello I am Nathan Johnson, the founder of VietnameseCoffee.Coffee. After
      watching the &quot;Top Gear&quot; Vietnam Special, I decided to take
      journey to Hanoi, Vietnam and venture out by motorbike. During my travels
      I discoved this incredibly strong and delicous coffee. I was hooked and
      still drink it on an almost daily basis. Now that coffee is available to
      everyone right here on this website.{' '}
    </p>
    <p>
      Any questions? Please feel free to
      <Link to="/contact"> contact me </Link>or check out the
      <Link to="/contact"> FAQ page </Link>
    </p>
    <p>&nbsp;</p>
  </Layout>
)

export default Privacy
