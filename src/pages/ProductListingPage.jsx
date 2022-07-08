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
height: 900px;
`


class ProductListingPage extends Component {
  render() {
    const { history } = this.props;
    // const { match, location, history } = this.props;
    const onClick = (id) =>{
      history.push(`/${id}`)
    }

    console.log(this.props.state.category)
    return (
      <DivComponent>

      <Query query={CATEGORIES} variables={{title:this.props.state.category}}>
    {({loading, data, error})=>{
      if (error) {
        console.warn(error.message)
        return <p>Error</p>
      }
      if(loading) return <p>Loading</p>
      if(data){
        console.log(data)
      return data.category.products.map((item, index)=>{
        return <Card state={this.props.state} onClick={onClick} key={index} item={item}/>
      })
      }
    }}
    </Query> 

      </DivComponent>
    )
  }
}

export const ProductListingPageWithRouter = withRouter(ProductListingPage)