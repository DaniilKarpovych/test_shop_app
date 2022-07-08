import {ProductListingPageWithRouter} from './pages/ProductListingPage';
import { Component } from 'react';
// import { createGlobalStyle } from "styled-components";
import {HeaderWithRouter} from './component/Header';
import styled from 'styled-components'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {ProductDescriptionPageWithRouter} from './pages/ProductDescriptionPage';
import CartPage from './pages/CartPage';

const PageContainer = styled.div`
`
// injectGlobal`
//   @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: Roboto, sans-serif;
//   }
//   h1 {
//     font-family: Montserrat;
//   }
// `
// const GlobalStyles = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Roboto:wght@400;700&display=swap');
//   body {
//     font-family: 'Raleway', 'Roboto', sans-serif;
//   }
// `


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      symbol: '$',
      cart:[],
      category:'all'
    };
  }
  render() {

  return (
    <Router>
    <HeaderWithRouter state={this.state} setState={this.setState.bind(this)} />
    <PageContainer >
    <Switch >
    <Route exact path={'/'} >
    <ProductListingPageWithRouter  state={this.state} />
    </Route>
    <Route path={'/cart'}  >
    <CartPage  state={this.state} setState={this.setState.bind(this)} />
    </Route>
    <Route path={'/:id'} >
    <ProductDescriptionPageWithRouter setState={this.setState.bind(this)} state={this.state} />
    </Route>
    </Switch>
    </PageContainer>
    </Router>


  );
}
}

