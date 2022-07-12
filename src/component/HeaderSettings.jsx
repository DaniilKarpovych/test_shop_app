import React, { Component } from 'react'
import styled from 'styled-components'
import { ReactComponent as EmptyCart } from '../picture/Empty Cart Black.svg'
import { ReactComponent as Vector } from '../picture/Vector.svg'
import { ReactComponent as UpVector } from '../picture/UpVector.svg'
import Cart from './Cart'

const SettingsContainer = styled.div`
  display: flex;
  width: 45%;
  justify-content: end;
  align-items: center;
`
const CurrencyContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  align-items: baseline;
  justify-content: space-between;
  margin-right: 30px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
`

const CurrencySwitcher = styled.div`
  position: absolute;
  top: 60px;
  left: -10px;
  background-color: white;
  z-index: 6;
  width:max-content;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  box-shadow: 0px 4px 35px rgb(168 172 176 / 19%);
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
`
const CurrencyType = styled.p`
  margin: 0px;
  padding: 10px;
  &:hover{
      background-color: #EEEEEE;
  }
`
const CartNumber = styled.p`
  position: absolute;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  top: -25px;
  right: -13px;
  color: white;
  padding: 4px 8px;
  background-color: black;
  border-radius: 60px
`
const CartContainer = styled.div`
  position: relative;
`
const OpenCartContainer = styled.div`
  position: absolute;
  min-width: 300px;
  width: auto;
  max-height: 650px;
  padding: 32px 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  right: 0px;
  top: 50px;
`
const HeaderCartButton = styled.button`
  background-color: ${props => props.checkout ? '#5ECE7B' : 'white'};
  margin-left: ${props => props.checkout ? '12px' : '0px'};
  color: ${props => props.checkout ? 'white' : 'black'};
  width: 140px;
  height: 43px;
`

const CURRENCIES = [
  { symbol: '$', name: 'USD' },
  { symbol: '£', name: 'GBP' },
  { symbol: 'A$', name: 'AUD' },
  { symbol: '¥', name: 'JPY' },
  { symbol: '₽', name: 'RUB' },
]

export default class HeaderSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyOpened: false,
    };
  }

  currencyToggle = () => {
    this.setState((state) => ({ currencyOpened: !state.currencyOpened }));
  }

  selectCurrency = (item) => {
    this.props.setCurrencySymbol(item.symbol);

  }

  render() {
    return (
      <SettingsContainer>
        <CurrencyContainer onClick={this.currencyToggle}>
          <p>{this.props.currency}</p>
          {this.state.currencyOpened ?
            <>
              <UpVector />
              <CurrencySwitcher>
                {CURRENCIES.map((item, index) => {
                  return (<CurrencyType
                    onClick={this.selectCurrency.bind(this, item)}
                    key={index}>
                    {`${item.symbol} ${item.name}`}
                  </CurrencyType>)
                })}
              </CurrencySwitcher>
            </> :
            <Vector />
          }
        </CurrencyContainer>
        <CartContainer >
          <div onClick={this.props.cartToggle}>
            <EmptyCart />
          </div>
          {this.props.cart.length > 0 && <CartNumber>{this.props.cart.length}</CartNumber>}
          {this.props.cartOpen &&
            <OpenCartContainer>
              <p><b>My Bag.</b> {this.props.cart.length} items</p>
              <Cart
                currency={this.props.currency} F
                quantityChanges={this.props.quantityChanges}
                cart={this.props.cart} />
              {this.props.cart.length > 0 && <p><b>total</b></p>}
              <div>
                <HeaderCartButton onClick={this.props.viewBag}>VIEW BAG</HeaderCartButton>
                <HeaderCartButton checkout>CHECK OUT</HeaderCartButton>
              </div>
            </OpenCartContainer>}
        </CartContainer>
      </SettingsContainer>
    )
  }
}
