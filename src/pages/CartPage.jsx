import React, { Component } from 'react'
import styled from 'styled-components'
import Cart from '../component/Cart'

const CartPageContainer = styled.div`
  margin: 0px 100px ;
`
const PriceAndQuantity = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`
const Title = styled.h1`
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 40px;
margin: 55px 0px;
`

export default class CartPage extends Component {
  render() {
    return (
      <CartPageContainer>
        <Title>CART</Title>
        <Cart quantityChanges={this.props.quantityChanges} currency={this.props.currency} type='page' cart={this.props.cart} />
        <PriceAndQuantity>
          <p>Tax 21%: <b>{this.props.currency + (this.props.totalCoast * 0.21).toFixed(2)}</b></p>
          <p>Quantity: <b>{this.props.totalQuantity}</b></p>
          <p>Total: <b>{this.props.currency + this.props.totalCoast}</b></p>
        </PriceAndQuantity>
      </CartPageContainer>
    )
  }
}
