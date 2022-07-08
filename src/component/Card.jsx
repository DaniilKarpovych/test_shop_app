import React, { Component } from 'react'
import styled from 'styled-components'
import {ReactComponent as EmptyCart} from '../picture/Empty Cart White.svg'

const StyledCard = styled.div`
display: flex;
position: relative;
flex-direction: column;
/* justify-content: flex-end; */
/* align-items: center; */
padding: 16px;
margin: 30px;
width: 380px;
height: 444px;
background-color: white;
&:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}
`
const IMG = styled.div`
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-size: contain;
background-position: center;
background-image: url(${props=>props.url});
`
const IconContainer = styled.div`
display: flex;
right: 70px;
bottom: 90px;
position: absolute;
align-items: center;
justify-content: center;
width: 52px;
height: 52px;
border-radius: 600%;
background-color: #5ECE7B;
`

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
        };
      }
  render() {
    const price = this.props.item.prices.find((item)=>item.currency.symbol[0]===this.props.state.symbol)
    return (
      <StyledCard onMouseLeave={()=>this.setState({visible:false})} onMouseEnter={()=>this.setState({visible:true})} onClick={()=>this.props.onClick(this.props.item.id)}>
        <IMG url={`${this.props.item.gallery[0]}`}/>
        <p>{this.props.item.name}</p>
        <p>{price.amount+' '+price.currency.symbol}</p>
        {this.state.visible && <IconContainer>
        <EmptyCart />
        </IconContainer>}
      </StyledCard>
    )
  }
}
