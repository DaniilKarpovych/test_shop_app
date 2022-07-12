import React, { Component } from 'react'
import styled from 'styled-components'
import Color from './Color'
import Size from './Size'

const CartElementContainer = styled.div`
  display:flex;
  border-top: solid ${props => props.type === 'page' ? '#E5E5E5' : 'white'} 1px;
  padding: 15px 0px;
  border-bottom: solid ${props => props.type === 'page' ? '#E5E5E5' : 'white'} 1px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const DescriptionsContainer = styled.div`
  flex-grow: 1;
`
const QuantityButton = styled.button`
  border:  1px solid grey;
  background-color: white;
  color: grey;
  font-size: 28px;
  width: 45px;
  height: 45px;
  font-size: 26px;
`
const ImgContainer = styled.div`
  padding-left: ${props => props.type === 'page' ? '24px' : '10px'};
`


export default class CartElement extends Component {

  render() {
    const price = this.props.item?.prices?.find((price) => price.currency.symbol === this.props.currency)

    return (
      <CartElementContainer type={this.props.type}>
        <DescriptionsContainer>
          <p>{this.props.item.brand}</p>
          <p>{this.props.item.name}</p>
          <p><b>{`${price.amount} ${price.currency.symbol}`}</b></p>
          {this.props.item.category === 'clothes' && <Size selectedSize={this.props.item?.size} type={this.props.type} />}
          <p>Color</p>
          <Color selectedColor={this.props.item?.color} />
        </DescriptionsContainer>
        <ButtonContainer>
          <QuantityButton
            onClick={this.props.quantityChanges(this.props.item.id, this.props.item.quantity, '+')}>+</QuantityButton>
          <p>{this.props.item.quantity}</p>
          <QuantityButton onClick={this.props.quantityChanges(this.props.item.id, this.props.item.quantity, '-')}>-</QuantityButton>
        </ButtonContainer>
        <ImgContainer type={this.props.type}>
          <img width={`${this.props.type === 'page' ? '200px' : '120px'}`} src={this.props.item.gallery[0]} alt='0' />
        </ImgContainer>
      </CartElementContainer>
    )
  }
}
