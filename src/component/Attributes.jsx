import React, { Component } from 'react'
import Size from './Size'
import Color from './Color'
import { getAttributes } from '../utils'

export default class Attributes extends Component {


  componentDidMount() {
    if (this.props.type === 'description') {
      this.props.initialAttributes(this.props.itemAttributes)
    }
  }

  render() {
    const [firstAttribute, colorAttribute] = getAttributes(this.props.itemAttributes)
    return (
      <>
        {firstAttribute &&
          <Size
            setSize={this.props.setSize}
            type={this.props.type}
            selectedSize={this.props.selectedSize}
            firstAttribute={firstAttribute} />}
        {colorAttribute &&
          <Color
            type={this.props.type}
            setColor={this.props.setColor}
            selectedColor={this.props.selectedColor}
            colorAttribute={colorAttribute} />}
      </>
    )
  }
}
