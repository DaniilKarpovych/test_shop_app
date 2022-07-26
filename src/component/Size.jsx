import React, { Component } from 'react'
import styled from 'styled-components'

const SizeContainer = styled.div`
    display: flex;
`
const SizeBox = styled.div`
    display: flex;
    align-items: center;
    min-width: 40px;
    width: ${props => props.type ? '60px' : '40px'};
    height: ${props => props.type ? '45px' : '24px'};
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
    color:  ${props => props.descriptionPage === 'description' && 'white'};
    background-color: ${props => props.descriptionPage === 'description' && 'black'};
    }
`
const SizeText = styled.p`
    margin: 0px;
    width: 100%;
`
const Title = styled.p`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: ${props => props.type ? '700' : '400'};
    font-size: ${props => props.type ? '18px' : '14px'};
    line-height: ${props => props.type ? '18px' : '16px'};
`

export default class Size extends Component {
    render() {
        return (
            <>
                <Title type={this.props.type}>SIZE:</Title>
                <SizeContainer>
                    {this.props.firstAttribute?.items?.map(item => {
                        return (<SizeBox
                            key={item.id}
                            descriptionPage={this.props.type}
                            selectedSize={this.props.selectedSize}
                            onClick={this.props.type === 'description' ? this.props.setSize(item.value) : undefined}
                            type={this.props.type}
                            size={item.value}>
                            <SizeText>{item.value}</SizeText>
                        </SizeBox>)
                    })}
                </SizeContainer>
            </>
        )
    }
}
