import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../component/Card'
import { Query } from '@apollo/client/react/components';
import { CATEGORIES } from '../query/querys';
import { withRouter } from 'react-router-dom';




const DivComponent = styled.div`
display: flex;
flex-wrap: wrap;
`

class ProductListingPage extends Component {
  render() {
    const { history } = this.props;
    // const { match, location, history } = this.props;
    const onClick = (id) =>{
      history.push(`/${id}`)
    }

    console.log(this.props.data)
    return (
      <DivComponent>
      <Query query={CATEGORIES}>
    {({loading, data, error})=>{
      if (error) {
        console.warn(error.message)
        return <p>Error</p>
      }
      if(loading) return <p>Loading</p>
      if(data){
      return data.categories[0].products.map((item, index)=>{
        return <Card onClick={onClick} key={index} item={item}/>
      })
      }
    }}
    </Query> 

      </DivComponent>
    )
  }
}

export const ProductListingPageWithRouter = withRouter(ProductListingPage)