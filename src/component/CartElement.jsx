import React, { Component } from 'react'
import styled from 'styled-components'
import Color from './Color'
import Size from './Size'

const CartElementContainer = styled.div`
  display:flex;
  height: 300px;
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
  /* font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px; */
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
  position: relative;
  padding-left: ${props => props.type === 'page' ? '24px' : '10px'};
`
const ImgButton = styled.button`
background-color: '#000000 73 %';
position: absolute;
bottom: 10px;
width: 24px;
height: 24px;
right: ${props => props.right};
`


export default class CartElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: 0,
    };
  }
  onClickDecrease = () => {
    this.setState(state => {
      if (state.picture === 0) return 0
      return --state.picture
    })
  }
  onClickIncrease = () => {
    this.setState(state => {
      if (this.props.item.gallery.length === state.picture + 1) return state.picture
      return ++state.picture
    })
  }
  render() {

    const price = this.props.item?.prices?.find((price) => price.currency.symbol === this.props.currency)

    return (
      <CartElementContainer type={this.props.type}>
        <DescriptionsContainer>
          <p><b>{this.props.item.brand}</b></p>
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
          <img width={`${this.props.type === 'page' ? '200px' : '120px'}`} src={this.props.item?.gallery[this.state.picture]} alt='0' />
          {this.props.type === 'page' &&
            <>
              <ImgButton right='45px' onClick={this.onClickDecrease}>{'<'}</ImgButton>
              <ImgButton right='15px' onClick={this.onClickIncrease}>{'>'}</ImgButton>
            </>}
        </ImgContainer>
      </CartElementContainer>
    )
  }
}
