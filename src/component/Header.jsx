import React, { Component } from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo} from '../picture/Group.svg'
import {ReactComponent as EmptyCart} from '../picture/Empty Cart Black.svg'
import {ReactComponent as Vector} from '../picture/Vector.svg'
import {ReactComponent as UpVector} from '../picture/UpVector.svg'
import Cart from './Cart'
import { withRouter } from 'react-router-dom'

const HeaderContainer = styled.header`
position: relative;
z-index: 2;
margin: -7px -7px 0px -7px;
padding-left: 30px;
display: flex;
height: 80px;
background-color: white;
`
const CategoryContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-left: 100px;
border-bottom: solid 2px white;
&:hover{
    border-bottom: solid 2px green;
    color: #5ECE7B;
}
`
const Category = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 120%;
background-color: white;
border: solid 2px white;
`
const Settings = styled.div`
display: flex;
width: 60%;
justify-content: end;
align-items: center;
margin-right: 100px;
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
const IconContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: end;
    align-self: center;
    `
const CurrencySwitcher = styled.div`
position: absolute;
top: 60px;
left: -10px;
background-color: white;
z-index: 1;
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
width: 325px;
max-height: 650px;
padding: 32px 16px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
right: 0px;
top: 50px;
/* gap: 32px;

width: 325px;
height: 677px; */
`
const Background = styled.div`
position: absolute;
z-index: 1;
width: 100%;
right: 0px;
height: 100%;
margin-top: -81px;
background: rgba(57, 55, 72, 0.22)

`


const CURRENCY = [
    '$ USA',
    '£ GBP',
    'A$ AUD',
    '¥ JPY',
    '₽ RUB'
]


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          cartOpen:false
        };

      }
  render() {
    const { history } = this.props;
    return (
        <>
      <HeaderContainer>
      <CategoryContainer onClick={()=>{
        this.props.setState({category:'clothes'})
        history.push('/') 
        }}>
        <Category>CLOTHES</Category>
        </CategoryContainer>
        <CategoryContainer>
        <Category onClick={()=>{
        this.props.setState({category:'tech'})
        history.push('/')  }}
        >TECH</Category>
      </CategoryContainer>
      <IconContainer onClick={()=>{
        this.props.setState({category:'all'})
        history.push('/') }}
        >
      <Logo />
      </IconContainer>
      <Settings>
      <CurrencyContainer>
      <p>{this.props.state.symbol}</p>      
      {!this.state.visible && <Vector onClick={()=>this.setState({visible:true})} />}
      {this.state.visible  && <UpVector onClick={()=>this.setState({visible:false})} /> }
        {this.state.visible && <CurrencySwitcher>
            {CURRENCY.map((item,index)=>{
            return (<CurrencyType 
            onClick={()=>{
                this.props.setState({symbol:item[0]})
                this.setState({visible:false})
                }}
            key={index}>
            {item}
            </CurrencyType>)})}
        </CurrencySwitcher>}
      </CurrencyContainer>
      <CartContainer >
      <div onClick={()=>this.setState((state) => ({cartOpen:!state.cartOpen}))}>
      <EmptyCart />
      </div>
      {this.props.state.cart.length>0 && <CartNumber>{this.props.state.cart.length}</CartNumber>}
      {this.state.cartOpen && 
      <OpenCartContainer>
      <p><b>My Bag.</b> {this.props.state.cart.length} items</p>
      <Cart state={this.props.state} setState={this.props.setState} />
      <p><b>total</b></p>
        <div>
            <button onClick={()=>{
            this.setState((state) => ({cartOpen:false}))
            history.push('/cart')
            }}>VIEW BAG</button>
            <button>CHECK OUT</button>
        </div>
      </OpenCartContainer>}
      </CartContainer>
      </Settings>
      </HeaderContainer>
      {this.state.cartOpen && <Background onClick={()=>this.setState((state) => ({cartOpen:false}))} />}
      </>
    )
  }
}


export const HeaderWithRouter = withRouter(Header)