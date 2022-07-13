import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../component/Card'
import { Query } from '@apollo/client/react/components';
import { CATEGORIES } from '../query/querys';
import { withRouter } from 'react-router-dom';




const DivComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 80px;
  overflow-y: auto;
  height: 800px;
  `
const Title = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  margin: 55px 0px;
  padding-left: 100px;
  `


class ProductListingPage extends Component {
  render() {
    const { history } = this.props;
    const onClick = (id) => {
      history.push(`/${id}`)
    }
    return (
      <>
        <Title>Category name</Title>
        <DivComponent>
          <Query query={CATEGORIES} variables={{ title: this.props.category }}>
            {({ loading, data, error }) => {
              if (error) {
                return <p>Error</p>
              }
              if (loading) return <p>Loading...</p>
              if (data) {
                return data.category?.products?.map((item, index) => {
                  return <Card currencySymbol={this.props.currencySymbol} onClick={onClick} key={item.id} item={item} />
                })
              }
            }}
          </Query>

        </DivComponent>
      </>
    )
  }
};

export const ProductListingPageWithRouter = withRouter(ProductListingPage)