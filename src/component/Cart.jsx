import React, { Component } from 'react'
import styled from 'styled-components'
import CartElement from './CartElement'

const Container = styled.div`
  overflow-y: auto;
  width: 100%;
  background-color: white;
  z-index: 5;
`

export default class Cart extends Component {
  render() {

    if (this.props.cart.length === 0) {
      return <h3>There aren't items in the cart</h3>
    }
    return (
      <Container>
        {this.props.cart.map((item) => {
          return <CartElement
            currency={this.props.currency}
            quantityChanges={this.props.quantityChanges}
            type={this.props.type}
            item={item}
            key={item.id} />
        })}
      </Container>
    )
  }
}
