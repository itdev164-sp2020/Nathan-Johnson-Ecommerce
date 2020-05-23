/* eslint-disable camelcase */
import React from 'react'
import {Header, Divider, Table} from 'semantic-ui-react'

export default ({description, weight}) => (
  <div>
    <Header as="h3">About this product</Header>
    <p>{description}</p>

    <Divider />
    <Table celled>
      <Table.Header style={{background: '#f9fafb'}}>
        <Table.Row>
          <Table.HeaderCell colSpan="2"> Nutrition Facts</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Total Weight</Table.Cell>
          <Table.Cell>{weight}g</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Serving Size</Table.Cell>
          <Table.Cell>3 tablespoons</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Calories</Table.Cell>
          <Table.Cell>15</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total Fat</Table.Cell>
          <Table.Cell>0g</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cholesterol</Table.Cell>
          <Table.Cell>0mg</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sodium</Table.Cell>
          <Table.Cell>50mg</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total Carbohydrates</Table.Cell>
          <Table.Cell>2g</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Protein</Table.Cell>
          <Table.Cell>1g</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ingredients / Allergies</Table.Cell>
          <Table.Cell>
            Arabica, Robusta, Excelsa & Catimor Coffee Beans, Natural +
            Artificial flavors, and may contain vegetable and/or soybean oil
            (from the butter-roasting process)
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
