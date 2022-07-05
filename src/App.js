import {ProductListingPageWithRouter} from './pages/ProductListingPage';
import { Component } from 'react';
// import { Query } from '@apollo/client/react/components';
// import { gql } from '@apollo/client';
import Header from './component/Header';
import styled from 'styled-components'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {ProductDescriptionPageWithRouter} from './pages/ProductDescriptionPage';
import CartPage from './pages/CartPage';

const PageContainer = styled.div`

/* height: 100vh; */

`

// const EXCHANGE_RATES = gql`
// query{
//     categories{
//       name 
//       products{
//         id
//         name
//       }
//     }
//     }
//     `

export default class App extends Component {
  render() {

  return (
    
   
    <Router>
    <Header />
    <PageContainer >
    <Switch >
    <Route exact path={'/'} >
    <ProductListingPageWithRouter  />
    </Route>
    <Route path={'/cart'}  >
    <CartPage />
    </Route>
    <Route path={'/:id'} >
    <ProductDescriptionPageWithRouter />
    </Route>

        {/* <ShopPage test={5}/> 
        <Query query={EXCHANGE_RATES}>
    {({loading, data, error})=>{
      if (error) {
        console.warn(error.message)
        return <p>Error</p>
      }
      if(loading) return <p>Loading</p>
      console.log(data)
      return data.categories.map((item, index)=>{
        return <p key={index}>{item.name}</p>
      })
    }}
    </Query> */}
    </Switch>
    </PageContainer>
    </Router>


  );
}
}

