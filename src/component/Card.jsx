import React, { Component } from 'react'
import styled from 'styled-components'
import { ReactComponent as EmptyCart } from '../picture/Empty Cart White.svg'
import { getAttributes } from '../utils'

const StyledCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  padding: 16px;
  margin: 30px;
  width: 380px;
  height: 444px;
  opacity: ${(props => props.inStock ? '1' : '0.5')};
  background-color: white;
  &:hover{
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}
`
const Img = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${props => props.url});
`
const IconContainer = styled.div`
  z-index: 2;
  display: flex;
  right: 50px;
  bottom: 120px;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 600%;
  background-color: #5ECE7B;
`
const OutOfStock = styled.p`
  position: absolute;
  opacity: 1;
  top:150px;
  left:120px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #8D8F9A;
`
const Price = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #1D1F22;
`

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  mouseLeave = () => {
    this.setState({ visible: false });
  }
  onMouseEnter = () => {
    this.setState({ visible: true })
  }
  onClickQuickShop = (e) => {
    e.stopPropagation();
    const [firstAttributes, colorAttributes] = getAttributes(this.props.item?.attributes)
    this.props.onClickHandler({ product: this.props.item }, colorAttributes?.items[0].value, firstAttributes?.items[0].value)();
  }

  render() {
    const price = this.props.item?.prices?.find((price) => price.currency.symbol === this.props.currencySymbol)
    const priceAmount = price.amount.toFixed(2)
    return (
      <StyledCard
        inStock={this.props.item.inStock}
        onMouseLeave={this.mouseLeave}
        onMouseEnter={this.onMouseEnter}
        onClick={() => this.props?.onClick(this.props?.item.id)}>
        <Img url={`${this.props?.item.gallery[0]}`} />
        <p>{`${this.props.item.brand}  ${this.props.item.name}`}</p>
        <Price>{`${priceAmount} ${price?.currency?.symbol}`}</Price>
        {this.state.visible && <IconContainer onClick={this.props.item.inStock ? this.onClickQuickShop : undefined}  >
          <EmptyCart />
        </IconContainer>}
        {!this.props.item.inStock && <OutOfStock>OUT OF STOCK</OutOfStock>}
      </StyledCard>
    )
  }
}
