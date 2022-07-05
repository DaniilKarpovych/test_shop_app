import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
display: flex;
flex-direction: column;
/* justify-content: flex-end; */
/* align-items: center; */

padding: 16px;
margin: 24px;
width: 380px;
height: 444px;
background-color: white;
&:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}
`
const IMG= styled.div`
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-size: contain;
background-position: center;
background-image: url(${props=>props.url});
`

export default class Card extends Component {
  render() {
    // console.log('Card',this.props.item.id)

    return (
      <StyledCard onClick={()=>this.props.onClick(this.props.item.id)}>
        <IMG url={`${this.props.item.gallery[0]}`}/>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.prices[0].amount}$</p>
      </StyledCard>
    )
  }
}
