import React, { Component } from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo} from '../picture/Group.svg'
import {ReactComponent as EmptyCart} from '../picture/Empty Cart.svg'
import {ReactComponent as Vector} from '../picture/Vector.svg'

const HeaderContainer = styled.header`
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
background-color: white;
border: 0;
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
align-items: flex-end;
align-items: baseline;
justify-content: space-between;
width: 26px;
margin-right: 20px;
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

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
      <CategoryContainer>
        <Category>CLOTHES</Category>
        </CategoryContainer>
        <CategoryContainer>
        <Category>TECH</Category>
      </CategoryContainer>
      <IconContainer>
      <Logo />
      </IconContainer>
      <Settings>
      <CurrencyContainer>
      <p>$</p>      
        <Vector />
      </CurrencyContainer>
      <EmptyCart />
      </Settings>
      </HeaderContainer>
    )
  }
}
