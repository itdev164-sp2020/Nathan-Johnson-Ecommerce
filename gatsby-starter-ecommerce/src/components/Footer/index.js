import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

/*
const facebookLink = (
  <a href="https://facebook.com/" alt="facebook link">
    Facebook
  </a>
)
const emailLink = (
  <a href="mailto:john@doe.com" alt="email link">
    Email
  </a>
)

    
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
              <List.Item
                icon="mail"
                style={{display: 'flex'}}
                content={emailLink}
              />
            </List>
            */

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',

      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/about/">
                Info
              </List.Item>
              <List.Item as={Link} to="/faq/">
                FAQ
              </List.Item>
              <List.Item as={Link} to="/contact/">
                Contact
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item as={Link} to="/shop">
                Coffee Products
              </List.Item>
              <List.Item as={Link} to="/recipies">
                Recipies
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">The Best Coffee In The World</Header>
            <p>
              Traditional home-brew Vietnamese coffee, made using Arabica,
              Robusta, Excelsa & Catimor beans. Incredibly rich flavor and high
              caffeine content. This coffee is thick, buttery smooth, and
              delicious unlike anything you have tried before!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
