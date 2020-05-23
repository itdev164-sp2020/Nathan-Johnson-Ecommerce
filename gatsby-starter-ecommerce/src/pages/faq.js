import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const FAQ = ({location}) => (
  <Layout location={location}>
    <SEO title="Vietnamese Coffee is Trending!" />
    <h1>FAQ Page</h1>
    <h2>Has it been consumed by weasels?</h2>
    <p>
      Unfortunetly no it has not. Real weasel coffee is very expensive but
      luckily this coffee tastes just as good for a lot less money. It undergoes
      a similair fermentation process (just not inside the belly of a weasel).
    </p>
    <h2>Who makes the coffee?</h2>
    <p>
      This is the big secret.... It is produced my Trung Nguyên, the largest
      coffee company in Vietnam. Trung Nguyên&lsquo;s marketing efforts never
      really caught on in the USA.
    </p>
    <h2>How is payment processed?</h2>
    <p>Payment is completed with Stripe Checkout.</p>
    <h2>Where are you located?</h2>
    <p>Headquarters and distribution is out of Milwaukee, Wisconsin</p>
    <h2>How is it prepared?</h2>
    <p>
      A standard drip-style coffee maker works well but a pour over single cup
      is preferred. Coffee recipies are soon to come!
    </p>
    <h2>Is this chicory coffee like Cafe Du Monde?</h2>
    <p>Definitely not and tastes much better. </p>
    <h2>Can I order 10,000?</h2>
    <p>Yes! Please contact us today</p>
    <p>&nbsp;</p>
  </Layout>
)

export default FAQ
