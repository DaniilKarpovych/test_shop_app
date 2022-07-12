import React, { Component } from 'react'
import styled from 'styled-components'

const ColorContainer = styled.div`
    display: flex;

`
const ColorBox = styled.div`
    background-color: ${props => props.color};
    width: 32px;
    height: 32px;
`
const ColorBorder = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
    border: ${props => props.color === props.selectedColor ? '1px solid #5ECE7B' : '1px solid white'};
    &:hover{
        border: ${props => props.typePage ? '1px solid #5ECE7B' : '1px solid white'}
    }
`

export default class Color extends Component {
    render() {
        return (
            <ColorContainer>
                <ColorBorder
                    color='red'
                    selectedColor={this.props.selectedColor}
                    typePage={this.props.descriptionPage}
                    onClick={this.props.descriptionPage ? this.props.setColor('red') : undefined}
                >
                    <ColorBox color='red' />
                </ColorBorder>
                <ColorBorder
                    color='blue'
                    selectedColor={this.props.selectedColor}
                    typePage={this.props.descriptionPage}
                    onClick={this.props.descriptionPage ? this.props.setColor('blue') : undefined}
                >
                    <ColorBox color='blue' />
                </ColorBorder>
                <ColorBorder
                    color='black'
                    selectedColor={this.props.selectedColor}
                    typePage={this.props.descriptionPage}
                    onClick={this.props.descriptionPage ? this.props.setColor('black') : undefined}
                >
                    <ColorBox color='black' />
                </ColorBorder>
            </ColorContainer>
        )
    }
}
