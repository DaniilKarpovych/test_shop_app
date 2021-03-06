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
            category
            gallery
            prices{
              currency{
                label
                symbol
              }
              amount
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