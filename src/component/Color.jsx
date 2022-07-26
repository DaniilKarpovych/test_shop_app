import React, { Component } from 'react'
import styled from 'styled-components'

const ColorContainer = styled.div`
    display: flex;
`
const ColorBox = styled.div`
    background-color: ${props => props.color};
    border:solid black 1px ;
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
        border: ${props => props.typePage === 'description' ? '1px solid #5ECE7B' : undefined}
    }
`
const Title = styled.p`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: ${props => props.type ? '700' : '400'};
    font-size: ${props => props.type ? '18px' : '14px'};
    line-height: ${props => props.type ? '18px' : '16px'};
`

export default class Color extends Component {
    render() {
        return (
            <>
                <Title type={this.props.type}>COLOR:</Title>
                <ColorContainer>
                    {this.props.colorAttribute?.items.map(item => {
                        return (<ColorBorder
                            key={item.id}
                            color={item.value}
                            selectedColor={this.props.selectedColor}
                            typePage={this.props.type}
                            onClick={this.props.type === 'description' ? this.props.setColor(item.value) : undefined}
                        >
                            <ColorBox color={item.value} />
                        </ColorBorder>
                        )
                    })}
                </ColorContainer>

            </>
        )
    }
}
