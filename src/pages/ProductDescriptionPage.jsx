import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { PRODUCT } from '../query/querys';
import styled from 'styled-components';
import Attributes from '../component/Attributes'
import DOMPurify from 'dompurify';
import { getAttributes } from '../utils';

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  padding-left: 120px;
  overflow-y: auto;
  height: 900px;
`
const SmallImgContainer = styled.div`
  margin-top: 40px;
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
const ProductName = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 27px;
color: #1D1F22;
`
const StyledButton = styled.button`
  opacity:${props => props.inStock ? '1' : '0.5'} ;
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
  margin-top: 40px;
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
      selectedColor: '',
      selectedSize: '',
      picture: 0
    };
  }

  onClickSelect = (index) => () => {
    this.setState({ picture: index })
  }
  setColor = (selectedColor) => () => {
    this.setState({ selectedColor })
  }
  setSize = (selectedSize) => () => {
    this.setState({ selectedSize })
  }
  initialAttributes = (itemAttributes) => {
    const [firstAttributes, colorAttributes] = getAttributes(itemAttributes)
    this.setState({ selectedSize: firstAttributes?.items[0].value, selectedColor: colorAttributes?.items[0].value })
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
              const clearHtml = DOMPurify.sanitize(data.product.description)
              return (
                <>
                  <SmallImgContainer>
                    {data.product.gallery.map((item, index) => {
                      return <SmallImg
                        onClick={this.onClickSelect(index)}
                        key={index}
                        width='80px'
                        src={item}
                        alt={index} />
                    })}
                  </SmallImgContainer>
                  <MainImage>
                    <img width='610px' src={data.product.gallery[this.state.picture]} alt='1' />
                  </MainImage>
                  <DescriptionsContainer>
                    <Brand>{data.product.brand}</Brand>
                    <ProductName>{data.product.name}</ProductName>
                    <Attributes
                      setSize={this.setSize}
                      setColor={this.setColor}
                      itemAttributes={data.product?.attributes}
                      selectedSize={this.state.selectedSize}
                      selectedColor={this.state.selectedColor}
                      initialAttributes={this.initialAttributes}
                      type='description'
                    />
                    <p>PRICE:</p>
                    <p>{price.currency.symbol + price.amount.toFixed(2)}</p>
                    <StyledButton
                      inStock={data.product.inStock}
                      disabled={!data.product.inStock}
                      onClick={this.props.onClickHandler(data, this.state.selectedColor, this.state.selectedSize)}
                    >ADD TO CARD
                    </StyledButton>
                    <DescriptionText dangerouslySetInnerHTML={{ __html: clearHtml }} />
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