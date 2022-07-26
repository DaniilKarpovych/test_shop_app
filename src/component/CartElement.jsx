import React, { Component } from 'react'
import styled from 'styled-components'
import Attributes from './Attributes'
import { ReactComponent as Arrow } from '../picture/Arrow.svg'

const CartElementContainer = styled.div`
  display:flex;
  height: 300px;
  border-top: solid ${props => props.type === 'page' ? '#E5E5E5' : 'white'} 1px;
  padding: 24px 0px;
  border-bottom: solid ${props => props.type === 'page' ? '#E5E5E5' : 'white'} 1px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const DescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  flex-grow: 1;
  
`
const Brand = styled.p`
  margin:${props => props.type ?'10px 0px':'5px 0px'};
  margin-top: 0px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: ${props => props.type ? '600' : '300'};
  font-size: ${props => props.type ? '30px' : '16px'};
  line-height: ${props => props.type ? '27px' : ' 160%'};
  color: #1D1F22;
`
const ProductName = styled.p`
  margin:${props => props.type ?'10px 0px':'5px 0px'};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: ${props => props.type ? '400' : '300'};
  font-size: ${props => props.type ? '30px' : '16px'};
  line-height: ${props => props.type ? '27px' : ' 160%'};
  color: #1D1F22;
`
const Price = styled.p`
  margin:${props => props.type ?'15px 0px':'10px 0px'};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: ${props => props.type ? '700' : '500'};
  font-size: ${props => props.type ? '24px' : '16px'};
  line-height: 24px;
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
  background: rgba(0, 0, 0, 0.73);;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  width: 24px;
  height: 24px;
  right: ${props => props.right};
`
const ArrowRight = styled(Arrow)`
  transform: rotate(-180deg);
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
      if (state.picture === 0) return ({ picture: this.props.item.gallery.length - 1 })
      else return ({ picture: state.picture - 1 })
    })
  }
  onClickIncrease = () => {
    this.setState(state => {
      if (this.props.item.gallery.length === state.picture + 1) return ({ picture: 0 })
      else return ({ picture: state.picture + 1 })
    })
  }
  render() {
    const price = this.props.item?.prices?.find((price) => price.currency.symbol === this.props.currency)
    const priceAmount = (Math.round(price.amount * 100) / 100).toFixed(2)
    return (
      <CartElementContainer type={this.props.type}>
        <DescriptionsContainer>
          <Brand type={this.props.type}>{this.props.item.brand}</Brand>
          <ProductName type={this.props.type}>{this.props.item.name}</ProductName>
          <Price type={this.props.type}>{`${priceAmount} ${price.currency.symbol}`}</Price>
          <Attributes
            type={this.props.type}
            itemAttributes={this.props.item.attributes}
            selectedSize={this.props.item?.size}
            selectedColor={this.props.item?.color}
          />
        </DescriptionsContainer>
        <ButtonContainer>
          <QuantityButton
            onClick={this.props.quantityChanges(this.props.item.id, this.props.item.quantity, 1)}>+</QuantityButton>
          <p>{this.props.item.quantity}</p>
          <QuantityButton onClick={this.props.quantityChanges(this.props.item.id, this.props.item.quantity, -1)}>-</QuantityButton>
        </ButtonContainer>
        <ImgContainer type={this.props.type}>
          <img width={`${this.props.type === 'page' ? '200px' : '120px'}`} src={this.props.item?.gallery[this.state.picture]} alt='0' />

          {this.props.item.gallery.length > 1 && <>
            <ImgButton right='45px' onClick={this.onClickDecrease}><Arrow /></ImgButton>
            <ImgButton right='15px' onClick={this.onClickIncrease}><ArrowRight /></ImgButton>
          </>}
        </ImgContainer>
      </CartElementContainer>
    )
  }
}
