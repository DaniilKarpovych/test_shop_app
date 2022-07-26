import { gql } from '@apollo/client';

export const PRODUCT = gql`
query ($id:String!){
     product(id:$id){
      id
      name
      inStock
      gallery
      description
      category
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
      brand
      }
    }
    `

export const CATEGORIES = gql`
    query($title:String!){
     category(input:{title:$title}){
      name
          products{
            id
            name
            brand
            category
            gallery
            inStock
            prices{
              currency{
                label
                symbol
              }
              amount
            }
            attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
          }
      } 
    }
        `
export const CATEGORYLIST = gql`
       query{
          categories{
            name
          }
        }
       `
export const CURRENCIES = gql`
query{
  currencies{
    label
    symbol
  }
}
`