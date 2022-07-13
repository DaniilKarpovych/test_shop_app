import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { PRODUCT } from '../query/querys';
import styled from 'styled-components';
import Size from '../component/Size';
import Color from '../component/Color';

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
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
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
const DescriptionText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`


class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false,
      selectedColor: 'red',
      selectedSize: 'xs'
    };
  }
  setColor = (selectedColor) => () => {
    this.setState({ selectedColor })
  }
  setSize = (selectedSize) => () => {
    this.setState({ selectedSize })
  }

  render() {
    const { match } = this.props;
    return (
      <Container>
        <Query query={PRODUCT} variables={{ id: match.params.id }}>
          {({ loading, data, error }) => {
            if (error) {
              return <p>Error</p>
            }
            if (loading) return <p>Loading...</p>
            if (data) {
              const price = data.product.prices.find((item) => item.currency.symbol === this.props.currencySymbol)
              return (
                <>
                  <SmallImgContainer>
                    {data.product.gallery.slice(0, 3).map((item, index) => {
                      return <SmallImg
                        key={index}
                        width='80px'
                        src={item}
                        alt={index} />
                    })}
                  </SmallImgContainer>
                  <MainImage>
                    <img width='610px' src={data.product.gallery[0]} alt='1' />
                  </MainImage>
                  <DescriptionsContainer>
                    <Brand>{data.product.brand}</Brand>
                    <h3>{data.product.name}</h3>
                    {data.product.category === 'clothes' && <><p>SIZE</p>
                      <Size
                        descriptionPage
                        setSize={this.setSize}
                        selectedSize={this.state.selectedSize}
                        type='page' />
                    </>}
                    <p>COLOR</p>
                    <Color
                      descriptionPage
                      setColor={this.setColor}
                      selectedColor={this.state.selectedColor} />
                    <p>PRICE:</p>
                    <p>{price.currency.symbol + price.amount}</p>
                    <StyledButton
                      onClick={this.props.onClickHandler(data, this.state.selectedColor, this.state.selectedSize)}
                    >ADD TO CARD
                    </StyledButton>
                    <DescriptionText dangerouslySetInnerHTML={{ __html: data.product.description }} />
                  </DescriptionsContainer>
                </>
              )
            }
          }}
        </Query>
      </Container>
    )
  }
};
export const ProductDescriptionPageWithRouter = withRouter(ProductDescriptionPage)