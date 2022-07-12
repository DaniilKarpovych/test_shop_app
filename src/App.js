import { ProductListingPageWithRouter } from './pages/ProductListingPage';
import { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ProductDescriptionPageWithRouter } from './pages/ProductDescriptionPage';
import { HeaderWithRouter } from './component/Header';
import CartPage from './pages/CartPage';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencySymbol: '$',
      cart: [],
      category: 'all'
    };
  }

  setCategory = (category) => {
    this.setState({ category });
  }

  setCurrencySymbol = (currencySymbol) => {
    this.setState({ currencySymbol });
  }
  onClickHandler = (data, color, size) => () => {
    this.setState((state) => {
      if (state.cart.find((item) => item.id === data.product.id)) {
        return state
      }
      const newProduct = { ...data.product, quantity: 1, color, size }
      return { cart: [...state.cart, newProduct] }

    })
  }
  quantityChanges = (id, itemQuantity, operator) => () => {

    if (itemQuantity === 1 && operator === '-') {
      if (window.confirm('you want to delete')) {
        this.setState((state) => {
          const newCart = state.cart.filter((item) => {
            return item.id !== id
          })
          return ({ cart: newCart })
        })
      }
    }

    this.setState((state) => {
      const newCart = state.cart.map((item) => {
        if (item.id === id) {
          if (operator === '+') {
            return ({ ...item, quantity: ++item.quantity })
          } else if (operator === '-') {

            return ({ ...item, quantity: --item.quantity })
          } else return item
        }
        return item
      })
      return ({ cart: newCart })
    })
  }

  render() {
    return (
      <Router>
        <HeaderWithRouter
          quantityChanges={this.quantityChanges}
          currency={this.state.currencySymbol}
          cart={this.state.cart}
          setCategory={this.setCategory}
          setCurrencySymbol={this.setCurrencySymbol} />
        <Switch >
          <Route exact path={'/'} >
            <ProductListingPageWithRouter state={this.state} />
          </Route>
          <Route path={'/cart'}  >
            <CartPage quantityChanges={this.quantityChanges} currency={this.state.currencySymbol} cart={this.state.cart} />
          </Route>
          <Route path={'/:id'} >
            <ProductDescriptionPageWithRouter onClickHandler={this.onClickHandler} state={this.state} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
