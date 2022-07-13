import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from '@apollo/client/react/components';
import { ReactComponent as Logo } from '../picture/Group.svg'
import { withRouter } from 'react-router-dom'
import HeaderSettings from './HeaderSettings'
import Category from './Category'
import { CATEGORYLIST } from '../query/querys';

const HeaderContainer = styled.header`
  position: relative;
  z-index: 2;
  margin: -7px -7px 0px -7px;
  display: flex;
  padding:0px 100px ;
  height: 80px;
  background-color: white;
`
const CategoryContainer = styled.header`
  display: flex;
  width: 45%;
`

const IconContainer = styled.div`
  display: flex;
  width: 10%;
  justify-content: center;
  align-self: center;
`

const Background = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  right: 0px;
  height: 100%;
  margin-top: -81px;
  background: rgba(57, 55, 72, 0.22)
`

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false
    };
  }

  categoryClick = (category) => () => {
    this.props.setCategory(category);
    this.props.history.push('/')
  }

  cartToggle = () => {
    this.setState((state) => ({ cartOpen: !state.cartOpen }))
  }

  viewBag = () => {
    this.setState(() => ({ cartOpen: false }))
    this.props.history.push('/cart')
  }

  render() {
    return (
      <>
        <HeaderContainer>
          <CategoryContainer>
            <Query query={CATEGORYLIST}>
              {({ loading, data, error }) => {
                if (error) {
                  return <p>Error</p>
                }
                if (loading) return <p>Loading...</p>
                if (data) {
                  return data?.categories?.map((item, index) => {
                    return <Category key={index} categoryClick={this.categoryClick} category={item.name} />
                  })
                }
              }}
            </Query>
          </CategoryContainer>
          <IconContainer >
            <Logo />
          </IconContainer>
          <HeaderSettings
            totalCoast={this.props.totalCoast}
            quantityChanges={this.props.quantityChanges}
            setCurrencySymbol={this.props.setCurrencySymbol}
            viewBag={this.viewBag}
            cartToggle={this.cartToggle}
            cartOpen={this.state.cartOpen}
            cart={this.props.cart}
            currency={this.props.currency} />
        </HeaderContainer>
        {this.state.cartOpen && <Background onClick={this.cartToggle} />}
      </>
    )
  }
}

export const HeaderWithRouter = withRouter(Header)