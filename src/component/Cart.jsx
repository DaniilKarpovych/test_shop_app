import React, { Component } from 'react'
import styled from 'styled-components'
import CartElement from './CartElement'

const Container = styled.div`
overflow-y: auto;

background-color: white;
z-index: 5;
`


export default class Cart extends Component {
  render() {
    console.log(this.props.state.cart)
    return (
      <Container>
        {this.props.state.cart.length>0 && this.props.state.cart.map((item)=>{
           return <CartElement type={this.props.type} item={item} key={item.id} />
        })}
      </Container>
    )
  }
}
