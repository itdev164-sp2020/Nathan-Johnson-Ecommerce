import React from 'react'
import {Link} from 'gatsby'
import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

const customer = localStorage.getItem('mcustomer')

export default ({
  handleCheckout,
  display_price: {
    with_tax: {amount, currency, formatted},
  },
}) => (
  <div>
    <Divider />
    <Segment clearing size="large">
      <span>
        <strong>Sub total:</strong>
        {` ${formatted}`}
      </span>
      {customer && (
        <StripeCheckout
          name="Gatsby Store"
          amount={amount}
          currency={currency || 'GBP'}
          stripeKey={process.env.STRIPE_PUBLISHABLE_KEY || ''}
          shippingAddress={false}
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
      )}

      {!customer && (
        <Link to="/register/">
          <Button color="orange" floated="right">
            Check out
          </Button>
        </Link>
      )}
    </Segment>
  </div>
)
