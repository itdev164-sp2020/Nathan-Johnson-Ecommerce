import React from 'react'
import {Link} from 'gatsby'
import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

export default ({
  handleCheckout,
  display_price: {
    with_tax: {amount, currency, formatted},
  },
}) => (
  <div>
    <Divider />
    <p>Shipping: $0.00 - Free Shipping USA</p>
    <Segment clearing size="large">
      <span>
        <strong>Sub total:</strong>
        {` ${formatted}`}
      </span>

      <StripeCheckout
        name="Stripe Checkout"
        amount={amount}
        currency={currency || 'GBP'}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY || ''}
        shippingAddress
        billingAddress
        zipCode
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
        <Button color="black" floated="right">
          Check out
        </Button>
      </StripeCheckout>

      <Link to="/register/">
        <Button color="orange" floated="right">
          Sign up
        </Button>
      </Link>
    </Segment>
  </div>
)
