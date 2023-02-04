import './App.css';
import Data from './component/FlashDeals/Data';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './common/header/Header';
import Pages from './pages/Pages';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './component/shop/Sdata';
import Footer from './common/footer/Footer';

function App() {
  const {shopItems}=Sdata
  const {productItems}=Data
  const [cartItem,setCartItem]=useState([])

  const addToCart=(product)=>{
    const productExit= cartItem.find((item)=> item.id === product.id)
    console.log(cartItem)
    if(productExit){
      setCartItem(cartItem.map((item)=>
      (item.id === product.id?
        {...productExit , qty:productExit.qty + 1} : item
      )))
    }else{
      setCartItem([...cartItem, {...product, qty:1}])
    }
    
  }
  const decreaseQty=(product)=>{
    const productExit= cartItem.find((item)=> item.id === product.id)
    if(productExit.qty ===1){
      setCartItem(cartItem.filter((item)=> item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item)=>
      (item.id === product.id?
        {...productExit , qty:productExit.qty - 1} : item
      )
      ))
    }
  }
  return (
    <>
    <Router>
      <Header cartItem={cartItem}/>
      <Switch>
          <Route path="/" exact>
            <Pages  productItems={productItems} addToCart={addToCart} cartItem={cartItem} shopItems={shopItems}/>
          </Route>
          <Route path="/cart" >
            <Cart  cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
          </Route>
        </Switch>
        <Footer/>
        </Router>
    </>
  );
}

export default App;
