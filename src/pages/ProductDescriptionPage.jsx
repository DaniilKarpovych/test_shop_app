import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { PRODUCT } from '../query/querys';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: start;
align-items: flex-start;
padding-left: 120px;
overflow-y: auto;
height: 900px;
`
const SmallImgContainer = styled.div`
padding-top: 40px;
width: 100px;
`
const SmallImg = styled.img`
padding: 20px 0px ;
`
const MainImage = styled.div`
padding-top: 60px;
padding-left: 50px;
width: 610px;
`
const DescriptionsContainer = styled.div`

font-family: 'Raleway';
font-weight: 400;
padding-top: 60px;
padding-left: 100px;
`
const Brand = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 27px;
`
const StyledButton = styled.button`
border: 0px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
color: #FFFFFF;
width: 292px;
height: 52px;
background: #5ECE7B;
&:hover{
    box-shadow: 4px 4px 4px 4px;
    background-color:  #75e090;
}
`



 class ProductDescriptionPage extends Component {
  render() {
    const { match } = this.props;
    const onClickHandler = (data) =>{
     this.props.setState((state)=>{
        if (state.cart.find((item)=>item.id===data.product.id)){
        return state
        }
        const newProduct = {...data.product, quantity:1}
        return {cart:[...state.cart, newProduct]}
        
    })}
        
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
           const price = data.product.prices.find((item)=>item.currency.symbol[0]===this.props.state.symbol)
          console.log('PRODUCT',price) 
          return (
            <>
            <SmallImgContainer>
            {data.product.gallery.slice(0,3).map((item, index)=>{
                return <SmallImg key={index} width='80px' src={item} alt={index} />
            })}
            </SmallImgContainer>
            <MainImage>
            <img width='610px'  src={data.product.gallery[0]} alt='1' />
            </MainImage>
            <DescriptionsContainer>
            <Brand>{data.product.brand}</Brand>
            <h3>{data.product.name}</h3>
            <p>SIZE</p>
            <p>TODO</p>
            <p>COLOR</p>
            <p>TODO</p>
            <p>PRICE:</p>
            <p>{price.currency.label+' '+price.amount}</p>
            <StyledButton onClick={()=>onClickHandler(data)}>ADD TO CARD</StyledButton>
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