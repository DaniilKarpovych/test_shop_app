import React, { Component } from 'react'
import styled from 'styled-components'

const CategoryContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 2px white;
  &:hover{
      border-bottom: solid 2px green;
      color: #5ECE7B;
  }
`
const CategoryText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  background-color: white;
  border: solid 2px white;
`

export default class Category extends Component {
  render() {
    return (
      <CategoryContainer onClick={this.props.categoryClick(`${this.props.category}`)}>
        <CategoryText>{this.props.category.toUpperCase()}</CategoryText>
      </CategoryContainer>
    )
  }
}
