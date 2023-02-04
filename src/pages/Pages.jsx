import React from 'react'
import Discount from '../component/discount/Discount'
import FlashDeals from '../component/FlashDeals/FlashDeals'
import Home from '../component/mainPage/Home'
import NewArrivals from '../component/newarrivals/NewArrivals.jsx'
import TopCate from '../component/top/TopCate'
import Shop from '../component/shop/Shop'
import Annu from '../component/annocument/Annu'
import Wrapper from '../component/wrapper/Wrapper'

const Pages = ({productItems,cartItem,addToCart,shopItems}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}   />
      <TopCate/>
      <NewArrivals/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart}/>
      <Annu/>
      <Wrapper/>
    </>
  )
}

export default Pages
