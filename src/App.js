import { ProductListingPageWithRouter } from './pages/ProductListingPage';
import { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ProductDescriptionPageWithRouter } from './pages/ProductDescriptionPage';
import { HeaderWithRouter } from './component/Header';
import CartPage from './pages/CartPage';
import { getCartTotals } from './utils';



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
      const findItem = state.cart.find(item => {
        return item.id === data.product.id &&
          item.color === color &&
          item.size === size
      })
      if (findItem) {
        const newCart = state.cart.map(item => {
          if (item.id === data.product.id &&
            item.color === color &&
            item.size === size) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
        return { cart: newCart }
      } else {
        const newProduct = { ...data.product, quantity: 1, color, size }
        return { cart: [...state.cart, newProduct] }
      }

    })
  }

  quantityChanges = (id, itemQuantity, quantityChange) => () => {
    if (itemQuantity + quantityChange === 0) {
      if (window.confirm('you want to delete')) {
        this.setState((state) => {
          const newCart = state.cart.filter((item) => {
            return item.id !== id
          })
          return ({ cart: newCart })
        })
      } else {
        return
      }
    }

    this.setState((state) => {
      const newCart = state.cart.map((item) => {
        if (item.id === id) {
          return ({ ...item, quantity: item.quantity + quantityChange })
        }
        return item
      })
      return ({ cart: newCart })
    })
  }

  render() {
    const { totalCost, totalQuantity } = getCartTotals(this.state.cart, this.state.currencySymbol);
    return (
      <Router>
        <HeaderWithRouter
          totalCost={totalCost}
          quantityChanges={this.quantityChanges}
          currency={this.state.currencySymbol}
          cart={this.state.cart}
          setCategory={this.setCategory}
          setCurrencySymbol={this.setCurrencySymbol} />
        <Switch >
          <Route exact path={'/'} >
            <ProductListingPageWithRouter
              onClickHandler={this.onClickHandler}
              category={this.state.category}
              currencySymbol={this.state.currencySymbol} />
          </Route>
          <Route path={'/cart'}  >
            <CartPage
              totalQuantity={totalQuantity}
              totalCost={totalCost}
              quantityChanges={this.quantityChanges}
              currency={this.state.currencySymbol}
              cart={this.state.cart} />
          </Route>
          <Route path={'/:id'} >
            <ProductDescriptionPageWithRouter
              onClickHandler={this.onClickHandler}
              currencySymbol={this.state.currencySymbol} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
