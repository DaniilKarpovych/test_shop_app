import React, { Component } from 'react'
import styled from 'styled-components'

const SizeContainer = styled.div`
    display: flex;
`
const SizeBox = styled.div`
    display: flex;
    align-items: center;
    width: ${props => props.type === 'page' ? '60px' : '24px'};
    height: ${props => props.type === 'page' ? '45px' : '24px'};
    margin-right: 12px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    border: solid black 1px;
    color:  ${props => props.size === props.selectedSize && 'white'};
    background-color: ${props => props.size === props.selectedSize && 'black'};
    &:hover{
    color:  ${props => props.descriptionPage && 'white'};
    background-color: ${props => props.descriptionPage && 'black'};
    }
`
const SizeText = styled.p`
    margin: 0px;
    width: 100%;
`

export default class Size extends Component {
    render() {
        return (
            <SizeContainer>
                <SizeBox
                    descriptionPage={this.props.descriptionPage}
                    selectedSize={this.props.selectedSize}
                    onClick={this.props.descriptionPage ? this.props.setSize('xs') : undefined}
                    type={this.props.type}
                    size='xs'>
                    <SizeText>XS</SizeText>
                </SizeBox>
                <SizeBox
                    descriptionPage={this.props.descriptionPage}
                    selectedSize={this.props.selectedSize}
                    onClick={this.props.descriptionPage ? this.props.setSize('s') : undefined}
                    type={this.props.type}
                    size='s'>
                    <SizeText>S</SizeText>
                </SizeBox>
                <SizeBox
                    descriptionPage={this.props.descriptionPage}
                    selectedSize={this.props.selectedSize}
                    onClick={this.props.descriptionPage ? this.props.setSize('m') : undefined}
                    type={this.props.type}
                    size='m'>
                    <SizeText>M</SizeText>
                </SizeBox>
                <SizeBox
                    descriptionPage={this.props.descriptionPage}
                    selectedSize={this.props.selectedSize}
                    onClick={this.props.descriptionPage ? this.props.setSize('l') : undefined}
                    type={this.props.type}
                    size='l'>
                    <SizeText>L</SizeText>
                </SizeBox>
            </SizeContainer>
        )
    }
}
