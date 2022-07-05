import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { PRODUCT } from '../query/querys';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
padding-left: 100px;
`
const SmallImgContainer = styled.div`
width: 100px;
height: 500px;
`
const SmallImg = styled.img`
padding: 20px 0px ;
`
const MainImage = styled.div`
`
const DescriptionsContainer = styled.div`
padding-left: 50px;
`




 class ProductDescriptionPage extends Component {
  render() {
    const { match, location, history } = this.props;
    console.log('ROUTER props Descriptions', match, location, history)
    console.log(match.params.id)
    return (
        <Container>
        <Query query={PRODUCT} variables={{id:match.params.id}}>
        {({loading, data, error})=>{
          if (error) {
            console.warn(error.message)
            return <p>Error</p>
          }
          if(loading) return <p>Loading...</p>
          if(data){
          console.log('PRODUCT',data) 
          console.log(data.product.description.split(''))
          return (
            <>
            <SmallImgContainer>
            {data.product.gallery.map((item, index)=>{
                return <SmallImg key={index} width='80px' src={item} alt={index} />
            })}
            </SmallImgContainer>
            <MainImage>
            <img width='auto' height='610px' src={data.product.gallery[0]} alt='1' />
            </MainImage>
            <DescriptionsContainer>
            <h2>{data.product.brand}</h2>
            <h3>{data.product.name}</h3>
            <p>SIZE</p>
            <p>TODO</p>
            <p>COLOR</p>
            <p>TODO</p>
            <p>PRICE:</p>
            <p>$50 TODO</p>
            <button>ADD TO CARD</button>
            <div dangerouslySetInnerHTML={{__html:data.product.description}}>
            </div>
            </DescriptionsContainer>
            </>
            )
          }
        }}
        </Query> 
        </Container>
    )
  }
}
export const ProductDescriptionPageWithRouter = withRouter(ProductDescriptionPage)