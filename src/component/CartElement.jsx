import React, { Component } from 'react'
import styled from 'styled-components'

const CartElementContainer = styled.div`
display:flex;
margin-bottom:40px;
border-top: solid ${props=>props.type==='page'? '#E5E5E5':'white'} 1px;
padding: 15px 0px;
border-bottom: solid ${props=>props.type==='page'? '#E5E5E5':'white'} 1px;
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

export default class CartElement extends Component {
  render() {
    console.log('CartElement', this.props.item)
    return (
      <CartElementContainer type={this.props.type}>
        <DescriptionsContainer>
            <p>{this.props.item.brand}</p>
            <p>{this.props.item.name}</p>
            <p>PRICE</p>
            <p>Size</p>
            <p>Color</p>
        </DescriptionsContainer>
        <ButtonContainer>
            <button>+</button>
            <p>{this.props.item.quantity}</p>
            <button>-</button>
        </ButtonContainer>
        <div>
            <img width={`${this.props.type==='page'?'200px':'120px'}`} src={this.props.item.gallery[0]} alt='0' />
        </div>
      </CartElementContainer>
    )
  }
}
