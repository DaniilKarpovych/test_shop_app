import React, { Component } from 'react'
import styled from 'styled-components'
import Cart from '../component/Cart'

const CartPageContainer = styled.div`
  margin: 0px 100px ;
`

export default class CartPage extends Component {
  render() {
    return (
      <CartPageContainer>
        <Cart quantityChanges={this.props.quantityChanges} currency={this.props.currency} type='page' cart={this.props.cart} />
      </CartPageContainer>
    )
  }
}
