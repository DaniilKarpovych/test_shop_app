import React, { Component } from 'react'
import styled from 'styled-components'
import Cart from '../component/Cart'

const CartPageContainer = styled.div`
  margin: 0px 100px ;
`
const PriceAndQuantity = styled.div`
  margin-top: 32px;
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
const VariableText = styled.b`
  font-weight: 700;
`
const Total = styled.p`
  font-weight: 500;
`

export default class CartPage extends Component {
  render() {
    return (
      <CartPageContainer>
        <Title>CART</Title>
        <Cart quantityChanges={this.props.quantityChanges} currency={this.props.currency} type='page' cart={this.props.cart} />
        <PriceAndQuantity>
          <p>Tax 21%: <VariableText>{this.props.currency + (this.props.totalCost * 0.21).toFixed(2)}</VariableText></p>
          <p>Quantity: <VariableText>{this.props.totalQuantity}</VariableText></p>
          <Total>Total: <VariableText>{this.props.currency + this.props.totalCost.toFixed(2)}</VariableText></Total>
        </PriceAndQuantity>
      </CartPageContainer>
    )
  }
}
