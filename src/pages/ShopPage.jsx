import React, { Component } from 'react'
import styled from 'styled-components'

const DivComponent = styled.div`
background-color: red;
color: black;
`

export default class ShopPage extends Component {
  render() {
    console.log(this.props.test)
    return (
      <DivComponent>shopPage</DivComponent>
    )
  }
}
